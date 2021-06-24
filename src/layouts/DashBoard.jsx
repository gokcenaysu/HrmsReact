import React from "react";
import { Route } from "react-router";
import Employer from "../../pages/User/Employers/Employer";
import JobPostingCreate from '../../pages/JobPosting/JobPostingCreate'
import JobPostingAdd from "../../pages/JobPosting/JobPostingAdd";
import LogInn from "../../pages/Account/LogInn";

export default function DashBoard() {
  return (
    <div>
     <Route exact path="/employers" component={Employer} />
      <Route exact path="/create" component={JobPostingCreate}/>
      <Route exact path="/add" component={JobPostingAdd}/> 
      <Route exact path="/logIn" component={LogInn}/> 
    </div>
  );
}
