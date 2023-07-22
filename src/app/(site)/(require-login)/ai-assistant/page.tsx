import AiPreview from "@/app/components/AiPreview";

interface AiPreviewProps {
  title: string;
  bgColor: string;
  imageUrl: string;
  description: string;
  aiUrl: string;
}

export default function Home() {
  const AiList: AiPreviewProps[] = [
    {
      title: "Chat GPT",
      bgColor: "bg-[#47CAAB]",
      imageUrl: "/ailogo/chatgpt.png",
      description:
        "Capable of generating human-like text based on context and past conversations.",
      aiUrl: "https://chat.openai.com/",
    },
    {
      title: "Sendsteps",
      bgColor: "bg-[#271A77]",
      imageUrl: "/ailogo/sendsteps.png",
      description:
        "AI Presentation Maker: Create presentations 10x faster. Sendsteps.ai does the writing, design and storytelling, leaving you with nothing to do but present",
      aiUrl: "https://www.sendsteps.com/en/",
    },
    {
      title: "Gencraft",
      bgColor: "bg-[#CC5C84]",
      imageUrl: "/ailogo/gencraft.png",
      description:
        "The world’s most powerful AI photo and video art generation engine. Create amazing images by just writing a few words.",
      aiUrl: "https://gencraft.com/",
    },
    {
      title: "Simplified",
      bgColor: "bg-[#40386E]",
      imageUrl: "/ailogo/simplified.png",
      description:
        "Generate 50+ types of copy in seconds with the AI Writer. Write unique & plagiarism-free content for blogs, articles, ads, products, websites & social media.",
      aiUrl: "https://simplified.com/ai-writer/",
    },
  ];
  return (
    <div className="relative flex flex-col justify-start items-center w-full min-h-screen bg-primaryBg">
      <div className="flex flex-col px-5 gap-5 pt-7 pb-[100px]">
        {AiList.map((ai) => (
          <AiPreview {...ai} key={ai.aiUrl} />
        ))}
      </div>
    </div>
  );
}
