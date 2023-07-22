"use client";

import CoursePreviewList from "@/app/components/CoursePreviewList";
import Progressbar from "@/app/components/Progressbar";
import { useEffect, useState } from "react";
import { trpc } from "@/utils/trpc";

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

// DUMMY DATA
const timeSpent = 31;
const completedCourse = 7;
const totalCourse = 9;
const completedTask = 9;
const totalTask = 14;
const points = 29;
const availablePoints = 35;

const completionCourse = Math.round((completedCourse / totalCourse) * 10) * 10;
const completionTask = Math.round((completedTask / totalTask) * 10) * 10;
const completionPoints = Math.round((points / availablePoints) * 10) * 10;

// END OF DUMMY DATA

export default function Home() {
  const response = trpc.course.filteredCourses.useQuery();
  const coursesData = trpc.course.completedCourseUser.useQuery();
  const coursesData2 = trpc.course.getUserCourses.useQuery();
  const [courses, setCourses] = useState<CoursePreviewProps[]>([]);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    setCourses((response.data as CoursePreviewProps[]) ?? []);
  }, [coursesData.data, coursesData2.data, response.data]);

  if (response.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative flex flex-col justify-start items-center w-full min-h-screen bg-primaryBg">
      <div className="flex flex-row justify-center items-center w-full p-5 gap-5 bg-primaryYellow rounded-b-xl">
        <div className="flex flex-col w-full max-w-[120px] px-3 py-1 bg-primaryBg rounded-xl">
          <div className="text-[#3E3C3C] text-[12px] font-light text-center">
            Time spent on the course
          </div>
          <div className="text-center font-bold text-[24px]">
            {timeSpent} Hr
          </div>
        </div>

        <div className="flex flex-col w-full gap-[8px]">
          <Progressbar
            title="Course Completed"
            completed={completedCourse}
            totalTask={totalCourse}
            bgColor="bg-green-400"
            completion={completionCourse}
          />
          <Progressbar
            title="Course Completed"
            completed={completedTask}
            totalTask={totalTask}
            bgColor="bg-blue-400"
            completion={completionTask}
          />
          <Progressbar
            title="Course Completed"
            completed={points}
            totalTask={availablePoints}
            bgColor="bg-red-400"
            completion={completionPoints}
          />
        </div>
      </div>
      <div className="w-full px-5 pb-[100px]">
        <div className="flex flex-row justify-between p-5 px-3 font-semibold">
          <button
            className={`${
              activeTab === 1 &&
              "text-primaryYellow underline underline-offset-2 font-bold"
            }`}
            onClick={() => {
              setActiveTab(1);
              setCourses((response.data as CoursePreviewProps[]) ?? []);
            }}
          >
            Not taken
          </button>
          <button
            className={`${
              activeTab === 2 &&
              "text-primaryYellow underline underline-offset-2 font-bold"
            }`}
            onClick={() => {
              setActiveTab(2);
              setCourses((coursesData.data as CoursePreviewProps[]) ?? []);
            }}
          >
            On going
          </button>
          <button
            className={`${
              activeTab === 3 &&
              "text-primaryYellow underline underline-offset-2 font-bold"
            }`}
            onClick={() => {
              setActiveTab(3);
              setCourses((coursesData2.data as CoursePreviewProps[]) ?? []);
            }}
          >
            Completed
          </button>
        </div>
        <CoursePreviewList courses={courses} />
      </div>
    </div>
  );
}
