import { cn } from "@/lib/utils";

import ExperienceCard from "./experience-card";
import SmoothReveal from "@/components/animations/smooth-reveal";

const experience = [
  {
    logoUrl: "https://avatars.githubusercontent.com/u/151308191?s=200&v=4",
    altText: "R",
    title: "Frontend Developer",
    company: "RelevAInce",
    badges: [],
    period: "May 2025 - Present",
    description: "",
  },
  {
    logoUrl: "https://res.cloudinary.com/dzkldv06d/image/upload/v1724426996/events/t4vrcuiuoutkfeaatb1r.jpg",
    altText: "C",
    title: "Full Stack Developer",
    company: "ConqrAI",
    badges: [],
    period: "April 2024 - April 2025",
    description: "",
  },
  {
    logoUrl:
      "https://res.cloudinary.com/dzkldv06d/image/upload/v1733587217/Logo_ks7ahc.jpg",
    altText: "A",
    title: "Full Stack developer",
    company: "AequusPlay",
    badges: [],
    period: "August 2024 - November 2024",
    description: "",
  }
];

const ExperienceSection = () => {
  return (
    <SmoothReveal
      delay={0.3}
      className="flex flex-col items-start w-full gap-3"
    >
      <h1 className="text-[#EEEEEE] font-medium">Experience</h1>
      <p className="text-[#B4B4B4] font-light mb-4">
        A breif about my work experiences where I have worked at and where I am
        currently working at.
      </p>

      <div className={cn("w-full")}>
        <SmoothReveal
          delay={0.3}
          className="w-full flex flex-col items-start gap-5"
        >
          {experience.map((item, index) => (
            <ExperienceCard
              key={index}
              logoUrl={item.logoUrl}
              altText={item.altText}
              title={item.title}
              company={item.company}
              badges={item.badges}
              period={item.period}
              description={item.description}
            />
          ))}
        </SmoothReveal>
      </div>
    </SmoothReveal>
  );
};

export default ExperienceSection;
