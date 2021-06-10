import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import List from '../pages/List'
import Employer from '../pages/User/Employer/Employer';

const useStyles = makeStyles((theme) => ({
  location: {
  position:"relative",
  top:"-300px",
  },
}));

export default function DataTable() {
  const classes = useStyles();
    return (
        <div >
          <div className={classes.location}>
          <List/>      
          </div>
      </div>
      
    )
}
