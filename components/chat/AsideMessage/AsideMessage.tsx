interface MessageProps {
  status: 'online' | 'offline' | 'away';
  name: string;
  body: string;
  count: number;
}

const statusClassnames = {
  online: 'status',
  offline: 'status-offline',
  away: 'status-away',
};

export const AsideMessage = ({ status, name, body, count }: MessageProps) => (
  <div className="recent-user">
    <div className={statusClassnames[status]} />
    <div className="recent-avatar">
      <img
        src="/img/avatars/1.jpg"
        className="a0uk"
        alt=""
        width={40}
        height={40}
      />
    </div>
    <div className="chat-name-recent-message">
      <div className="recent-user-name">{name}</div>
      <div className="recent-user-message">{body}</div>
    </div>
    {count > 0 && (
      <div className="message-count">
        <div className="count">{count > 9 ? '9+' : count}</div>
      </div>
    )}
  </div>
);
