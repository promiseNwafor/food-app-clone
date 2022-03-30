import React from "react";

type Props = {
  className?: string;
  [x: string]: any;
};

const Box: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

export default Box;
