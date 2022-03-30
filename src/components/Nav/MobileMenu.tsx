import { useState } from "react";
import Box from "../common/Box";
import Button from "../common/Button";
import ListItem from "../common/ListItem";
import Dropdown from "../common/Dropdown";
import { LANGUAGE } from "./NavItem";
import Chevrondown from "../../assets/svg/Chevrondown";
import PrimeIcon from "../../assets/svg/PrimeIcon";

type Props = {};

const MobileMenu: React.FC<Props> = () => {
  const [languageToggle, setLanguageToggle] = useState(false);

  const languageToggleHandler = () =>
    setLanguageToggle((prevState) => !prevState);

  return (
    <Box
      className={`lg:hidden absolute top-16 w-full shadow-y bg-white text-center py-2 overflow-hidden text-body z-10 font-muli transition ease duration-200`}
    >
      <Box className="mx-7">
        <ul className="">
          <ListItem listItemStyle="menu-list flex items-center justify-center">
            <PrimeIcon />
            <span className="inline-block">Jumia Prime</span>
          </ListItem>
          <ListItem
            onItemClickHandler={languageToggleHandler}
            listItemStyle="menu-list flex items-center justify-center"
          >
            <span className="inline-block mr-1">English</span>{" "}
            <Chevrondown className={`${languageToggle && "rotate-180"}`} />
          </ListItem>
          <Dropdown
            listItemProps={{
              className: `hover:bg-gray-50`,
              activeItemStyle: "bg-gray-50",
            }}
            boxStyle={`shadow-none capitalize py-2 transition ease duration-500 ${
              !languageToggle ? "h-0 overflow-hidden opacity-0 py-0" : ""
            }`}
            ulStyle="px-0"
            dropdownMapItems={LANGUAGE}
          />
          <ListItem listItemStyle="menu-list">Vendors</ListItem>
          <ListItem listItemStyle="menu-list">Help</ListItem>
          <ListItem listItemStyle="menu-list">My account</ListItem>
        </ul>
        <Button
          className="hover:bg-black w-full font-semibold text-sm uppercase text-white rounded-sm bg-body mb-2 py-2"
          children="Log out"
        />
      </Box>
    </Box>
  );
};

export default MobileMenu;
