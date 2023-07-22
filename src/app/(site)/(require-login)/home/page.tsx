import Community from "@/app/components/Community";
import CommunityList from "@/app/components/CommunityList";
import JobPreviewList from "@/app/components/JobPreviewList";
import Image from "next/image";

interface JobPreviewProps {
  companyLogo: string;
  companyName: string;
  position: string;
  jobId: string;
}

interface CommunityProps {
  communityLogo: string;
  communityTitle: string;
  url: string;
}

export default function Home() {
  // DUMMY DATA
  const user_name = "Binamasa";

  const jobPreview: JobPreviewProps = {
    companyLogo: "/dummy-company.jpg",
    companyName: "GarudaHacks",
    position: "Hacker",
    jobId: "01234",
  };

  const job2: JobPreviewProps = { ...jobPreview, jobId: "123" };
  const job3: JobPreviewProps = { ...jobPreview, jobId: "666" };
  const job4: JobPreviewProps = { ...jobPreview, jobId: "777" };
  const job5: JobPreviewProps = { ...jobPreview, jobId: "888" };

  const jobPreviewList = [jobPreview, job2, job3, job4, job5];

  const komun1: CommunityProps = {
    communityLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    communityTitle: "KOMUNITAS DIFABEL INDONESIA",
    url: "https://www.facebook.com/groups/557446774418229",
  };

  const komun2: CommunityProps = {
    communityLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    communityTitle: "Komunitas Motor Difabel",
    url: "https://www.facebook.com/groups/3061298097528902",
  };

  const komun3: CommunityProps = {
    communityLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    communityTitle: "Komunitas Penjahit Difabel Indonesia",
    url: "https://www.facebook.com/groups/1799222693647146",
  };

  const communityList = [komun1, komun2, komun3];

  //
  // END OF DUMMY DATA

  return (
    <div className="relative flex flex-col justify-start items-center w-full min-h-screen bg-primaryWhite">
      <div className="px-5 pt-8 w-full">
        <div className="flex flex-col justify-center items-center bg-primaryYellow shadow-lg p-5 rounded-3xl">
          <Image
            src={"/default-profile.jpg"}
            alt="Profile Picture"
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
            className={`
            } w-[80px] aspect-square rounded-full`}
          />
          <div className="text-white font-semibold text-[18px] py-5">
            Welcome back, {user_name}!
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-5">
        <div className="text-primaryYellow font-semibold">Daily Quotes</div>
        <div className="flex flex-col items-center text-[12px]">
          <p>“Hidup yang tak ada tantangan</p>
          <p>adalah hidup yang tak layak diperjuangkan”</p>
        </div>
      </div>

      <div className="flex flex-col bg-primaryYellow w-full justify-center items-center rounded-t-3xl py-5 px-3 pb-[100px] gap-5 text-white">
        <div className="flex flex-col w-full justify-center items-center">
          <div className="text-[18px] font-semibold pb-5">Job Vacancy</div>
          <JobPreviewList jobPreviews={jobPreviewList} />
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <div className="text-[18px] font-semibold pb-5">Join Community</div>
          <CommunityList communityList={communityList} />
        </div>
      </div>
    </div>
  );
}
