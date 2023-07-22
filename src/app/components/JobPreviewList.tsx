import React from "react";
import JobPreview from "./JobPreview";

interface JobPreviewProps {
  companyLogo: string;
  companyName: string;
  position: string;
  jobId: string;
  location: string;
  description: string;
  url: string;
}

interface JobPreviewListsProps {
  jobPreviews: JobPreviewProps[];
}

const JobPreviewList = ({ jobPreviews }: JobPreviewListsProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {jobPreviews.map((job) => (
        <JobPreview {...job} key={job.jobId} />
      ))}
    </div>
  );
};

export default JobPreviewList;
