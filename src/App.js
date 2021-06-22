import React, {useState, useEffect} from 'react';
import { Container} from '@material-ui/core';
import "semantic-ui-css/semantic.min.css";
import './App.css';
import PreLoader from "./components/layout/PreLoader"
import NavBar from './components/layout/NavBar'
import  Dashboard  from './components/layout/DashBoard'
import {Route, Router, Switch} from "react-router-dom";
import Home from './components/home/Home';
import Footer from './components/layout/Footer';

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
