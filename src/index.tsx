import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

ReactDOM.render(
  <App initialMenus={5} />,
  document.getElementById('app'),
);