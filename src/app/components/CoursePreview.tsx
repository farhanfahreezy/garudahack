import React from "react";

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
  return (
    <div className="flex flex-col w-full p-5 rounded-xl gap-10 text-white bg-primaryYellow">
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
    </div>
  );
};

export default CoursePreview;
