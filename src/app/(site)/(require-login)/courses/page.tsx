"use client";

import CoursePreviewList from "@/app/components/CoursePreviewList";
import Progressbar from "@/app/components/Progressbar";
import { useEffect, useState } from "react";

interface CoursePreviewProps {
  courseId: string;
  title: string;
  description: string;
  totalModule: number;
  provider: string;
}

// DUMMY DATA
const timeSpent = 31;
const completedCourse = 7;
const totalCourse = 9;
const completedTask = 9;
const totalTask = 14;
const points = 29;
const availablePoints = 35;

// const completionCourse = Math.round((completedCourse / totalCourse) * 100);
// const completionTask = Math.round((completedTask / totalTask) * 100);
// const completionPoints = Math.round((points / availablePoints) * 100);
const completionCourse = 70;
const completionTask = 40;
const completionPoints = 30;

const course1: CoursePreviewProps = {
  courseId: "1",
  title: "Programming Fundamentals",
  description:
    "This course covers the basics of programming languages, including Python, Java, or JavaScript. Practical coding exercises and mini-projects will reinforce their understanding and problem-solving skills.",
  totalModule: 6,
  provider: "Garuda Hacks",
};

const course2: CoursePreviewProps = {
  courseId: "2",
  title: "Graphic Design for Beginners",
  description:
    "This course introduces users to graphic design principles and tools like Adobe Photoshop or Illustrator. Hands-on design projects will allow them to apply their knowledge and develop a portfolio.",
  totalModule: 3,
  provider: "Dilpa Graphic School",
};

const course3: CoursePreviewProps = {
  ...course1,
  courseId: "3",
};

const courseList = [course1, course2, course3];

// END OF DUMMY DATA

export default function Home() {
  const [courses, setCourses] = useState<CoursePreviewProps[]>([]);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    // FETCH DATA BASED ON ACTIVE TAB
    setCourses(courseList);
  }, [activeTab]);

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
