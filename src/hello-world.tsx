import * as React from 'react';
import * as Styles from './hello-world.styled';

export interface HelloWorldProps {
    color?: Styles.HelloWorldColors;
    children?: React.ReactNode;
}

export const HelloWorld: React.SFC<HelloWorldProps> = props => {
    return <Styles.StyledHelloWorld color={props.color}>{props.children || 'Hello, World!'}</Styles.StyledHelloWorld>
}