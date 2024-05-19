import React from 'react';
import {
  Container,
  Info,
  Title,
  Text,
  Image,
} from './styles';
import iphone from '../../assets/images/iphone.png';

export const Motivation: React.FC = () => {
  return (
    <Container>
      <Info>
        <Title>Learn English faster by learn individual list of words</Title>
        <Text>Record your random conversations and the app will choose the words for you</Text>
      </Info>
      <Image src={iphone.src} alt="record your voice for learn English" />
    </Container>
  )
}
