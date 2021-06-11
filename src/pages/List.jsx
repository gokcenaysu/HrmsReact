import React, { useState, useEffect } from "react";
import EmployerService from "../services/employerService";
import JobPostingService from "../services/jobPostingService";
import JobSeekerService from "../services/jobSeekerService";
import JobPositionService from "../services/jobPositionService";
import { randomUpdatedDate } from "@material-ui/x-grid-data-generator";
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
  // { id: "definition", label: "Posting Definition", minWidth: 170 },
  // { id: "website", label: "Website", minWidth: 100 },
  // {id: "email",label: "E-Mail",minWidth: 170,align: "left"},
  // {id: "phoneNumber",label: "Phone Number",type:"number",minWidth: 170,align: "left"},
];

const columns2 = [
  // { id: "city", label: "City", minWidth: 170 },
  // { id: "positionName", label: "Position", minWidth: 100 },
  { id: "definition", label: "Definition", minWidth: 170, align: "left" },
  // {
  //   id: "openPositionNumber",
  //   label: "Open Position Number",
  //   type: "number",
  //   minWidth: 170,
  //   align: "left",
  // },
  // { id: "postingDate", label: "Posting Date", minWidth: 170, align: "left" },
  // {
  //   id: "applicationDeadline",
  //   label: "Application Deadline",
  //   minWidth: 170,
  //   align: "left",
  // },
];

// const columns3 = [
//   { id: "firstName", label: "First Name", minWidth: 170 },
//   { id: "lastName", label: "Last Name", minWidth: 100, align: "left" },
//   { id: "email", label: "E-Mail", minWidth: 170, align: "left" },
//   {
//     id: "birthYear",
//     label: "Birth Year",
//     type: "number",
//     minWidth: 170,
//     align: "left",
//   },
//   {
//     label: "Last Login",
//     type: "dateTime",
//     width: 180,
//     lastLogin: randomUpdatedDate(),
//   },
// ];

const columns4 = [{ id: "job", label: "Job", minWidth: 170 }];

export default function List() {
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

  const [jobPostings, setJobPostings] = useState([]);
  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getJobPostings()
      .then((result) => setJobPostings(result.data.data));
  }, []);

  // const [jobSeekers, setJobSeekers] = useState([]);
  // useEffect(() => {
  //   let jobSeekerService = new JobSeekerService();
  //   jobSeekerService
  //     .getJobSeekers()
  //     .then((result) => setJobSeekers(result.data.data));
  // }, []);

  // const [jobPositions, setJobPositions] = useState([]);
  // useEffect(() => {
  //   let jobPositionService = new JobPositionService();
  //   jobPositionService
  //     .getJobPositions()
  //     .then((result) => setJobPositions(result.data.data));
  // }, []);

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
            {...a11yProps(0)}
          />
          {/* <Tab
            className={classes.caption}
            label="Job Postings"
            {...a11yProps(1)}
          />
          <Tab
            className={classes.caption}
            label="Job Seekers"
            {...a11yProps(2)}
          /> */}
          <Tab className={classes.caption} label="Job Advertisements" {...a11yProps(3)} />
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
      <TabPanel value={value} index={1}>
        <Paper className={classes.app}>
          <TableContainer >
            <Table stickyHeader aria-label="sticky table">
              <TableHead >
                <TableRow >
                  {columns2.map((column) => (
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
                {jobPostings.map((jobPosting) => {
                  return (
                    <TableRow 
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={jobPosting.id}
                    >
                      {columns2.map((column) => {
                        const value = jobPosting[column.id];
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
            count={jobPostings.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        <Paper className={classes.app}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns3.map((column) => (
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
                {jobSeekers.map((jobSeeker) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={jobSeeker.id}
                    >
                      {columns3.map((column) => {
                        const value = jobSeeker[column.id];
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
            count={jobPostings.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </TabPanel> */}
      {/* <TabPanel value={value} index={3}>
        <Paper className={classes.app}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns4.map((column) => (
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
                {jobPositions.map((jobPosition) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={jobPosition.id}
                    >
                      {columns4.map((column) => {
                        const value = jobPosition[column.id];
                        return (
                          <TableCell
                            className={classes.info}
                            key={column.id}
                            align={column.align}
                          >
                            {jobPosition.positionName}
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
            count={jobPositions.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </TabPanel> */}
    </div>
  );
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
    width: "50%",
    position:"relative",
    top:340,
    backgroundColor: "white",
    root: {
      width: "100%",
    },
  },
}));
