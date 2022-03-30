import React from "react";

type Props = {
  className?: string;
  [x: string]: any;
};

const Button: React.FC<Props> = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};

export default Button;
