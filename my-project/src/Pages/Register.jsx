import React from "react";
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../Components";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center font-bold">Register</h4>
        <FormInput type="text" label="UserName" name="UserName" />
        <FormInput type="mail" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div>
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already a member ?
          <Link
            to="/login"
            className="ml-2 link-hover link-primary capitalize"
          >
          Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
