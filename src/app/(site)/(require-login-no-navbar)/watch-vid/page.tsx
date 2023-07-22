"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Youtube, { YouTubeProps } from "react-youtube";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(0);
  const opts: YouTubeProps["opts"] = {
    height:
      screenWidth > 1200 ? "800px" : screenWidth > 600 ? "400px" : "200px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-screen bg-black text-white">
      <Youtube videoId="p7SlpT2GFGs" opts={opts} />
      <div className="absolute bottom-0 w-full bg-white p-3 flex flex-col justify-center items-center">
        <Link
          href={"/exercise"}
          className="w-full py-1 px-6 bg-primaryYellow text-center rounded-lg"
        >
          Finish the Video
        </Link>
      </div>
    </div>
  );
}
