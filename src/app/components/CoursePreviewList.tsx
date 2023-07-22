import React from "react";
import CoursePreview from "./CoursePreview";

interface CoursePreviewProps {
  courseId: string;
  title: string;
  description: string;
  totalModule: number;
  provider: string;
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
            <CoursePreview {...course} key={course.courseId} />
          ))}
    </div>
  );
};

export default CoursePreviewList;
