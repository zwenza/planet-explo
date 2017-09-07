import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';

import earthImage from '../assets/earth.png';

export default class Earth extends Component {
  render() {
    return (
      <Container>
        <Planet src={earthImage}/>
      </Container>
    );
  }
}

const earthRotation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
    width: 300px;
    height: 300px;
    animation: ${earthRotation} 60s linear infinite;
`

const Planet = styled.img`
    max-width: 100%;
    max-height: 100%;
`
