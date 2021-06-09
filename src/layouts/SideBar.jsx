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
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  city:{
    position:"relative",
    top:50,
    width:300,
  },
  cityJob:{
    marginTop:80,
    fontFamily:"century gothic",
    fontWeight:"bold",
    fontSize:"30px",
    color:"#250062",
  },
  root: {
    width: "100%",
    maxWidth: 180,
    backgroundColor: theme.palette.background.paper,
    borderStyle:"solid",
    borderWidth:"2px",
    borderColor:"#250062",
    marginTop: theme.spacing(-2),
  },
  root2: {
    position: "relative",
    top: -100,
    width: 300,
    backgroundColor: "#000000",
    color: "white",
    borderRadius:"25px",
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
    color:"white",
  },
  more:{
      fontFamily:"century gothic",
      color:"white",
  },
  button:{
    fontFamily:"century gothic",
    color:"#250062",
    fontWeight:"bolder",
  },
  link:{
    color:"#3161b7",
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked");
}
const cities = [
  { id: "city", label: "City", minWidth: 170 },
];

export default function SideBar() {
  const classes = useStyles();
  const [cities, setCities] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService
      .getCities()
      .then((result) => setCities(result.data.data));
  }, []);
  return (
    <div>
      <Card className={classes.root2}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Engin DEMİROĞ
          </Typography>
          <Typography className={classes.title2}>Kodlamaio</Typography>
          <Typography className={classes.pos} color="textSecondary">
            Java/React
          </Typography>
          <Typography className={classes.desc} href="kodlamaio.com">
            <Link className={classes.link} href="kodlamaio.com">Kodlamaio</Link>
            <br />
            {'Come on guys lets start our lesson'}
          </Typography>
        </CardContent>
        <CardActions >
          <Button size="small" className={classes.more} href="http://localhost:8080/api/employers/getall">Learn More</Button>
        </CardActions>
      </Card>
      <div className={classes.root}>
        <List component="nav" aria-label="position employer posting seeker">
          <ListItem button>
            <ListItemIcon>
              <PublicIcon className={classes.button}/>
            </ListItemIcon>
            <Button className={classes.button}
             href="http://localhost:8080/api/job-positions/getall">Job Positions</Button>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BusinessIcon className={classes.button}/>
            </ListItemIcon>
            <Button className={classes.button}
             href="http://localhost:8080/api/employers/getall">Employers</Button>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BusinessCenterIcon className={classes.button}/>
            </ListItemIcon>
            <Button className={classes.button}
            href="http://localhost:8080/api/job-postings/getAll">Job Postings</Button>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon className={classes.button}/>
            </ListItemIcon>
            <Button className={classes.button}
            href="http://localhost:8080/api/jobseekers/getall">Job Seekers</Button>
          </ListItem>
        </List>
      </div>
      <Typography className={classes.cityJob}>
        Find The Job You Are <br/>
        Looking For In Your City
      </Typography>           
      <Autocomplete
      className={classes.city}
      id="city-box"
      options={cities}
      getOptionLabel={(option) => option.cityName}
      renderInput={(params) => <TextField {...params} label="Choose a City"  />}
    />
  </div>
  );
}
