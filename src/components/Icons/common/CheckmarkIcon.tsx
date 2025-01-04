import React from "react";

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 14 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.3333 1L4.99999 8.33333L1.66666 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
