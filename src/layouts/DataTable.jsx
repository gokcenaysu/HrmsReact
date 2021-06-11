import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "../pages/List";

export default function DataTable() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.location}>
        <List />
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  location: {
    position: "relative",
    bottom:250,
  },
}));
