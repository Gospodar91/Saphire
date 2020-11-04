import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
// import getValidationSchema from "./ValidationSchemaStageOne";
import { addUserInfo } from "../../../redux/actions";
import { Link } from "react-router-dom";

export default function Registration() {
  const dispatch = useDispatch();

  function handleNextButton(values) {
    dispatch(addUserInfo(values));
  }

  return (
    <div>
      <Link to="adminPanel"> To adminPanel</Link>
      <Formik
        initialValues={{
          phone: "",
          firstName: "",
          secondName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={handleNextButton}
        // validationSchema={getValidationSchema(lang)}
      >
        {({ submitForm, isSubmitting, errors, touched }) => (
          <Form>
            <Field
              inputProps={{
                maxLength: 20,
              }}
              label="firstName"
              name="firstName"
              placeholder=" "
            />
            <Field
              inputProps={{
                maxLength: 20,
              }}
              label="secondName"
              name="secondName"
              placeholder=" "
            />
            <Field
              inputProps={{
                maxLength: 20,
              }}
              label="lastName"
              name="lastName"
              placeholder=" "
            />
            <Field
              inputProps={{
                maxLength: 20,
              }}
              label="email"
              name="email"
              placeholder=" "
            />

            <Field
              label="phone"
              name="phone"
              placeholder="Enter your phone number"
              type="text"
            ></Field>

            {isSubmitting}
            <button disabled={isSubmitting} onClick={submitForm}>
              Далее
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
