import React from "react";
import Box from "../common/Box";
import Card from "../common/Card";
import Image from "../common/Image";
import Paragraph from "../common/Paragraph";
import { SERVICES } from "./constants";

type Props = {};

const Services = (props: Props) => {
  return (
    <Box className="flex flex-wrap items-center justify-center">
      {SERVICES.map((service) => (
        <Card
          className="lg:w-56 cursor-pointer h-36 border border-gray-50 hover:border-green shadow-light my-4 lg:m-3 p-4"
          key={service.id}
        >
          <Image alt={service.title} className="w-12" src={service.imagePath} />
          <Paragraph
            className="text-orange font-bold py-1"
            children={service.title}
          />
          <Paragraph
            className="text-body text-xs"
            children={service.subtitle}
          />
        </Card>
      ))}
    </Box>
  );
};

export default Services;
