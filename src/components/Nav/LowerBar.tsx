import Box from "../common/Box";
import DesktopScreen from "./DesktopScreen";
import MobileScreen from "./MobileScreen";

type Props = {};

const LowerBar: React.FC<Props> = () => {
  return (
    <Box className="sticky bg-white top-0 shadow-lg z-50 h-16 flex flex-col justify-center">
      <DesktopScreen />
      <MobileScreen />
    </Box>
  );
};

export default LowerBar;
