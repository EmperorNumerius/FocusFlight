import React from 'react';
import styled from 'styled-components';

const TicketWrapper = styled.div`
  background: #fff;
  color: #000;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Courier New', Courier, monospace;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #121212;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }

  &:before { left: -10px; }
  &:after { right: -10px; }
`;

const TicketHeader = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 2px dashed #ccc;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const TicketInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 5px 0;
  font-size: 0.9rem;
`;

const Label = styled.span`
  color: #666;
`;

const Value = styled.span`
  font-weight: bold;
`;

interface TicketProps {
  mode: string;
  duration: number;
  origin?: string;
  destination?: string;
}

const Ticket: React.FC<TicketProps> = ({ mode, duration, origin = 'Here', destination = 'Focus' }) => {
  return (
    <TicketWrapper>
      <TicketHeader>FOCUS PASS</TicketHeader>
      <TicketInfo>
        <Label>MODE</Label>
        <Value>{mode.toUpperCase()}</Value>
      </TicketInfo>
      <TicketInfo>
        <Label>DURATION</Label>
        <Value>{duration} MIN</Value>
      </TicketInfo>
      <TicketInfo>
        <Label>FROM</Label>
        <Value>{origin}</Value>
      </TicketInfo>
      <TicketInfo>
        <Label>TO</Label>
        <Value>{destination}</Value>
      </TicketInfo>
    </TicketWrapper>
  );
};

export default Ticket;
