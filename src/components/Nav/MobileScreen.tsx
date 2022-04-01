import { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import Box from "../common/Box";
import CancelIcon from "../../assets/svg/CancelIcon";
import Hamburger from "../../assets/svg/Hamburger";
import LogoMobile from "../../assets/svg/LogoMobile";

type Props = {};

const MobileScreen: React.FC<Props> = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => setToggleMenu((prevState) => !prevState);

  return (
    <Box className="flex items-center h-full relative lg:hidden">
      <Box className="px-4" onClick={toggleMenuHandler}>
        <CancelIcon
          className={`cursor-pointer transition ease duration-300 ${
            toggleMenu ? "w-6 h-6 opacity-1" : "w-0 h-0 opacity-0"
          }`}
        />
        <Hamburger
          className={`cursor-pointer transition ease duration-300 ${
            toggleMenu ? "w-0 h-0 opacity-0" : "w-6 h-6 opacity-1"
          }`}
        />
      </Box>
      <Box className="hover:bg-gray-100 flex items-center h-full">
        <Link to="">
          <LogoMobile />
        </Link>
      </Box>
      {toggleMenu && <MobileMenu />}
    </Box>
  );
};

export default MobileScreen;
