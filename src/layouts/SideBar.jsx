import { Card } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    background:"#3161b7",
  },
  media:{
    objectFit:"cover",
    
  },
  card:{
    position:"relative",
    top:-400,
    left:-65,
    maxWidth:800,
    borderRadius:20,
  },
  caption:{
    fontFamily:"century gothic",
    fontSize:20,
    fontWeight:"bold",
    color:"black",
    textShadow:"1px 1px 10px #b2b2db",
  },
  desc:{
    fontFamily:"century gothic",
    fontSize:13,
    fontWeight:"bold",
    color:"black",
  },
  click:{
    fontFamily:"century gothic",
    fontSize:15,
    fontWeight:"bold",
    color:"#0073ff",
    color:"white",
    textShadow:"2px 2px 8px #000000",
  },
  content:{
  height:60,
  }
});
export default function SideBar() {
  const classes = useStyles();
  return (
    <div>
    <Carousel responsive={responsive} className={classes.card}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
        className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://www.infopark.com.tr/img/Apinizer_logo2.jpg"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography className={classes.caption}>
            APINIZER
          </Typography>
          <Typography className={classes.desc}>
          A brand new world with doors opening abroad
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.click}>
          Apply
        </Button>
        <Button className={classes.click}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
        className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://i4.hurimg.com/i/hurriyet/75/1200x675/6014124cc9de3d5810819f47.png"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography className={classes.caption}>
            reddit
          </Typography>
          <Typography className={classes.desc}>
          Social media management
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.click}>
          Apply
        </Button>
        <Button className={classes.click}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
        className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/Zk7d1MdoSJ6cEShVbfd0"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography className={classes.caption}>
            Kodlamaio
          </Typography>
          <Typography className={classes.desc}>
            Moderator for Camps
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.click}>
          Apply
        </Button>
        <Button className={classes.click}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
        className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://velvetbut.pl/img/cms/ptak-hurtownia-odziezy-la-blanche_1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography className={classes.caption}>
            La blanche
          </Typography>
          <Typography className={classes.desc}>
          Fun, friendly, dancing...
          will working 10 hours
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.click}>
          Apply
        </Button>
        <Button className={classes.click}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
        className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://cdn.webrazzi.com/uploads/2020/04/amazon-791.png"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography className={classes.caption}>
            amazon
          </Typography>
          <Typography className={classes.desc}>
          Full Stack Developer
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.click}>
          Apply
        </Button>
        <Button className={classes.click}>
          Learn More
        </Button>
      </CardActions>
    </Card>
   
</Carousel>;
  </div>
  )
}
