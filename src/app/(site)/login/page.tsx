"use client";

import Link from "next/link";
import React, {
  ChangeEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

export default function Home() {
  // CONST
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  // HOOKS

  // FUNCTION
  const submitLogin: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-screen bg-primaryBg">
      <form
        onSubmit={submitLogin}
        className="absolute bottom-[10%] flex flex-col w-full justify-center items-center gap-[15vh]"
      >
        <div className="w-full max-w-[350px] space-y-5">
          <div className="w-full text-center font-bold text-[24px]">Log In</div>
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
                placeholder="username"
                value={data.username}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, username: e.target.value });
                }}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm text-slate-800 placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
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
                placeholder="password"
                value={data.password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, password: e.target.value });
                }}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm text-black placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
              />
            </div>
          </div>
          <div className="w-full text-center text-[12px]">or with</div>
          <div className="flex flex-row items-center justify-center gap-5">
            <FcGoogle size={40} />
            <BsFacebook size={35} color={"#3b5998"} />
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-10">
          <button
            type="submit"
            className="w-full max-w-[350px] px-6 py-3 font-bold text-[18px] text-center text-white rounded-3xl bg-primaryYellow hover:scale-105 active:scale-95 transition-all"
          >
            LOG IN
          </button>
          <Link href={"/register"} className="flex justify-center w-full">
            <p className="pt-2 text-sm text-primaryYellow font-medium opacity-[90%] hover:opacity-[100%] transition-all">
              {"Don’t have an account? Sign Up"}
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}
