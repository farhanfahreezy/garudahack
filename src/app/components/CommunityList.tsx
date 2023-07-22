import React from "react";
import Community from "./Community";

interface CommunityProps {
  communityLogo: string;
  communityTitle: string;
  url: string;
}

interface CommunityListProps {
  communityList: CommunityProps[];
}

const CommunityList = ({ communityList }: CommunityListProps) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {communityList.map((comm) => (
        <Community {...comm} key={comm.url} />
      ))}
    </div>
  );
};

export default CommunityList;
