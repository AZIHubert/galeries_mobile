import React from 'react';

import Loader from '#src/Loader';
import Permission from '#src/Permission';
import Navigation from '#src/Navigation';
import { AuthProvider } from '#src/contexts/AuthProvider';

const App = () => (
  <AuthProvider>
    <Loader>
      <Permission>
        <Navigation />
      </Permission>
    </Loader>
  </AuthProvider>
);

export default App;
