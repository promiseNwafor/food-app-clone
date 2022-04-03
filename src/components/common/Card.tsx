import React from "react";
import Box from "./Box";

type Props = {
  className?: string;
};

const Card: React.FC<Props> = ({ className, children }) => {
  return (
    <Box className={`shadow-lg bg-white w-full rounded-sm ${className}`}>
      {children}
    </Box>
  );
};

export default Card;
