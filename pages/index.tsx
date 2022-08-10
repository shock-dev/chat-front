import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts/MainLayout';
import { Aside } from '../components/chat/Aside';

const Home: NextPage = () => (
  <>
    <NextSeo title="Chat" />
    <MainLayout>
      <Aside />
    </MainLayout>
  </>
);

export default Home;
