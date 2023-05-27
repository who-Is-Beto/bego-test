import React from 'react';
import Router from './router/Router';
import { Provider } from 'react-redux';
import { persistor, store } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
