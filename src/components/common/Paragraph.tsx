import React from "react";

type Props = {
  className?: string;
};

const Paragraph: React.FC<Props> = ({ className, children }) => {
  return <p className={className}>{children}</p>;
};

export default Paragraph;
