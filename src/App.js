import React, { useState } from "react";
//css imports
import "./_app.scss";
//custom imports
import Header from "./components/Header/Header.component";
import Sidebar from "./components/Sidebar/Sidebar.component";
import Homepage from "./pages/HomePage/HomePage.component";
//bootstrap imports
import { Container } from "react-bootstrap";
import LoginPage from './pages/LoginPage/LoginPage.component';

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebarToggle = () => setSidebar((value) => !value);

  return (
    <>
      {/* <Header handleSidebarToggle={handleSidebarToggle} />
      
      <div className='app_container '>
        <Sidebar sidebar={sidebar} handleSidebarToggle={handleSidebarToggle} />
        <Container fluid className='app_main'>
          <Homepage />
        </Container>
      </div> */}

      <LoginPage/>
    
    </>
  );
};

export default App;
