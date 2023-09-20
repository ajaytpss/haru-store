"use client";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "./login.module.css";

export default function Login(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loginHandler = (data) => {
    console.log(data);
  };
  return (
    <>
      <form className={styles.loginForm} onSubmit={handleSubmit(loginHandler)}>
        <div className="mb-2 ">
          <label htmlFor="userEmail">Email</label>
          <input
            type="text"
            id="userEmail"
            {...register("userEmail", {
              required: "Email is required!",
            })}
            className={`{
              errors.userEmail ? "border-red-500" : "border-black"
            } border`}
          />
          {errors.userEmail && (
            <p className={"formErrorMsg"}>{errors.userEmail?.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="userPassword">Password</label>
          <input
            type="password"
            id="userPassword"
            {...register("userPassword", { required: "Password is required!" })}
            className={`${
              errors.userPassword ? "border-red-500" : "border-black"
            } border`}
          />
          {errors.userPassword && (
            <p className="formErrorMsg">{errors.userPassword?.message}</p>
          )}
        </div>
        <div className="text-center">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
