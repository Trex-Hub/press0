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
        try {
          const agentStream = await agent.stream(message, {
            runtimeContext,
            threadId,
            resourceId,
          });

          for await (const chunk of agentStream.textStream) {
            if (chunk) {
              const sseData = JSON.stringify({
                id: `chatcmpl-${Date.now()}`,
                object: 'chat.completion.chunk',
                choices: [
                  {
                    delta: {
                      content: chunk,
                    },
                  },
                ],
              });
              const encoder = new TextEncoder();
              controller.enqueue(encoder.encode(`data: ${sseData}\n\n`));
            }
          }

          const encoder = new TextEncoder();
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          logger.error('Error streaming response:', {
            error: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined,
            errorType: error?.constructor?.name,
            errorString: String(error),
          });
          const errorData = JSON.stringify({
            error: {
              message:
                error instanceof Error
                  ? error.message
                  : 'An error occurred while streaming the response',
            },
          });
          const encoder = new TextEncoder();
          controller.enqueue(encoder.encode(`data: ${errorData}\n\n`));
          controller.close();
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
