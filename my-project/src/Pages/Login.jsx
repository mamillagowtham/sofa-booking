import React from "react";
import { FormInput, SubmitBtn } from "../Components";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="identifier"
          defaultValue="secret"
        />
        <div className="mt-4">
        <SubmitBtn text="login"/>
        <button type="button" className="btn btn-secondary btn-block mt-1">Guest User</button>
        <p className="text-center">Not a member yet? <Link to="register" className="ml-2 link-hover link-primary capitalize">Register</Link></p>
        </div>
      </Form>
    </section>
  );
};

export default Login;
