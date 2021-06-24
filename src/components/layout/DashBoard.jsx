import React from "react";
import { Route } from "react-router";
import Employer from "../../pages/User/Employers/Employer";
import JobPostingAdd from "../../pages/JobPosting/JobPostingAdd";
import LogInn from "../../pages/Account/LogInn";
import Login from "../auth/Login";
import Register from "../auth/Register";

export default function DashBoard() {
  return (
    <div>
     <Route exact path="/employers" component={Employer} />
      <Route exact path="/add" component={JobPostingAdd}/> 
      <Route exact path="/login" component={Login}/> 
      {/* <Route exact path="/loginn" component={LogInn}/>  */}
      <Route exact path="/register" component={Register}/> 

    </div>
  );
}
