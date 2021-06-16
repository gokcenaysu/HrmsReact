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
    <div style={{height:"170px", background: "linear-gradient(45deg,  #ffffff, #0073ff, #250062)"}}>
      <Link
       className={classes.link}
        color="inherit"
        href="http://localhost:3000/"
        onClick={handleClick}
      >
         <img
          src="https://res.cloudinary.com/dlytm7ohp/image/upload/v1623494513/JobClick_mmuree.png"
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
        <LocalLibraryIcon className={classes.icon}/>
        Position Guide
      </Link>
      

      {isAuthenticated ? (
        <LoggedIn logOut={handleLogOut} bisey="1" />
      ) : (
        <LoggedOut logIn={handleLogIn} />
      )}
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  link: {
    fontWeight: "bolder",
    position:"relative",
    left:45,
    top:-100,
    padding:"10px",
    fontFamily: "arial",
    color: "black",
    textShadow: "1px 1px 10px #b2b2db",
    "&:hover": {
      color:"white",
    }
  },
  icon: {
    position:"relative",
    top:5,
    right:3,
    width: 30,
    height: 30,
  },
  image: {
    position:"relative",
    top:110,
    left:-35,
    width:"300px",
  },
}));
