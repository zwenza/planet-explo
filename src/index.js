import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import globals from './style/globals';

injectGlobal`${globals}`; 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
