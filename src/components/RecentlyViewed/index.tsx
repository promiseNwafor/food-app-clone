import { useAppSelector } from "../../app/hooks";
import Box from "../common/Box";
import Paragraph from "../common/Paragraph";
import Card from "../common/Card";
import Image from "../common/Image";
import ListItem from "../common/ListItem";
import { ITEMS } from "./contants";
import dot from "../../assets/svg/dot.svg";
import star from "../../assets/svg/star.svg";

type Props = {};

const RecentlyViewed = (props: Props) => {
  const user = useAppSelector((state) => state.user);

  return (
    <Box
      className={`${!user.isAuth && "hidden"} flex flex-col flex-center mt-12`}
    >
      <Paragraph
        className="capitalize font-semibold pb-4 text-text text-3xl md:text-h1"
        children="Recently Viewed"
      />
      <Box className="flex flex-wrap flex-center">
        {ITEMS.map((item) => (
          <Card key={item.id} className="w-80 text-text my-3 mx-4 shadow-none">
            <Box className="relative">
              <Image
                alt={item.title}
                src={item.image}
                className="w-full h-56 rounded-sm transition duration-500 hover:scale-105"
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
        ))}
      </Box>
    </Box>
  );
};

export default RecentlyViewed;
