import type { ButtonHTMLAttributes } from "react";
import "../../styles/button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "large";
  href?: string;
}

export function Button({
  variant = "primary",
  size = "default",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const cls = `btn btn-${variant} btn-${size} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
