import React from "react";
import { useForm } from "react-hook-form";

const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-col h-full space-y-20">
      <div className="flex">
        <img
          src={process.env.PUBLIC_URL + "/logo_text.svg"}
          alt="logo"
          className="w-30 h-30 mx-auto mt-10"
        />{" "}
      </div>
      <div className="min-w-full min-h-[576px] bg-purple-pastel rounded-t-3xl px-6 py-10 h-full">
        <form
          className="flex flex-col mx-auto space-y-8 items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            id="name"
            className="border-2 max-w-96 w-full border-purple-700 rounded-2xl placeholder:text-black p-3 shadow-xl"
            placeholder="Enter student name"
            {...register("name", {
              required: { value: true, message: "required" },
              maxlength: {
                value: 20,
                message: "Name must be smaller than 20 digits",
              },
            })}
          />
          <input
            type="text"
            id="rollno"
            className="border-2 max-w-96 w-full border-purple-700 rounded-2xl placeholder:text-black p-3 shadow-xl"
            placeholder="Enter roll no."
            {...register("rollno", {
              required: { value: true, message: "required" },
              pattern: {
                value: /^(?:\d{2}[a-zA-Z]\d{4}|\d{8})$/,
                message: "Invalid roll no.",
              },
            })}
          />
          <input
            type="tel"
            id="contact"
            className="border-2 max-w-96 w-full border-purple-700 rounded-2xl placeholder:text-black p-3 shadow-xl"
            placeholder="Enter contact no."
            {...register("contact", {
              required: { value: true, message: "required" },
              minLength: {
                value: 10,
                message: "Contact no. must be 10 digits",
              },
              maxLength: {
                value: 10,
                message: "Contact no. must be 10 digits",
              },
            })}
          />
          <input
            type="email"
            id="email"
            className="border-2 max-w-96 w-full border-purple-700 rounded-2xl placeholder:text-black p-3 shadow-xl"
            placeholder="Enter student email"
            {...register("email", {
              required: { value: true, message: "required" },
              pattern: {
                value: /^(.+)@(.+){2,}\.(.+){2,}$/i,
                message: "Invalid email",
              },
            })}
          />
          <input
            type="password"
            id="password"
            className="border-2 max-w-96 w-full border-purple-700 rounded-2xl placeholder:text-black p-3 shadow-xl"
            placeholder="Enter password"
            {...register("password", {
              required: { value: true, message: "required" },
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
          />
          <div className="flex flex-col items-center px-4 w-full">
            <button
              type="submit"
              className="bg-teal max-w-80 w-full text-white p-2.5 rounded-2xl"
            >
              Sign Up
            </button>
            {(errors?.name?.message === "required" ||
              errors?.rollno?.message === "required" ||
              errors?.contact?.message === "required" ||
              errors?.email?.message === "required" ||
              errors?.password?.message === "required") && (
              <span className="text-red-500">All fields are required</span>
            )}
            {errors?.name?.message !== "required" && (
              <span className="text-red-500">{errors?.name?.message}</span>
            )}
            {errors?.rollno?.message !== "required" && (
              <span className="text-red-500">{errors?.rollno?.message}</span>
            )}
            {errors?.contact?.message !== "required" && (
              <span className="text-red-500">{errors?.contact?.message}</span>
            )}
            {errors?.email?.message !== "required" && (
              <span className="text-red-500">{errors?.email?.message}</span>
            )}
            {errors?.password?.message !== "required" && (
              <span className="text-red-500">{errors?.password?.message}</span>
            )}
            <span>Already have an account?</span>
            <a href="/login" className="text-violet-900 font-bold">
              Log In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
