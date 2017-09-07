import React, { Component } from 'react';
import styled from 'styled-components';

const Test = styled.button`
 color: blue;
`

class App extends Component {
  render() {
    return (
      <div>
        Test
        <Test>Hi</Test>
      </div>
    );
  }
}

export default App;
