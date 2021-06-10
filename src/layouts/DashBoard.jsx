import React from "react";
import SideBar from "./Frame";
import DataTable from "./DataTable";
import Frame from "./SideBar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SchoolIcon from "@material-ui/icons/School";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    background: "#250062",
    marginTop: -70,
  },
  text: {
    fontFamily: "century gothic",
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textShadow: "2px 2px 8px #000000",
  },
  icon: {
    width: 40,
    height: 40,
    color: "white",
  },
}));

export default function DashBoard() {
  const classes = useStyles();

  return (
    <div>
      <SideBar />
      <Frame />
      <div className={classes.root}>
        <Button className={classes.text} href="#text-buttons">
          <ListAltIcon className={classes.icon} style={{ marginLeft: 60 }} />
          ADVERTISEMENTS POSTED TODAY
        </Button>
        <Button className={classes.text} href="#text-buttons">
          <SchoolIcon className={classes.icon} style={{ marginLeft: 90 }} />
          INTERNSHIP JOB ADVERTISEMENTS
        </Button>
        <Button className={classes.text} href="#text-buttons">
          <FormatListBulletedIcon
            className={classes.icon}
            style={{ marginLeft: 120 }}
          />
          PUBLISHED TODAY
        </Button>
      </div>
      <div>
        <DataTable />
      </div>
      
    </div>
  );
}
