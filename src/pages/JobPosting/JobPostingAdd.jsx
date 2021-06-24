import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import {
  Grid,
  makeStyles,
  MenuItem,
  TextField,
  Typography,
  Button
} from "@material-ui/core";
import JobPostingService from "../../services/jobPostingService";
import WorkingTimeService from "../../services/workingTimeService";
import WorkingTypeService from "../../services/workingTypeService";
import CityService from "../../services/cityService";
import JobPositionService from "../../services/jobPositionService";
import DateTimePicker from "../../formsUI/DataTimePicker";
import { useHistory } from "react-router-dom";
// import Button from '../../formsUI/Button'
// import TextField from '../../formsUI/TextField'


const FORM_VALIDATION = Yup.object().shape({
  jobDefinition: Yup.string().required("* Required"),
  openPositionNumber: Yup.number()
    .required("* Required")
    .min(1, "Cannot be less than 1"),
  applicationDeadline: Yup.date().required("* Required"),
  minSalary: Yup.number(),
  maxSalary: Yup.number(),

  city: Yup.object({
    cityId: Yup.number().required("* Required"),
  }),
  jobPosition: Yup.object({
    id: Yup.number().required("* Required"),
  }),
  workingTime: Yup.object({
    workingTimeId: Yup.number().required("* Required"),
  }),
  workingType: Yup.object({
    workingTypeId: Yup.number().required("* Required"),
  }),
});

export default function Create() {
  let jobPostingService = new JobPostingService();
  const classes = useStyles();
  const history = useHistory();

  const [workingTimes, setWorkingTimes] = useState([]);
  const [workingTypes, setWorkingTypes] = useState([]);
  const [cities, setCities] = useState([]); // o kod nerde amk
  const [jobPositions, setJobPositions] = useState([]);

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

  const formik = useFormik({
    initialValues: {
      jobPosition: {
        id: 0,
      },
      employer: {
        userId: 1,
      },
      city: {
        cityId: 0,
      },
      workingType: {
        workingTypeId: 0,
      },
      workingTime: {
        workingTimeId: 0,
      },
      jobDefinition: "",
      openPositionNumber: "",
      minSalary: "",
      maxSalary: "",
      applicationDeadline: "",
     
    },
    validationSchema: FORM_VALIDATION,
    onSubmit: (values) => {
      values.userId = 1;
      jobPostingService
        .post(values)
        .then((result) => console.log(result.data.data));
      alert("OK");
      history.push("/");
    },
  });
  return (
    <div>
      <form className="w-full" onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>ADD JOB POSTING</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="jobPosition.id"
              select
              label="Job Position"
              variant= 'outlined'
              value={formik.values.jobPosition.id}
              onChange={formik.handleChange}
            >
              {jobPositions.map((jobPosition) => (
                <MenuItem value={jobPosition.id} key={jobPosition.id}>
                  {jobPosition.positionName}
                </MenuItem>
              ))}
            </TextField>

            <Grid item xs={6}>
              <TextField
                name="city.cityId"
                label="City"
                select
                variant= 'outlined'
                value={formik.values.city.cityId}
                onChange={formik.handleChange}
              >
                {cities.map((city) => (
                  <MenuItem value={city.cityId} key={city.cityId}>
                    {city.cityName}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="jobDefinition"
                label="Definition"
                variant= 'outlined'
                multiline={true}
                value={formik.values.jobDefinition}
                onChange={formik.handleChange}
                rows={2}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="workingType.workingTypeId"
                label="Working Type"
                select
                variant= 'outlined'
                value={formik.values.workingType.workingTypeId}
                onChange={formik.handleChange}
              >
                {workingTypes.map((workingType) => (
                  <MenuItem
                    value={workingType.workingTypeId}
                    key={workingType.workingTypeId}
                  >
                    {workingType.workingType}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="workingTime.workingTimeId"
                label="Working Time"
                select
                variant= 'outlined'
                value={formik.values.workingTime.workingTimeId}
                onChange={formik.handleChange}
              >
                {workingTimes.map((workingTime) => (
                  <MenuItem
                    key={workingTime.workingTimeId}
                    value={workingTime.workingTimeId}
                  >
                    {workingTime.workingTime}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="openPositionNumber"
                label="Open Position Count"
                variant= 'outlined'
                value={formik.values.openPositionNumber}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item xs={6}>
              <DateTimePicker
                name="applicationDeadline"
                label="Apply Deadline"
                variant= 'outlined'
                value={formik.values.applicationDeadline}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="minSalary"
                label="Minimum Salary"
                variant= 'outlined'
                value={formik.values.minSalary}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="maxSalary"
                label="Maximum Salary"
                variant= 'outlined'
                value={formik.values.maxSalary} //Çalışmazsa ağlarım:D
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item xs={12}>
               <Button type="submit" color="primary" onClick={() => console.log(formik)}>Submit Form</Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  formWraper: {
    marginTop: theme.spacing(5),
    marignBottom: theme.spacing(8),
  },
})); 
