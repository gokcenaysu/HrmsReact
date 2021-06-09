import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import Avatar from "@material-ui/core/Avatar";
import Image from "../images/logo.png";
import { Typography } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  back: {
    backgroundColor: "black",
    height: "160px",
    color: "white",
  },
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
    position: "relative",
    top: "30px",
    left: "50px",
    fontSize: "20px",
  },
  avatar: {
    position: "relative",
    left: "1400px",
    top: "-40px",
    width: "60px",
    height: "60px",
  },
  text: {
    fontFamily: "century gothic",
    fontSize: "15px",
    fontWeight: "bold",
    left: "650px",
    position: "relative",
    top: "70px",
  },
  icon: {
    width: "30px",
    height: "30px",
  },
  contact: {
    width: "25px",
    height: "25px",
    position: "relative",
    left: "680px",
    top: "15px",
    display: "flex",
  },
  contactText: {
    fontFamily: "century gothic",
    fontSize: "15px",
    fontWeight: "bold",
    position: "relative",
    left: "710px",
    top: "37px",
    display: "flex",
  },
}));
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked");
}

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <div className={classes.back}>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
        className={classes.contactText}
      >
        Contact
      </Link>
      <MailOutlineIcon className={classes.contact} />
      <Typography className={classes.text}>@All Rights Reserved</Typography>
      <div className={classes.root}>
        <AccessibilityNewIcon className={classes.icon} />
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
        {value !== null && (
          <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </div>
      <Avatar className={classes.avatar} alt="HRMS" src={Image} />
    </div>
  );
}
