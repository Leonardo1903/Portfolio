"use client";

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padded?: boolean;
  maxWidth?: string;
}

const sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[90rem]",
  full: "max-w-full",
} as const;

const paddingClasses = {
  default: "px-4 md:px-8",
  none: "",
} as const;

export default function Container({
  children,
  className = "",
  size = "lg",
  padded = true,
  maxWidth,
}: ContainerProps) {
  return (
    <div
      className={`${maxWidth || sizeClasses[size]} mx-auto w-full ${
        padded ? paddingClasses.default : paddingClasses.none
      } ${className}`}
    >
      {children}
    </div>
  );
}