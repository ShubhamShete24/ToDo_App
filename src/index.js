import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './App1';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import store from './redux/store';

// Chakra UI
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <React.StrictMode>
        <App1 />
      </React.StrictMode>
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);
