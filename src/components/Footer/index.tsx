import Box from "../common/Box";
import Image from "../common/Image";
import ListItem from "../common/ListItem";
import Paragraph from "../common/Paragraph";
import { CITY, CUISINES, JUMIA_FOOD, POPULAR_VENDORS } from "./constants";
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";
import instagram from "../../assets/svg/instagram.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box className="pl-5 p-2 pt-20 font-muli bg-body text-white">
      <Box className="lg:flex flex-wrap justify-center">
        <Box className="lg:w-23">
          <Paragraph className="font-semibold py-5" children="City" />
          {CITY.map((city, i) => (
            <ListItem
              listItemStyle="py-0 text-gray-300 text-sm leading-6"
              key={i}
              children={city}
            />
          ))}
        </Box>
        <Box className="lg:w-23">
          <Paragraph className="font-semibold py-5" children="Cuisines" />
          {CUISINES.map((cuisine, i) => (
            <ListItem
              listItemStyle="py-0 text-gray-300 text-sm leading-6"
              key={i}
              children={cuisine}
            />
          ))}
        </Box>
        <Box className="lg:w-23">
          <Paragraph
            className="font-semibold py-5"
            children="Popular vendors"
          />
          {POPULAR_VENDORS.map((vendor, i) => (
            <ListItem
              listItemStyle="py-0 text-gray-300 text-sm leading-6"
              key={i}
              children={vendor}
            />
          ))}
        </Box>
        <Box className="lg:w-23">
          <Paragraph className="font-semibold py-5" children="Jumia Food" />
          {JUMIA_FOOD.map((item, i) => (
            <ListItem
              listItemStyle="py-0 text-gray-300 text-sm leading-6"
              key={i}
              children={item}
            />
          ))}
          <Paragraph className="font-semibold py-5" children="Contact us" />
          <ListItem listItemStyle="flex">
            <Image className="mr-2" alt="tw" src={twitter} />
            <Image className="mr-2" alt="fb" src={facebook} />
            <Image className="mr-2" alt="ig" src={instagram} />
          </ListItem>
        </Box>
      </Box>
      <Box className="lg:flex justify-between lg:p-5 text-gray-300">
        <Paragraph
          className="my-3 lg:my-0"
          children="Terms and Conditions  ·  Privacy Policy"
        />
        <Paragraph children="© Copyright 2022 Jumia Food is a registered trademark" />
      </Box>
    </Box>
  );
};

export default Footer;
