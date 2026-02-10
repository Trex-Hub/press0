// CORE
import { openai } from '@ai-sdk/openai'
import { Agent } from '@mastra/core/agent';
// TOOLS
import {
  downloadAndAnalyzeVideo,
  analyzeVideo,
  downloadAndAnalyzeReel,
  search,
} from '@/mastra/tools';
// UTILS
import memory from '@/mastra/memory';
// CONSTANTS
import { PRESS_0_AGENT_ID } from '@/utils/constants';
// PROMPT
import {
  defaultPressOAgentPrompt,
  videoAnalysisAgentPrompt,
  reelAnalysisAgentPrompt,
} from '@/mastra/prompts';
// UTILS
import { whatsappFormatter } from '@/utils/formatter';

export const press0Agent = new Agent({
  name: PRESS_0_AGENT_ID,
  id: PRESS_0_AGENT_ID,
  outputProcessors: [whatsappFormatter],
  instructions: ({ runtimeContext }) => {
    const messageType = runtimeContext?.get('messageType') as
      | string
      | undefined;
    const mediaId = runtimeContext?.get('mediaId') as string | undefined;

    const reelUrl = runtimeContext?.get('reelUrl') as string | undefined;
    const youtubeUrl = runtimeContext?.get('youtubeUrl') as string | undefined;

    // Dynamic instructions based on message type (WhatsApp)
    if (messageType === 'video' && mediaId) {
      return videoAnalysisAgentPrompt.compile();
    }

    // URL-based instructions (Web)
    if (reelUrl) {
      return reelAnalysisAgentPrompt.compile();
    }

    if (youtubeUrl) {
      return videoAnalysisAgentPrompt.compile();
    }

    // Default instructions for text messages
    return defaultPressOAgentPrompt.compile();
  },
  description:
    'You are a friendly and helpful Agent for WhatsApp conversations. You can analyze videos that users send automatically.',
  model: openai('gpt-4.1'),
  tools: ({ runtimeContext }) => {
    // Common tools available in all scenarios
    const commonTools = {
      search,
    };
    const messageType = runtimeContext?.get('messageType') as
      | string
      | undefined;

    const reelUrl = runtimeContext?.get('reelUrl') as string | undefined;
    const youtubeUrl = runtimeContext?.get('youtubeUrl') as string | undefined;

    // If reelUrl is provided (Web), provide downloadAndAnalyzeReel tool
    if (reelUrl) {
      return {
        ...commonTools,
        downloadAndAnalyzeReel,
      };
    }

    // If youtubeUrl is provided (Web), provide analyzeVideo tool
    if (youtubeUrl) {
      return {
        ...commonTools,
        analyzeVideo,
      };
    }

    // If message type is video (WhatsApp), provide downloadAndAnalyzeVideo tool
    if (messageType === 'video') {
      return {
        ...commonTools,
        downloadAndAnalyzeVideo,
      };
    }

    // For text messages, provide analyzeVideo tool (for external URLs if needed)
    return {
      ...commonTools,
      analyzeVideo,
    };
  },
  memory,
});
