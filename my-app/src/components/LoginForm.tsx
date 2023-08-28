import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { loginSuccess, loginFailed } from '../features/authSlice';

interface MyFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values: MyFormValues, { setSubmitting }: FormikHelpers<MyFormValues>) => {
    try {
      setTimeout(() => {
        dispatch(loginSuccess(values));
        setSubmitting(false);
      }, 400);
    } catch (error) {
      dispatch(loginFailed("Invalid credentials"));
      setSubmitting(false);
    }
  };

  const initialValues: MyFormValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Must be 8 characters or more')
      .required('Required'),
  });

  return (
    <div className='mt-5'>
      <h1 className='text-center'>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form >
            <div className='text-center mb-3 '>
              <Field type="email" name="email" placeholder='Email' id="email" autoComplete="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div  className='text-center'>
              <Field type="password" placeholder='Password' name="password" id="password" autoComplete="current-password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div className='text-center mt-3'>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
