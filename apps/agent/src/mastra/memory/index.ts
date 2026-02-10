// CORE
import { openai } from '@ai-sdk/openai';
import { Memory } from '@mastra/memory';
// UTILS
import { getSharedStore, getSharedVector } from '@/mastra/memory/db';
// CONSTANTS
import { EMBEDDING_MODEL } from '@/utils/constants';

let memory: Memory | null = null;

const agentMemory = (() => {
  if (!memory) {
    const storage = getSharedStore();
    const vector = getSharedVector();

    memory = new Memory({
      storage: storage as any,
      vector: vector as any,
      embedder: EMBEDDING_MODEL as any,
      options: {
        lastMessages: 10,
        semanticRecall: {
          topK: 4,
          messageRange: 10,
          scope: 'thread',
        },
        threads: {
          generateTitle: true,
        },
        workingMemory: {
          enabled: true,
        },
      },
    });
  }
  return memory;
})();

export default agentMemory;
