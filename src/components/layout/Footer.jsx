import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";

export default function Footer() {
  const classes = useStyles();

  return (
    <div style={{ height: 60, position:"absolute", marginBottom:0, background:"white"}}>
      <img
        className={classes.image}
        src="https://res.cloudinary.com/dlytm7ohp/image/upload/v1624280114/in-here_numxdb.png"
      />
      <Typography className={classes.since}>© 2021</Typography>
      <Link className={classes.link}>About</Link>
      <Link className={classes.link}>Accessibility</Link>
      <Link className={classes.link}>User Agreement</Link>
      <Link className={classes.link}>Schools</Link>
      <Link className={classes.link}>Privacy Policy</Link>
      <Link className={classes.link}>Cookie Policy</Link>
      <Link className={classes.link}>Copyright Policy</Link>
      <Link className={classes.link}>Bland Policy</Link>
      <Link className={classes.link}>Guest Controls</Link>
      <Link className={classes.link}>Community Guidelines</Link>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  link: {
    position: "relative",
    top: -22,
    left: 350,
    marginLeft: 20,
    color: "grey",
    fontSize: 12,
  },
  since: {
    position: "relative",
    top: -2,
    left: 300,
    color: "grey",
    fontSize: 12,
  },
  image: {
    position: "relative",
    top: 19,
    left: 200,
    width: 80,
  },
}));
