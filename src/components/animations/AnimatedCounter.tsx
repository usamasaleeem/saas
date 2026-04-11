interface AnimatedCounterProps {
  value: number;
  direction?: "up" | "down";
  duration?: number;
  format?: (val: number) => string;
  className?: string;
}

export function AnimatedCounter({
  value,
  format = (val) => val.toLocaleString(),
  className,
}: AnimatedCounterProps) {
  return (
    <span className={className}>
      {format(value)}
    </span>
  );
}
