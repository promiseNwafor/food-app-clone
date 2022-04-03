import React from "react";
import Box from "./Box";

type Props = {
  className?: string;
  type?: string;
  [x: string]: any;
};

const Input: React.FC<Props> = ({ className, type, ...rest }) => {
  return (
    <Box>
      <input
        type={type}
        {...rest}
        className={`border w-full p-3 mb-4 text-sm ${className}`}
      />
    </Box>
  );
};

export default Input;
