import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts/MainLayout';
import { Aside } from '../components/friends/Aside';

const Friends: NextPage = () => (
  <>
    <NextSeo title="Chat" />
    <MainLayout>
      <Aside />
      <div className="friends-right">
        <div className="friends-right-in">
          <div className="friendsList-wrap">
            <div className="at-txt">Friends</div>
            <div className="frinedBox">
              <div className="friendBox-in">
                <div
                  className="friend-avatar"
                  style={{ backgroundImage: 'url(/img/avatars/ketty.png);' }}
                >
                  <img src="/img/avatars/ketty.png" className="exPexU" alt="" />
                </div>
                <div className="friendName">Ketty</div>
                <div className="friendMenu">
                  <div
                    className="fm"
                    data-position="bottom"
                    data-delay="50"
                    data-tooltip="Follow"
                  >
                    <div className="follow_light" />
                  </div>
                  <div
                    className="fm"
                    data-position="bottom"
                    data-delay="50"
                    data-tooltip="Send Message"
                  >
                    <div className="message_light" />
                  </div>
                  <div
                    className="fm"
                    data-position="bottom"
                    data-delay="50"
                    data-tooltip="Send Gift"
                  >
                    <div className="gift_light" />
                  </div>
                  <div
                    className="fm"
                    data-position="bottom"
                    data-delay="50"
                    data-tooltip="Other"
                  >
                    <div className="dot_light" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  </>
);

export default Friends;
