import BlogSection from "@/components/sections/blog-section";
import ClockSection from "@/components/sections/clock";
import ExperienceSection from "@/components/sections/experience/experience-section";
import HeroSection from "@/components/sections/hero/hero-section";
import ProjectSection2 from "@/components/sections/projects/project-section";
import QuoteComponent from "@/components/sections/quote-section";
import SkillSection from "@/components/sections/skill-section";
import StayConnected from "@/components/sections/stay-connected";

const HomePage = () => {
  return (
    <div className="flex flex-col items-start gap-8 md:gap-12">
      {/* <ClockSection /> */}
      <HeroSection />
      {/* <ExperienceSection /> */}
      <ProjectSection2 />
      {/* <BlogSection /> */}
      <SkillSection />
      <StayConnected />
      <QuoteComponent />
    </div>
  );
};

export default HomePage;
