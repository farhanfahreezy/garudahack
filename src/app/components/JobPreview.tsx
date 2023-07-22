import Image from "next/image";
import React from "react";

interface JobPreviewProps {
  companyLogo: string;
  companyName: string;
  position: string;
  jobId: string;
}

const JobPreview = ({
  companyLogo,
  companyName,
  position,
  jobId,
}: JobPreviewProps) => {
  return (
    <div className="w-full bg-primaryBg text-primaryYellow flex flex-row items-center justify-between p-3 rounded-lg">
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
      <button className="px-4 py-2 bg-primaryYellow text-white rounded-lg text-[14px]">
        Details
      </button>
    </div>
  );
};

export default JobPreview;
