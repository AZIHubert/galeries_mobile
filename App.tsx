import React from 'react';
import { Provider } from 'react-redux';

import Loader from '#src/Loader';
import Permission from '#src/Permission';
import Navigation from '#src/Navigation';
import store from '#src/store';

const App = () => (
  <Provider store={store}>
    <Loader>
      <Permission>
        <Navigation />
      </Permission>
    </Loader>
  </Provider>
);

export default App;
