"use client";

import { ChangeEvent, FormEventHandler, useState } from "react";

export default function Home() {
  const [data, setdata] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const submitNewPassword: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <div className="flex flex-col justify-start items-center w-full min-h-screen bg-primaryWhite py-[100px] px-5">
      <div className="text-[30px] text-primaryYellow font-bold">Security</div>
      <div className="text-[#3E3C3C] py-2">Change password</div>
      <form
        onSubmit={submitNewPassword}
        className="flex flex-col w-full justify-center items-center gap-[15vh] py-5"
      >
        <div className="w-full max-w-[350px] space-y-5">
          <div>
            <label
              htmlFor="oldpwd"
              className="block text-md font-medium leading-6"
            >
              Current Password
            </label>
            <div className="mt-2">
              <input
                id="oldpwd"
                name="oldpwd"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Input your password"
                value={data.oldPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setdata({ ...data, oldPassword: e.target.value });
                }}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm text-slate-800 placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="newpwd"
                className="block text-md font-medium leading-6"
              >
                New Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="newpwd"
                name="newpwd"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Input your new password"
                value={data.newPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setdata({ ...data, newPassword: e.target.value });
                }}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm text-black placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmpwd"
                className="block text-md font-medium leading-6"
              >
                Confirm New Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirmpwd"
                name="confirmpwd"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Input your new password"
                value={data.confirmNewPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setdata({ ...data, confirmNewPassword: e.target.value });
                }}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm text-black placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-10">
          <button
            type="submit"
            className="w-full max-w-[350px] px-6 py-3 font-medium text-[18px] text-center text-white rounded-3xl bg-primaryYellow hover:scale-105 active:scale-95 transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
