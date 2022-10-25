import React from "react";
import {Formik, Form, Field} from "formik";

function App() {
  return (
    <Formik initialValues={{name:'', email:''}}
    onSubmit={(values) => {
      alert(JSON.stringify(values,null,2));
    }}>
      <Form>
        <div>
          Enter your name <Field type="text" name="name"/>
        </div>
        <div>
          Enter your email <Field type="text" name="email"/>
        </div>
        <input type="submit" value="Click Me"/>
      </Form>
    </Formik>
  );
}

export default App;
