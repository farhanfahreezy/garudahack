"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { AiFillHome } from "react-icons/ai";
import { FaBookBookmark } from "react-icons/fa6";
import { SiGoogleassistant } from "react-icons/si";
import { IoSettings } from "react-icons/io5";

const MobileNavbar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 flex flex-row w-full bg-primaryBg justify-around items-center py-3">
      <Link
        href={"/home"}
        className="flex flex-col justify-center items-center hover:scale-[1.05] active:scale-[0.95] transition-all"
      >
        <AiFillHome
          size={30}
          color={pathname === "/home" ? "#FF914D" : "#3E3C3C"}
        />
        <div className="text-[12px] pt-2">Home</div>
      </Link>
      <Link
        href={"/courses"}
        className="flex flex-col justify-center items-center hover:scale-[1.05] active:scale-[0.95] transition-all"
      >
        <FaBookBookmark
          size={30}
          color={pathname === "/courses" ? "#FF914D" : "#3E3C3C"}
        />
        <div className="text-[12px] pt-2">Course</div>
      </Link>
      <Link
        href={"/daily-task"}
        className="flex flex-col justify-center items-center first-line:hover:scale-[1.05] active:scale-[0.95] transition-all"
      >
        <Image
          src={"/default-profile.jpg"}
          alt="Profile Picture"
          width={0}
          height={0}
          sizes="100vw"
          loading="lazy"
          className={`${
            pathname === "/daily-task" && "border-2 border-[#FF914D]"
          } w-[40px] aspect-square rounded-full`}
        />
        <div className="text-[12px] pt-2">Daily Task</div>
      </Link>
      <Link
        href={"/ai-assistant"}
        className="flex flex-col justify-center items-center hover:scale-[1.05] active:scale-[0.95] transition-all"
      >
        <SiGoogleassistant
          size={30}
          color={pathname === "/ai-assistant" ? "#FF914D" : "#3E3C3C"}
        />
        <div className="text-[12px] pt-2">Assist</div>
      </Link>
      <Link
        href={"/settings"}
        className="flex flex-col justify-center items-center hover:scale-[1.05] active:scale-[0.95] transition-all"
      >
        <IoSettings
          size={30}
          color={pathname === "/settings" ? "#FF914D" : "#3E3C3C"}
        />
        <div className="text-[12px] pt-2">Settings</div>
      </Link>
    </div>
  );
};

export default MobileNavbar;
