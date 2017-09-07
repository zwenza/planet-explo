import React, { Component } from 'react';

import Earth from './planets/Earth';

class App extends Component {
  render() {
    return (
      <div>
        Planet Exploration
        <Earth/>
      </div>
    );
  }
}

export default App;
