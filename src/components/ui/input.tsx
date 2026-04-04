import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full px-3 py-2",
          "rounded-lg",
          "bg-white dark:bg-zinc-950/20",
          "border border-zinc-200 dark:border-zinc-800",
          "text-sm text-zinc-900 dark:text-zinc-100",
          "placeholder:text-zinc-400 dark:placeholder:text-zinc-600",
          "transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-zinc-500/20",
          "border-zinc-500",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
