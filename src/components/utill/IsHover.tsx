import React, { useState } from "react";
import { IsHoverProps } from "../../types/props";

export default function IsHover({
  children,
  baseClass,
  hoverClass
}: IsHoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${baseClass} ${isHovered ? hoverClass : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}
