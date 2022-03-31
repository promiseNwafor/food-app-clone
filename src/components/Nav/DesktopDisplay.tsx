import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { signin, signout } from "../../store/authSlice";
import { ACCOUNT, LANGUAGE } from "./NavItem";
import Button from "../common/Button";
import Dropdown from "../common/Dropdown";
import Box from "../common/Box";
import Paragraph from "../common/Paragraph";
import Logo from "../../assets/svg/Logo";
import Chevrondown from "../../assets/svg/Chevrondown";
import User from "../../assets/svg/User";

const DesktopDisplay = () => {
  const [languageHovered, setLanguageHovered] = useState(false);

  const languageHoverHandler = () =>
    setLanguageHovered((prevState) => !prevState);

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
        <AccountStateDisplay />
      </Box>
    </Box>
  );
};

const AccountStateDisplay = () => {
  const [accountHovered, setAccountHovered] = useState(false);
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const accountHoverHandler = () =>
    setAccountHovered((prevState) => !prevState);

  const loginHandler = () => dispatch(signin());
  const logoutHandler = () => dispatch(signout());

  let content = (
    <Box className="px-4 mx-1 bg-white h-full flex items-center">
      <Button
        onClick={loginHandler}
        className="uppercase bg-orange text-white tracking-tighter rounded-sm py-2 px-3 font-semibold"
        children="Login / Sign up"
      />
    </Box>
  );

  if (user.isAuth) {
    content = (
      <Box
        onMouseEnter={accountHoverHandler}
        onMouseLeave={accountHoverHandler}
        className="px-4 mx-1 bg-white h-full flex items-center relative"
      >
        <Box className="bg-gray-100 rounded-full p-1 mr-1">
          <User />
        </Box>
        <Paragraph className="mx-1">{user.user?.name}</Paragraph>
        <Chevrondown />
        {accountHovered && (
          <Dropdown
            boxStyle="absolute w-full top-11 inset-x-0 border-t border-gray-300"
            listItemProps={{ className: "capitalize py-1" }}
            dropdownMapItems={ACCOUNT}
            buttonProps={{
              onClick: logoutHandler,
              children: "Log out",
              className:
                "w-full pt-2 px-5 mt-2 text-left border-t border-gray-300",
            }}
          />
        )}
      </Box>
    );
  }

  return content;
};

export default DesktopDisplay;
