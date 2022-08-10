import type { AppProps } from 'next/app';
import '../styles/index.css';
import '../styles/chat.css';
import 'animate.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
