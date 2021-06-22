import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
import CityService from "../../services/cityService";
import JobPositionService from "../../services/jobPositionService";
import WorkingTimeService from "../../services/workingTimeService";
import WorkingTypeService from "../../services/workingTypeService";
import JobPostingService from "../../services/jobPostingService";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
//   const [workingTimes, setWorkingTimes] = useState([]);
//   const [workingTypes, setWorkingTypes] = useState([]);
//   const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    // let workingTimeService = new WorkingTimeService();
    // let workingTypeService = new WorkingTypeService();
    // let cityService = new CityService();
    let jobPositionService = new JobPositionService();

    // workingTimeService.getWorkingTimes().then((result) => setWorkingTimes(result.data.data));
    // workingTypeService.getWorkingTypes().then((result) => setWorkingTypes(result.data.data));
    // cityService.getCities().then((result) => setCities(result.data.data));
    jobPositionService.getJobPositions().then((result) => setJobPositions(result.data.data));
  }, []);


  const handleChange = (event) => {
    setJobPositions(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-position-native"
          select
          label="Job Position"
          value={jobPositions}
          onChange={handleChange}
          SelectProps={{
              native: true,
          }}
          helperText="Please select your position"
          variant="outlined"
        >
       
          {jobPositions.map((option) => (
            <option key={option.value} value={option.value}/>
            
          ))}
        </TextField>
       
      </div>
    </form>
  );
}
