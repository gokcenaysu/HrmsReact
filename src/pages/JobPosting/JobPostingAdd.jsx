import React, { useEffect, useState } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
import { useFormikContext, Formik, Form, useField, useFormik } from "formik";
import * as Yup from "yup";
import CityService from "../../services/cityService";
import JobPositionService from "../../services/jobPositionService";
import WorkingTimeService from "../../services/workingTimeService";
import WorkingTypeService from "../../services/workingTypeService";
import JobPostingService from "../../services/jobPostingService";
import { useHistory } from "react-router-dom";
import { Typography, Grid, Container } from "@material-ui/core";
import TextField from "../../formUI/TextField";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  formWraper: {
    marginTop: theme.spacing(5),
    marignBottom: theme.spacing(8),
  },
}));

export default function JobPostingAdd() {
  // const history = useHistory();

  const classes = useStyles();

  // const [selectedDate, setSelectedDate] = React.useState(
  //   new Date("2014-08-18T21:11:54")
  // );
  const [workingTimes, setWorkingTimes] = useState([]);
  const [workingTypes, setWorkingTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

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

  const formState = useFormik({
    positionName: "",
    cityName: "",
    jobDefinition: "",
    openPositionNumber: "",
    minSalary: "",
    maxSalary: "",
    applicationDeadline: "",
    workingType: "",
    workingTime: "",
  });

  const FORM_VALIDATION = Yup.object().shape({
    positionName: Yup.string().required("* Required"),
    cityName: Yup.string().required("* Required"),
    jobDefinition: Yup.string().required("* Required"),
    openPositionNumber: Yup.number()
      .required("* Required")
      .min(1, "Cannot be less than 1"),
    applicationDeadline: Yup.date().required("* Required"),
    workingTime: Yup.string().required("* Required"),
    workingType: Yup.string().required("* Required"),
    minSalary: Yup.number(),
    maxSalary: Yup.number(),
  });

  const handleChange = (e) => {
    formState.setFieldValue(e.currentTarget.value, e.currentTarget.text, true);
    console.log(e.currentTarget.value);
    console.log(e.currentTarget.key);
    console.log(e.currentTarget.text);
  };

  return (
    <Grid item xs={12}>
      <Container maxWidth="md">
        <div className={classes.formWraper}>
          <Formik
            initialValues={{
              ...formState,
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>ADD JOB POSTING</Typography>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    name="positionName"
                    select
                    label="Job Position"
                    SelectProps={{
                      native: true,
                    }}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  >
                    <option></option>
                    {jobPositions.map((jobPosition) => (
                      <option key={jobPosition.jobPositionId}>
                        {jobPosition.positionName}
                      </option>
                    ))}
                  </TextField>

                  <Grid item xs={6}>
                    <TextField
                      name="cityName"
                      label="City"
                      select
                      SelectProps={{ native: true }}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    >
                      <option></option>
                      {cities.map((city) => (
                        <option key={city.cityId}>{city.cityName}</option>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="jobDefinition"
                      label="Definition"
                    ></TextField>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      name="workingType"
                      label="Working Type"
                      select
                      SelectProps={{ native: true }}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    >
                      <option></option>
                      {workingTypes.map((workingType) => (
                        <option key={workingType.workingTypeId}>
                          {workingType.workingType}
                        </option>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      name="workingTime"
                      label="Working Time"
                      select
                      SelectProps={{ native: true }}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    >
                      <option></option>

                      {workingTimes.map((workingTime) => (
                        <option key={workingTime.workingTimeId}>
                          {workingTime.workingTime}
                        </option>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField 
                    name="openPositionNumber"
                    label="Open Position Count"
                    >
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
      </Container>
    </Grid>
  );
}

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <div>
//         <Formik initialValues={{
//           ...INITIAL_FORM_STATE,
//         }}
//         validationSchema={FORM_VALIDATION}
//         onSubmit={(values)=>{
//           console.log(values);
//         }}>
//         <Typography className={classes.caption}>ADD JOB POSTING</Typography>
//         <TextField
//           id="outlined-select-position-native"
//           select
//           label="Job Position"
//           onChange={(e) => {
//             handleChange(e);
//           }}
//           SelectProps={{
//             native: true,
//           }}
//           helperText="Please select your position"
//           variant="outlined"
//         >
//           <option></option>

//           {jobPositions.map((jobPosition) => (
//             <option key={jobPosition.jobPositionId}>
//               {jobPosition.positionName}
//             </option>
//           ))}
//         </TextField>
//         <TextField
//           id="outlined-select-position-native"
//           select
//           label="City"
//           onChange={(e) => handleChange(e)}
//           SelectProps={{
//             native: true,
//           }}
//           helperText="Please select your city"
//           variant="outlined"
//         >
//           <option></option>

//           {cities.map((city) => (
//             <option key={city.cityId}>
//               {city.cityName}
//             </option>
//           ))}
//         </TextField>
//         <TextField
//           id="outlined-select-position-native"
//           label="Job Definition"
//           helperText="Say something about job"
//           variant="outlined"
//           style={{ width: "126ch" }}
//         ></TextField>
//         <TextField
//           id="outlined-select-position-native"
//           select
//           label="Working Time"
//           onChange={handleChange}
//           SelectProps={{
//             native: true,
//           }}
//           helperText="Please select your working time"
//           variant="outlined"
//         >
//           <option></option>

//           {workingTimes.map((workingTime) => (
//             <option key={workingTime.workingTimeId}>
//               {workingTime.workingTime}
//             </option>
//           ))}
//         </TextField>
//         <TextField
//           id="outlined-select-position-native"
//           select
//           label="Working Type"
//           onChange={handleChange}
//           SelectProps={{
//             native: true,
//           }}
//           helperText="Please select your working type"
//           variant="outlined"
//         >
//           <option></option>

//           {workingTypes.map((workingType) => (
//             <option key={workingType.workingTimeId}>
//               {workingType.workingType}
//             </option>
//           ))}
//         </TextField>
//         <TextField
//           id="outlined-select-position-native"
//           label="Open Position Count"
//           helperText="Please write your open position count"
//           variant="outlined"
//         ></TextField>
//         {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <Grid container justify="space-around">
//         <KeyboardDatePicker
//           disableToolbar
//           variant="inline"
//           format="MM/dd/yyyy"
//           margin="normal"
//           id="date-picker-inline"
//           label="Date picker inline"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change date',
//           }}
//         />
//         </Grid>
//         </MuiPickersUtilsProvider> */}
//         <TextField
//           id="outlined-select-position-native"
//           label="Minimum Salary"
//           helperText="Please select your position"
//           variant="outlined"
//         ></TextField>
//         <TextField
//           id="outlined-select-position-native"
//           label="Maximum Salary"
//           helperText="Please select your position"
//           variant="outlined"
//         ></TextField>
//         </Formik>
//       </div>
//     </form>
//   );
// }
// const useStyles = makeStyles((theme) => ({
//   root: {
//     border: "1px solid #CF5A11",
//     height: 700,
//     marginTop: 60,
//     "& .MuiTextField-root": {
//       position: "relative",
//       top: 60,
//       left: 40,
//       marginTop: 20,
//       marginLeft: 30,
//       width: "61ch",
//     },
//   },
//   caption: {
//     fontFamily: "century gothic",
//     fontSize: 20,
//     fontWeight: "bold",
//     position: "relative",
//     left: 50,
//     top: 30,
//     color: "#CF5A11",
//   },
// }));
