import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import webFont from 'webfontloader';
import { CustomTheme } from './utils';
webFont.load({
  google: {
    families: ['Poppins:400:500,', 'sans-serif'],
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={CustomTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
