const ChatEmptyState = () => (
  <div className='flex flex-1 items-center justify-center'>
    <div className='text-center max-w-sm space-y-2 px-4'>
      <h2 className='text-lg font-semibold text-balance'>How Can I Help?</h2>
      <p className='text-sm text-muted-foreground text-pretty'>
        Send a message to start chatting, or paste an Instagram Reel or YouTube
        URL for analysis.
      </p>
    </div>
  </div>
);

export default ChatEmptyState;
