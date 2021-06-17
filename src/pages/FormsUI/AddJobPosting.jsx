import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Container, Grid, Typography } from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "./Textfield";
import { TextField, MenuItem } from "@material-ui/core";
import { useField, useFormikContext } from "formik";
import CityService from "../../services/cityService";
import Select from './Select'
import JobPositionService from "../../services/jobPositionService";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  positionName: "",
  city: "",
  jobDefinition: "",
  openPositionNumber: "",
  minSalary: "",
  maxSalary: "",
  applicationDeadline: "",
};

const FORM_VALIDATION = Yup.object().shape({
  positionName: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  jobDefinition: Yup.string().required("Required"),
  openPositionNumber: Yup.number().integer().required("Required"),
  applicationDeadline: Yup.date().required("Required"),
  minSalary: Yup.string(),
  maxSalary: Yup.string(),
});

export default function AddJobPosting() {
const classes = useStyles();
  const [cities, setCities] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);

  const [jobPositions, setJobPositions] = useState([]);
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  return (
    <Grid item xs={12}>
      <Container maxWidth="md">
        <div className={classes.formWrapper}>
          <Formik
            initialValues={{
              ...INITIAL_FORM_STATE,
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>CREATE JOB ADVERTISEMENT</Typography>
                </Grid>

                <Grid item xs={6}>
                  <Textfield name="positionName" 
                  label="Job Position" 
                  options={jobPositions}/>
                </Grid>
                <Grid item xs={6}>
                    <Select 
                    name="city"
                    label="City"
                    options={cities}/>
           </Grid>

                <Grid item xs={12}>
                  <Textfield name="jobDefinition" label="Definition" />
                </Grid>

                <Grid item xs={6}>
                  <Textfield name="minSalary" label="Minimum Salary" />
                </Grid>

                <Grid item xs={6}>
                  <Textfield name="maxSalary" label="Maximum Salary" />
                </Grid>

                <Grid item xs={6}>
                  <Textfield name="openPositionNumber" label="Open Position" />
                </Grid>

                <Grid item xs={6}>
                  <Textfield
                    name="applicationDeadline"
                    label="Application Deadline"
                  />
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
      </Container>
    </Grid>
  );
}
