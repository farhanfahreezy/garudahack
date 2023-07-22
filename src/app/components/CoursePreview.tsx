import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

interface CoursePreviewProps {
  _count: {
    module: number;
  };
  id: number;
  title: string;
  desc: string;
  provider: string;
  moduleTime: number;
}

const CoursePreview = ({
  id,
  title,
  desc: description,
  provider,
  moduleTime: modulTime,
  _count: totalModule,
}: CoursePreviewProps) => {
  const [openModal, setopenModal] = useState(false);
  return (
    <div className="relative flex flex-col w-full p-5 rounded-xl gap-10 text-white bg-primaryYellow">
      <div className="w-full">
        <div className="text-[20px] font-medium">{title}</div>
        <div className="text-[14px]">{description}</div>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col items-start justify-center text-[14px] font-medium">
          <div>Amount: {totalModule.module} modules</div>
          <div>Provided by: {provider}</div>
        </div>
        <button className="px-6 py-2 rounded-lg bg-primaryBg text-primaryYellow">
          Start
        </button>
      </div>
      {/* MODALS */}
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full z-[10]">
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-40"
            onClick={() => setopenModal(false)}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="p-5 bg-white rounded-xl flex flex-col items-center justify-center text-black gap-2 w-[80vw]">
              <div className="text-[20px] text-black">Belajar UI/UX</div>
              <Image
                src={"/dummy-company.png"}
                alt="Company Logo"
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
                className={`w-[200px]`}
              />
              <div className="text-black text-center">
                This course introduces users to graphic design principles and
                tools like Adobe Photoshop or Illustrator. Hands-on design
                projects will allow them to apply their knowledge and develop a
                portfolio.
              </div>

              <div className="w-full h-[5px] border-b-2 border-black"></div>
              <div className="font-semibold text-black">Amount: 3 modules</div>
              <div className="font-semibold text-black">Provided by: udemy</div>
              <div className="px-4 py-1 rounded-xl bg-primaryYellow w-full border-2 border-primaryYellow text-white font-medium flex flex-row item-center justify-between">
                <div className="text-white">1. Intoduction to UI/UX</div>
                <div className="flex flex-row justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <AiOutlineClockCircle size={30} color="black" />
                    <div className="text-[10px]">47 min</div>
                  </div>
                  <Link
                    href={"/watch-vid"}
                    className=" bg-primaryBg px-4 py-1 rounded-lg"
                  >
                    {" "}
                    Go
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursePreview;
