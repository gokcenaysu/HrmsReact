import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
import CityService from "../../services/cityService";
import JobPositionService from "../../services/jobPositionService";
import WorkingTimeService from "../../services/workingTimeService";
import WorkingTypeService from "../../services/workingTypeService";
import JobPostingService from "../../services/jobPostingService";
import { useHistory } from "react-router-dom";

export default function JobAdCreate() {
  let jobPostingService = new JobPostingService();
  const JobPostAdd = Yup.object().shape({
    applicationDeadline: Yup.date().nullable().required("Required"),
    jobDefinition: Yup.string().required("Required"),
    jobPositionId: Yup.string().required("Required"),
    workingTimeId: Yup.string().required("Required"),
    workingTypeId: Yup.string().required("Required"),
    openPositionNumber: Yup.string().required("Required").min(1,"Cannot be less than 1"),
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
      jobPostingService.add(values).then((result) => console.log(result.data.data));
      alert("İş ilanı eklendi personelin onayı ardından listelenecektir");
      history.push("/jobads");
    },
  });

  const [workingTimes, setWorkingTimes] = useState([]);
  const [workingTypes, setWorkingTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let workingTimeService = new WorkingTimeService();
    let workingTypeService = new WorkingTypeService();
    let cityService = new CityService();
    let jobPositionService = new JobPositionService();

    workingTimeService.getWorkingTimes().then((result) => setWorkingTimes(result.data.data));
    workingTypeService.getWorkingTypes().then((result) => setWorkingTypes(result.data.data));
    cityService.getCities().then((result) => setCities(result.data.data));
    jobPositionService.getJobPositions().then((result) => setJobPositions(result.data.data));
  }, []);

  const workingTimeOption = workingTimes.map((workingTime, index) => ({
    key: index,
    text: workingTime.workingTime,
    value: workingTime.workingTypeId,
  }));
  const workingTypeOption = workingTypes.map((workingType, index) => ({
    key: index,
    text: workingType.workingType,
    value: workingType.workingTypeId,
  }));
  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.cityId,
  }));
  const jobPositionOption = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.positionName,
    value: jobPosition.positionId,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  }

  return (
    <div>
      <Card fluid>
      <Card.Content header='İş ilanı Ekle' />
      <Card.Content>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field style={{marginBottom: "1rem"}}>
          <label>İş Posisyonu</label>
        <Dropdown
          clearable
          item
          placeholder="İş pozisyonu"
          search
          selection
          onChange={(event, data) =>
            handleChangeSemantic(data.value, "jobPositionId")
          }
          onBlur={formik.onBlur}
          id="jobPositionId"
          value={formik.values.jobPositionId}
          options={jobPositionOption}
          />
          {formik.errors.jobPositionId && formik.touched.jobPositionId &&(
            <div className={"ui pointing red basic label"}>
              {formik.errors.jobPositionId}
            </div>
          )}
          </Form.Field>
          <Form.Field>
              {console.log(cities)}
          <label>Şehir</label>
            <Dropdown
              clearable
              item
              placeholder="Şehir"
              search
              selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "cityId")
              }
              onBlur={formik.onBlur}
              id="cityId"
              value={formik.values.cityId}
              options={cityOption}
              />
              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing red basic label"}>
                {formik.errors.cityId}
              </div>
              )}
          </Form.Field>
          <Form.Field>
          <label>Çalışma yeri</label>
          <Dropdown
                  clearable
                  item
                  placeholder="Çalışma yeri"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workingTypeId")
                  }
                  onBlur={formik.onBlur}
                  id="workingTypeId"
                  value={formik.values.workingTypeId}
                  options={workingTypeOption}
                />
                {formik.errors.workingTypeId && formik.touched.workingTypeId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.workingTypeId}
                  </div>
                )}
          </Form.Field>
          <Form.Field>
          <label>Çalışma Süresi</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Süresi"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workingTimeId")
                  }
                  onBlur={formik.onBlur}
                  id="workingTimeId"
                  value={formik.values.workingTimeId}
                  options={workingTimeOption}
                />
                {formik.errors.workingTimeId && formik.touched.workingTimeId && (
                  <div className={"ui pointing red basic label"}>{formik.errors.workingTimeId}</div>
                )}
              </Form.Field>
              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
              <label style={{fontWeight: "bold"}}>Maaş aralığı MİNİMUM</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MİNİMUM"
                  value={formik.values.minSalary}
                  name="minSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.minSalary && formik.touched.minSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.minSalary}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Maaş aralığı MAKSİMUM</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MAKSİMUM"
                  value={formik.values.maxSalary}
                  name="maxSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.maxSalary && formik.touched.maxSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.maxSalary}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
              <label style={{fontWeight: "bold"}}>Açık Posisyon sayısı</label>
                <Input
                  style={{ width: "100%" }}
                  id="openPositionNumber"
                  name="openPositionNumber"
                  error={Boolean(formik.errors.openPositionNumber)}
                  onChange={formik.handleChange}
                  value={formik.values.openPositionNumber}
                  onBlur={formik.handleBlur}
                  type="number"
                  placeholder="Açık Posisyon sayısı"
                />
                {formik.errors.openPositionNumber && formik.touched.openPositionNumber && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.openPositionNumber}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Son başvuru tarihi</label>
                <Input
                  style={{ width: "100%" }}
                  type="date"
                  error={Boolean(formik.errors.lastDate)}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "lastDate")
                  }
                  value={formik.values.lastDate}
                  onBlur={formik.handleBlur}
                  name="applicationDeadline"
                  placeholder="Son başvuru tarihi"
                />
                {formik.errors.applicationDeadline && formik.touched.applicationDeadline && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.applicationDeadline}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
              <label>Açıklama</label>
                <TextArea
                  placeholder="Açıklama"
                  style={{ minHeight: 100 }}
                  error={Boolean(formik.errors.jobDefinition).toString()}
                  value={formik.values.jobDefinition}
                  name="jobDefinition"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.jobDefinition && formik.touched.jobDefinition && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.jobDefinition}
                  </div>
                )}
              </Form.Field>
              <Button
                content="Ekle"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
                style={{ marginLeft: "20px" }}
              />
      </Form>
      </Card.Content>
      </Card>
    </div>
  );
}