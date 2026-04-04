"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  company?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

const ExperienceCard = ({
  logoUrl,
  altText,
  title,
  company,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  return (
    <div className="w-full flex items-center gap-3">
      <Avatar
        className={cn(
          "border-2 size-14 m-auto",
          company == "TurboML, Inc." && "border-[#FE6A34]",
          company == "Documenso, Inc." && "border-[#A2E771]"
        )}
      >
        <AvatarImage
          src={logoUrl}
          alt={altText}
          className={cn(
            "object-contain bg-white border-zinc-800",
            company == "TurboML, Inc." && "p-2"
          )}
        />
        <AvatarFallback>{altText[0]}</AvatarFallback>
      </Avatar>

      <div className="flex-grow items-center flex-col group w-full">
        <div className="flex items-center justify-between gap-x-2 text-base w-full">
          <h3 className="inline-flex items-center justify-center">
            {title}

            {badges && (
              <span className="inline-flex gap-x-1">
                {badges.map((badge, index) => (
                  <Badge
                    variant="secondary"
                    className="align-middle text-xs"
                    key={index}
                  >
                    {badge}
                  </Badge>
                ))}
              </span>
            )}
          </h3>

          <div className="tabular-nums text-right text-sm text-[#B4B4B4] hidden md:block">
            {period}
          </div>
        </div>

        {company && <div className="text-[#B4B4B4]">{company}</div>}
      </div>

      {description && (
        <div className="mt-2 text-sm text-[#B4B4B4]">{description}</div>
      )}
    </div>
  );
};

export default ExperienceCard;
