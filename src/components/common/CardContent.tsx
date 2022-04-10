import React from "react";
import Box from "./Box";
import Paragraph from "./Paragraph";
import Card from "./Card";
import Image from "./Image";
import ListItem from "./ListItem";
import dot from "../../assets/svg/dot.svg";
import star from "../../assets/svg/star.svg";

type Props = {
  item: {
    id: number;
    title: string;
    tag: string[];
    image: string;
    rating: number;
    star: number;
  };
  className?: string;
};

const CardContent: React.FC<Props> = ({ item, className }) => {
  return (
    <Card
      key={item.id}
      className={`lg:w-80 px-2 text-text my-3 mx-4 shadow-none ${className}`}
    >
      <Box className="relative overflow-hidden">
        <Image
          alt={item.title}
          src={item.image}
          className="w-full h-52 rounded-sm object-cover transition duration-500 transform hover:scale-105"
        />
        <Paragraph
          className="absolute font-semibold text-lg bottom-0 right-0 bg-white rounded-tl-lg pt-1 px-2"
          children="20-40 min"
        />
        <Paragraph
          className="absolute font-semibold text-lg top-2 right-0 text-white bg-orange rounded-l-sm pt-1 px-2"
          children="New"
        />
        <Paragraph
          className="absolute font-semibold text-lg top-1/2 left-1/3 text-white bg-red-600 rounded-sm pt-1 px-4"
          children="Closed"
        />
      </Box>
      <Paragraph
        className="capitalize text-lg font-semibold mt-3"
        children={item.title}
      />
      <Box className="flex items-center text-gray-500">
        <Paragraph className="capitalize flex items-center mr-2">
          <Image src={star} alt="star" className=" mr-1" />
          <span>{item.rating}</span>
        </Paragraph>
        <ListItem listItemStyle="capitalize py-0 flex items-center">
          <Image src={dot} alt="dot" className="" />
          <span className=""> &#8358;</span>
        </ListItem>
        {item.tag.map((tag, i) => (
          <ListItem
            key={`${tag}${i}`}
            listItemStyle="py-0 text-lg font-normal flex items-center"
          >
            <Image src={dot} alt="dot" className="" />
            <span>{`${tag}`}</span>
          </ListItem>
        ))}
      </Box>
    </Card>
  );
};

export default CardContent;
