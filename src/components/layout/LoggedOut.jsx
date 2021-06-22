import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export default function LoggedOut({ logIn }) {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.join}>Join Now</Button>
      <Button onClick={logIn} variant="outlined" className={classes.sign}>
        Sign In
      </Button>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  join: {
    position: "relative",
    top: -32,
    right: -1100,
    color: "white",
    fontFamily: "inherit",
    fontWeight: "bold",
    fontSize: 15,
    borderRadius: 20,
    transition: "all 0.5s",
    "&:hover": {
      color: "black",
      opacity: 0.7,
    },
  },
  sign: {
    position: "relative",
    top: -32,
    right: -1110,
    color: "#CF5A11",
    fontFamily: "inherit",
    fontWeight: "bold",
    fontSize: 15,
    border: "2px solid #CF5A11",
    borderRadius: 20,
    transition: "all 0.5s",
    "&:hover": {
      opacity: 0.7,
    },
  },
}));
