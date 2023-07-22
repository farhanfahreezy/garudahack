"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GrNotification } from "react-icons/gr";
import {
  AiOutlineNotification,
  AiOutlineFontSize,
  AiOutlineUnlock,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { ImEyeMinus } from "react-icons/im";
import Toggle from "@/app/components/Toggle";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { stat } from "fs";

export default function Home() {
  const { data: session, status } = useSession();
  const [data, setdata] = useState({
    name: session?.user?.name as string,
    imgUrl:  session?.user?.image ?? "/default-profile.jpg",
  });
  
  useEffect(() => {
    setdata({
      name: session?.user?.name as string,
      imgUrl:  session?.user?.image ?? "/default-profile.jpg",
    });
  }, [session]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-start items-center w-full min-h-screen bg-primaryWhite py-[100px]">
      <div className="text-[30px] text-primaryYellow font-bold">Settings</div>
      <div className="flex flex-col py-5 w-full">
        <div className="flex flex-row justify-start items-center px-5 gap-5">
          <Image
            src={data.imgUrl}
            alt={"Profile Picture"}
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
            className={`w-[80px] aspect-square rounded-full`}
          />
          <div className="flex flex-col">
            <div className="text-[18px] font-medium">{data.name}</div>
            <Link
              href={"/settings/edit-profile"}
              className="text-[12px] text-primaryYellow"
            >
              Edit profile
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full text-[14px]">
        <div className="border-b-[0.5px] border-t-[0.5px] border-[#A5A0A0] w-full py-2 px-7 flex flex-row justify-between items-center">
          <div className="flex flex-row justify-start items-center gap-2">
            <GrNotification />
            <div>Notifications</div>
          </div>
          <Toggle />
        </div>
        <div className="border-b-[0.5px] border-[#A5A0A0] w-full py-2 px-7 flex flex-row justify-between items-center">
          <div className="flex flex-row justify-start items-center gap-2">
            <AiOutlineNotification />
            <div>Notifications sound</div>
          </div>
          <Toggle />
        </div>
        <div className="border-b-[0.5px] border-[#A5A0A0] w-full py-2 px-7 flex flex-row justify-between items-center">
          <div className="flex flex-row justify-start items-center gap-2">
            <FaAssistiveListeningSystems />
            <div>Voice assistant</div>
          </div>
          <Toggle />
        </div>
        <div className="border-b-[0.5px] border-[#A5A0A0] w-full py-2 px-7 flex flex-row justify-between items-center">
          <div className="flex flex-row justify-start items-center gap-2">
            <ImEyeMinus />
            <div>Color barrier solution</div>
          </div>
          <Toggle />
        </div>
        <button className="border-b-[0.5px] border-[#A5A0A0] w-full py-2 px-7">
          <div className="flex flex-row justify-start items-center gap-2">
            <AiOutlineFontSize />
            <div>Font size adjustment</div>
          </div>
        </button>
        <button className="border-b-[0.5px] border-[#A5A0A0] w-full py-2 px-7">
          <Link
            href="/settings/change-password"
            className="flex flex-row justify-start items-center gap-2"
          >
            <AiOutlineUnlock />
            <div>Security</div>
          </Link>
        </button>
        <button className="border-b-[0.5px] border-[#A5A0A0] w-full py-2 px-7">
          <Link
            href="/settings/about"
            className="flex flex-row justify-start items-center gap-2"
          >
            <AiOutlineQuestionCircle />
            <div>About us</div>
          </Link>
        </button>
        <button
          className="border-b-[0.5px] border-[#A5A0A0] text-red-400 w-full py-2 px-7"
          onClick={() => signOut()}
        >
          <div className="flex flex-row justify-start items-center gap-2">
            <BiLogOut color={"#EF5350"} />
            <div>Log out</div>
          </div>
        </button>
      </div>
    </div>
  );
}
