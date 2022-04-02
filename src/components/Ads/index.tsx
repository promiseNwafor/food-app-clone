import { useState } from "react";
import Box from "../common/Box";
import ad from "../../assets/img/ad.jpg";
import Image from "../common/Image";
import CancelIcon from "../../assets/svg/CancelIcon";

const Ads = () => {
  const [canceled, setCancel] = useState(false);

  const cancelHandler = () => setCancel((prevState) => !prevState);

  return (
    <Box
      className={`${
        canceled && "hidden"
      } w-10/12 lg:w-3/5 m-auto mt-8 md:mt-20 mb-5 relative`}
    >
      <Image className="m-auto w-full" src={ad} alt="advert" />
      <CancelIcon
        onClick={cancelHandler}
        stroke="#00aecd"
        className="w-4 bg-white hover:bg-body absolute m-1 top-0 right-0 cursor-pointer"
      />
    </Box>
  );
};

export default Ads;
