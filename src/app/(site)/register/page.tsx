"use client";

import Link from "next/link";
import React, { ChangeEvent, FormEventHandler, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Home() {
  // CONST
  const [data, setData] = useState({
    name: "",
    username: "",
    birthday: new Date(),
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  // FUNCTION
  const submitRegistration: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-screen bg-primaryBg">
      <form
        onSubmit={submitRegistration}
        className="absolute bottom-[5vh] flex flex-col w-full justify-center items-center gap-[5vh]"
      >
        <div className="w-full max-w-[350px] space-y-5">
          <div className="w-full text-center font-bold text-[24px]">
            Registration
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-md font-medium leading-6"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="text"
                placeholder="Miles Morales"
                required
                value={data.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, name: e.target.value });
                }}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm text-black placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-md font-medium leading-6"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="text"
                required
                placeholder="notspidey"
                value={data.username}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, username: e.target.value });
                }}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm text-black placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="dateofbirth"
              className="block text-md font-medium leading-6"
            >
              Date of birth
            </label>
            <div className="mt-2">
              <input
                id="dateofbirth"
                name="dateofbirth"
                type="date"
                autoComplete="date"
                required
                value={data.birthday.toISOString().split("T")[0]}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, birthday: new Date(e.target.value) });
                }}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm text-black placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-md font-medium leading-6"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                value={data.password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, password: e.target.value });
                }}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm text-black placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-md font-medium leading-6"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                value={data.confirmPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, confirmPassword: e.target.value });
                }}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm text-black placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-10">
          <button
            type="submit"
            className="w-full max-w-[350px] px-6 py-3 font-bold text-[18px] text-center text-white rounded-3xl bg-primaryYellow hover:scale-105 active:scale-95 transition-all"
          >
            LOG IN
          </button>
          <Link href={"/login"} className="flex justify-center w-full">
            <p className="pt-2 text-sm text-primaryYellow font-medium opacity-[90%] hover:opacity-[100%] transition-all">
              {"Already have an account? Log in"}
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}
