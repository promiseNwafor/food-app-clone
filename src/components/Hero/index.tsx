import { useAppSelector } from "../../app/hooks";
import Box from "../common/Box";
import Paragraph from "../common/Paragraph";
import ListItem from "../common/ListItem";
import Image from "../common/Image";
import scanner from "../../assets/img/scan-code.png";
import rightSplash from "../../assets/img/jumiafood-homepage-right-splash-services.jpg";
import IconLocation from "../../assets/svg/IconLocation";
import Chevrondown from "../../assets/svg/Chevrondown";
import Services from "./Services";
import Input from "../common/Input";

const Hero = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <Box className="flex items-center justify-center font-muli">
      <Box className="hidden lg:block py-4 self-start">
        <Image src={scanner} className="w-full" alt="scan code" />
      </Box>
      <Box className="">
        <Box className="px-4 pt-10">
          <Paragraph
            className="text-text text-3xl md:text-4xl lg:text-h1 font-bold lg:text-center pb-3"
            children="Everything you need, delivered now"
          />
          <Box className="lg:ml-32">
            <ListItem listItemStyle="flex items-center font-bold">
              <IconLocation />
              <Box className="flex pl-1 items-center text-body">
                <Paragraph children="Delivering to" />
                <ListItem
                  listItemStyle={`${
                    !user.isAuth && "hidden"
                  } flex pl-1 items-center text-orange`}
                >
                  <Paragraph children="Reddington Lekki Hospital" />
                  <Chevrondown className="" />
                </ListItem>
              </Box>
            </ListItem>
            {!user.isAuth && (
              <Input className="" placeholder="Enter your delivery address" />
            )}
          </Box>
          <Paragraph
            className={`${
              !user.isAuth && "hidden md:block"
            } text-body font-bold pl-2 lg:ml-32`}
            children="Choose a service"
          />
          <Services />
        </Box>
      </Box>
      <Box className="self-start hidden lg:block">
        <Image className="w-full" src={rightSplash} alt="right splash" />
      </Box>
    </Box>
  );
};

export default Hero;
