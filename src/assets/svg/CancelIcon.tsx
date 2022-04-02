import React from "react";

type Props = {
  className?: string;
  [x: string]: any;
};

const CancelIcon: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="#2A2A2A"
      strokeWidth={2}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default React.memo(CancelIcon);
