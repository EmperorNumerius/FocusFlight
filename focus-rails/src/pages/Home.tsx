import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useFocus } from '../context/FocusContext';
import { Target, Briefcase, BookOpen, Coffee } from 'lucide-react';
import ModeCard from '../components/ModeCard';
import Layout from '../components/Layout';
import Ticket from '../components/Ticket';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #aaa;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
`;

const StartButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #45a049;
  }
`;

const Home: React.FC = () => {
  const { startSession } = useFocus();
  const navigate = useNavigate();
  const [selectedMode, setSelectedMode] = useState<'focus' | 'work' | 'reading' | 'relax'>('focus');
  const [duration, setDuration] = useState(25);

  const handleStart = () => {
    startSession(selectedMode, duration);
    navigate('/journey');
  };

  return (
    <Layout>
      <Container>
        <Title>FocusRails</Title>
        <Subtitle>Choose your journey</Subtitle>

        <Grid>
          <ModeCard
            title="Deep Focus"
            icon={Target}
            selected={selectedMode === 'focus'}
            onClick={() => setSelectedMode('focus')}
          />
          <ModeCard
            title="Work"
            icon={Briefcase}
            selected={selectedMode === 'work'}
            onClick={() => setSelectedMode('work')}
          />
          <ModeCard
            title="Reading"
            icon={BookOpen}
            selected={selectedMode === 'reading'}
            onClick={() => setSelectedMode('reading')}
          />
          <ModeCard
            title="Relax"
            icon={Coffee}
            selected={selectedMode === 'relax'}
            onClick={() => setSelectedMode('relax')}
          />
        </Grid>

        <Ticket mode={selectedMode} duration={duration} />

        <input
          type="range"
          min="5"
          max="120"
          step="5"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
        />
        <span>{duration} Minutes</span>

        <StartButton onClick={handleStart}>Depart</StartButton>
      </Container>
    </Layout>
  );
};

export default Home;
