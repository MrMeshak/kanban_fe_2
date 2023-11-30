import * as React from "react";

export interface ILogoProps {
  className?: string;
  fill?: string;
}

export default function Logo({
  className = "h-5 w-6",
  fill = "#635fc7",
}: ILogoProps) {
  return (
    <svg
      className={className}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={fill} fillRule="evenodd">
        <rect width="6" height="25" rx="2" />
        <rect opacity=".75" x="9" width="6" height="25" rx="2" />
        <rect opacity=".5" x="18" width="6" height="25" rx="2" />
      </g>
    </svg>
  );
}
