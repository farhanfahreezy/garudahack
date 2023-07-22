"use client";

import Image from "next/image";
import { useState } from "react";
import { GrNotification } from "react-icons/gr";
import {
  AiOutlineNotification,
  AiOutlineFontSize,
  AiOutlineUnlock,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { ImEyeMinus } from "react-icons/im";
import Toggle from "@/app/components/Toggle";
import Link from "next/link";

export default function Home() {
  const [data, setdata] = useState({
    name: "Binabisa",
    imgUrl: "/default-profile.jpg",
  });
  return (
    <div className="flex flex-col justify-start items-center w-full min-h-screen bg-primaryWhite py-[100px]">
      <div className="text-[30px] text-primaryYellow font-bold">Settings</div>
      <div className="flex flex-col py-5 w-full">
        <div className="flex flex-row justify-start items-center px-5 gap-5">
          <Image
            src={data.imgUrl}
            alt={data.name}
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
            className={`w-[80px] aspect-square rounded-full`}
          />
          <div className="flex flex-col">
            <div className="text-[18px] font-medium">{data.name}</div>
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
      </div>
    </div>
  );
}
