import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from './input/Input';

const validationSchema = Yup.object({
  entercode: Yup.string()
    .matches(/^\d{5}$/, 'لطفا پنج رقم وارد کنید')
    .required('این فیلد اجباری است')
});

const FormComponent = () => {
  return (
    <Formik
      initialValues={{
        entercode: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form className="w-full max-w-sm mx-auto mt-10">
          <Input title="کد ورود" name="entercode" type="number" />
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;