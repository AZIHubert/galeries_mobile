import React from 'react';

import Loader from '#src/Loader';
import Permission from '#src/Permission';
import Navigation from '#src/Navigation';

const App = () => (
  <Loader>
    <Permission>
      <Navigation />
    </Permission>
  </Loader>
);

export default App;
