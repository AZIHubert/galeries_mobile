import React from 'react';

// import Home from '#routes/Home';
// import Login from '#routes/Login';
import Signin from '#routes/Signin';
import Loader from '#src/Loader';

const App = () => (
  <Loader>
    <Signin />
    {/* <Login /> */}
    {/* <Home /> */}
  </Loader>
);

export default App;
