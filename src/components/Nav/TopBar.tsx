import React from "react";
import Box from "../common/Box";
import Paragraph from "../common/Paragraph";
import Phone from "../../assets/svg/Phone";

const TopBar = () => {
  return (
    <Box className="x-3 pt-3 md:pt-0 text-center md:flex items-center justify-center h-17 text-base bg-primary font-arial">
      <Paragraph className="inline">
        Need help placing an order? Call: <a href="tel:018832408">018832408 </a>
        or <a href="tel:017000556">017000556</a>
      </Paragraph>
      <Phone />
    </Box>
  );
};

export default React.memo(TopBar);
