export const Aside = () => (
  <div
    className="friends-left"
    style={{ backgroundImage: 'url(/img/covers/default_cover_1.jpg);' }}
  >
    <div className="friends-left-in">
      <div
        className="friends-avatar"
        style={{
          background:
            'url(img/avatars/profile-avatar.png) no-repeat center center;',
        }}
      />
      <div className="profile-name">AsMoz Support</div>
      <div className="info">Ask your questions, send your suggestions :)</div>
      <div className="menus">
        <div className="menus-wrap">
          <div className="menu">
            <div className="menu-in follow" />
          </div>
          <div className="menu">
            <div className="menu-in messageSend" />
          </div>
          <div className="menu">
            <div className="menu-in giftSend" />
          </div>
          <div className="menu">
            <div className="menu-in otherMenu" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
