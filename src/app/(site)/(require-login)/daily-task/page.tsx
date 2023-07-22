"use client";

import DailyTask from "@/app/components/DailyTask";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TaskProps {
  taskid: string;
  isFinished: boolean;
  description: string;
}

// DUMMY DATA
const dummyTask: TaskProps[] = [
  {
    taskid: "11",
    isFinished: false,
    description: "Implement login functionality",
  },
  {
    taskid: "12",
    isFinished: false,
    description: "Design product landing page",
  },
  {
    taskid: "13",
    isFinished: false,
    description: "Automate data backups",
  },
  {
    taskid: "14",
    isFinished: false,
    description: "Write API documentation",
  },
  {
    taskid: "15",
    isFinished: false,
    description: "Optimize database indexing",
  },
  {
    taskid: "16",
    isFinished: false,
    description: "Create PDF generation",
  },
  {
    taskid: "17",
    isFinished: false,
    description: "Integrate payment gateway",
  },
  {
    taskid: "18",
    isFinished: false,
    description: "Build user profile page",
  },
  {
    taskid: "19",
    isFinished: false,
    description: "Setup caching for APIs",
  },
  {
    taskid: "20",
    isFinished: false,
    description: "Improve site accessibility",
  },
];

export default function Home() {
  const [data, setData] = useState({
    name: "Binabisa",
    level: 7,
    profilePict: "/default-profile.jpg",
  });
  const [taskList, setTaskList] = useState<TaskProps[]>([]);
  const [completedTask, setCompletedTask] = useState(0);

  useEffect(() => {
    setTaskList(dummyTask);
  }, []);

  useEffect(() => {
    let completed = 0;
    taskList.map((task) => task.isFinished && completed++);
    setCompletedTask(completed);
  }, [taskList]);

  const onChange = (s: string) => {
    const newTask: TaskProps[] = Array.from(taskList);
    for (let i = 0; i < newTask.length; i++) {
      if (newTask[i].taskid === s) {
        newTask[i].isFinished = !newTask[i].isFinished;
      }
    }
    setTaskList(newTask);
  };

  return (
    <div className="flex flex-col justify-start items-center w-full min-h-screen bg-primaryWhite">
      <div className="px-5 pt-8 w-full">
        <div className="flex flex-col justify-center items-center bg-primaryYellow shadow-lg p-5 rounded-3xl">
          <div className="relative">
            <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 px-6 py-1 bg-[#D9D9D9] text-white font-bold w-[80px] text-center text-[12px] rounded-xl border-2 border-primaryYellow">
              Lvl {data.level}
            </div>
            <Image
              src={data.profilePict}
              alt="Profile Picture"
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
              className={`
            } w-[100px] aspect-square rounded-full`}
            />
          </div>
          <div className="text-white font-semibold text-[18px] pt-5">
            {data.name}
          </div>
          <div className="text-white bold">
            {completedTask}/{taskList.length} task is complete
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full justify-center items-center px-5 pt-10 pb-[100px]">
        <div className="flex flex-col w-full justify-center items-center shadow-2xl rounded-xl py-5">
          <div className="text-[20px] text-primaryYellow font-semibold">
            Daily Task
          </div>
          <div className="flex flex-col items-start justify-center w-full p-5">
            {taskList.map((task,index) => (
              <DailyTask key={index} {...task} onChange={onChange} />
            ))}
          </div>
          <div className="flex flex-col w-full items-end px-5">
            <div className="text-[#A5A0A0]">{completedTask * 10} Points</div>
            <div className="w-full h-[10px] bg-primaryYellow rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
