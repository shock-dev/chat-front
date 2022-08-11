import cc from 'classcat';
import { ReactNode } from 'react';

interface MessageProps {
  isMe: boolean;
  date: string;
  children: ReactNode;
}

export const Message = ({ isMe, date, children }: MessageProps) => (
  <div className="msg">
    <div className={cc(['message-reply-body', isMe ? 'you_' : 'friend'])}>
      <div className="message-text">{children}</div>
      <div className="message-time">{date}</div>
    </div>
  </div>
);
