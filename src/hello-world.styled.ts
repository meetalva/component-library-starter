// src/hello-world.styled.ts
import styled from 'styled-components';

export enum HelloWorldColors {
  Pale = 'palevioletred',
  Whip = 'papayawhip',
  Black = 'black'
}

export interface StyledHelloWorldProps {
  color?: HelloWorldColors;
}

export const StyledHelloWorld = styled.h1<StyledHelloWorldProps>`
  font-family: sans-serif;
  color: ${props => props.color || HelloWorldColors.Black};
}`;
