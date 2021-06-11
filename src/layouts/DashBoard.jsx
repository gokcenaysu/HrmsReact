import React from "react";
import { Route } from "react-router";
import Employer from "../pages/User/Employers/Employer.jsx";
import Frame from "./Frame";
import SideBar from "./SideBar.";
import {Grid} from "semantic-ui-react"
import NavBar from "./NavBar"
import { DesktopMacRounded } from "@material-ui/icons";

export default function DashBoard() {
  return (
    <div>
      <SideBar />
      <Frame />
      <Grid>
        <Grid.Row>
          <Grid.Column>
          <Route exact path="/" component={Employer} />
          <Route exact path="/employers" component={Employer} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
   
    </div>
  );
}
