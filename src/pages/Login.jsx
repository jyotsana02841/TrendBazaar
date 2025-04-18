import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import "./Login.css";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onsubmit = (data) => {
    setIsLoggedIn(true);
    console.log(data);
  };

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="login-container">
      {isSubmitting && <div>Loading...</div>}
      <form action="" onSubmit={handleSubmit(onsubmit)}>
        <input
          type="text"
          {...register("username", {
            required: { value: true, message: "This field in necessary..." },
            minLength: { value: 3, message: "Min Length is 8" },
          })}
          placeholder="username"
        />
        <br />

        {errors.username && <div className="errors">{errors.username.message}</div>}

        <input
          type="password"
          {...register("password", {
            required: { value: true, message: "This field is necessary..." },
            minLength: {
              value: 8,
              message: "Password should be minimum 8 length...",
            },
          })}
          placeholder="password"
        />
        <br />

        {errors.password && <div className="errors">{errors.password.message}</div>}

        <input type="submit" value="Login" disabled={isSubmitting} />
      </form>
    </div>
  );
};

export default Login;
