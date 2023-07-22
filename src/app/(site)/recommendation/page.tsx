"use client";

import { useEffect, useState } from "react";
import { ImSpinner } from "react-icons/im";
import { GiPencilBrush } from "react-icons/gi";
import { SlGlobeAlt } from "react-icons/sl";
import Link from "next/link";

export default function Home() {
  const [load, setload] = useState(true);
  const [job, setjob] = useState([
    "Animator",
    "Multimedia Designer",
    "UI/UX Designer",
  ]);
  const [course, setcourse] = useState([
    "Graphic Design for Beginners",
    "Digital Skills for Remote Work",
    "Emotional Intelligence Designer",
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setload(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-screen bg-primaryYellow">
      {load ? (
        <div className="flex flex-col justify-center items-center gap-5">
          <div className=" animate-spin">
            <ImSpinner size={150} color={"white"} />
          </div>
          <div className="text-[20px] px-10 w-full text-center text-white font-medium">
            Please wait, AI is try to understand you
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-start items-center min-h-screen py-10 gap-5">
          <div className="text text-white font-semibold text-[24px] pb-5">
            Here is your result!
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="flex flex-col justify-between items-center bg-white w-[40vw] aspect-square p-5 rounded-lg shadow-lg">
                <div className="text-primaryYellow font-medium">Strength</div>
                <SlGlobeAlt size={80} />
              </div>
              <div className="text-white font-medium">Innovative</div>
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <div className="flex flex-col justify-between items-center bg-white w-[40vw] aspect-square p-5 rounded-lg shadow-lg">
                <div className="text-primaryYellow font-medium">Character</div>
                <GiPencilBrush size={80} />
              </div>
              <div className="text-white font-medium">Creative</div>
            </div>
          </div>
          <div className="flex flex-col w-full bg-white rounded-lg shadow-lg items-center justify-center p-3 gap-2 text-[18px]">
            <div className="text-primaryYellow font-semibold">
              Job Recommendation
            </div>
            {job.map((jobb, index) => (
              <div
                className="w-full py-2 bg-[#A5A0A0] text-center rounded-md text-white font-medium"
                key={index}
              >
                {jobb}
              </div>
            ))}
          </div>

          <div className="flex flex-col w-full bg-white rounded-lg shadow-lg items-center justify-center p-3 gap-2 text-[18px]">
            <div className="text-primaryYellow font-semibold">
              Course Recommendation
            </div>
            {course.map((jobb, index) => (
              <div
                className="w-full py-2 bg-[#A5A0A0] text-center rounded-md text-white font-medium"
                key={index}
              >
                {jobb}
              </div>
            ))}
          </div>

          <div className="flex flex-row items-center justify-between w-full py-2 text-white font-medium text-[12px]">
            <Link
              href={"/data-collection"}
              className="py-2 px-6 bg-red-400 rounded-lg"
            >
              Repeat Data Entry
            </Link>
            <Link
              href={"/voice-assist"}
              className="py-2 px-6 bg-green-400 rounded-lg"
            >
              Start my journey
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
