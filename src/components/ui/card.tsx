import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

export const Card = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("glass-surface p-6", className)} {...props} />
);
