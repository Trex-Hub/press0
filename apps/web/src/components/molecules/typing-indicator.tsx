// COMPONENTS
import { Message, MessageContent } from '@/src/components/ai-elements/message';

const TypingIndicator = () => (
  <Message from='assistant'>
    <MessageContent>
      <div
        className='flex items-center gap-1.5 text-muted-foreground'
        role='status'
        aria-label='Assistant is typing'>
        <span className='sr-only'>Assistant is thinking…</span>
        <div className='size-2 rounded-full bg-current motion-safe:animate-bounce motion-safe:[animation-delay:-0.3s]' />
        <div className='size-2 rounded-full bg-current motion-safe:animate-bounce motion-safe:[animation-delay:-0.15s]' />
        <div className='size-2 rounded-full bg-current motion-safe:animate-bounce' />
      </div>
    </MessageContent>
  </Message>
);

export default TypingIndicator;
