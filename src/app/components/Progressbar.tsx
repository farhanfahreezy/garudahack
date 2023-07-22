"use client";

import React, { useEffect, useState } from "react";

interface ProgressbarProps {
  bgColor: string;
  title: string;
  completed: number;
  totalTask: number;
  completion: number;
}
const Progressbar = ({
  bgColor,
  title,
  completed,
  totalTask,
  completion,
}: ProgressbarProps) => {
  const arr = [
    "w-[0%]",
    "w-[10%]",
    "w-[20%]",
    "w-[30%]",
    "w-[40%]",
    "w-[50%]",
    "w-[60%]",
    "w-[70%]",
    "w-[80%]",
    "w-[90%]",
    "w-[100%]",
  ];
  return (
    <div className={`relative w-full h-[20px]`}>
      <div
        className={`absolute bottom-0 w-[${completion}%] h-[20px] rounded-full ${bgColor} z-[2] transition-all ease-out duration-500`}
      />
      <div
        className={`"absolute bottom-0 w-full h-[20px] rounded-full bg-[#CFCFCF] z-[1]`}
      />
      <div className="absolute bottom-0 z-[3] text-[12px] font-medium left-2 text-white">
        {title} {"(" + completed + "/" + totalTask + ")"}
      </div>
    </div>
  );
};

export default Progressbar;
