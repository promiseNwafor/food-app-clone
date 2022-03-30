import Phone from "../../assets/svg/Phone";
import Box from "../common/Box";
import Paragraph from "../common/Paragraph";

const TopBar = () => {
  return (
    <Box className="flex items-center justify-center h-17 text-base bg-primary font-arial">
      <Paragraph className="">
        Need help placing an order? Call: <a href="tel:018832408">018832408 </a>
        or <a href="tel:017000556">017000556</a>
      </Paragraph>
      <Phone />
    </Box>
  );
};

export default TopBar;
