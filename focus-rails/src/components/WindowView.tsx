import React from 'react';
import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

const WindowFrame = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  border: 10px solid #2c2c2c;
  background-color: #000;
`;

const Scenery = styled.div`
  width: 200%;
  height: 100%;
  background: linear-gradient(90deg, #1a1a2e, #16213e, #0f3460, #1a1a2e);
  background-size: 200% 100%;
  animation: ${move} 20s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
`;

const Reflection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.1) 100%);
  pointer-events: none;
`;

const WindowView: React.FC = () => {
  return (
    <WindowFrame>
      <Scenery />
      <Reflection />
    </WindowFrame>
  );
};

export default WindowView;
