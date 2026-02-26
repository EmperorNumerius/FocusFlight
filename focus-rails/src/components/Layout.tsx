import React, { type ReactNode } from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background-color: #121212;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
