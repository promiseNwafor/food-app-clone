import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Box from "../common/Box";
import CardContent from "../common/CardContent";
import Paragraph from "../common/Paragraph";
import { HAPPY_HOUR_DEALS } from "./constants";

type Props = {};

const Service = (props: Props) => {
  const params = useParams();
  const location = useLocation();

  return (
    <Box className="py-10 font-muli">
      <Box className="flex py-2 px-17">
        <Paragraph className="text-gray-500" children="Home > " />
        <Paragraph className="font-bold ml-1" children="Vendor" />
      </Box>
      <Box className="flex flex-wrap justify-center">
        {HAPPY_HOUR_DEALS.map((item) => (
          <CardContent className="lg:w-72" item={item} key={item.id} />
        ))}
      </Box>
    </Box>
  );
};

export default Service;
