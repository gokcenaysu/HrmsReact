import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width:"1100px",
      marginTop: theme.spacing(6),
      marginLeft:"25%",
      padding:"25px",
    },
    root2: {
      display: 'flex',
      justifyContent: 'center',
      marginLeft:"1100px",
      marginTop:"60px",
      fontWeight:"bold",
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
        color:"white",
      },
      
    },
    background:{
      height:"290px",
      background:"#250062",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontFamily:"century gothic",
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  const theme = createMuiTheme({
    palette: {
      primary: {  
        main: '#000000',
      },
    },
  });

export default function SearchBar() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.background}>
      <div className={classes.root}>
    <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
        The Job You Are Looking For is Here        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
    </div>
    <div className={classes.root2}>
      <Chip
        label="#jobpositions"
        onClick={handleClick}
        variant="outlined"
      />
      <Chip
        label="#classifiedsbycity"
        onClick={handleClick}
        variant="outlined"
      />
      <Chip
        label="#jobseekers"
        onClick={handleClick}
        variant="outlined"
      />
      <Chip        
      label="#jobpostings"
        onClick={handleClick}
        variant="outlined"
      />
      <Chip
        label="#employers"
        onClick={handleClick}
        variant="outlined"
      />
    </div>
    </div>
  );
}
