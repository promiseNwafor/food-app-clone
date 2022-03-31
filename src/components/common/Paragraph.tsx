import React from "react";

type Props = {
  className?: string;
  [x: string]: any;
};

const Paragraph: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <p {...rest} className={className}>
      {children}
    </p>
  );
};

export default Paragraph;
