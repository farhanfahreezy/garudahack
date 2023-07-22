"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface JobPreviewProps {
  companyLogo: string;
  companyName: string;
  position: string;
  jobId: string;
  location: string;
  description: string;
  url: string;
}

const JobPreview = ({
  companyLogo,
  companyName,
  position,
  jobId,
  location,
  description,
  url,
}: JobPreviewProps) => {
  const [openModal, setopenModal] = useState(false);
  return (
    <div className="w-full relative bg-primaryBg text-primaryYellow flex flex-row items-center justify-between p-3 rounded-lg">
      <div className="flex flex-row items-center justify-center">
        <Image
          src={companyLogo}
          alt="Company Logo"
          width={0}
          height={0}
          sizes="100vw"
          loading="lazy"
          className={`
     } w-[80px]`}
        />
        <div className="flex flex-col justify-center font-medium text-[14px] items-start pl-2">
          <div>{companyName}</div>
          <div>{position}</div>
        </div>
      </div>
      <button
        onClick={() => setopenModal(true)}
        className="px-4 py-2 bg-primaryYellow text-white rounded-lg text-[14px]"
      >
        Details
      </button>
      {/* MODALS */}
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full z-[10]">
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-40"
            onClick={() => setopenModal(false)}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="p-5 bg-white rounded-xl flex flex-col items-center justify-center text-black gap-2 w-[80vw]">
              <Image
                src={companyLogo}
                alt="Company Logo"
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
                className={`w-[200px]`}
              />
              <div>{position}</div>
              <div>{location}</div>
              <div className="pt-3 pb-10 text-[14px] text-justify">
                {description}
              </div>
              <div className="flex flex-row w-full items-center justify-between">
                <button
                  onClick={() => setopenModal(false)}
                  className="px-4 py-1 rounded-xl border-2 border-primaryYellow text-black font-medium"
                >
                  Cancel
                </button>
                <Link
                  href={url}
                  target="_blank"
                  className="px-4 py-1 rounded-xl bg-primaryYellow border-2 border-primaryYellow text-white font-medium"
                >
                  Apply
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPreview;
