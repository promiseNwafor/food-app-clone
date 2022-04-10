import React from "react";
import Box from "./Box";

type Props = {
  className?: string;
  [x: string]: any;
};

const Card: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <Box
      {...rest}
      className={`shadow-lg bg-white w-full rounded-sm ${className}`}
    >
      {children}
    </Box>
  );
};

export default Card;
