"use client";

import { ChangeEvent, FormEventHandler, useState } from "react";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";

export default function Home() {
  const [data, setdata] = useState({
    email: "",
    name: "",
  });

  const submitNewProfile: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <div className="relative flex flex-col justify-start items-center w-full min-h-screen bg-primaryWhite py-[100px] px-5">
      <Link href={"/settings"} className="absolute top-[20px] left-[15px]">
        <MdArrowBackIosNew color={"#FF914D"} size={30} />
      </Link>
      <div className="text-[30px] text-primaryYellow font-bold">
        Edit Profile
      </div>

      <form
        onSubmit={submitNewProfile}
        className="flex flex-col w-full justify-center items-center gap-[15vh] py-5"
      >
        <div className="w-full max-w-[350px] space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-md font-medium leading-6"
            >
              Change Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Input your new email"
                value={data.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setdata({ ...data, email: e.target.value });
                }}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm text-slate-800 placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="name"
                className="block text-md font-medium leading-6"
              >
                Change Name
              </label>
            </div>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="text"
                required
                placeholder="Input your new name"
                value={data.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setdata({ ...data, name: e.target.value });
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
