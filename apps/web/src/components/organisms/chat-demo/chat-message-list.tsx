'use client';

// HOOKS
import { useEffect, useRef } from 'react';
// TYPES
import type { UIMessage } from 'ai';
// COMPONENTS
import {
  Message,
  MessageContent,
  MessageResponse,
} from '@/src/components/ai-elements/message';
import TypingIndicator from '@/src/components/molecules/typing-indicator';
import ChatEmptyState from '@/src/components/molecules/chat-empty-state';
import ChatErrorBanner from '@/src/components/molecules/chat-error-banner';

export interface ChatMessageListProps {
  messages: UIMessage[];
  showTyping: boolean;
  error: Error | undefined;
}

const ChatMessageList = ({
  messages,
  showTyping,
  error,
}: ChatMessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, showTyping]);

  return (
    <div
      className='flex-1 overflow-y-auto overscroll-contain px-4 py-4'
      role='log'
      aria-label='Chat messages'
      aria-live='polite'
    >
      {messages.length === 0 && !showTyping ? (
        <ChatEmptyState />
      ) : (
        <div className='space-y-4'>
          {messages.map((message) => {
            const textPart = message.parts.find(
              (part) => part.type === 'text'
            );
            const text = textPart?.type === 'text' ? textPart.text : '';

            return (
              <div
                key={message.id}
                style={{
                  contentVisibility: 'auto',
                  containIntrinsicSize: 'auto 80px',
                }}
              >
                <Message from={message.role}>
                  <MessageContent>
                    <MessageResponse>{text}</MessageResponse>
                  </MessageContent>
                </Message>
              </div>
            );
          })}

          {showTyping ? <TypingIndicator /> : null}

          {error ? <ChatErrorBanner message={error.message} /> : null}

          <div ref={messagesEndRef} aria-hidden='true' />
        </div>
      )}
    </div>
  );
};

export default ChatMessageList;