import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AiPreviewProps {
  title: string;
  bgColor: string;
  imageUrl: string;
  description: string;
  aiUrl: string;
}

const AiPreview = ({
  title,
  bgColor,
  imageUrl,
  description,
  aiUrl,
}: AiPreviewProps) => {
  return (
    <div
      className={`flex flex-col p-5 rounded-2xl ${bgColor} text-white gap-3`}
    >
      <div className="flex flex-row items-center justify-start gap-3">
        <Image
          src={imageUrl}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          loading="lazy"
          className={` w-[50px] aspect-square rounded-full`}
        />
        <div className="text-[20px] font-bold">{title}</div>
      </div>
      <div>{description}</div>
      <div className="flex flex-col items-end">
        <Link
          href={aiUrl}
          target="_blank"
          className="px-8 py-2 bg-white text-black font-bold rounded-xl"
        >
          Go
        </Link>
      </div>
    </div>
  );
};

export default AiPreview;
