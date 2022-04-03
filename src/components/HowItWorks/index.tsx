import { useAppSelector } from "../../app/hooks";
import Box from "../common/Box";
import ImageBox from "../common/ImageBox";
import Paragraph from "../common/Paragraph";
import { ITEMS } from "./constants";

const HowItWorks = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <Box
      className={`flex-center hidden flex-col font-muli ${
        !user.isAuth && "lg:flex"
      }`}
    >
      <Paragraph
        className="capitalize font-semibold text-text text-h1"
        children="How it works"
      />
      <Box className="flex">
        {ITEMS.map((item) => (
          <ImageBox
            className="mx-24 my-10 flex flex-col flex-center"
            image={{ src: item.path, alt: item.title, className: "w-24 mb-2" }}
            title={{
              children: item.title,
              className: `font-bold text-text text-2xl py-2`,
            }}
            subtitle={{
              children: item.subtitle,
              className: `text-gray-500`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HowItWorks;
