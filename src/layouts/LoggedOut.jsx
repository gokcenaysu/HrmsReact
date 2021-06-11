import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function LoggedOut({ logIn }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AccountCircleIcon
        className={classes.icon}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        ACCOUNT
      </AccountCircleIcon>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText className={classes.text}>
            Create New Account
          </ListItemText>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText onClick={logIn} className={classes.text}>
            Log In
          </ListItemText>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  icon: {
    width: "60px",
    height: "60px",
    marginLeft: 150,
    color: "#250062",
    transition: "all 0.5s",
    "&:hover": {
      color: "#3161b7",
      width: 70,
      height: 70,
      opacity: 0.8,
    },
  },
  text: {
    color: "#3161b7",
    fontFamily: "century gothic",
    transition: "all 0.5s",
    "&:hover": {
      color: "#250062",
      opacity: 0.6,
    },
  },
}));
