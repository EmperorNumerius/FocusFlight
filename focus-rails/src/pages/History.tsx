import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowLeft } from 'lucide-react';

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background-color: #1a1a1a;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #aaa;
  cursor: pointer;
  margin-right: 15px;
  display: flex;
  align-items: center;

  &:hover {
    color: #fff;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const SessionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SessionItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #333;

  &:last-child {
    border-bottom: none;
  }
`;

const SessionInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const SessionDate = styled.span`
  font-size: 0.8rem;
  color: #888;
`;

const SessionMode = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const SessionDuration = styled.span`
  font-size: 1rem;
  color: #4CAF50;
`;

const History: React.FC = () => {
  const navigate = useNavigate();

  // Mock data for now
  const sessions = [
    { id: 1, date: '2023-10-27 10:00', mode: 'Focus', duration: 25 },
    { id: 2, date: '2023-10-26 14:30', mode: 'Work', duration: 45 },
    { id: 3, date: '2023-10-25 09:15', mode: 'Reading', duration: 30 },
  ];

  return (
    <Layout>
      <Container>
        <Header>
          <BackButton onClick={() => navigate('/')}>
            <ArrowLeft size={24} />
          </BackButton>
          <Title>Travel Log</Title>
        </Header>

        <SessionList>
          {sessions.map(session => (
            <SessionItem key={session.id}>
              <SessionInfo>
                <SessionMode>{session.mode}</SessionMode>
                <SessionDate>{session.date}</SessionDate>
              </SessionInfo>
              <SessionDuration>{session.duration} min</SessionDuration>
            </SessionItem>
          ))}
        </SessionList>
      </Container>
    </Layout>
  );
};

export default History;
