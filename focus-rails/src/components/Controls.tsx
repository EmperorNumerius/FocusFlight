import React from 'react';
import styled from 'styled-components';
import { Play, Pause, Square } from 'lucide-react';

const ControlBar = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 30px;
`;

const Button = styled.button`
  background: none;
  border: 2px solid #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #4CAF50;
  border-color: #4CAF50;

  &:hover {
    background-color: #45a049;
  }
`;

interface ControlsProps {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
}

const Controls: React.FC<ControlsProps> = ({ isPlaying, onPlay, onPause, onStop }) => {
  return (
    <ControlBar>
      <Button onClick={onStop} title="Stop Session">
        <Square size={24} fill="currentColor" />
      </Button>
      <PrimaryButton onClick={isPlaying ? onPause : onPlay} title={isPlaying ? 'Pause' : 'Start'}>
        {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" />}
      </PrimaryButton>
    </ControlBar>
  );
};

export default Controls;
