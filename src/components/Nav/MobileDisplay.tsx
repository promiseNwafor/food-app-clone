import { useState } from "react";
import { Link } from "react-router-dom";
import CancelIcon from "../../assets/svg/CancelIcon";
import Hamburger from "../../assets/svg/Hamburger";
import LogoMobile from "../../assets/svg/LogoMobile";
import MobileMenu from "./MobileMenu";

type Props = {};

const MobileDisplay: React.FC<Props> = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => setToggleMenu((prevState) => !prevState);

  return (
    <div className="flex items-center h-full relative lg:hidden">
      <div className="px-4" onClick={toggleMenuHandler}>
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
      </div>
      <div className="hover:bg-gray-100 flex items-center h-full">
        <Link to="">
          <LogoMobile />
        </Link>
      </div>
      {toggleMenu && <MobileMenu />}
    </div>
  );
};

export default MobileDisplay;
