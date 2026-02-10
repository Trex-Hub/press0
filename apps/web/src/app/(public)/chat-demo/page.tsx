'use client';

// HOOKS
import { useChat } from '@ai-sdk/react';
import { useMemo } from 'react';
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
// TYPES
import type { ChatInputProps } from '@/src/components/organisms/chat-demo/chat-input';

const ChatDemoPage = () => {
  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: `${AGENT_BASE_URL}/chat`,
        prepareSendMessagesRequest({ messages }) {
          const lastMessage = messages[messages.length - 1];
          const messageText =
            lastMessage?.parts.find(part => part.type === 'text')?.text ?? '';

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

  const { messages, sendMessage, status, error } = useChat({ transport });
  const lastMessage = messages[messages.length - 1];
  const showTyping =
    status === 'submitted' &&
    (!lastMessage || lastMessage.role !== 'assistant');

  const handleSubmit: ChatInputProps['onSubmit'] = message => {
    const trimmed = message.text.trim();
    if (trimmed) {
      sendMessage({ text: trimmed });
    }
  };

  return (
    <div className='flex flex-col h-dvh max-w-4xl mx-auto touch-manipulation'>
      <ChatHeader />
      <ChatMessageList
        messages={messages}
        showTyping={showTyping}
        error={error}
      />
      <ChatInput status={status} onSubmit={handleSubmit} />
    </div>
  );
};

export default ChatDemoPage;
