import React from "react";

interface TaskProps {
  taskid: string;
  isFinished: boolean;
  description: string;
  onChange: (s: string) => void;
}

const DailyTask = ({
  taskid,
  isFinished,
  description,
  onChange,
}: TaskProps) => {
  return (
    <div className="flex flex-row w-full items-center justify-start gap-2">
      <input
        type="checkbox"
        checked={isFinished}
        onChange={() => {
          onChange(taskid);
        }}
      />
      <div className="text-[#908D8D]">{description}</div>
    </div>
  );
};

export default DailyTask;
