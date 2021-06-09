import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
  },
  info: {
    fontSize: "17px",
    fontFamily: "century gothic",
    color: "black",
    fontWeight: "bold",
  },
  caption: {
    fontSize: "20px",
    fontFamily: "century gothic",
    color: "#250062",
    fontWeight: "bold",
  },
  box:{
      position:"relative",
      top:"-600px",
  }
}));

function SkeletonChildrenDemo(props) {
  const { loading = false } = props;
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.caption}>
        Human Resources Management System
      </Typography>
      <img
        className={classes.image}
        src="https://mymarketingmaze.com/wp-content/uploads/2021/03/hrms.jpg"
        alt=""
      />
    </div>
  );
}

SkeletonChildrenDemo.propTypes = {
  loading: PropTypes.bool,
};

export default function Frame() {
  const classes = useStyles();
  return (
    <Grid container spacing={8} className={classes.box}>
      <Grid item xs></Grid>
      <Grid item xs>
        <SkeletonChildrenDemo />
        <Typography className={classes.info}>
          An HRMS (Human Resource Management System) is a type of HR software
          that enables the management of several HR functions through the use of
          information technology. An HRMS aims to improve the productivity and
          efficiency of the business through the automation of manual and
          repetitive tasks. This, in turn, also frees up the HR team’s time
          which can then be used to address more strategic, business-critical
          tasks.
        </Typography>
      </Grid>
    </Grid>
  );
}
