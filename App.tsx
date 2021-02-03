import React from 'react';

import Home from '#routes/Home';
import ImageView from '#routes/ImageView';
import Login from '#routes/Login';
import Profile from '#routes/Profile';
import Signin from '#routes/Signin';
import Loader from '#src/Loader';

const App = () => (
  <Loader>
    {/* <Home /> */}
    {/* <ImageView /> */}
    {/* <Login /> */}
    {/* <Profile /> */}
    <Signin />
  </Loader>
);

export default App;
