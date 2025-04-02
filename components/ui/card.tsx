import { cn } from "../../lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div className={cn("rounded-lg border bg-white text-black shadow-sm", className)} {...props} />
  );
}

export function CardContent({ className, ...props }: CardProps) {
  return (
    <div className={cn("p-4", className)} {...props} />
  );
}
