import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const MainLayout = ({ children }: Props) => (
  <div className="main-layout">
    <div className="chat-container">{children}</div>
  </div>
);
