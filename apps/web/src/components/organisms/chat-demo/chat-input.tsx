// TYPES
import type { ChatStatus } from 'ai';
// COMPONENTS
import type { PromptInputProps } from '@/src/components/ai-elements/prompt-input';
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputSubmit,
} from '@/src/components/ai-elements/prompt-input';

export interface ChatInputProps {
  status: ChatStatus;
  onSubmit: PromptInputProps['onSubmit'];
}

const ChatInput = ({ status, onSubmit }: ChatInputProps) => (
  <div className='shrink-0 border-t px-4 py-3'>
    <PromptInput onSubmit={onSubmit}>
      <PromptInputTextarea
        aria-label='Message input'
        placeholder='Type your message or paste a URL…'
      />
      <PromptInputFooter>
        <PromptInputSubmit status={status} />
      </PromptInputFooter>
    </PromptInput>
  </div>
);

export default ChatInput;
