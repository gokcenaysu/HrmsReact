import { Container, Hidden } from '@material-ui/core';
import "semantic-ui-css/semantic.min.css";
import './App.css';
import NavBar from './layouts/NavBar';
import SearchBar from './layouts/SearchBar';
import  Dashboard  from './layouts/DashBoard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Intro from './layouts/Intro';

function App() {
  return (
    <div style={{overflow:"hidden",background: "linear-gradient(45deg,  #000000, #250062,  #000000)",
  }}>
        <NavBar/>
       <Route exact path="/" component={SearchBar}/>
      <Container style={{background:"white"}}>
        <Dashboard/>
      </Container>
    </div>
  );
}

export default App;
