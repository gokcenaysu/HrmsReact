import { Container } from '@material-ui/core';
import './App.css';
import NavBar from './layouts/NavBar';
import SearchBar from './layouts/SearchBar';
import Footer from './layouts/Footer'
import  Dashboard  from './layouts/DashBoard'

function App() {
  return (
    <div>
       <NavBar/>
      <SearchBar/>
      <Container>
        <Dashboard/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
