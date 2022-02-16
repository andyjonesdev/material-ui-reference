import styled from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const GlobalStyle = styled.div`
  * {
    padding: 0;
    margin: 0;
  }
  padding: 0 10vw;
  font-family: 'Roboto Mono', monospace;
  height: 100vh;
  width: 100vw;
  background: #dfb6cd;
`

ReactDOM.render(
  <GlobalStyle>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalStyle>,
  document.getElementById('root')
);
