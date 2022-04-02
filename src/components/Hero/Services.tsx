import { useAppSelector } from "../../app/hooks";
import Box from "../common/Box";
import Card from "../common/Card";
import Image from "../common/Image";
import Paragraph from "../common/Paragraph";
import { SERVICES } from "./constants";

type Props = {};

const Services = (props: Props) => {
  const user = useAppSelector((state) => state.user);

  return (
    <Box
      className={`${
        !user.isAuth && "hidden md:flex"
      } flex flex-wrap items-center justify-center`}
    >
      {SERVICES.map((service) => (
        <Card
          className={`lg:w-56 h-36 border border-gray-50 shadow-light my-4 lg:m-3 p-4 ${
            user.isAuth && "cursor-pointer hover:border-green"
          }`}
          key={service.id}
        >
          <Image alt={service.title} className="w-12" src={service.imagePath} />
          <Paragraph
            className={`text-orange font-bold py-1 ${
              !user.isAuth && "text-gray-300"
            }`}
            children={service.title}
          />
          <Paragraph
            className={`text-body text-xs ${!user.isAuth && "text-gray-300"}`}
            children={service.subtitle}
          />
        </Card>
      ))}
    </Box>
  );
};

export default Services;
