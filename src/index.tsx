import './index.css';
import '@fontsource/roboto';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { store } from './store';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import config from './config';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: config.GRAPHQL_URI,
  cache: new InMemoryCache(),
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
