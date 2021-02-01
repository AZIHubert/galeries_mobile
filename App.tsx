import React from 'react';

// import Home from '#routes/Home';
import Login from '#routes/Login';
import Loader from '#src/Loader';

const App = () => (
  <Loader>
    <Login />
    {/* <Home /> */}
  </Loader>
);

export default App;
