import React, { useState } from "react";
import formimage from "../../assets/formimage.jpg";
import { Form, Formik, Field } from "formik";
import { store } from "../../app/store";
import * as Yup from "yup";
import {axiosInstance} from '../../utils/api'
import { useNavigate } from "react-router-dom";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("password must match password confirm"),

  passwordConfirm: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

function SignUp() {
  const navigate = useNavigate();
  async function onSubmit(values) {
    console.log("Form data", values);
    try {
      const response = await axiosInstance.post(
        "/signup",
        JSON.stringify(values)
      );

      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  }
  console.log("fromsignuppage", store.getState());
  const [emailConfirm, setEmailConfirm] = useState(false);
  function checkEmail(email) {
    console.log(email);
    setEmailConfirm(true);
  }
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-center mt-[-15rem]">
        <h1 className="text-green-500 text-3xl">eventrbrite</h1>
        <h3 className="font-bold text-4xl">Create an Account</h3>
        <Formik
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
              className="w-full mx-auto px-14 py-32 -mt-24"
            >
              <label htmlFor="email" className="">
                Email
              </label>
              <div>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="mt-8 block border border-t-0  w-[19rem] focus:outline-none  border-x-0   border-b-2"
                  placeholder="email"
                  // onChange={(val, event) => {
                  //   formik.handleChange(event);
                  //   updateVal("email", val);
                  // }}
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.email && errors.email ? (
                  <div className="text-red-400">{errors.email}</div>
                ) : null}
              </div>
              {emailConfirm ? (
                <>
                  <div className="flex items-center gap-4 justify-between mt-8 mb-4">
                    <div className="block w-full">
                      <div className="items-center gap-2">
                        <label htmlFor="firstname" className="">
                          First name
                        </label>
                        <Field
                          type="text"
                          id="firstname"
                          name="firstname"
                          placeholder="firstname"
                          className="block border border-t-0  w-[16rem] focus:outline-none  border-x-0   border-b-2 "
                          // onChange={(val, event) => {
                          //   formik.handleChange(event);
                          //   updateVal("firstname", val);
                          // }}
                          onChange={handleChange}
                          value={values.firstname}
                          onBlur={handleBlur}
                        />
                        {touched.firstname && errors.firstname ? (
                          <div className="errors">{errors.firstname}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="block w-full">
                      <div className="items-center gap-2">
                        <label htmlFor="lastname">last name</label>
                        <Field
                          type="text"
                          name="lastname"
                          id="lastname"
                          placeholder="lastname"
                          className="border w-[16rem] border-t-0 focus:outline-none border-x-0 border-b-2"
                          // onChange={(val, event) => {
                          //   formik.handleChange(event);
                          //   updateVal("lastname", val);
                          // }}
                          value={values.lastname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.lastname && errors.lastname ? (
                          <div className="error">{errors.lastname}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="mb-8 block w-full">
                    <label className="">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="mt-8 block border border-t-0  w-[19rem] focus:outline-none  border-x-0   border-b-2"
                      placeholder="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      values={values.password}
                    />

                    {touched.password && errors.password ? (
                      <div className="error">{errors.password}</div>
                    ) : null}
                  </div>

                  <div className="mb-8 w-full">
                    <label className="mt-8">Password</label>
                    <Field
                      type="password"
                      name="passwordConfirm"
                      className="mt-8 block border border-t-0  w-[19rem] focus:outline-none  border-x-0   border-b-2"
                      placeholder="password confirm"
                      // onChange={(val, event) => {
                      //   formik.handleChange(event);
                      //   updateVal("passwordConfirm", val);
                      // }}
                      onChange={handleChange}
                      value={values.passwordConfirm}
                      onBlur={handleBlur}
                    />

                    {touched.passwordConfirm && errors.passwordConfirm ? (
                      <div className="errors">{errors.passwordConfirm}</div>
                    ) : null}
                  </div>

                  <ul type="list-disc" className="mb-4">
                    <li>
                      Password must contain an uppercase letter numeric or
                      special character
                    </li>
                    <li>Password must be at least 8 character long</li>
                  </ul>
                  <button
                    type="submit"
                    disabled={!isValid}
                    className="w-full px-2 py-2 bg-gray-400  hover:bg-blue-500"
                  >
                    Continue
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => checkEmail(values.email)}
                    disabled={errors.email}
                    className="w-full px-2 py-2 bg-gray-400  hover:bg-blue-500"
                  >
                    Continue
                  </button>
                </>
              )}
            </Form>
          )}
        </Formik>
      </div>
      <div className="w-[50rem] ">
        <img src={formimage} />
      </div>
    </div>
  );
}

export default SignUp;
