"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoaderIcon, PhoneCall } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import SmoothReveal from "../animations/smooth-reveal";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Please enter your name.",
  }),
  email: z
    .string({
      message: "Please provide a valid email address.",
    })
    .email(),
});

interface CardProps {
  author?: {
    name?: string;
    username?: string;
    avatar?: string;
    timeAgo?: string;
  };
  content?: {
    text?: string;
    link?: {
      title?: string;
      description?: string;
      icon?: React.ReactNode;
    };
  };
  engagement?: {
    likes?: number;
    comments?: number;
    shares?: number;
    isLiked?: boolean;
    isBookmarked?: boolean;
  };
}

const defaultProps: CardProps = {
  author: {
    name: "Chehak Sharma",
    username: "ch3hak",
    avatar: "/chehak.jpeg",
    timeAgo: "4th April",
  },
  content: {
    text: "Subscribe by entering your email below to stay updated about the latest things I've created and discover the great finds I've come across on the internet.",
  },
};

export default function StayConnected({
  author = defaultProps.author,
  content = defaultProps.content,
}: CardProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "about-me" });

      cal("ui", {
        styles: { branding: { brandColor: "#141415" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const data = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const response = await data.json();

      if (!data.ok) {
        console.error(response.error);
        toast.error(response.error);
        throw new Error(response.error);
      }

      if (data.ok) {
        toast.success(response.message);
        form.reset();
      }
    } catch (error) {
      console.error(error);
    }
  }

  const isLoading = form.formState.isSubmitting;

  return (
    <SmoothReveal
      delay={0.3}
      className={cn(
        "w-full",
        "bg-white dark:bg-[#141415]",
        "border border-zinc-200 dark:border-zinc-800",
        "rounded-2xl shadow-sm"
      )}
    >
      <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Image
                src={"/chehak.jpeg"}
                alt={"ChehakSharma"}
                width={42}
                height={42}
                className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-zinc-800"
              />

              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {author?.name}
                </h3>

                <p className="text-xs text-zinc-500 dark:text-[#B4B4B4]">
                  @{author?.username} · {author?.timeAgo}
                </p>
              </div>
            </div>
          </div>
          {/* <p className="text-sm text-zinc-600 dark:text-[#B4B4B4] mb-4">
            {content?.text}
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="gap-2 flex flex-col md:flex-row items-center h-full w-full"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full md:w-5/12">
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                disabled={isLoading}
                className="border w-full md:w-3/12"
                type="submit"
              >
                {isLoading ? (
                  <LoaderIcon className="h-4 w-4 animate-spin" />
                ) : (
                  "Join now!"
                )}
              </Button>
            </form>
          </Form> */}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between p-6 border-t border-dashed gap-3">
          <span className="w-full text-sm text-zinc-600 dark:text-[#B4B4B4]">
            You can schedule a call with me to discuss anything
            you&apos;d like. I&apos;m always open to new ideas and
            opportunities.
          </span>

          <Button
            data-cal-namespace="about-me"
            data-cal-link="chehaksharma/30min"
            data-cal-config='{"layout":"month_view"}'
            className={cn(
              "w-full md:w-[117px]",
              "bg-emerald-50 dark:bg-emerald-950",
              "hover:bg-emerald-100 dark:hover:bg-emerald-900",
              "text-emerald-600 dark:text-emerald-300",
              "border border-emerald-200 dark:border-emerald-800"
            )}
          >
            <PhoneCall className="h-4 w-4" />
            Cal.com
          </Button>
        </div>
      </div>
    </SmoothReveal>
  );
}
