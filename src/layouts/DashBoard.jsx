import React from "react";
import { Route } from "react-router";
import Employer from "../pages/User/Employers/Employer";
import Frame from "./Frame";
import SideBar from "./SideBar";
import AddJobPosting from "../pages/FormsUI/AddJobPosting";

export default function DashBoard() {
  return (
    <div>
      <Route exact path="/" component={SideBar}/>
      <Route exact path="/" component={Frame}/>
      <Route exact path="/employers" component={Employer} />
      <Route exact path="/createadvertisement" component={AddJobPosting}/>
    </div>
  );
}
