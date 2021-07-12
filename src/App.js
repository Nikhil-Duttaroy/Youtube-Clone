//css imports
import './_app.scss';
//custom imports
import Header from './components/Header/Header.component';
import Sidebar from './components/Sidebar/Sidebar.component';
import Homepage from './pages/HomePage/HomePage.component';
//bootstrap imports
import { Container } from 'react-bootstrap';


const App = () =>  {
  return (
    <>
      <Header />
      <div className='app_container border border-primary'>
        <Sidebar />
        <Container fluid className='app_main border border-danger'>
          <Homepage />
        </Container>
      </div>
    </>
  );
}

export default App;
