import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts/MainLayout';
import { Aside } from '../components/profile/Aside';

const Profile: NextPage = () => (
  <>
    <NextSeo title="Profile" />
    <MainLayout>
      <Aside />
      <div className="profile-right">
        <div className="profile-right-in">
          <div className="profile-details">
            <div className="line">
              <div className="line-title">Full Name :</div>
              <div className="line-txt">Mustafa Öztürk</div>
              <div className="change" />
            </div>
            <div className="line">
              <div className="line-title">Title :</div>
              <div className="line-txt">
                Ask your questions, send your suggestions :)
              </div>
              <div className="change" />
            </div>
            <div className="line">
              <div className="line-title">E-Mail :</div>
              <div className="line-txt">support@asmoz.com</div>
            </div>
            <div className="line">
              <div className="line-title">Phone :</div>
              <div className="line-txt">0-0000 000 00 00</div>
              <div className="change" />
            </div>
            <hr />
            <div className="line">
              <div className="line-title">Gender :</div>
              <div className="line-txt">Male</div>
              <div className="change" />
            </div>
            <div className="line">
              <div className="line-title">RelationShip :</div>
              <div className="line-txt">In an Open relationship</div>
              <div className="change" />
            </div>
            <div className="line">
              <div className="line-title">Interested In :</div>
              <div className="line-txt">Women</div>
              <div className="change" />
            </div>
            <div className="line">
              <div className="line-title">Date of birth :</div>
              <div className="line-txt">20 April</div>
              <div className="change" />
            </div>
            <div className="line">
              <div className="line-title">Year of birth :</div>
              <div className="line-txt">1978</div>
              <div className="change" />
            </div>
            <hr />
            <div className="line">
              <div className="line-title">Working :</div>
              <div className="line-txt">SocialMaterial</div>
              <div className="change" />
            </div>
            <div className="line">
              <div className="line-title">Job Title :</div>
              <div className="line-txt">CSS Developer</div>
              <div className="change" />
            </div>
            <div className="line">
              <div className="line-title">Lives In :</div>
              <div className="line-txt">Turkey</div>
              <div className="change" />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  </>
);

export default Profile;
