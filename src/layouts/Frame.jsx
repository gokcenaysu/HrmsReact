import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CityService from "../services/cityService";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import BusinessIcon from "@material-ui/icons/Business";
import PeopleIcon from "@material-ui/icons/People";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import PublicIcon from "@material-ui/icons/Public";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Card } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import DataTable from "./DataTable";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SchoolIcon from "@material-ui/icons/School";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { Image } from "react-bootstrap";
import { Container } from "@material-ui/core";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked");
}
const cities = [{ id: "city", label: "City", minWidth: 170 }];

export default function Frame() {
  const classes = useStyles();
  // const [cities, setCities] = useState([]);
  // useEffect(() => {
  //   let cityService = new CityService();
  //   cityService.getCities().then((result) => setCities(result.data.data));
  // }, []);
  return (
    <div className={classes.table}>
      {/* <div className={classes.root}>
        <List component="nav" aria-label="position employer posting seeker">
          <ListItem button>
            <ListItemIcon>
              <PublicIcon className={classes.button} />
            </ListItemIcon>
            <Button
              className={classes.button}
              href="http://localhost:8080/api/job-positions/getall"
            >
              Job Advertisements
            </Button>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BusinessIcon className={classes.button} />
            </ListItemIcon>
            <Button
              className={classes.button}
              href="http://localhost:8080/api/employers/getall"
            >
              Employers
            </Button>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BusinessCenterIcon className={classes.button} />
            </ListItemIcon>
            <Button
              className={classes.button}
              href="http://localhost:8080/api/job-postings/getAll"
            >
              Job Postings
            </Button>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon className={classes.button} />
            </ListItemIcon>
            <Button
              className={classes.button}
              href="http://localhost:8080/api/jobseekers/getall"
            >
              Job Seekers
            </Button>
          </ListItem>
        </List>
      </div>
      <Typography className={classes.cityJob}>
        Find The Job You Are <br />
        Looking For In Your City
      </Typography>
      <Autocomplete
        className={classes.city}
        id="city-box"
        options={cities}
        getOptionLabel={(option) => option.cityName}
        renderInput={(params) => (
          <TextField {...params} label="Choose a City" />
        )}
      /> */}
      <div className={classes.div}>
        <Card className={classes.root3}>
          <CardActionArea className={classes.area}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://res.cloudinary.com/dlytm7ohp/image/upload/v1623347515/barmen_a6ypng.png"
              title="Contemplative Reptile"
            />
            <CardContent className={classes.content}>
              <Typography className={classes.caption}>BANKER</Typography>
              <Typography className={classes.desc}>
                284 ADVERTISEMENT
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button className={classes.click}>CLICK TO REVIEW</Button>
          </CardActions>
        </Card>

        <Card className={classes.root3}>
          <CardActionArea className={classes.area}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://res.cloudinary.com/dlytm7ohp/image/upload/v1623347515/hizmet-personeli_lapygl.png"
              title="Contemplative Reptile"
            />
            <CardContent className={classes.content}>
              <Typography className={classes.caption}>SERVICE STAFF</Typography>
              <Typography className={classes.desc}>
                596 ADVERTISEMENT
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button className={classes.click}>CLICK TO REVIEW</Button>
          </CardActions>
        </Card>

        <Card className={classes.root3}>
          <CardActionArea className={classes.area}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://res.cloudinary.com/dlytm7ohp/image/upload/v1623347515/yonet%C4%B1c%C4%B1_w3nszq.png"
              title="Contemplative Reptile"
            />
            <CardContent className={classes.content}>
              <Typography className={classes.caption}>MANAGER</Typography>
              <Typography className={classes.desc}>
                122 ADVERTISEMENT
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button className={classes.click}>CLICK TO REVIEW</Button>
          </CardActions>
        </Card>
      </div>
      <div className={classes.div}>
        <Card className={classes.root3}>
          <CardActionArea className={classes.area}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://res.cloudinary.com/dlytm7ohp/image/upload/v1623347514/medya-uzman_n9qxzb.png"
              title="Contemplative Reptile"
            />
            <CardContent className={classes.content}>
              <Typography className={classes.caption}>
                SOCIAL MEDIA EXPERT
              </Typography>
              <Typography className={classes.desc}>
                122 ADVERTISEMENT
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button className={classes.click}>CLICK TO REVIEW</Button>
          </CardActions>
        </Card>

        <Card className={classes.root3}>
          <CardActionArea className={classes.area}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://res.cloudinary.com/dlytm7ohp/image/upload/v1623347515/yazilim_fnlm2o.png"
              title="Contemplative Reptile"
            />
            <CardContent className={classes.content}>
              <Typography className={classes.caption}>
                SOFTWARE ENGİNEER
              </Typography>
              <Typography className={classes.desc}>
                485 ADVERTISEMENT
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button className={classes.click}>CLICK TO REVIEW</Button>
          </CardActions>
        </Card>

        <Card className={classes.root3}>
          <CardActionArea className={classes.area}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://res.cloudinary.com/dlytm7ohp/image/upload/v1623347515/bankaci_p2po35.png"
              title="Contemplative Reptile"
            />
            <CardContent className={classes.content}>
              <Typography className={classes.caption}>BANKER</Typography>
              <Typography className={classes.desc}>95 ADVERTISEMENT</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button className={classes.click}>CLICK TO REVIEW</Button>
          </CardActions>
        </Card>
      </div>
      <div className={classes.root}>
        <Button className={classes.text} href="#text-buttons">
          <ListAltIcon className={classes.icon} style={{ marginLeft: 65 }} />
          ADVERTISEMENTS POSTED TODAY
        </Button>
        <Button className={classes.text} href="#text-buttons">
          <SchoolIcon className={classes.icon} style={{ marginLeft: 70 }} />
          INTERNSHIP JOB ADVERTISEMENTS
        </Button>
        <Button className={classes.text} href="#text-buttons">
          <FormatListBulletedIcon
            className={classes.icon}
            style={{ marginLeft: 60 }}
          />
          PART-TIME JOB ADVERTİSEMENTS
        </Button>
      </div>
      <div>
        <DataTable />
      </div>   
      <Container className={classes.container}>
      <Image src="https://res.cloudinary.com/dlytm7ohp/image/upload/v1623423850/Ads%C4%B1z_tasar%C4%B1m_1_qge1nw.png"
      className={classes.img}/>
      <Typography className={classes.text2}>How do you know when you need to <br/>make a job change?</Typography>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root3: {
    position: "relative",
    top: 10,

  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    fontFamily: "century gothic",
    color: "white",
  },
  pos: {
    marginBottom: 12,
    fontFamily: "century gothic",
    color: "white",
  },
  title: {
    fontFamily: "century gothic",
    fontSize: 15,
    color: "white",
  },
  title2: {
    fontFamily: "century gothic",
    fontSize: 30,
    lineHeight: 1.2,
  },
  desc: {
    fontSize: 15,
    fontFamily: "century gothic",
    color: "rgba(0, 0, 0, 0.54)",
    fontWeight: "bold",
    color: "white",
  },
  table: {
    position: "relative",
    bottom: 100,
  },
  more: {
    fontFamily: "century gothic",
    color: "white",
  },
  button: {
    fontFamily: "century gothic",
    color: "#250062",
    fontWeight: "bolder",
  },
  link: {
    color: "#3161b7",
  },

  media: {
    objectFit: "cover",
  },
  caption: {
    fontFamily: "century gothic",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    position:"relative",
    top: -150,
    textShadow: "1px 1px 2px #b2b2db",
  },
  desc: {
    fontFamily: "century gothic",
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    textShadow: "1px 1px 10px #b2b2db",
    position:"relative",
    top:-150,
  },
  click: {
    fontFamily: "century gothic",
    fontSize: 15,
    fontWeight: "bold",
    color: "#0073ff",
    color: "white",
    textShadow: "1px 1px 10px #b2b2db",
  },
  area: {
    height: 85,
    transition: "all 0.5s",
    "&:hover": {
      opacity: 0.5,
    },
  },
  div: {
    display: "flex",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    background: "#250062",
    position:"relative",
    top:50,
  },
  text: {
    fontFamily: "century gothic",
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textShadow: "2px 2px 8px #000000",
    transition: "all 0.5s",
    "&:hover": {
      color: "white",
      opacity: 0.7,
    },
  },
  icon: {
    width: 40,
    height: 40,
    color: "white",
  },
  img:{
    width:500,
    height:450,
    position:"relative",
    top:-770,
    left:730,
    transition: "all 0.5s",
    "&:hover": {
      objectFit:"cover",      
      width:"520px",
      height:"470px",
    },
  },
  text2:{
    position:"relative",
    bottom:860,
    left:750,
    fontFamily:"century gothic",
    fontWeight:"bold",
    fontSize:25,
  },
  container:{
    position:"relative",
    top:380,
    right:20,
  }
}));
