import React from 'react';
import {
  Container,
  Offer,
  Title,
  Span,
  Description,
} from './styles';
import { Button } from '../../UI';

export const Intro: React.FC = () => {
  return (
      <Container>
        <Offer>
          <Title>The first based on <Span>your vocabulary</Span> English learning platform</Title>
        </Offer>
      </Container>
  )
}
