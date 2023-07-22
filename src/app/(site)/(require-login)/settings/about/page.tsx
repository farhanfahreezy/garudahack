import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center w-full min-h-screen bg-primaryWhite py-[100px]">
      <div className="text-[30px] text-primaryYellow font-bold">About Us</div>
      <div className="pt-10 pb-8">
        <Image
          src={"/BinaBisa-Logo.png"}
          alt={"BinaBisa"}
          width={0}
          height={0}
          sizes="100vw"
          loading="lazy"
          className={`w-[150px] aspect-square`}
        />
      </div>

      <div className="px-5 text-justify text-[12px] text-[#3E3C3C] pb-5">
        Binabisa is an innovative application aimed at providing equal
        opportunities for people with disabilities in the job market, empowering
        them to adapt to AI-driven work cultures. We believe that the future of
        AI lies in creating broad and fair opportunities for all individuals
        across various fields. Binabisa will be developed as both a website and
        a mobile app, catering to a diverse user base and ensuring accessibility
        for everyone.
      </div>
      <div className="px-5 text-justify text-[12px] text-[#3E3C3C]">
        The primary target audience for Binabisa includes individuals with
        disabilities seeking employment opportunities and organizations looking
        to foster an inclusive work environment by hiring diverse talent.
        Additionally, educators and career advisors who work with people with
        disabilities can also benefit from the platform.
      </div>
    </div>
  );
}
