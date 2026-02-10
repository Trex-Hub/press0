export interface ChatErrorBannerProps {
  message: string;
}

const ChatErrorBanner = ({ message }: ChatErrorBannerProps) => (
  <div
    className='text-sm text-destructive p-3 bg-destructive/10 rounded-lg'
    role='alert'
  >
    <strong>Error:</strong> {message}
    <p className='mt-1 text-destructive/80'>
      Please try sending your message again.
    </p>
  </div>
);

export default ChatErrorBanner;