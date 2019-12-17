import React from 'react';
import { node } from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store from './store';

const ReduxWrapper = ({ element }) => (
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      {element}
    </PersistGate>
  </Provider>
);

ReduxWrapper.propTypes = {
  element: node.isRequired,
};

export default ReduxWrapper;
