import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import store, { history } from './redux/store';
import App from './App';
import * as serviceWorker from './serviceWorker';

render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
