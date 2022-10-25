import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupForm2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        termsAccepted: false,
        checked: [],
        picked: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("firstName is required"),
        lastName: Yup.string().required("lastName is required"),
        email: Yup.string()
          .email("Must be valid email syntax")
          .required("email is required"),
        mobile: Yup.string()
          .required("Mobile number is required")
          .matches(/\d{10}/, "Mobile number format is wrong"),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <br />
        <ErrorMessage name="firstName" />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <br />
        <ErrorMessage name="lastName" />
        <br />

        <label htmlFor="email">Email</label>
        <Field name="email" type="text" />
        <br />
        <ErrorMessage name="email" />
        <br />

        <label htmlFor="mobile">Mobile</label>
        <Field name="mobile" type="text" />
        <br />
        <ErrorMessage name="mobile" />
        <br />

        <div role="group" aria-labelledby="checkbox-group">
          <label>
            <Field type="checkbox" name="checked" value="One" />
            One
          </label>
          <label>
            <Field type="checkbox" name="checked" value="Two" />
            Two
          </label>
          <label>
            <Field type="checkbox" name="checked" value="Three" />
            Three
          </label>
        </div>

        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <Field type="radio" name="picked" value="One" />
            One
          </label>
          <label>
            <Field type="radio" name="picked" value="Two" />
            Two
          </label>
        </div>

        <Field type="checkbox" name="termsAccepted" />
        <label htmlFor="termsAccepted"> Accept the terms and conditions</label>
        <br />
        <ErrorMessage name="termsAccepted" />

        <input type="submit" value="Submit" />
      </Form>
    </Formik>
  );
};

export default SignupForm2;
