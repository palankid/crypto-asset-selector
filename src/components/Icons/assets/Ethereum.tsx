import React from "react";

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="ethereum-icon"
    {...props}
  >
    <path
      d="M4.96268 11.98L0.0533447 9.08L4.96201 16L9.87535 9.08L4.96068 11.98H4.96268ZM5.03734 0L0.126678 8.14867L5.03668 11.0513L9.94668 8.15133L5.03734 0Z"
      fill="currentColor"
      transform="translate(3, 1)"
    />
  </svg>
);
export default SvgComponent;
