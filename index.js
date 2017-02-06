import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './routes';

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory} routes={Routes} />
  </MuiThemeProvider>
);
