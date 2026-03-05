import type { ReactNode, CSSProperties } from "react";

interface AccentTextProps {
  children: ReactNode;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
  style?: CSSProperties;
}

export function GradientText({
  children,
  as: Tag = "span",
  className = "",
  style,
}: AccentTextProps) {
  return (
    <Tag
      className={className}
      style={{ color: "var(--accent)", ...style }}
    >
      {children}
    </Tag>
  );
}
