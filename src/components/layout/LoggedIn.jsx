import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, Link, Typography, Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import GroupWorkIcon from "@material-ui/icons/GroupWork";

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
    <div>
      <Button className={classes.link} href="http://localhost:3000">
        <HomeIcon style={{ position: "relative", left: 30 }} />
        <Typography style={{ position: "relative", top: 20, left: 0 }}>
          Home
        </Typography>
      </Button>
      <Button
        style={{ marginLeft: "10px" }}
        className={classes.link}
        href="http://localhost:3000"
      >
        <SupervisorAccountIcon style={{ position: "relative", left: 50 }} />
        <Typography style={{ position: "relative", top: 20, left: -4 }}>
          My Network
        </Typography>
      </Button>
      <Button
        style={{ marginLeft: "10px" }}
        className={classes.link}
        href="http://localhost:3000"
      >
        <WorkIcon style={{ position: "relative", left: 19 }} />
        <Typography style={{ position: "relative", top: 20, left: -11 }}>
          Jobs
        </Typography>
      </Button>
      <Button
        style={{ marginLeft: "10px" }}
        className={classes.link}
        href="http://localhost:3000"
      >
        <SmsIcon style={{ position: "relative", left: 40 }} />
        <Typography style={{ position: "relative", top: 20, left: -10 }}>
          Messages
        </Typography>
      </Button>
      <Button
        style={{ marginLeft: "10px" }}
        className={classes.link}
        href="http://localhost:3000"
      >
        <NotificationsIcon style={{ position: "relative", left: 30 }} />
        <Typography style={{ position: "relative", top: 20, left: -28 }}>
          Notifications
        </Typography>
      </Button>
      <CardMedia
        className={classes.icon}
        image="https://res.cloudinary.com/dlytm7ohp/image/upload/v1622656124/me_c2qdeo.jpg"
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
        <Typography className={classes.name}>Me</Typography>
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
            <img
              style={{ width: 50, height: 50, borderRadius: 30 }}
              src="https://res.cloudinary.com/dlytm7ohp/image/upload/v1622656124/me_c2qdeo.jpg"
            />
            <Typography
              style={{
                fontFamily: "century gothic",
                fontWeight: "bold",
                color: "black",
                marginLeft: 10,
              }}
            >
              Aysu Gökcen <br />
              Şu okulda öğrenci: <br /> İstanbul Gelişim Üniversitesi
            </Typography>
          </ListItemIcon>
        </StyledMenuItem>
        <hr />
        <Typography className={classes.text}>Account</Typography>
        <Link
          style={{
            color: "grey",
            marginLeft: 15,
            position: "relative",
            top: 5,
          }}
        >
          Settings & Privacy
        </Link>
        <Link
          style={{
            color: "grey",
            marginLeft: 15,
            marginTop: 14,
            display: "flex",
          }}
        >
          Help
        </Link>
        <Link
          style={{
            color: "grey",
            marginLeft: 15,
            marginTop: 9,
            display: "flex",
          }}
        >
          Language
        </Link>
        <hr />

        <Typography className={classes.text}>Manage</Typography>
        <Link
          style={{
            color: "grey",
            marginLeft: 15,
            position: "relative",
            top: 5,
          }}
        >
          Posts & Activity
        </Link>
        <Link
          style={{
            color: "grey",
            marginLeft: 15,
            marginTop: 14,
            display: "flex",
          }}
        >
          Job Posting Account
        </Link>
        <hr />

        <Link style={{ color: "grey", marginLeft: 15 }} onClick={logOut}>
          Log Out
        </Link>
      </StyledMenu>
      {/* <Button
        style={{ marginLeft: "10px" }}
        className={classes.link}
        href="http://localhost:3000"
      >
        <GroupWorkIcon
          style={{ position: "relative", left:680, top:-67 }}
          className={classes.notificationIcon}
        />
        <Typography
          style={{ position: "relative", top: -48, left: 650 }}
          className={classes.notification}
        >
          Work
        </Typography>
      </Button> */}
    </div>
  );
}
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    borderRadius: 6,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
      backgroundColor: theme.palette.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  link: {
    position: "relative",
    top: -36,
    left: 600,
    color: "#000000",
    transition: "all 0.3s",
    "&:hover": {
      color: "#545354",
    },
  },
  icon: {
    width: "35px",
    height: "35px",
    position: "relative",
    top: -70,
    left: 1240,
    color: "#250062",
    borderRadius: 40,
    transition: "all 0.5s",
    "&:hover": {
      opacity: 0.6,
    },
  },
  text: {
    marginLeft: 15,
    color: "black",
    fontWeight: "bold",
    fontFamily: "century gothic",
  },
  name: {
    position: "relative",
    top: 34,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    transition: "all 0.5s",
    "&:hover": {
      opacity: 0.6,
    },
  },
}));
