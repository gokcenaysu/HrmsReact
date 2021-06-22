import React, { useEffect, useState } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import CityService from "../../services/cityService";
import JobPositionService from "../../services/jobPositionService";
import WorkingTimeService from "../../services/workingTimeService";
import WorkingTypeService from "../../services/workingTypeService";
import JobPostingService from "../../services/jobPostingService";
import { useHistory } from "react-router-dom";
import { Typography, TextField, Grid } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function MultilineTextFields() {
  let jobPostingService = new JobPostingService();
  const JobPostAdd = Yup.object().shape({
    applicationDeadline: Yup.date().nullable().required("Required"),
    jobDefinition: Yup.string().required("Required"),
    jobPositionId: Yup.string().required("Required"),
    workingTimeId: Yup.string().required("Required"),
    workingTypeId: Yup.string().required("Required"),
    openPositionNumber: Yup.string()
      .required("Required")
      .min(1, "Cannot be less than 1"),
    cityId: Yup.string().required("Required"),
    minSalary: Yup.number(),
    maxSalary: Yup.number(),
  });

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      jobDefinition: "",
      jobPositionId: "",
      workingTimeId: "",
      workingTypeId: "",
      openPositionNumber: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      applicationDeadline: "",
    },
    validationSchema: JobPostAdd,
    onSubmit: (values) => {
      values.employerId = 4;
      jobPostingService
        .add(values)
        .then((result) => console.log(result.data.data));
      alert("ALERT");
      history.push("/jobads");
    },
  });
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const [workingTimes, setWorkingTimes] = useState([]);
  const [workingTypes, setWorkingTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    let workingTimeService = new WorkingTimeService();
    let workingTypeService = new WorkingTypeService();
    let cityService = new CityService();
    let jobPositionService = new JobPositionService();

    workingTimeService
      .getWorkingTimes()
      .then((result) => setWorkingTimes(result.data.data));
    workingTypeService
      .getWorkingTypes()
      .then((result) => setWorkingTypes(result.data.data));
    cityService.getCities().then((result) => setCities(result.data.data));
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  const handleChange = (e) => {
    formik.setFieldValue(e.currentTarget.value, e.currentTarget.text, true);
    console.log(e.currentTarget.value);
    console.log(e.currentTarget.key);
    console.log(e.currentTarget.text);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Typography className={classes.caption}>ADD JOB POSTING</Typography>
        <TextField
          id="outlined-select-position-native"
          select
          label="Job Position"
          onChange={(e) => {
            handleChange(e);
          }}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your position"
          variant="outlined"
        >
          <option></option>

          {jobPositions.map((jobPosition) => (
            <option key={jobPosition.jobPositionId}>
              {jobPosition.positionName}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-position-native"
          select
          label="City"
          onChange={(e) => handleChange(e)}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your city"
          variant="outlined"
        >
          <option></option>

          {cities.map((city) => (
            <option key={city.cityId}>
              {city.cityName}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-position-native"
          label="Job Definition"
          helperText="Say something about job"
          variant="outlined"
          style={{ width: "126ch" }}
        ></TextField>
        <TextField
          id="outlined-select-position-native"
          select
          label="Working Time"
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your working time"
          variant="outlined"
        >
          <option></option>

          {workingTimes.map((workingTime) => (
            <option key={workingTime.workingTimeId}>
              {workingTime.workingTime}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-position-native"
          select
          label="Working Type"
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your working type"
          variant="outlined"
        >
          <option></option>

          {workingTypes.map((workingType) => (
            <option key={workingType.workingTimeId}>
              {workingType.workingType}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-position-native"
          label="Open Position Count"
          helperText="Please write your open position count"
          variant="outlined"
        ></TextField>
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </Grid>
        </MuiPickersUtilsProvider> */}
        <TextField
          id="outlined-select-position-native"
          label="Minimum Salary"
          helperText="Please select your position"
          variant="outlined"
        ></TextField>
        <TextField
          id="outlined-select-position-native"
          label="Maximum Salary"
          helperText="Please select your position"
          variant="outlined"
        ></TextField>
      </div>
    </form>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid #CF5A11",
    height: 700,
    marginTop: 60,
    "& .MuiTextField-root": {
      position: "relative",
      top: 60,
      left: 40,
      marginTop: 20,
      marginLeft: 30,
      width: "61ch",
    },
  },
  caption: {
    fontFamily: "century gothic",
    fontSize: 20,
    fontWeight: "bold",
    position: "relative",
    left: 50,
    top: 30,
    color: "#CF5A11",
  },
}));
