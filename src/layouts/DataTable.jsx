import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import List from '../pages/List'

const useStyles = makeStyles((theme) => ({
  locationEmployer: {
  position:"relative",
  top:"-300px",
  },
}));

export default function DataTable() {
  const classes = useStyles();
    return (
        <div >
          <div className={classes.locationEmployer}>
          <List/>
          </div>
      </div>
      
    )
}
