import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box'
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import Avatar from '@material-ui/core/Avatar';
import Image from "../images/logo.png";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    back:{
     backgroundColor:"black",
     height:"170px",
    color:"white",
    },
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
        position:"relative",
        top:"30px",
        left:"50px",
        fontSize:"20px",
      },
      avatar: {
        position: 'relative',
        marginLeft:"90%",
        marginTop:"-30px",
        width:"80px",
        height:"80px",
      },
      text:{
          fontFamily:"century gothic",
          fontSize:"25px",
          fontWeight:"bold",
          marginLeft:"40%",
          position:"relative",
          top:"70px",
      },
      icon:{
          width:"40px",
          height:"40px",
      }
}));
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    return (
        <div className={classes.back}>
            <Typography className={classes.text}>
            @All Rights Reserved
            </Typography>
          <div className={classes.root}>
          <AccessibilityNewIcon className={classes.icon}/>
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
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
    <Avatar className={classes.avatar} alt="HRMS" src={Image} />
        </div>
    )
}
