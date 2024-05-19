import React from 'react';
import {
  Container,
  Offer,
  Info,
  Title,
  Span,
  Description,
} from './styles';
import { Button } from '../../UI';

export const Intro: React.FC = () => {
  return (
      <Container>
        <Offer>
          <Info>
            <Title>The first platform for learning English based on your vocabulary</Title>
            <Description>Изучайте слова на основе вашего лексикона</Description>
          </Info>
          <Button>
            Начать учить слова
          </Button>
        </Offer>
      </Container>
  )
}
