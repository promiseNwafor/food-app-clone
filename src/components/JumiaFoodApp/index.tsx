import Box from "../common/Box";
import feature from "../../assets/img/jumia-food-app-mockup.png";
import Image from "../common/Image";
import Paragraph from "../common/Paragraph";

type Props = {};

const JumiaFoodApp = (props: Props) => {
  return (
    <Box className="flex flex-col font-muli text-white bg-orange px-20 pt-12 pb-72  relative">
      <Image
        alt="jumia-for-corporate"
        src={feature}
        className="hidden lg:block w-1/2 absolute bottom-0 right-32"
      />
      <Box className="w-full flex flex-col lg:w-half">
        <Paragraph
          className="font-bold text-xl md:text-2xl lg:text-5xl pb-7"
          children="Order food"
        />
        <Paragraph
          className="text-xl md:text-2xl lg:text-2xl"
          children="The Jumia Food app makes it simple for anybody to use a mobile device to look over the menu of the best vendors and place an order for home delivery"
        />
      </Box>
    </Box>
  );
};

export default JumiaFoodApp;
