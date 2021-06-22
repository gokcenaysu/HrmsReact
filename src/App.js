import React, {useState, useEffect} from 'react';
import { Container} from '@material-ui/core';
import "semantic-ui-css/semantic.min.css";
import './App.css';
import PreLoader from "./layouts/PreLoader"
import NavBar from './layouts/NavBar'
import  Dashboard  from './layouts/DashBoard'
import {
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import Footer from './layouts/Footer';

function App() {
  const [isLoading, setIsLoading] =useState(true);

  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false);
    },2000);
  })
  return (
    <div> 
    {isLoading==true? 
        <PreLoader/> :
        <>
        <Route path="/" component={NavBar}/>
        <Route exact path="/" component={Home}/>
        <Container>
          <Dashboard/>
        </Container> 
        <Route path="/" component={Footer}/>
        </>
    }
  
     
    </div>
  );
}

export default App;
