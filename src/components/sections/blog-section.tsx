import { ChevronRightIcon } from "@radix-ui/react-icons";
import {
  DatabaseZap,
  type LucideIcon,
  MonitorCog,
  TerminalIcon,
} from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import SmoothReveal from "../animations/smooth-reveal";

interface ListItem {
  id: string;
  title: string;
  description?: string;
  icon: LucideIcon;
  iconStyle: string;
  time: string;
  badge?: {
    text: string;
    variant: "pink" | "indigo" | "orange" | "green" | "emerald";
  };
  starred?: boolean;
  onClick?: () => void;
  link: string;
}

interface List01Props {
  items?: ListItem[];
  className?: string;
}

const iconStyles = {
  music:
    "from-pink-500/20 to-pink-500/10 text-pink-600 dark:from-pink-400/20 dark:to-pink-400/10 dark:text-pink-400",
  store:
    "from-indigo-500/20 to-indigo-500/10 text-indigo-600 dark:from-indigo-400/20 dark:to-indigo-400/10 dark:text-indigo-400",
  message:
    "from-emerald-500/20 to-emerald-500/10 text-emerald-600 dark:from-emerald-400/20 dark:to-emerald-400/10 dark:text-emerald-400",
};

const ITEMS: ListItem[] = [
  {
    id: "1",
    title: "The World of Computer Networks",
    description: "A brief introduction to computer networks",
    icon: MonitorCog,
    iconStyle: "music",
    time: "Mar 18, 2023",
    badge: { text: "Core", variant: "pink" },
    link: "https://tanayvaswani.hashnode.dev/computer-networks",
  },
  {
    id: "2",
    title: "Machine Learning and Artificial Intelligence",
    description: "A brief introduction to ML and AI",
    icon: TerminalIcon,
    iconStyle: "message",
    time: "May 13, 2023",
    badge: { text: "ML", variant: "emerald" },
    link: "https://tanayvaswani.hashnode.dev/machine-learning-and-artificial-intelligence-the-two-wheels-of-a-motorbike-part-1",
  },
  {
    id: "3",
    title: "Databases: Overview of Row vs Column Oriented",
    description: "Understanding the Differences, Use Cases, and Examples",
    icon: DatabaseZap,
    iconStyle: "store",
    time: "Nov 15, 2024",
    badge: { text: "Database", variant: "indigo" },
    link: "https://tanayvaswani.medium.com/databases-overview-of-row-vs-column-oriented-e7bf2fd0af6f",
  },
];

const badgeVariants = {
  pink: "bg-pink-500/10 text-pink-600 dark:bg-pink-400/10 dark:text-pink-300",
  indigo:
    "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-300",
  orange:
    "bg-orange-500/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-300",
  green:
    "bg-green-500/10 text-green-600 dark:bg-green-400/10 dark:text-green-300",
  emerald:
    "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300",
};

const BlogSection = ({ items = ITEMS, className }: List01Props) => {
  return (
    <SmoothReveal
      delay={0.3}
      className="flex flex-col items-start w-full gap-3"
    >
      <h1 className="text-[#EEEEEE] font-medium">Blogs</h1>
      <p className="text-[#B4B4B4] font-light mb-4">
        A collection of my blogs where I share experiences and ideas on
        technology, programming languages, databases, cloud and frameworks.
      </p>

      <div className={cn("w-full", className)}>
        <div className="w-full flex flex-col-reverse items-start gap-3">
          {items.map((item, index) => (
            <SmoothReveal delay={0.3} key={item.id ?? index} className="w-full">
              <Link
                href={item.link}
                target="_blank"
                className={cn(
                  "group relative flex items-start gap-3 p-4",
                  "bg-white/50 dark:bg-zinc-900/50",
                  "hover:bg-white/80 dark:hover:bg-zinc-800/30",
                  "backdrop-blur-lg",
                  "transition-all duration-300 ease-out",
                  "rounded-2xl w-full",
                  "border border-white/20 dark:border-zinc-800",
                  "shadow-sm hover:shadow-md",
                  item.onClick && "cursor-pointer"
                )}
              >
                <div
                  className={cn(
                    "flex-shrink-0 p-3 rounded-2xl",
                    "bg-gradient-to-br",
                    iconStyles[item.iconStyle as keyof typeof iconStyles],
                    "shadow-sm border border-white/10 dark:border-zinc-800 hover:border-zinc-700",
                    "transition-transform duration-300",
                    "group-hover:scale-105"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-medium text-zinc-900 dark:text-[#EEEEEE]">
                      {item.title}
                    </h3>

                    {item.badge && (
                      <span
                        className={cn(
                          "px-2.5 py-0.5 rounded-full text-xs font-light",
                          "transition-all duration-300",
                          "shadow-sm",
                          badgeVariants[
                            item.badge.variant as keyof typeof badgeVariants
                          ]
                        )}
                      >
                        {item.badge.text}
                      </span>
                    )}
                  </div>

                  {/* {item.description && (
                    <p className="text-sm text-zinc-600 dark:text-[#B4B4B4] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  )} */}

                  <span className="text-xs font-light italic text-zinc-400 dark:text-[#B4B4B4] block">
                    {item.time}
                  </span>
                </div>

                <ChevronRightIcon
                  className={cn(
                    "w-4 h-4 text-zinc-300 dark:text-[#B4B4B4]",
                    "group-hover:text-zinc-400 dark:group-hover:text-[#EEEEEE]",
                    "transition-all duration-300",
                    "mt-4",
                    "group-hover:translate-x-0.5"
                  )}
                />
              </Link>
            </SmoothReveal>
          ))}
        </div>
      </div>
    </SmoothReveal>
  );
};

export default BlogSection;
