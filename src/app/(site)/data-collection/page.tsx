"use client";
import { trpc } from "@/utils/trpc";
import { ChangeEvent, FormEventHandler, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [data, setData] = useState({
    age: "",
    phoneNumber: "",
    education: "",
    workExperience: "",
    preferredIndustries: "",
    technicalSkills: "",
    softSkills: "",
    carrierGoals: "",
    limitationOrChallenge: "",
    additionalSupport: "",
    communicationPreferences: "",
    accomodationsNeed: "",
  });

  const [agreement, setAgreement] = useState(false);
  const [isSubmitSafe, setisSubmitSafe] = useState(false);
  const result = trpc.user.userDataCollection.useMutation();
  const router = useRouter();

  useEffect(() => {
    if (agreement) {
      if (Object.values(data).every((value) => value !== "")) {
        setisSubmitSafe(true);
      }
    }
  }, [data, agreement]);

  const submitData: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    result.mutate({
      age: parseInt(data.age),
      phoneNumber: data.phoneNumber,
      highLvlEdu: data.education,
      workExp: data.workExperience,
      prefIndustry: data.preferredIndustries,
      techSkill: data.technicalSkills,
      softSkill: data.softSkills,
      carrierGoals: data.carrierGoals,
      limitationUser: data.limitationOrChallenge,
      areasAdditional: data.additionalSupport,
      comPref: data.communicationPreferences,
      spesificAcc: data.accomodationsNeed,
    });
    if (result) {
      router.push("/recommendation");
    }
  };
  return (
    <form
      className="relative flex flex-col justify-center gap-5 items-center w-full min-h-screen bg-primaryBg"
      onSubmit={submitData}
    >
      <div className="w-full text-center font-bold text-[24px]">
        Data Collection
      </div>
      {/* DATA SECTION */}
      <div className="flex flex-col w-full h-[70vh] overflow-y-auto px-5 gap-5">
        <div>
          <label htmlFor="age" className="block text-md font-medium leading-6">
            Age
          </label>
          <div className="mt-2">
            <input
              id="age"
              name="age"
              type="number"
              required
              placeholder="Input your age"
              value={data.age}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, age: e.target.value });
              }}
              className="block w-full rounded-md border-0 py-1.5 shadow-sm text-slate-800 placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-md font-medium leading-6"
          >
            Phone number
          </label>
          <div className="mt-2">
            <input
              id="phoneNumber"
              name="phone"
              type="tel"
              required
              placeholder="Input your phone number"
              value={data.phoneNumber}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, phoneNumber: e.target.value });
              }}
              className="block w-full rounded-md border-0 py-1.5 shadow-sm text-slate-800 placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="education"
            className="block text-md font-medium leading-6"
          >
            Highest level of education
          </label>
          <div className="mt-2">
            <input
              id="education"
              name="education"
              type="text"
              required
              placeholder="Input your highest level of education"
              value={data.education}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, education: e.target.value });
              }}
              className="block w-full rounded-md border-0 py-1.5 shadow-sm text-slate-800 placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="experience"
            className="block text-md font-medium leading-6"
          >
            Work experience
          </label>
          <div className="mt-2">
            <input
              id="experience"
              name="experience"
              type="text"
              required
              placeholder="Input your work experience"
              value={data.workExperience}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, workExperience: e.target.value });
              }}
              className="block w-full rounded-md border-0 py-1.5 shadow-sm text-slate-800 placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="industries"
            className="block text-md font-medium leading-6"
          >
            Preferred industries or sectors for employement
          </label>
          <div className="mt-2">
            <input
              id="industries"
              name="industries"
              type="text"
              required
              placeholder="Input your preferred industries"
              value={data.preferredIndustries}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, preferredIndustries: e.target.value });
              }}
              className="block w-full rounded-md border-0 py-1.5 shadow-sm text-slate-800 placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="technical"
            className="block text-md font-medium leading-6"
          >
            Technical skills
          </label>
          <div className="mt-2">
            <input
              id="technical"
              name="technical"
              type="text"
              required
              placeholder="Input your technical skills"
              value={data.technicalSkills}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, technicalSkills: e.target.value });
              }}
              className="block w-full rounded-md border-0 py-1.5 shadow-sm text-slate-800 placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="soft" className="block text-md font-medium leading-6">
            Soft skills
          </label>
          <div className="mt-2">
            <input
              id="soft"
              name="soft"
              type="text"
              required
              placeholder="Input your soft skills"
              value={data.softSkills}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, softSkills: e.target.value });
              }}
              className="block w-full rounded-md border-0 py-1.5 shadow-sm text-slate-800 placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="carrier"
            className="block text-md font-medium leading-6"
          >
            Carrier goals
          </label>
          <div className="mt-2">
            <input
              id="carrier"
              name="carrier"
              type="text"
              required
              placeholder="Input your carrier goals"
              value={data.carrierGoals}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, carrierGoals: e.target.value });
              }}
              className="block w-full rounded-md border-0 py-1.5 shadow-sm text-slate-800 placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="challenge"
            className="block text-md font-medium leading-6"
          >
            Any limitations or challenges due to your disability
          </label>
          <div className="mt-2">
            <input
              id="challenge"
              name="challenge"
              type="text"
              required
              placeholder="Input your answer"
              value={data.limitationOrChallenge}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, limitationOrChallenge: e.target.value });
              }}
              className="block w-full rounded-md border-0 py-1.5 shadow-sm text-slate-800 placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="additional"
            className="block text-md font-medium leading-6"
          >
            Any areas where you might require additional support
          </label>
          <div className="mt-2">
            <input
              id="additional"
              name="additional"
              type="text"
              required
              placeholder="Input your answer"
              value={data.additionalSupport}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, additionalSupport: e.target.value });
              }}
              className="block w-full rounded-md border-0 py-1.5 shadow-sm text-slate-800 placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="communication"
            className="block text-md font-medium leading-6"
          >
            Communication Preferences
          </label>
          <div className="mt-2">
            <input
              id="communication"
              name="communication"
              type="text"
              required
              placeholder="Input your communication preferences"
              value={data.communicationPreferences}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, communicationPreferences: e.target.value });
              }}
              className="block w-full rounded-md border-0 py-1.5 shadow-sm text-slate-800 placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="accomodation"
            className="block text-md font-medium leading-6"
          >
            Any specific accomodations needed for the work enviroment
          </label>
          <div className="mt-2">
            <input
              id="accomodation"
              name="accomodation"
              type="text"
              required
              placeholder="Input your answer"
              value={data.accomodationsNeed}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, accomodationsNeed: e.target.value });
              }}
              className="block w-full rounded-md border-0 py-1.5 shadow-sm text-slate-800 placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center gap-10">
        <button
          type="submit"
          disabled={!isSubmitSafe}
          className="w-full max-w-[350px] px-6 py-3 font-bold text-[18px] text-center text-white rounded-3xl bg-primaryYellow hover:scale-105 active:scale-95 transition-all disabled:opacity-70 disabled:scale-100 disabled:cursor-not-allowed"
        >
          Submit
        </button>
        <div className="flex flex-row w-full justify-center px-10 gap-5">
          <input
            type="checkbox"
            checked={agreement}
            onChange={() => setAgreement(!agreement)}
          />
          <div className="text-[10px] text-[#A5A0A0]">
            By submitting the form, you agree to share your data with Binamasa
            This data will be used for selection processes and further
            communication. *
          </div>
        </div>
      </div>
    </form>
  );
}
