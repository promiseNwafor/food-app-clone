import { useState } from "react";
import { ACCOUNT, LANGUAGE } from "./NavItem";
import Dropdown from "../common/Dropdown";
import Logo from "../../assets/svg/Logo";
import Chevrondown from "../../assets/svg/Chevrondown";
import User from "../../assets/svg/User";

type Props = {};

const DesktopDisplay: React.FC<Props> = () => {
  const [languageHovered, setLanguageHovered] = useState(false);
  const [accountHovered, setAccountHovered] = useState(false);

  const languageHoverHandler = () =>
    setLanguageHovered((prevState) => !prevState);

  const accountHoverHandler = () =>
    setAccountHovered((prevState) => !prevState);

  return (
    <div className="hidden lg:grid grid-cols-4 items-center justify-between px-8 md:px-16 lg:px-20">
      <div className="px-4 col-span-1 py-2">
        <Logo />
      </div>
      <div className="flex items-center h-full col-span-3 justify-self-end font-muli font-medium text-body">
        <div
          onMouseEnter={languageHoverHandler}
          onMouseLeave={languageHoverHandler}
          className="px-4 mx-1 flex h-full items-center uppercase relative"
        >
          <p className="mr-1">English</p>
          <Chevrondown />
          {languageHovered && (
            <Dropdown
              boxStyle="absolute w-full top-10 inset-x-0 border-t border-gray-300"
              listItemProps={{
                className: "capitalize py-1",
                activeItemStyle: "text-orange",
              }}
              dropdownMapItems={LANGUAGE}
            />
          )}
        </div>
        <div className="px-4 mx-1 uppercase">
          <p>Help</p>
        </div>
        <div
          onMouseEnter={accountHoverHandler}
          onMouseLeave={accountHoverHandler}
          className="px-4 mx-1 bg-white h-full flex items-center relative"
        >
          <div className="bg-gray-100 rounded-full p-1 mr-1">
            <User />
          </div>
          <p className="mx-1">Promise Nwafor</p>
          <Chevrondown />
          {accountHovered && (
            <Dropdown
              boxStyle="absolute w-full top-11 inset-x-0 border-t border-gray-300"
              listItemProps={{ className: "capitalize py-1" }}
              dropdownMapItems={ACCOUNT}
              buttonProps={{
                children: "Log out",
                className:
                  "w-full pt-2 px-5 mt-2 text-left border-t border-gray-300",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopDisplay;
