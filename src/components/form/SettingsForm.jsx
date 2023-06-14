import { React, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReusableButton from "../ReusableButton ";
import useUserFromLocalStorage from "../../hooks/useUserFromLocalStorage";
import { useDispatch } from "react-redux";
import { UpdateUserData } from "../../features/auth/authSlice";

const SettingsForm = () => {
  const user = useUserFromLocalStorage();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (user) {
      setValue("fullname", user.fullname);
      setValue("email", user.email);
    }
  }, [user, setValue]);

  const updateUserData = (data) => {
    const userData = data;
    dispatch(UpdateUserData(userData));
  };
  return (
    <section className=" h-screen">
      <form onSubmit={handleSubmit(updateUserData)}>
        <div className="mt-6 ">
          <label className="font-bold text-xl ml-[6%]">Full name:</label>
          <br />
          <div className=" text-black  text-start ml-[6%] mt-2 ">
            <input
              className=" border pl-3 border-md h-[35px] bg-gray-100 mt-2  w-[60%]  "
              type="text"
              name="fullname"
              {...register("fullname")}
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="font-bold text-xl ml-[6%]">Email:</label>
          <div className="text-start ml-[6%] mt-2">
            <input
              className=" text-black  border pl-3 border-md h-[35px] bg-gray-100 mt-2 w-[60%]  "
              type="email"
              name="email"
              {...register("email")}
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="font-bold text-xl ml-[6%]">Old password:</label>
          <div className="text-start ml-[6%] mt-2">
            <input
              className="pl-3 border text-black  border-md h-[35px] bg-gray-100 mt-2  w-[60%]  "
              type="password"
              name="oldpassword"
              {...register("oldpassword")}
            />
          </div>
          <div className="text-start mt-2 ml-[6%] font-bold">
            {errors.oldpassword && errors.oldpassword.type === "required" && (
              <p className="text-red-500">the old password is required</p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <label className="font-bold text-xl ml-[6%]">New password:</label>
          <div className="text-start ml-[6%] mt-2">
            <input
              className="pl-3 text-black  border border-md h-[35px] bg-gray-100 mt-2  w-[60%]  "
              type="password"
              name="newpassword"
              {...register("newpassword", {
                minLength: 8,
              })}
            />
          </div>
          <div className="text-start mt-2 ml-[6%] font-bold">
            {errors.newpassword && errors.newpassword.type === "minLength" && (
              <p className="text-red-500">
                Password should be at least 8 characters.
              </p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <label className="font-bold text-xl ml-[6%]">Avatar:</label>
          <div className="text-start ml-[6%] mt-2">
            <input
              className="h-[35px] text-black  mt-2  w-[60%]  "
              type="file"
              name="image"
              {...register("image", {
                validate: {
                  isImage: (value) =>
                    value && value[0] && value[0].type.startsWith("image/"),
                },
              })}
              accept="image/*"
            />
          </div>
          <div className="text-start mt-2 ml-[6%] font-bold">
            {errors.image && errors.image.type === "isImage" && (
              <p className="text-red-500">Only image files are allowed</p>
            )}
          </div>
        </div>
        <div className="text-start ml-[6%] mt-6">
          <ReusableButton
            text="update"
            className="text-white w-[100px] mt-3 rounded  h-[40px] bg-red-500 hover:bg-red-600 font-bold"
          />
        </div>
      </form>
    </section>
  );
};

export default SettingsForm;
