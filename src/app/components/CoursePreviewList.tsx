import React from "react";
import CoursePreview from "./CoursePreview";

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

interface CoursePreviewListProps {
  courses: CoursePreviewProps[];
}
const CoursePreviewList = ({ courses }: CoursePreviewListProps) => {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-5">
      {courses.length === 0
        ? "Nothing to show here"
        : courses.map((course) => (
            <CoursePreview {...course} key={course.id} />
          ))}
    </div>
  );
};

export default CoursePreviewList;
