import React from 'react';
import styled from 'styled-components';
import { type LucideIcon } from 'lucide-react';

const Card = styled.div<{ selected: boolean }>`
  background-color: ${props => (props.selected ? '#333' : '#1e1e1e')};
  border: 2px solid ${props => (props.selected ? '#4CAF50' : 'transparent')};
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2a2a2a;
  }
`;

const Title = styled.h3`
  margin-top: 12px;
  font-size: 1.1rem;
  color: #fff;
`;

const IconWrapper = styled.div`
  color: #4CAF50;
`;

interface ModeCardProps {
  title: string;
  icon: LucideIcon;
  selected: boolean;
  onClick: () => void;
}

const ModeCard: React.FC<ModeCardProps> = ({ title, icon: Icon, selected, onClick }) => {
  return (
    <Card selected={selected} onClick={onClick}>
      <IconWrapper>
        <Icon size={32} />
      </IconWrapper>
      <Title>{title}</Title>
    </Card>
  );
};

export default ModeCard;
