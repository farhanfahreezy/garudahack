import React from "react";
import Quiz from "./Quiz";
interface QuizProps {
  question: string;
  answer: string[];
}

interface QuizQuestionProps {
  questions: QuizProps[];
}

const QuizQuestion = ({ questions }: QuizQuestionProps) => {
  return (
    <div className="flex flex-col items-start justify-center gap-5">
      {questions.map((question, index) => (
        <Quiz {...question} key={index} />
      ))}
    </div>
  );
};

export default QuizQuestion;
