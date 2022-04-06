import React from "react";

type Props = {
  className?: string;
  type?: string;
  [x: string]: any;
};

const Input: React.FC<Props> = ({ className, type, ...rest }) => {
  return (
    <input
      type={type}
      {...rest}
      className={`border w-full p-3 mb-4 outline-none text-sm ${className}`}
    />
  );
};

export default Input;
