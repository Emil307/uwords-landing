import React from 'react';
import {
  Container,
  Offer,
  Title,
  Span,
} from './styles';

export const IntroSection: React.FC = () => {
  return (
    <Container>
      <Offer>
        <Title>The first based on <Span>your vocabulary</Span> English learning platform</Title>
      </Offer>
    </Container>
  )
}
