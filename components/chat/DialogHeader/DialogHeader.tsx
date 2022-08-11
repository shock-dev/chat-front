export const DialogHeader = () => (
  <div className="panel-header-chat">
    <div className="panel-chat-user">
      <div className="panel-chat-mobile-btn" data-activates="slide-out" />
      <div className="panel-chat-avatar">
        <img src="/img/avatars/1.jpg" className="a0uk" alt="" />
      </div>
      <div className="panel-chat-username-status">
        <div className="panel-username">Mustafa Öztürk</div>
        <div className="panel-status">Last seen today 17:43</div>
      </div>
    </div>
    <div className="panel-chat-controls">
      <div className="panel-control-col">
        <div
          className="list-chat-send-message"
          data-activates="list-chat-send-message"
        />
      </div>
      <div className="panel-control-col">
        <div
          className="list-chat-message-control"
          data-activates="panel-dropdown-control"
        />
      </div>
    </div>
  </div>
);
