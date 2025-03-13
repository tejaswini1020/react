import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import "./SignUpForm.css";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUpForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/api/register", data);
      alert("🎉 User registered successfully!");
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.response ? error.response.data : error.message);
      alert(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Create an Account</h2>
        <div className="form-group">
          <label>Username</label>
          <input {...register("username")} placeholder="Enter your username" />
          {errors.username && <p className="error">{errors.username.message}</p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input {...register("email")} placeholder="Enter your email" />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" {...register("password")} placeholder="Enter a secure password" />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" {...register("confirmPassword")} placeholder="Re-enter your password" />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit" className="cute-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
