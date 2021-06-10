import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import SearchIcon from "@material-ui/icons/Search";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Image from 'material-ui-image'

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
    fontWeight: "bolder",
    fontFamily: "century gothic",
    color: "black",
    textShadow:"1px 1px 10px #b2b2db",
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
    position: "relative",
    left: "180px",
    top: "0px",
    right: "0px",
    backgroundColor: "white",
    height: "70px",
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked");
}

export default function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Breadcrumbs className={classes.breadCrumbs}>
      <Link
        marginRight="4px"
        color="inherit"
        href="http://localhost:3000/"
        onClick={handleClick}
        className={classes.link}
      >
        <img src="https://res.cloudinary.com/dlytm7ohp/image/upload/v1623347529/logo-hrms_hclr4n.png" width="200px" className={classes.image} />
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
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={classes.button}
      >
        <PermIdentityIcon className={classes.button} />
        ACCOUNT
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Create New Account</MenuItem>
                  <MenuItem onClick={handleClose}>Log In</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Breadcrumbs>
  );
}
