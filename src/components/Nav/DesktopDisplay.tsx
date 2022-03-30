import { useState } from "react";
import { ACCOUNT, LANGUAGE } from "./NavItem";
import Dropdown from "../common/Dropdown";
import Box from "../common/Box";
import Paragraph from "../common/Paragraph";
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
    <Box className="hidden lg:grid grid-cols-4 items-center justify-between px-8 md:px-16 lg:px-20">
      <Box className="px-4 col-span-1 py-2">
        <Logo />
      </Box>
      <Box className="flex items-center h-full col-span-3 justify-self-end font-muli font-medium text-body">
        <Box
          onMouseEnter={languageHoverHandler}
          onMouseLeave={languageHoverHandler}
          className="px-4 mx-1 flex h-full items-center uppercase relative"
        >
          <Paragraph className="mr-1">English</Paragraph>
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
        </Box>
        <Box className="px-4 mx-1 uppercase">
          <Paragraph>Help</Paragraph>
        </Box>
        <Box
          onMouseEnter={accountHoverHandler}
          onMouseLeave={accountHoverHandler}
          className="px-4 mx-1 bg-white h-full flex items-center relative"
        >
          <Box className="bg-gray-100 rounded-full p-1 mr-1">
            <User />
          </Box>
          <Paragraph className="mx-1">Promise Nwafor</Paragraph>
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
        </Box>
      </Box>
    </Box>
  );
};

export default DesktopDisplay;
