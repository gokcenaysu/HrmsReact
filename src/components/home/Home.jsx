import React from "react";
import { Button, Typography, Chip, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Carousel from "react-material-ui-carousel";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked");
}

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Typography className={classes.caption}>
          Welcome to your professional community
        </Typography>
        <img
          className={classes.image}
          src="https://res.cloudinary.com/dlytm7ohp/image/upload/v1624283727/man-1459246_960_720_ighz62.webp"
        />
        <Button variant="outlined" className={classes.text}>
          Search for a job
          <ArrowForwardIosIcon className={classes.icon} />
        </Button>
        <Button variant="outlined" className={classes.text}>
          Find a person you know
          <ArrowForwardIosIcon className={classes.icon} />
        </Button>
        <Button variant="outlined" className={classes.text}>
          Search Job Advertisement
          <ArrowForwardIosIcon className={classes.icon} />
        </Button>
      </div>
      <div style={{ marginTop: "-200px", background: "#FFF7F0", height: 350 }}>
        <Typography className={classes.direction}>
          Find open jobs <br /> and interships
        </Typography>
        <Typography className={classes.search}>SUGGESTED SEARCH</Typography>
        <div className={classes.root}>
          <Chip
            className={classes.chip}
            label="Engineering"
            onClick={handleClick}
          />
          <Chip
            className={classes.chip}
            label="Finance"
            onClick={handleClick}
          />
          <Chip
            className={classes.chip}
            label="Information Technology"
            onClick={handleClick}
          />
          <Chip
            className={classes.chip}
            label="Marketing"
            onClick={handleClick}
          />
          <Chip
            className={classes.chip}
            label="Asisstant"
            onClick={handleClick}
          />
          <Chip
            className={classes.chip}
            label="Support"
            onClick={handleClick}
          />
          <Chip
            className={classes.chip}
            label="Education"
            onClick={handleClick}
          />
          <Chip
            className={classes.chip}
            label="Art and Design"
            onClick={handleClick}
          />
          <Chip
            className={classes.chip}
            label="Customer Service"
            onClick={handleClick}
          />
        </div>
      </div>
      <div style={{ height: 150 }}>
        <Typography className={classes.post}>
          Post your job <br /> and find the people you need
        </Typography>
        <Button variant="outlined" className={classes.postjob}>
          <ArrowForwardIcon />
          Post a job
        </Button>
      </div>
      <div style={{ marginTop: 50, height: 400, background: "#FFF7F0" }}>
        <Carousel
          className={classes.carousel}
          autoPlay={false}
          navButtonsAlwaysVisible
        >
          <Typography className={classes.description}>
            LET THE RIGHT PEOPLE <br /> KNOW YOU ARE OPEN TO WORK
            <br />
            <br />
            With the Open To Work feature, you can
            <br />
            privately tell recruiters or publicly share
            <br />
            with the 'InHere' community that you are
            <br />
            looking for new job opportunities
            <br />
            <img
              className={classes.image2}
              src="https://res.cloudinary.com/dlytm7ohp/image/upload/v1624298418/businessman-1765641_960_720_uvlpji.png"
            />
          </Typography>
          <Typography className={classes.description}>
            CONVERSATIONS TODAY COULD LEAD <br /> TO OPPORTUNITY TOMORROW
            <br /> <br />
            Sending messages to people you know is
            <br />a great way to strengthen relationships as
            <br />
            you take the next step in your career
            <br />
            <img
              className={classes.image2}
              src="https://res.cloudinary.com/dlytm7ohp/image/upload/v1624299138/laptop-6081424_960_720-removebg-preview_wtwiy2.png"
            />
          </Typography>
          <Typography className={classes.description}>
            LET THE RIGHT PEOPLE <br /> KNOW YOU ARE OPEN TO WORK
            <br />
            <br />
            With the Open To Work feature, you can
            <br />
            privately tell recruiters or publicly share
            <br />
            with the 'InHere' community that you are
            <br />
            looking for new job opportunities
            <br />
            <img
              className={classes.image2}
              src="https://res.cloudinary.com/dlytm7ohp/image/upload/v1624298418/businessman-1765641_960_720_uvlpji.png"
            />
          </Typography>
          <Typography className={classes.description}>
            STAY UP TO DATE ON YOUR <br /> INDUSTRY
            <br />
            <br />
            From Live videos, to stories, to newsletters
            <br />
            and more, LinkedIn is full of ways to stay
            <br />
            up to date on the latest discussions in
            <br />
            your industry
            <br />
            <img
              className={classes.image2}
              src="https://res.cloudinary.com/dlytm7ohp/image/upload/v1624299701/August_LiveStreaming_1000px-1-removebg-preview_yb0zjb.png"
            />
          </Typography>
        </Carousel>
      </div>
      <div
        style={{
          height: 700,
          background: "linear-gradient(45deg,  #FFFFFF,  #D1E5FF, #FFFFFF)",
        }}
      >
        <Typography className={classes.message}>
          Join your colleagues, classmates, and friends <br /> In Here.
        </Typography>
        <Button variant="outlined" className={classes.start}>
          Get Started
        </Button>
        <img
          className={classes.image3}
          src="https://res.cloudinary.com/dlytm7ohp/image/upload/v1624305045/Ads%C4%B1z_mikodm.png"
        />
      </div>
      <div style={{ marginTop: 200, height: 450, background: "#FFF7F0" }}>
        <img
          src="https://res.cloudinary.com/dlytm7ohp/image/upload/v1624280114/in-here_numxdb.png"
          className={classes.logo}
        />
        <Typography className={classes.general}>General</Typography>
        <Link className={classes.link}>Sign Up</Link>
        <Link className={classes.link}>Help Center</Link>
        <Link className={classes.link}>About</Link>
        <Link className={classes.link}>Press</Link>
        <Link className={classes.link}>Blog</Link>
        <Link className={classes.link}>Careers</Link>
        <Link className={classes.link}>Developers</Link>
        <Typography className={classes.browse}>Browse InHere</Typography>
        <Link className={classes.link2}>Learning</Link>
        <Link className={classes.link2}>Jobs</Link>
        <Link className={classes.link2}>Salary</Link>
        <Link className={classes.link2}>Mobile</Link>
        <Link className={classes.link2}>Services</Link>
        <Typography className={classes.directory}>Directories</Typography>
        <Link className={classes.link3}>Members</Link>
        <Link className={classes.link3}>Jobs</Link>
        <Link className={classes.link3}>Companies</Link>
        <Link className={classes.link3}>Salaries</Link>
        <Link className={classes.link3}>Featured</Link>
        <Link className={classes.link3}>Learning</Link>
        <Link className={classes.link3}>Posts</Link>
        <Link className={classes.link3}>Articles</Link>
        <Link className={classes.link3}>Schools</Link>
        <Link className={classes.link3}>News</Link>
        <Link className={classes.link3}>News Letters</Link>
        <Link className={classes.link3}>Services</Link>
        <Link className={classes.link3}>Interview Prep</Link>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  link3: {
    color: "grey",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "lato",
    position: "relative",
    top: -153,
    left: 1100,
    display: "flex",
    marginTop: 8,
  },
  directory: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "lato",
    position: "relative",
    right: -1100,
    top: -162,
  },
  link2: {
    color: "grey",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "lato",
    position: "relative",
    top: 10,
    left: 702,
    display: "flex",
    marginTop: 8,
  },
  browse: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "lato",
    marginLeft: 700,
    marginTop: -218,
  },
  link: {
    color: "grey",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "lato",
    position: "relative",
    top: 9,
    left: 362,
    display: "flex",
    marginTop: 8,
  },
  general: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "lato",
    marginLeft: 360,
  },
  logo: {
    position: "relative",
    top: 30,
    left: 120,
    width: 100,
  },
  start: {
    position: "relative",
    top: 70,
    left: 650,
    fontSize: 20,
    background: "#CF5A11",
    color: "black",
    fontFamily: "lato",
    border: "white",
    borderRadius: 40,
    transition: "all 0.6s",
    "&:hover": {
      background: "#CF5A11",
      fontSize: 22,
      opacity: 0.9,
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
  },
  message: {
    position: "relative",
    top: 40,
    left: 240,
    fontSize: 50,
    color: "black",
    fontFamily: "lato",
  },
  image3: {
    marginTop: 120,
    width: 1750,
  },
  image2: {
    position: "relative",
    right: -520,
    top: -330,
    width: 500,
  },
  description: {
    fontFamily: "lato",
    marginLeft: 90,
    fontSize: 30,
  },
  carousel: {
    position: "relative",
    top: 40,
    left: 200,
    width: 1200,
    maxHeight: 400,
  },
  root: {
    width: 600,
    marginLeft: 140,
    marginTop: -30,
    textAlign: "center",
  },
  postjob: {
    position: "relative",
    top: -15,
    left: 1000,
    fontSize: 20,
    color: "#CF5A11",
    fontFamily: "lato",
    border: "white",
    borderRadius: 40,
    transition: "all 0.6s",
    "&:hover": {
      color: "black",
      fontSize: 25,
      opacity: 0.9,
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
  },
  post: {
    position: "relative",
    top: 40,
    left: 140,
    fontSize: 40,
    color: "#CF5A11",
    fontFamily: "lato",
  },
  chip: {
    fontSize: 15,
    fontFamily: "lato",
    padding: 20,
    margin: 10,
    color: "white",
    background: "#CF5A11",
    borderRadius: 40,
  },
  image: {
    position: "relative",
    top: 60,
    left: 150,
    width: 400,
    height: 400,
  },
  caption: {
    position: "relative",
    top: 40,
    right: -650,
    fontSize: 40,
    color: "#CF5A11",
    fontFamily: "lato",
  },
  direction: {
    position: "relative",
    top: 110,
    left: 1000,
    fontSize: 40,
    color: "black",
    fontFamily: "lato",
  },
  search: {
    position: "relative",
    fontSize: 15,
    fontFamily: "lato",
    fontWeight: "bold",
    left: 350,
    top: -50,
    color: "#7B7979",
  },
  text: {
    position: "relative",
    display: "flex",
    border: "1px solid #DDDADA",
    top: -260,
    right: -840,
    marginBottom: 25,
    maxWidth: 400,
    maxHeight: 100,
    fontFamily: "lato",
    fontSize: 20,
    padding: "10px 0px 10px 10px",
    transition: "all 0.6s",
    borderRadius: 5,
    "&:hover": {
      opacity: 0.6,
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
  },
  icon: {
    width: 200,
    height: 30,
    color: "grey",
    paddingLeft: "100px",
  },
}));
