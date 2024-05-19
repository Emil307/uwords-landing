import React from 'react';
import {
  Screen,
  Container,
  Left,
  Right,
} from './styles';
import { Button } from '../../UI';

export const Header: React.FC = () => {
  return (
    <Screen>
      <Container>
        <Left>
          Uwords
        </Left>
        <Right>
          <Button
            style={{
              height: "38px"
            }}
          >
            Start learning
          </Button>
        </Right>
      </Container>
    </Screen>
  )
}
