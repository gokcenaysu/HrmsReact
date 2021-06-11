import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import EmployerService from "../../../services/employerService";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
  }
  
  const columns = [
    { id: "companyName", label: "Companies", minWidth: 170 },
     { id: "website", label: "Website", minWidth: 100 },
     {id: "email",label: "E-Mail",minWidth: 170,align: "left"},
     {id: "phoneNumber",label: "Phone Number",type:"number",minWidth: 170,align: "left"},
  ];
export default function Employer() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [employers, setEmployers] = useState([]);
    useEffect(() => {
      let employerService = new EmployerService();
      employerService
        .getEmployers()
        .then((result) => setEmployers(result.data.data));
    }, []);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
    return (
        <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            className={classes.tab}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab
              className={classes.caption}
              label="Employers"
              {...a11yProps(0)}/>
              </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
        <Paper className={classes.app}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      className={classes.line}
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {employers.map((employer) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={employer.id}
                    >
                      {columns.map((column) => {
                        const value = employer[column.id];

                        return (
                          <TableCell
                            className={classes.info}
                            key={column.id}
                            align={column.align}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            className={classes.pagination}
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={employers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </TabPanel>
      </div>
    )
}

const useStyles = makeStyles((theme) => ({
  tab: {
    backgroundColor: "#3161b7",
    
  },
  pagination: {
    backgroundColor: "#250062",
    color: "white",
    fontWeight: "bold",
    
  },
  line: {
    backgroundColor: "#250062",
    color: "white",
    fontFamily: "century gothic",
    fontWeight: "bold",
    fontSize: "20px",
    
  },
  info: {
    fontWeight: "bold",
    fontSize: "16px",
    fontFamily: "century gothic",
    transition: "all 0.5s",
    "&:hover": {
      fontSize:"30px",
      fontWeight:"bolder",
    },
    
  },
  caption: {
    fontWeight: "bold",
    fontFamily: "century gothic",
    fontSize: "17px",
    "&:hover": {
      color: "#250062",
      transition: "0.5s",
      fontSize:"20px",
    },
  },
  text: {
    color: "white",
  },
  root: {
    flexGrow: 1,
    width: "100%",
    marginTop: 350,
    backgroundColor: "white",
    root: {
      width: "100%",
    },
  },
}));

