import React from "react";
import { FormInput, SubmitBtn } from "../Components/index";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { loginUser } from "../Features/user/userSlice";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("logged in successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      //  const response = await customFetch.post("/auth/login",{
      //   identifier : "test@test.com",
      //   password : "secret"
      //  });

      const data = {
        user: {
          username: "test",
          email: "test@test.com",
        },
        jwt: Date.now(),
      };
      dispatch(loginUser(data));
      toast.success("welcome guest user");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("guest user login error.please try later");
    }
  };
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
          <SubmitBtn text="login" />
          </div>
          <button
            onClick={loginAsGuestUser}
            type="button"
            className="btn btn-secondary btn-block mt-1"
          >
            Guest User
          </button>
          <p className="text-center">
            Not a member yet?
            <Link
              to="/register"
              className="ml-2 link-hover link-primary capitalize"
            >
              Register
            </Link>
          </p>
      </Form>
    </section>
  );
};

export default Login;
