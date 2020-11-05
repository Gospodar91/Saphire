import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
// import getValidationSchema from "./ValidationSchemaStageOne";
import { addUserInfo } from "../../../redux/actions";
import { Link } from "react-router-dom";
import { register_user_request } from "../../../apiRequest/requests";

export default function Registration() {
  const dispatch = useDispatch();

  async function handleNextButton(values) {
    dispatch(addUserInfo(values));
    try {
      const response = await register_user_request(values);
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div>
      <Formik
        initialValues={{
          phone: "",
          first_name: "",
          second_name: "",
          last_name: "",
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
              label="first_name"
              name="first_name"
              placeholder=" "
            />
            <Field
              inputProps={{
                maxLength: 20,
              }}
              label="second_name"
              name="second_name"
              placeholder=" "
            />
            <Field
              inputProps={{
                maxLength: 20,
              }}
              label="last_name"
              name="last_name"
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
