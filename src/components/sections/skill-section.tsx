import SmoothReveal from "../animations/smooth-reveal";

const skills = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "SQL", "Java", "C++", "Python"],
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "Shadcn", "Redux"],
  },
  {
    title: "Backend",
    skills: ["Express.js", "Node.js"],
  },
  {
    title: "Databases",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
    ],
  },
  // {
  //   title: "DevOps & Cloud",
  //   skills: ["Docker",  "AWS", "Cloudflare"],
  // },
  // {
  //   title: "Data Engineering",
  //   skills: [ "Apache Kafka", "Databricks"],
  // },
  {
    title: "Others",
    skills: [
      "Git",
      "RESTful APIs",
      "D3.js"
    ],
  },
];

const SkillSection = () => {
  return (
    <SmoothReveal
      delay={0.3}
      className="flex flex-col items-start w-full gap-3"
    >
      <h1 className="text-[#EEEEEE] font-medium">Skills</h1>
      <p className="text-[#B4B4B4] font-light mb-4">
        Here are some of the skills I have acquired. I am always looking to learn more and improve my
        skillset.
      </p>

      <div className="w-full flex flex-col items-start gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-full flex flex-wrap items-center gap-2 text-sm"
          >
            <h1 className="text-[#EEEEEE] font-meidum flex items-center">
              {index + 1}. {skill.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {skill.skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-3 py-0.5 border border-zinc-800 bg-[#141415] rounded-md text-[#EEEEEE] font-light"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SmoothReveal>
  );
};

export default SkillSection;
