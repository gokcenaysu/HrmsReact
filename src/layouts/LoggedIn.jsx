import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from "@material-ui/icons/Info";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles } from "@material-ui/core/styles";
import { Badge, CardMedia, Typography } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";

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

export default function LoggedIn({ logOut }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ position: "relative", top: -80, left: 1250 }}>
      <CardMedia
        className={classes.icon}
        image="https://res.cloudinary.com/dlytm7ohp/image/upload/v1622656124/me_c2qdeo.jpg"
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
        <Typography className={classes.name}>Aysu Gökcen</Typography>
      </CardMedia>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <InfoIcon style={{ color: "#250062", height: 35, width: 35 }} />
          </ListItemIcon>
          <ListItemText className={classes.text}>My Account</ListItemText>
        </StyledMenuItem>
        <StyledMenuItem>
          <EmailIcon style={{ color: "#250062", height: 35, width: 35 }} />
          <ListItemText
            className={classes.text}
            style={{ position: "relative", left: 20 }}
          >
            Messages
          </ListItemText>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <ExitToAppIcon
              style={{ color: "#250062", height: 35, width: 35 }}
            />
          </ListItemIcon>
          <ListItemText onClick={logOut} className={classes.text}>
            Log Out
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
    position: "relative",
    top: -30,
    left: 110,
    color: "#250062",
    borderRadius: 40,
    transition: "all 0.5s",
    "&:hover": {
      opacity: 0.6,
    },
  },
  text: {
    color: "#3161b7",
    fontFamily: "century gothic",
    transition: "all 0.5s",
    "&:hover": {
      opacity: 0.6,
    },
  },
  name: {
    position: "relative",
    left:2,
    top: 65,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    transition: "all 0.5s",
    "&:hover": {
      opacity: 0.6,
    },
  },
}));
