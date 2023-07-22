"use client";

import QuizQuestion from "@/app/components/QuizQuestion";
import Link from "next/link";
import { useState } from "react";

interface QuizProps {
  question: string;
  answer: string[];
}

// DUMMY DATA

const quizArray: QuizProps[] = [
  {
    question: "What does UI stand for?",
    answer: [
      "User Interface",
      "User Interaction",
      "User Integration",
      "User Intelligence",
    ],
  },
  {
    question: "What is the main goal of UX design?",
    answer: [
      "User Experience",
      "User Expertise",
      "User Expansion",
      "User Excitement",
    ],
  },
  {
    question: "What is wireframing in UI/UX design?",
    answer: [
      "Creating low-fidelity mockups",
      "Adding colors and images",
      "Writing production code",
      "Testing user flows",
    ],
  },
  {
    question: "What does A/B testing help to determine?",
    answer: [
      "The best design variant",
      "User demographics",
      "Backend server response time",
      "Marketing strategies",
    ],
  },
  {
    question: "What does 'above the fold' refer to in web design?",
    answer: [
      "Content visible without scrolling",
      "Footer section",
      "Images used in the header",
      "Browser console output",
    ],
  },
  {
    question: "What is the purpose of a style guide in UI/UX?",
    answer: [
      "Maintain design consistency",
      "Provide user feedback",
      "Manage server configurations",
      "Optimize database queries",
    ],
  },
  {
    question:
      "Which term refers to the process of understanding user needs and goals?",
    answer: ["User Research", "User Survey", "User Testing", "User Interview"],
  },
  {
    question: "What is the significance of accessibility in UI/UX design?",
    answer: [
      "Inclusivity for all users",
      "Use of trendy design elements",
      "Faster loading times",
      "Enhanced animations",
    ],
  },
  {
    question: "What are personas in UX design?",
    answer: [
      "Fictional user profiles",
      "Software development tools",
      "Detailed technical documentation",
      "Database management systems",
    ],
  },
  {
    question: "What is the role of white space in UI/UX design?",
    answer: [
      "Improve readability and focus",
      "Insert invisible characters",
      "Add page margins",
      "Highlight important content",
    ],
  },
];

// END OF DUMMY

export default function Home() {
  const [openModal, setopenModal] = useState(false);
  return (
    <div className="relative flex flex-col justify-start items-center w-full min-h-screen bg-primaryBg py-10">
      <div className="px-6 py-2 rounded-3xl bg-primaryYellow text-white text-[20px] font-bold">
        Module Task
      </div>
      <div className="text-primaryYellow py-3 font-semibold">
        Introduction to UI/UX
      </div>
      <div className="flex flex-col px-5 py-3">
        <QuizQuestion questions={quizArray} />
      </div>
      <button
        onClick={() => setopenModal(true)}
        className="px-10 py-2 bg-primaryYellow rounded-md text-white font-semibold"
      >
        Submit
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
              <div className="text-[20px] font-bold">Congratulations!</div>
              <div className="text-green-400 font-semibold">8/10 Point</div>
              <div className="text-center text-[14px] py-2">
                Congratulations on passing the test and acquiring new knowledge!
                Let's embark on the next exciting journey!
              </div>
              <div className="flex flex-row w-full items-center justify-center">
                <Link
                  href={"/home"}
                  className="px-4 py-1 rounded-xl bg-primaryYellow border-2 border-primaryYellow text-white font-medium"
                >
                  Ok
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
