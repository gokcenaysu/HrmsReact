import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import SearchIcon from "@material-ui/icons/Search";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { useHistory } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked");
}

export default function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleLogOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleLogIn() {
    setIsAuthenticated(true);
  }

  return (
    <Breadcrumbs className={classes.breadCrumbs}>
      <Link
        marginRight="4px"
        color="inherit"
        href="http://localhost:3000/"
        onClick={handleClick}
        className={classes.link}
      >
        <img
          src="https://res.cloudinary.com/dlytm7ohp/image/upload/v1623347529/logo-hrms_hclr4n.png"
          width="200px"
          className={classes.image}
        />
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
        className={classes.link}
      >
        <SearchIcon className={classes.icon} />
        Look For a Job
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
        className={classes.link}
      >
        <LocalLibraryIcon className={classes.icon} />
        Career Guide
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
        className={classes.link}
      >
        <LocalLibraryIcon className={classes.icon} />
        Position Guide
      </Link>

      {isAuthenticated ? (
        <LoggedIn logOut={handleLogOut} bisey="1" />
      ) : (
        <LoggedOut logIn={handleLogIn} />
      )}
    </Breadcrumbs>
  );
}
const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
    fontWeight: "bolder",
    fontFamily: "century gothic",
    color: "black",
    textShadow: "1px 1px 10px #b2b2db",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 40,
    height: 40,
    marginLeft: theme.spacing(0.6),
  },
  image: {
    marginTop: theme.spacing(2.0),
  },
  paper: {
    marginRight: theme.spacing(2),
    color: "#3161b7",
    fontFamily: "century gothic",
  },
  button: {
    color: "#250062",
    fontWeight: "bolder",
    fontSize: "15px",
    fontFamily: "century gothic",
    width: 35,
    height: 35,
    marginLeft: theme.spacing(20),
  },
  breadCrumbs: {
    width: "1140px",
    marginLeft: "180px",
    backgroundColor: "white",
    height: "70px",
  },
}));
