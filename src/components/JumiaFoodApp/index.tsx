import Box from "../common/Box";
import Image from "../common/Image";
import Paragraph from "../common/Paragraph";
import feature from "../../assets/img/jumia-food-app-mockup.png";
import apple from "../../assets/svg/apple.svg";
import android from "../../assets/svg/android.svg";

type Props = {};

const JumiaFoodApp = (props: Props) => {
  return (
    <Box className="flex flex-col font-muli text-white bg-orange px-20 pt-12 pb-20 lg:pb-28 relative">
      <Image
        alt="jumia-for-corporate"
        src={feature}
        id="app-image"
        className="hidden lg:block w-2/5 scale-125 absolute -top-28 right-48"
      />
      <Box className="w-full flex flex-col lg:w-half">
        <Paragraph
          className="font-bold text-center lg:text-left text-xl md:text-2xl lg:text-5xl pb-7"
          children="Order food"
        />
        <Paragraph
          className="hidden lg:block text-xl md:text-2xl lg:text-xl"
          children="The Jumia Food app makes it simple for anybody to use a mobile device to look over the menu of the best vendors and place an order for home delivery"
        />
        <Box className="pt-0 lg:pt-8 block mx-auto md:mx-0 sm:flex justify-center lg:justify-start">
          <Image
            className="border cursor-pointer rounded-sm mt-0 lg:mt-2 m-2 lg:ml-0 py-3 px-10"
            alt="apple"
            src={apple}
          />
          <Image
            className="border cursor-pointer rounded-sm mt-0 lg:mt-2 m-2 py-3 px-8"
            alt="android"
            src={android}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default JumiaFoodApp;
