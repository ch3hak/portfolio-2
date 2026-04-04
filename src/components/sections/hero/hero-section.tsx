import Link from "next/link";

import ProfileCard from "./profile-card";
import SmoothReveal from "@/components/animations/smooth-reveal";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-start w-full gap-8 md:gap-12">
      <ProfileCard />

      {/* AboutMe */}
      <SmoothReveal
        delay={0.2}
        className="flex flex-col items-start w-full gap-3"
      >
        <h1 className="text-[#EEEEEE] font-medium">About Me</h1>

        <div className="flex flex-col items-start">
          <p className="text-[#B4B4B4] font-light">
            Hi, I’m Chehak, an undergrad student who enjoys building things that solve problems and get things done in the most efficient way.
            <br />
            {/* <br />
            I'm currently at{" "}
            <span className="text-[#FE6A34] font-medium">RelevAInce</span>{" "}
            working on Large data set ingestions and cognitive research.
            <br /> */}
          </p>
        </div>
      </SmoothReveal>

      {/* Contact */}
      <SmoothReveal
        delay={0.3}
        className="flex flex-col items-start w-full gap-3"
      >
        <h1 className="text-[#EEEEEE] font-medium">Reach out to me</h1>

        <div className="flex flex-col items-start">
          <p className="text-[#B4B4B4] font-light">
            You can find me most active on{" "}
            <Link
              href={"https://linkedin.com/in/chehaksharma"}
              target="_blank"
              className="text-blue-400"
            >
            LinkedIn            
            </Link>{" "}
            and I’m best reached via{" "}
            <Link
              href={"mailto:chehak.sharma293@gmail.com"}
              target="_blank"
              className="text-blue-400"
            >
              Email
            </Link>
            .
          </p>
        </div>
      </SmoothReveal>
    </div>
  );
};

export default HeroSection;
