import { DialogHeader } from '../DialogHeader';
import { Message } from '../Message';

export const Dialog = () => (
  <div className="chat-right">
    <DialogHeader />
    <div className="messages--wrap">
      <div className="messages-body">
        <Message date="10:11" isMe={false}>
          Hi, Mustafa how are you?
        </Message>
        <Message date="10:11" isMe>
          Hi i am good how are you too ?
        </Message>
        <Message date="10:11" isMe>
          Nice picture thanks for sharing!{' '}
          <img src="/img/emoji/face-w1.png" className="emoji" alt="" />
        </Message>
        <Message date="10:11" isMe={false}>
          No problem bro, i am happy to you like it. I found it from tumblr it
          is so cool{' '}
          <img src="/img/emoji/face-w16.png" className="emoji" alt="" />
        </Message>
      </div>
    </div>
    <div className="message-textbox">
      <div className="message-box">
        <div className="smile-button" />
        <div className="reply-textBox">
          <textarea
            name="reply"
            className="reply"
            placeholder="Reply message..."
          />
        </div>
        <div className="reply-btn" />
      </div>
    </div>
  </div>
);
