import { ACCOUNT, LANGUAGE } from "./NavDropdownItem";
import AccountMenuDropdown from "./AccountMenuDropdown";
import DropdownMenu from "../common/DropdownMenu";
import Logo from "../../assets/svg/Logo";

type Props = {
  lnHovered: boolean;
  acountHovered: boolean;
  hoverLnHandler: () => void;
  mouseOutLnHandler: () => void;
  hoverAccountHandler: () => void;
  mouseOutAccountHandler: () => void;
};

const DesktopDisplay: React.FC<Props> = ({
  lnHovered,
  acountHovered,
  mouseOutAccountHandler,
  hoverAccountHandler,
  hoverLnHandler,
  mouseOutLnHandler,
}) => {
  return (
    <div className="hidden lg:grid grid-cols-4 items-center justify-between px-8 md:px-16 lg:px-20">
      <div className="px-4 col-span-1">
        <Logo />
      </div>
      <div className="flex items-center col-span-3 justify-self-end font-muli font-medium text-body">
        <DropdownMenu
          menuItems={LANGUAGE}
          hoverLnHandler={hoverLnHandler}
          mouseOutLnHandler={mouseOutLnHandler}
          lnHovered={lnHovered}
          label="English"
        />
        <div className="px-4 mx-1 uppercase">
          <p>Help</p>
        </div>
        <AccountMenuDropdown
          menuItems={ACCOUNT}
          hoverHandler={hoverAccountHandler}
          mouseOutHandler={mouseOutAccountHandler}
          isHovered={acountHovered}
        />
      </div>
    </div>
  );
};

export default DesktopDisplay;
