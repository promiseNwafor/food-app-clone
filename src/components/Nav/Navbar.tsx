import { Fragment, FC, useState } from "react";
import TopBar from "./TopBar";
import LowerBar from "./LowerBar";

const Navbar: FC<{}> = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [lnHovered, setLnHovered] = useState(false);
  const [acountHovered, setAccountHovered] = useState(false);

  const toggleMenuHandler = () => setToggleMenu((prevState) => !prevState);
  const mouseOutAccountHandler = () => setAccountHovered(() => false);
  const mouseOutLnHandler = () => setLnHovered(() => false);

  const hoverLnHandler = () => {
    acountHovered && setAccountHovered(() => false);
    setLnHovered(() => true);
  };

  const hoverAccountHandler = () => {
    lnHovered && setLnHovered(() => false);
    setAccountHovered(() => true);
  };

  return (
    <Fragment>
      <TopBar />
      <LowerBar
        toggleMenu={toggleMenu}
        lnHovered={lnHovered}
        acountHovered={acountHovered}
        mouseOutAccountHandler={mouseOutAccountHandler}
        hoverAccountHandler={hoverAccountHandler}
        mouseOutLnHandler={mouseOutLnHandler}
        toggleMenuHandler={toggleMenuHandler}
        hoverLnHandler={hoverLnHandler}
      />
    </Fragment>
  );
};

export default Navbar;
