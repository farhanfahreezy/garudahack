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
        className="hover:scale-[1.05] active:scale-[0.95] transition-all"
      >
        <AiFillHome
          size={35}
          color={pathname === "/home" ? "#FF914D" : "#3E3C3C"}
        />
      </Link>
      <Link
        href={"/courses"}
        className="hover:scale-[1.05] active:scale-[0.95] transition-all"
      >
        <FaBookBookmark
          size={30}
          color={pathname === "/courses" ? "#FF914D" : "#3E3C3C"}
        />
      </Link>
      <Link
        href={"/daily-task"}
        className="hover:scale-[1.05] active:scale-[0.95] transition-all"
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
          } w-[50px] aspect-square rounded-full`}
        />
      </Link>
      <Link
        href={"/ai-assistant"}
        className="hover:scale-[1.05] active:scale-[0.95] transition-all"
      >
        <SiGoogleassistant
          size={30}
          color={pathname === "/ai-assistant" ? "#FF914D" : "#3E3C3C"}
        />
      </Link>
      <Link
        href={"/settings"}
        className="hover:scale-[1.05] active:scale-[0.95] transition-all"
      >
        <IoSettings
          size={30}
          color={pathname === "/settings" ? "#FF914D" : "#3E3C3C"}
        />
      </Link>
    </div>
  );
};

export default MobileNavbar;
