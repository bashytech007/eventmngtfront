import React from 'react'
import formimage from '../../assets/formimage.jpg'
import { Form, useFormik, Formik, Field } from 'formik'
import { store } from '../../app/store'
import Home from '../../components/Home'

import * as Yup from 'yup'
import { axiosInstance } from '../../utils/api'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  email: '',
  password: '',
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('password must match password confirm'),
})

function SignIn() {
  const navigate = useNavigate()
  // console.log(store.getState());
  // store.dispatch({
  //   type: "user/setUser",
  //   payload: {
  //     firstname:"bashir",
  //     lastname:"aremu",
  //   },
  // });

  async function onSubmit(values) {
    try {
      const response = await axiosInstance.post(
        '/signin',
        JSON.stringify(values)
      )
      store.dispatch({
        type: 'user/setUser',
        payload: response.data,
      })
      const siginResponse = response.data

      //  console.log(siginResponse)

      localStorage.setItem('access-token', siginResponse.token)
      localStorage.setItem('user', siginResponse.lastName)

      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-col items-center mt-[-15rem]'>
        <h1 className='text-green-500 text-3xl'>eventrbrite</h1>
        <h3 className='font-bold text-4xl'>Create an Account</h3>
        <Formik
          // validateOnChange={false}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            handleChange,
            isValid,

            handleSubmit,

            errors,
            touched,
            values,
            handleBlur,
          }) => (
            <Form
              onSubmit={(e) => (e.preventDefault(), handleSubmit(e))}
              className='w-full mx-auto px-14 py-32 -mt-24'
            >
              <label htmlFor='email' className=''>
                Email
              </label>
              <div>
                <Field
                  type='email'
                  name='email'
                  id='email'
                  className='mt-8 block border border-t-0  w-[19rem] focus:outline-none  border-x-0   border-b-2'
                  placeholder='email'
                  // onChange={(val, event) => {
                  //   formik.handleChange(event);
                  //   updateVal("email", val);
                  // }}
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.email && errors.email ? (
                  <div className='text-red-300 mb-8 '>{errors.email}</div>
                ) : null}
              </div>

              <div className='mb-8 w-full mt-4'>
                <label className='mt-8'>Password</label>
                <Field
                  type='password'
                  name='password'
                  className='border mt-8 block w-[32rem] border-t-0 focus:outline-none border-x-0 border-b-2'
                  placeholder='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  values={values.password}
                />

                {touched.password && errors.password ? (
                  <div className='text-red-300 mb-8'>{errors.password}</div>
                ) : null}
              </div>

              <ul type='list-disc' className='mb-4'>
                <li>
                  Password must contain an uppercase letter numeric or special
                  character
                </li>
                <li>Password must be at least 8 character long</li>
              </ul>
              <button
                type='submit'
                disabled={!isValid}
                className='w-full px-2 py-2 bg-gray-400  hover:bg-blue-500'
              >
                Continue
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className='w-[50rem] '>
        <img src={formimage} />
      </div>
    </div>
  )
}
export default SignIn
