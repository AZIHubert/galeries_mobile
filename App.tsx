import React from 'react';

import EditInformation from '#routes/EditInformation';
import DeleteAccount from '#routes/DeleteAccount';
import Home from '#routes/Home';
import ImageView from '#routes/ImageView';
import Login from '#routes/Login';
import Profile from '#routes/Profile';
import SendTicket from '#routes/SendTicket';
import SideBar from '#routes/SideBar';
import Signin from '#routes/Signin';
import Loader from '#src/Loader';
import Permission from '#src/Permission';

const App = () => (
  <Loader>
    <Permission>
      {/* <EditInformation /> */}
      {/* <DeleteAccount /> */}
      {/* <Home /> */}
      {/* <ImageView /> */}
      {/* <Login /> */}
      <Profile />
      {/* <SendTicket /> */}
      {/* <SideBar /> */}
      {/* <Signin /> */}
    </Permission>
  </Loader>
);

export default App;
