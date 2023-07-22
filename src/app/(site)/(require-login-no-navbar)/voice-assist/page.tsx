"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-screen bg-primaryYellow">
      <div className="flex flex-col justify-center items-center p-5 bg-white rounded-xl shadow-md">
        <div className=" bg-primaryYellow rounded-full aspect-square text-white text-[50px] w-[80px] flex flex-col justify-center items-center">
          !
        </div>
        <div className="py-5 font-semibold">
          <div>Do you want to use voice assistant?</div>
          <div>If yes, then say yes. And if no, say no</div>
        </div>
        <Image
          src={"/va.png"}
          alt="Company Logo"
          width={0}
          height={0}
          sizes="100vw"
          loading="lazy"
          className={`
     } w-full`}
        />
      </div>
      <div className="flex flex-row w-full justify-center px-10 py-5 gap-10 text-white">
        <Link
          href={"/home"}
          className="py-2 px-6 bg-red-400 rounded-lg w-[100px] text-center"
        >
          No
        </Link>
        <Link
          href={"/home"}
          className="py-2 px-6 bg-green-400 rounded-lg w-[100px] text-center"
        >
          Yes
        </Link>
      </div>
    </div>
  );
}
