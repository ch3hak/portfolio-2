import { Rss } from "lucide-react";
import Link from "next/link";

import { Icons } from "./bottom-dock";

const socialRoutes = [
  {
    icon: Icons.github,
    title: "GitHub",
    url: "https://github.com/ch3hak",
  },
  {
    icon: Icons.linkedin,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/chehaksharma/",
  },
  {
    icon: Icons.x,
    title: "Twitter",
    url: "https://twitter.com/chehakksharma",
  },
  // {
  //   icon: Icons.medium,
  //   title: "Medium",
  //   url: "https://devforprajjwal.hashnode.dev/",
  // },
  {
    icon: Icons.email,
    title: "Email",
    url: "mailto:chehak.sharma293@gmail.com",
  },
  //{
  //   icon: Rss,
  //   title: "RSS",
  //   url: "/feed.xml",
  //   isExternal: false,
  // },
];

const Footer = () => {
  return (
    <div className="w-full bottom-0">
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

      <div className="md:max-w-screen-md md:mx-auto px-4 md:px-0 flex flex-col items-center gap-6 pt-6 pb-24">
        <div className="flex flex-wrap text-sm items-center justify-center gap-6 text-[#B4B4B4]">
          {socialRoutes.map((route, index) => (
            <Link
              key={index}
              href={route.url}
              target={!route.isExternal ? "_blank" : ""}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#EEEEEE] transition-all duration-200"
            >
              <route.icon className="h-4 w-4" /> {route.title}
            </Link>
          ))}
        </div>

        <p className="text-sm text-[#B4B4B4]">
          © 2026 Chehak Sharma. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
