import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/navigation/bottom-dock";

import SmoothReveal from "@/components/animations/smooth-reveal";
import Link from "next/link";

interface Profile02Props {
  name?: string;
  role?: string;
  avatar?: string;
  location?: string;
  email?: string;
  website?: string;
  bio?: string;
}

const defaultProfile = {
  name: "Chehak Sharma",
  role: "Full Stack Developer",
  avatar: "/chehak.jpeg",
  location: "New Delhi, India",
  email: "chehak.sharma293@gmail.com",
  website: "chehaksharma",
  bio: " Learning to write Scalable, Full Stack Realtime applications.",
} satisfies Required<Profile02Props>;

const ProfileCard = ({
  name = defaultProfile.name,
  role = defaultProfile.role,
  avatar = defaultProfile.avatar,
  location = defaultProfile.location,
  email = defaultProfile.email,
  website = defaultProfile.website,
  bio = defaultProfile.bio,
}: Partial<Profile02Props> = defaultProfile) => {
  return (
    <SmoothReveal className="w-full">
      <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-[#141415] backdrop-blur-sm">
        <div className="flex items-start gap-5">
          <Image
            src={avatar}
            alt={name}
            width={80}
            height={80}
            className="rounded-lg object-cover ring-1 ring-zinc-200 dark:ring-zinc-800"
          />

          <div className="flex-1 min-w-0">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
              <div>
                <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  {name}
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {role}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-[#111111] border-zinc-800 hover:bg-zinc-800/50"
                  asChild
                >
                  <Link
                    href={`https://github.com/ch3hak`}
                    target="_blank"
                  >
                    <Icons.github className="w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="bg-[#111111] border-zinc-800 hover:bg-zinc-800/50"
                  asChild
                >
                  <Link href={`https://x.com/chehakksharma`} target="_blank">
                    <Icons.x className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <MapPin className="w-4 h-4" />
                {location}
              </div>

              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <Mail className="w-4 h-4" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors truncate"
                >
                  {email}
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <Icons.linkedin className="w-4 h-4" />

                <Link
                  href={`https://linkedin.com/in/chehaksharma`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-1"
                >
                  {website}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="md:ml-[100px] mt-6">
          <p className="text-sm text-zinc-600 dark:text-[#B4B4B4] leading-relaxed">
            {bio}
          </p>
        </div>
      </div>
    </SmoothReveal>
  );
};

export default ProfileCard;
