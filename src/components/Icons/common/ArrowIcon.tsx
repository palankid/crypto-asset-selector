import React from "react";

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 1.5L6 6.5L1 1.5"
    />
  </svg>
);

export default SvgComponent;
