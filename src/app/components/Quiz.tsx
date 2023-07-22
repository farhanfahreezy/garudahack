import React from "react";

interface QuizProps {
  question: string;
  answer: string[];
}

const Quiz = ({ question, answer }: QuizProps) => {
  return (
    <div className="flex flex-col justify-center items-start p-5 shadow-lg w-full">
      <div className="font-semibold">{question}</div>
      <div className="flex flex-col justify-center items-start">
        {answer.map((ans, index) => (
          <div
            key={index}
            className="flex flex-row justify-start items-center gap-2"
          >
            <input type="radio" />
            <div>{ans}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
