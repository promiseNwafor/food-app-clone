import Box from "../common/Box";
import feature from "../../assets/img/jumia-for-corporate.jpg";
import Image from "../common/Image";
import Paragraph from "../common/Paragraph";

type Props = {};

const JumiaForCorporate = (props: Props) => {
  return (
    <Box className="flex flex-col flex-center font-muli text-text mt-5 bg-gray-100 lg:bg-white py-10  lg:py-36 relative">
      <Image
        alt="jumia-for-corporate"
        src={feature}
        id="corporate-image"
        className="hidden lg:block absolute -left-40 scale-105"
      />
      <Box className="w-full flex flex-col flex-center lg:w-2/5 text-center px-6 lg:px-0 lg:pt-10">
        <Paragraph
          className="font-bold text-xl md:text-2xl lg:text-5xl pb-7"
          children="Jumia Food for Corporate"
        />
        <Paragraph
          className="text-xl md:text-2xl lg:text-2xl"
          children="Order lunch, fuel for meetings or late-night deliveries to the office. Your favorite vendors coming to a desk near you."
        />
      </Box>
    </Box>
  );
};

export default JumiaForCorporate;
