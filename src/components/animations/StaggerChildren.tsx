/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from "@/lib/utils";

interface StaggerChildrenProps {
  children: React.ReactNode;
  delay?: number;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
}

export function StaggerChildren({
  children,
  className,
}: StaggerChildrenProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export const StaggerItem = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
