import React from "react";
import Box from "./Box";
import Image from "./Image";
import Paragraph from "./Paragraph";

type Props = {
  className?: string;
  image: { src: string; alt: string; className?: string };
  title: { children: string; className?: string };
  subtitle?: { children: string; className?: string };
  [x: string]: any;
};

const ImageBox: React.FC<Props> = ({
  image,
  title,
  subtitle,
  className,
  ...rest
}) => {
  return (
    <Box className={className} {...rest}>
      <Image
        alt={image.alt}
        className={`w-12 ${image.className}`}
        src={image.src}
      />
      <Paragraph
        className={`text-body font-bold py-1 ${title?.className}`}
        children={title.children}
      />
      <Paragraph
        className={`text-body text-sm ${subtitle?.className}`}
        children={subtitle?.children}
      />
    </Box>
  );
};

export default ImageBox;
