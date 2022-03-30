import Box from "../common/Box";
import DesktopDisplay from "./DesktopDisplay";
import MobileDisplay from "./MobileDisplay";

type Props = {};

const LowerBar: React.FC<Props> = () => {
  return (
    <Box className="shadow-lg h-16 flex flex-col justify-center z-20">
      <DesktopDisplay />
      <MobileDisplay />
    </Box>
  );
};

export default LowerBar;
