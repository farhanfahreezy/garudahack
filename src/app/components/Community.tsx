import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CommunityProps {
  communityLogo: string;
  communityTitle: string;
  url: string;
}

const Community = ({ communityLogo, communityTitle, url }: CommunityProps) => {
  return (
    <div className="flex flex-col p-3 bg-primaryBg items-center justify-center rounded-xl gap-2">
      <div className="flex flex-row items-center justify-center gap-2">
        <Image
          src={communityLogo}
          alt={communityTitle}
          width={0}
          height={0}
          sizes="100vw"
          loading="lazy"
          className={`w-[40px] aspect-square rounded-full`}
        />
        <div className="text-[12px] text-primaryYellow font-medium">
          {communityTitle}
        </div>
      </div>
      <Link
        href={url}
        target="_blank"
        className="px-3 py-1 text-white bg-primaryYellow rounded-md text-[12px]"
      >
        Join
      </Link>
    </div>
  );
};

export default Community;
