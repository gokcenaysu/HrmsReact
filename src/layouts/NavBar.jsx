import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { useHistory } from "react-router-dom";


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
    <div style={{height:"65px", background: "linear-gradient(45deg,  #ffffff, #CF5A11, #ffffff)"}}>
      <Link
        color="inherit"
        href="http://localhost:3000/"
        onClick={handleClick}
      >
         <img
          src="https://res.cloudinary.com/dlytm7ohp/image/upload/v1624280114/in-here_numxdb.png"
          className={classes.image}
        />
      </Link>
      {isAuthenticated ? (
        <LoggedIn logOut={handleLogOut}/>
      ) : (
        <LoggedOut logIn={handleLogIn} />
      )}
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  image: {
    position:"relative",
    top:10,
    left:170,  
    width:120,
    
  },
}));
