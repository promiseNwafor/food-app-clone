import { useAppSelector } from "../../app/hooks";
import Box from "../common/Box";
import Paragraph from "../common/Paragraph";
import { ITEMS } from "./contants";
import CardContent from "../common/CardContent";

const RecentlyViewed = () => {
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
          <CardContent item={item} key={item.id} />
        ))}
      </Box>
    </Box>
  );
};

export default RecentlyViewed;
