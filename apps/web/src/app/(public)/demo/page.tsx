'use client';

// HOOKS
import { useChat } from '@ai-sdk/react';
import { useCallback, useMemo } from 'react';
// AI SDK
import { DefaultChatTransport } from 'ai';
// CONSTANTS
import { AGENT_BASE_URL } from '@repo/utils/constants';
// UTILS
import getFingerprint from '@/src/utils/fingerprint';
// COMPONENTS
import ChatHeader from '@/src/components/organisms/chat-demo/chat-header';
import ChatMessageList from '@/src/components/organisms/chat-demo/chat-message-list';
import ChatInput from '@/src/components/organisms/chat-demo/chat-input';
import ChatEmptyState from '@/src/components/molecules/chat-empty-state';
// TYPES
import type { ChatInputProps } from '@/src/components/organisms/chat-demo/chat-input';

/**
 * ChatDemoPage — Full-screen chat interface for the Press0 misinformation checker.
 *
 * Connects to the backend agent via AI SDK's DefaultChatTransport,
 * using a browser fingerprint for session continuity.
 */
const ChatDemoPage = () => {
  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: `${AGENT_BASE_URL}/chat`,
        prepareSendMessagesRequest({ messages }) {
          const lastMessage = messages[messages.length - 1];
          const messageText =
            lastMessage?.parts.find((part) => part.type === 'text')?.text ?? '';

          return {
            body: {
              message: messageText,
              fingerprint: getFingerprint(),
            },
          };
        },
      }),
    []
  );

  const { messages, sendMessage, setMessages, status, error } = useChat({
    transport,
  });

  const lastMessage = messages[messages.length - 1];
  const showTyping =
    status === 'submitted' &&
    (!lastMessage || lastMessage.role !== 'assistant');
  const hasMessages = messages.length > 0;

  const handleSubmit: ChatInputProps['onSubmit'] = useCallback(
    (message) => {
      const trimmed = message.text.trim();
      if (trimmed) {
        sendMessage({ text: trimmed });
      }
    },
    [sendMessage]
  );

  const handleClear = useCallback(() => {
    setMessages([]);
  }, [setMessages]);

  const handlePromptSelect = useCallback(
    (prompt: string) => {
      sendMessage({ text: prompt });
    },
    [sendMessage]
  );

  return (
    <div className='flex flex-col h-dvh max-w-4xl mx-auto touch-manipulation'>
      <ChatHeader onClear={handleClear} hasMessages={hasMessages} />

      {hasMessages || showTyping ? (
        <ChatMessageList
          messages={messages}
          showTyping={showTyping}
          error={error}
        />
      ) : (
        <ChatEmptyState onPromptSelect={handlePromptSelect} />
      )}

      <ChatInput status={status} onSubmit={handleSubmit} />
    </div>
  );
};

export default ChatDemoPage;
