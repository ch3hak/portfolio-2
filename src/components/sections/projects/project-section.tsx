import { CoreProjects, FullStackProjects } from "./projects-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SmoothReveal from "@/components/animations/smooth-reveal";

const ProjectSection = () => {
  return (
    <SmoothReveal
      delay={0.3}
      className="flex flex-col items-start w-full gap-3"
    >
      <h1 className="text-[#EEEEEE] font-medium">Projects</h1>
      <p className="text-[#B4B4B4] font-light mb-4">
        I’ve been actively engaged in a few side projects lately, exploring
        diverse technologies & ideas. Here’s a quick glimpse of my ongoing and
        completed projects.
      </p>

      <Tabs defaultValue={"fullStack"} className="w-full">
        {/* <div className="grid w-full  rounded-xl bg-[#141415] border border-zinc-800 h-9 p-1 mb-4">
          <div
            
            className="h-full w-full rounded-xl text-center mx-auto "
          >
            Full Stack
          </div>

          
        </div> */}

        <div >
          <FullStackProjects />
        </div>

        <TabsContent value="core">
          <CoreProjects />
        </TabsContent>
      </Tabs>
    </SmoothReveal>
  );
};

export default ProjectSection;
