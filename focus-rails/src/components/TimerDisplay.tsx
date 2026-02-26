import React from 'react';
import styled from 'styled-components';

const Timer = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 6rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 20px 0;
`;

interface TimerDisplayProps {
  timeLeft: number;
}

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeLeft }) => {
  return <Timer>{formatTime(timeLeft)}</Timer>;
};

export default TimerDisplay;
