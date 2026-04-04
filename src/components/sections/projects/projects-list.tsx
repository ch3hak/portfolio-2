import SmoothReveal from "@/components/animations/smooth-reveal";
import ProjectCard from "./project-card";

const coreProjectsList = [
  {
    title: "TCP Server",
    subtitle: "TCP Server written in Go.",
    teamMembers: [{ name: "Tanay", image: "/tanay.jpeg" }],
    techStack: {
      language: "GO",
      framework: "None",
      database: "None",
      cloud: "None",
    },
    progress: 90,
    projectLink: "https://github.com/tanayvaswani/tcp-go",
  },
  {
    title: "Calculator APIs",
    subtitle: "Calculator APIs written in Go & gRPC",
    teamMembers: [{ name: "Tanay", image: "/tanay.jpeg" }],
    techStack: {
      language: "GO",
      framework: "gRPC",
      database: "None",
      cloud: "None",
    },
    progress: 50,
    projectLink: "https://github.com/tanayvaswani/grpcalc",
  },
  {
    title: "Notify",
    subtitle: "Event driven notification service written in Go using Kafka.",
    teamMembers: [{ name: "Tanay", image: "/tanay.jpeg" }],
    techStack: {
      language: "GO",
      framework: "Confluent SDK",
      database: "None",
      cloud: "None",
    },
    progress: 50,
    projectLink: "https://github.com/tanayvaswani/notify",
  },
  {
    title: "Balancer Robin",
    subtitle: "Load balancer written in Go based on Round Robin algorithm.",
    teamMembers: [{ name: "Tanay", image: "/tanay.jpeg" }],
    techStack: {
      language: "GO",
      framework: "None",
      database: "None",
      cloud: "None",
    },
    progress: 90,
    projectLink: "https://github.com/tanayvaswani/balancer-robin",
  },
  {
    title: "Go-Authenticator",
    subtitle: "A GoLang based user authentication and validator project.",
    teamMembers: [{ name: "Tanay", image: "/tanay.jpeg" }],
    techStack: {
      language: "GO",
      framework: "Gin",
      database: "MySQL",
      cloud: "AWS",
    },
    progress: 60,
    projectLink: "https://github.com/tanayvaswani/userauth-go",
  },
];

const fullStackProjectsList = [
  {
    title: "Ru-Ok",
    subtitle:
      "An emotional wellness companion that helps you understand, track, and manage your mental health with precision and care with over 300+ emotions.",
    teamMembers: [{name: "Tanishq", image:""}, {name:"Suvrat", image:""}, { name: "Chehak", image: "/chehak.jpeg" }],
    techStack: {
      language: "Typescript",
      framework: "React",
      database: "MongoDB",
      cloud: "Vercel",
    },
    progress: 100,
    projectLink: "https://github.com/ch3hak/RUOK-frontend",
  },
   {
    title: "Knoli",
    subtitle:
      "Turn your notes and study material into traffic-light flashcards using AI to revise smarter, track understanding, and retain concepts better.",
    teamMembers: [{ name: "Chehak", image: "/chehak.jpeg" }],
    techStack: {
      language: "Typescript",
      framework: "React",
      database: "MongoDB",
      cloud: "Vercel",
    },
    progress: 85,
    projectLink: "https://github.com/ch3hak/knoli-frontend",
  },
  {
    title: "Inquisitive",
    subtitle:
      "Build and attempt structured quizzes with a clean interface designed for quick creation, smooth sharing, and effective testing.",
    teamMembers: [{ name: "Chehak", image: "/chehak.jpeg" }],
    techStack: {
      language: "JavaScript",
      framework: "React.js",
      database: "Firestore",
      cloud: "Vercel",
    },
    progress: 100,
    projectLink: "https://github.com/ch3hak/inquisitive",
  },
  // {
  //   title: "Desk",
  //   subtitle:
  //     "An offline course player designed to help you load and view your educational content in a distraction-free environment.",
  //   teamMembers: [{ name: "Prajjwal", image: "/prajjwal.jpeg" }],
  //   techStack: {
  //     language: "Typescript, Python",
  //     framework: "Next.js",
  //     database: "SQLite",
  //     cloud: "Vercel",
  //   },
  //   progress: 95,
  //   projectLink: "https://github.com/thisisamank/desk",
  // },
  // {
  //   title: "Github.help",
  //   subtitle:
  //     "A Platform built to help developers get comfortable with github repositories ASAP. Just change .com to .help",
  //   teamMembers: [{ name: "Prajjwal", image: "/prajjwal.jpeg" }],
  //   techStack: {
  //     language: "Typescript",
  //     framework: "Next.js",
  //     database: "PostgreSQL",
  //     cloud: "AWS",
  //   },
  //   progress: 20,
  //   projectLink: "https://github.com/prajjwal2-3/githelp",
  // },
  // {
  //   title: "Easevent",
  //   subtitle:
  //     "A platform to manage events from one place, from tracking guests to events.",
  //   teamMembers: [{ name: "Prajjwal", image: "/prajjwal.jpeg" }],
  //   techStack: {
  //     language: "Typescript",
  //     framework: "Next.js",
  //     database: "PostgreSQL",
  //     cloud: "Vercel",
  //   },
  //   progress: 90,
  //   projectLink: "https://github.com/prajjwal2-3/easevent",
  // },
  // {
  //   title: "CSI Internships",
  //   subtitle:
  //     "A website for CSI members to find jobs, internships, freelance gigs",
  //   teamMembers: [{ name: "Prajjwal", image: "/prajjwal.jpeg" }],
  //   techStack: {
  //     language: "Typescript",
  //     framework: "Next.js",
  //     database: "MongoDB",
  //     cloud: "Vercel",
  //   },
  //   progress: 70,
  //   projectLink: "https://github.com/prajjwal2-3",
  // },
];

export const CoreProjects = () => {
  return (
    <div className="w-full grid grid-cols-1 md:lg:grid-cols-2 gap-3">
      {coreProjectsList.map((project, index) => (
        <SmoothReveal key={index}>
          <ProjectCard {...project} />
        </SmoothReveal>
      ))}
    </div>
  );
};

export const FullStackProjects = () => {
  return (
    <div className="w-full grid grid-cols-1 md:lg:grid-cols-2 gap-3">
      {fullStackProjectsList.map((project, index) => (
        <SmoothReveal key={index}>
          <ProjectCard {...project} />
        </SmoothReveal>
      ))}
    </div>
  );
};
