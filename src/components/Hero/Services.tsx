import { useAppSelector } from "../../app/hooks";
import Box from "../common/Box";
import Card from "../common/Card";
import ImageBox from "../common/ImageBox";
import { SERVICES } from "./constants";

const Services = () => {
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
          <ImageBox
            image={{ src: service.imagePath, alt: service.title }}
            title={{
              children: service.title,
              className: `text-orange font-bold py-1 ${
                !user.isAuth && "text-gray-300"
              }`,
            }}
            subtitle={{
              children: service.subtitle,
              className: `text-xs ${!user.isAuth && "text-gray-300"}`,
            }}
          />
        </Card>
      ))}
    </Box>
  );
};

export default Services;
