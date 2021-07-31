import React, { useEffect, useState } from "react";
//css imports
import "./_app.scss";
//custom imports
import Header from "./components/Header/Header.component";
import Sidebar from "./components/Sidebar/Sidebar.component";
import Homepage from "./pages/HomePage/HomePage.component";
//bootstrap imports
import { Container } from "react-bootstrap";
import LoginPage from './pages/LoginPage/LoginPage.component';

//react router imports
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import WatchPage from './pages/WatchPage/WatchPage.component';
import SearchPage from "./pages/SearchPage/SearchPage.component";
import SubscribtionPage from './pages/SubscribtionPage/SubscribtionPage.component';
import ChannelPage from './pages/ChannelPage/ChannelPage.component';

//creating layout as the header sidebar and category bar are common for multiple pages
const Layout = ({children}) => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebarToggle = () => setSidebar((value) => !value);
return (
  <>
    <Header handleSidebarToggle={handleSidebarToggle} />
      <div className='app_container '>
        <Sidebar sidebar={sidebar} handleSidebarToggle={handleSidebarToggle} />
        <Container fluid className='app_main'>
          {children}
        </Container>
      </div>
  </>
);
}

const App = () => {
  const {accessToken,loading} = useSelector((state) => state.auth);
  const history = useHistory()

  useEffect(() => {
    if (!accessToken && !loading) history.push("/login");
  }, [accessToken, loading, history]);


  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Layout>
            <Homepage />
          </Layout>
        </Route>

        <Route exact path='/login'>
          <LoginPage />
        </Route>

        <Route exact path='/search/:query'>
          <Layout>
            <SearchPage />
          </Layout>
        </Route>

        <Route exact path='/watch/:id'>
          <Layout>
            <WatchPage />
          </Layout>
        </Route>
        <Route exact path='/feed/subscriptions'>
          <Layout>
            <SubscribtionPage />
          </Layout>
        </Route>

        <Route exact path='/channel/:channelId'>
          <Layout>
            <ChannelPage />
          </Layout>
        </Route>

        {/* Default Route */}
        <Route>
          <Redirect to='/' />
        </Route>
      </Switch>
    </>
  );
};

export default App;
