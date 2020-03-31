import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import '~/config/ReactotronConfig';

import Routes from '~/routes';
import history from '~/services/history';

import GlobalStyle from '~/styles/global';

import { persistor, store } from '~/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ToastContainer autoClose={3000} />
          <GlobalStyle />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
