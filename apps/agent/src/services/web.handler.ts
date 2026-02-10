// UTILS
import { getWebResourceIdFromBody } from '@/utils/web-resource-id';
import { detectUrl } from '@/utils/url-detector';
import { runConvoThread } from '@/utils/threads';
// CONSTANTS
import { PRESS_0_AGENT_ID } from '@/utils/constants';
// LOGGER
import logger from '@/utils/logger';
// MASTRA
import { RuntimeContext } from '@mastra/core/runtime-context';

export const handleWebChat = async (c: any) => {
  try {
    const body = await c.req.json();
    const { message, fingerprint } = body ?? {};

    if (!message || typeof message !== 'string') {
      return c.json({ error: 'Message is required' }, 400);
    }

    const resourceId = getWebResourceIdFromBody({ fingerprint });

    const urlDetection = detectUrl(message);

    const runtimeContext = new RuntimeContext();
    if (urlDetection.type === 'reel' && urlDetection.url) {
      runtimeContext.set('reelUrl', urlDetection.url);
    } else if (urlDetection.type === 'youtube' && urlDetection.url) {
      runtimeContext.set('youtubeUrl', urlDetection.url);
    }

    const mastra = c.get('mastra');
    if (!mastra) {
      return c.json({ error: 'Mastra instance not available' }, 500);
    }

    let threadId: string;
    try {
      const thread = await runConvoThread({ resourceId });
      threadId = thread.id;
    } catch (error) {
      logger.error('Error getting thread:', { error });
      return c.json({ error: 'Failed to initialize conversation thread' }, 500);
    }

    const agent = mastra.getAgent(PRESS_0_AGENT_ID);
    if (!agent) {
      return c.json({ error: 'Agent not available' }, 500);
    }
    const sseStream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        let hasStarted = false;
        let hasError = false;
        // Generate a unique message ID for this response
        const messageId = `msg-${Date.now()}-${Math.random().toString(36).substring(7)}`;

        const safeEnqueue = (data: string) => {
          try {
            if (controller.desiredSize !== null) {
              controller.enqueue(encoder.encode(data));
              return true;
            }
          } catch (err) {
            // Controller might be closed, ignore
          }
          return false;
        };

        try {
          const agentStream = await agent.stream(message, {
            runtimeContext,
            threadId,
            resourceId,
          });

          // Send text-start chunk with id
          if (
            safeEnqueue(
              `data: ${JSON.stringify({ type: 'text-start', id: messageId })}\n\n`
            )
          ) {
            hasStarted = true;
          }

          // Stream text chunks as text-delta
          for await (const chunk of agentStream.textStream) {
            if (chunk && !hasError) {
              const deltaChunk = JSON.stringify({
                type: 'text-delta',
                id: messageId,
                delta: chunk, // delta is a string, not an object
              });
              if (!safeEnqueue(`data: ${deltaChunk}\n\n`)) {
                // Controller closed, break
                break;
              }
            }
          }

          // Send text-end chunk if we started and didn't error
          if (hasStarted && !hasError) {
            safeEnqueue(
              `data: ${JSON.stringify({ type: 'text-end', id: messageId })}\n\n`
            );
          }

          // Close controller only if it's still open
          try {
            if (controller.desiredSize !== null) {
              controller.close();
            }
          } catch (err) {
            // Already closed, ignore
          }
        } catch (error) {
          hasError = true;
          logger.error('Error streaming response:', {
            error: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined,
            errorType: error?.constructor?.name,
            errorString: String(error),
          });

          // Send error chunk if controller is still open
          const errorChunk = JSON.stringify({
            type: 'error',
            id: messageId,
            errorText:
              error instanceof Error
                ? error.message
                : 'An error occurred while streaming the response',
          });
          if (safeEnqueue(`data: ${errorChunk}\n\n`)) {
            try {
              controller.close();
            } catch (err) {
              // Already closed, ignore
            }
          }
        }
      },
    });

    return new Response(sseStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    logger.error('Error in web chat handler:', { error });
    return c.json(
      {
        error:
          'An error occurred while processing your request. Please try again later.',
      },
      500
    );
  }
};
