import React, { Component } from 'react';
import styled from 'styled-components';

import { Title, Footer } from './style/fonts';
import Earth from './planets/Earth';

class App extends Component {
  render() {
    return (
      <Universe>
        <Meta>
          <Title>Planet Exploration</Title>
          <Footer>created by <a href="https://github.com/zwenza">David Jöch</a></Footer>
        </Meta>
        <Atmosphere>
          <Earth/>
        </Atmosphere>
      </Universe>
    );
  }
}

const Atmosphere = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Universe = styled.div`
  height: 100vh;
`

const Meta = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;

  display: flex;
  flex-direction: column;
`

export default App;
