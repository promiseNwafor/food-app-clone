import React from "react";
import DesktopDisplay from "./DesktopDisplay";
import MenuMobile from "./MenuMobile";
import MobileDisplay from "./MobileDisplay";

type Props = {
  toggleMenu: boolean;
  lnHovered: boolean;
  acountHovered: boolean;
  toggleMenuHandler: () => void;
  hoverLnHandler: () => void;
  mouseOutLnHandler: () => void;
  hoverAccountHandler: () => void;
  mouseOutAccountHandler: () => void;
};

const LowerBar: React.FC<Props> = ({
  toggleMenu,
  lnHovered,
  acountHovered,
  mouseOutAccountHandler,
  hoverAccountHandler,
  mouseOutLnHandler,
  toggleMenuHandler,
  hoverLnHandler,
}) => {
  return (
    <React.Fragment>
      <div
        className={`shadow-lg h-16 flex flex-col justify-center z-20
        `}
      >
        <DesktopDisplay
          lnHovered={lnHovered}
          acountHovered={acountHovered}
          mouseOutAccountHandler={mouseOutAccountHandler}
          hoverAccountHandler={hoverAccountHandler}
          hoverLnHandler={hoverLnHandler}
          mouseOutLnHandler={mouseOutLnHandler}
        />
        <MobileDisplay
          toggleMenu={toggleMenu}
          toggleMenuHandler={toggleMenuHandler}
        />
      </div>
      <MenuMobile toggleMenu={toggleMenu} />
    </React.Fragment>
  );
};

export default LowerBar;
