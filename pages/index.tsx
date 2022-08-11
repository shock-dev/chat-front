import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts/MainLayout';
import { Aside } from '../components/chat/Aside';
import { Dialog } from '../components/chat/Dialog';

const Home: NextPage = () => (
  <>
    <NextSeo title="Chat" />
    <MainLayout>
      <Aside />
      <Dialog />
    </MainLayout>
  </>
);

export default Home;
