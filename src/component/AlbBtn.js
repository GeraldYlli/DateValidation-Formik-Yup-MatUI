import React from "react";
import { Formik, Form } from "formik";
import { Typography, Container, Button, Box } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import * as yup from "yup";
// --- Form Schema --- //
var formSchema = {
  date: null // if date is defiend as '' yup will throw a invalid date error
};
// --- Validation Schema --- //
var validationSchema = yup.object().shape({
  date: yup.date().nullable()
});

function AlbBtn() {
  return (
    <Container>
      <Typography variant="h5">Albania Calendar</Typography>

      {/* Formik Mui Date Picker Example */}
      <Formik
        initialValues={formSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
        render={(props) => (
          <Form>
            <Box width="100%" mb={2}>
              {/* Material Ui Date Picker */}
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  inputVariant="outlined"
                  format="dd/MM/yyyy"
                  value={props.values.date}
                  onChange={(value) => props.setFieldValue("date", value)}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </MuiPickersUtilsProvider>
            </Box>
            <Box width="100%" my={2}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>

            {/* Displays Formik Props
            <DisplayFormikProps {...props} /> */}
          </Form>
        )}
      />
    </Container>
  );
}
export default AlbBtn;
