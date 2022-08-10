import { AsideMessage } from '../AsideMessage';

export const Aside = () => (
  <div className="chat-left fixed" id="slide-out">
    <div className="panel-header">
      <div className="panel-header-main-menu" />
      <div className="panel-header panel-flex">
        <div className="panel-menu-list">
          <div className="panel-menu">
            <a href="index.html">
              <div className="p-menu-item panel-home" />
            </a>
          </div>
          <div className="panel-menu">
            <a href="notifications.html">
              <div className="p-menu-item panel-notifications" />
            </a>
          </div>
          <div className="panel-menu">
            <a href="videos.html">
              <div className="p-menu-item panel-videos" />
            </a>
          </div>
          <div className="panel-menu">
            <a href="music.html">
              <div className="p-menu-item panel-music" />
            </a>
          </div>
          <div className="panel-menu">
            <a href="photos.html">
              <div className="p-menu-item panel-images" />
            </a>
          </div>
          <div className="panel-menu panel-search" />
        </div>
      </div>
    </div>

    <div className="panel-col" id="chat-tabs">
      <div id="recents" className="recents">
        <AsideMessage
          status="online"
          name="Asuman"
          body="Are you still on there"
          count={12}
        />
        <AsideMessage
          status="offline"
          name="Asuman"
          body="Are you still on there"
          count={5}
        />
        <AsideMessage
          status="away"
          name="Asuman"
          body="Are you still on there"
          count={0}
        />
      </div>
    </div>
  </div>
);
