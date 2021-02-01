import React from 'react';

import Home from '#routes/Home';
import Loader from '#src/Loader';

const App = () => (
  <Loader>
    <Home />
  </Loader>
);

export default App;
