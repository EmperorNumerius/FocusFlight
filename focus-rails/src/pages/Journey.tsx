import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useFocus } from '../context/FocusContext';
import { useAudio } from '../hooks/useAudio';
import WindowView from '../components/WindowView';
import TimerDisplay from '../components/TimerDisplay';
import Controls from '../components/Controls';
import Layout from '../components/Layout';

const JourneyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 20px;
  background-color: #000;
  color: #fff;
`;

const Header = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ModeLabel = styled.div`
  font-size: 0.9rem;
  color: #aaa;
  margin-top: 5px;
`;

const Journey: React.FC = () => {
  const { isActive, mode, timeLeft, isPaused, pauseSession, resumeSession, stopSession } = useFocus();
  const navigate = useNavigate();

  // Audio setup - using a placeholder or a generated noise URL if possible
  // Since I don't have a real URL, I'll use a placeholder
  // In a real app, this would be a path to a train ambience file
  const audioSrc = 'https://actions.google.com/sounds/v1/transportation/train_pass_by.ogg';
  useAudio(audioSrc, isActive && !isPaused, 0.5, true);

  useEffect(() => {
    if (!isActive && timeLeft === 0) {
      // Session finished
      navigate('/history');
    }
  }, [isActive, timeLeft, navigate]);

  const handleStop = () => {
    stopSession();
    navigate('/');
  };

  return (
    <Layout>
      <JourneyContainer>
        <Header>
          FocusRails
          <ModeLabel>{mode.toUpperCase()} MODE</ModeLabel>
        </Header>

        <WindowView />

        <TimerDisplay timeLeft={timeLeft} />

        <Controls
          isPlaying={!isPaused}
          onPlay={resumeSession}
          onPause={pauseSession}
          onStop={handleStop}
        />
      </JourneyContainer>
    </Layout>
  );
};

export default Journey;
