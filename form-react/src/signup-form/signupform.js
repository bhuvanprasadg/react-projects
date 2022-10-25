import React from "react";
import { useFormik, yupToFormErrors } from "formik";
import "./signupform.css";
import * as Yup from "yup";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile:"",
      date:"",
    },

    // validate: (values) => {
    //   const errors = {};
    //   if (!values.firstName) {
    //     errors.firstName = "first name is required";
    //   }
    //   if (!values.lastName) {
    //     errors.lastName = "last name is required";
    //   }
    //   if (!values.email) {
    //     errors.email = "email is required";
    //   }
    //   return errors;
    // },

    
    validationSchema: Yup.object({
        firstName: Yup.string().required("first name is required"),
        lastName: Yup.string().required("last name is required"),
        email: Yup.string().required("email is required"),
        mobile: Yup.string().required("phone number is required").length(10),
        date: Yup.date().nullable().required('Date is Required').min(new Date(), 'Start Date must be later than today'),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <ul>
        <li>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </li>
        {formik.touched.firstName && formik.errors.firstName ? <li>{formik.errors.firstName}</li> : null}

        <li>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </li>
        {formik.touched.lastName && formik.errors.lastName ? <li>{formik.errors.lastName}</li> : null}

        <li>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </li>
        {formik.touched.email && formik.errors.email ? <li>{formik.errors.email}</li> : null}


        <li>
          <label htmlFor="mobile">Mobile number</label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.mobile}
          />
        </li>
        {formik.touched.mobile && formik.errors.mobile ? <li>{formik.errors.mobile}</li> : null}

        <li>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
        </li>
        {formik.touched.date && formik.errors.date ? <li>{formik.errors.date}</li> : null}

        <li>
          <button type="submit">Submit</button>
        </li>
      </ul>
    </form>
  );
};

export default SignupForm;
