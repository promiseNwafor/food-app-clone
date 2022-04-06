import React from "react";
import Box from "../common/Box";
import Button from "../common/Button";
import Input from "../common/Input";
import Paragraph from "../common/Paragraph";
import { STATES } from "./constants";

type Props = {};

const Subscribe = (props: Props) => {
  return (
    <Box className="bg-orange font-muli text-white text-center flex flex-col flex-center p-5 lg:pt-14 pb-9 mt-12 lg:mt-20">
      <Paragraph
        className="font-semibold text-xl lg:text-5xl pb-1"
        children="Subscribe to our newsletter today!"
      />
      <Paragraph
        className="text-lg hidden lg:block"
        children="Don't miss out on our great offers & Receive deals from all our top vendors via e-mail"
      />
      <Box className="lg:flex flex-center w-full text-text py-7">
        <select
          className="h-14 lg:h-16 my-2 lg:mx-2 w-full lg:w-1/6 p-2 outline-none"
          name="state"
          id=""
        >
          <option value="">Select your city</option>
          {STATES.map((state, i) => (
            <option className="capitalize" key={i} value={state}>
              {state}
            </option>
          ))}
        </select>
        <Input
          type="email"
          placeholder="E-mail"
          className="mb-2 my-2 lg:mx-2 h-14 lg:h-16 w-full lg:w-1/6 text-lg inline-block"
        />
        <Box className="lg:hidden flex w-full text-white py-6">
          <Input
            type="checkbox"
            className="w-10 h-5 mb-0 self-start"
            id="agreement"
          />
          <label htmlFor="agreement" className="lg:text-lg text-left pl-1">
            I have read and accepted the Terms and conditions and the Privacy
            policy
          </label>
        </Box>
        <Button
          children="Subscribe newsletter"
          className="h-14 lg:h-16 w-full rounded-sm lg:w-1/6 my-2 lg:mx-2 bg-text text-white inline-block uppercase font-semibold"
        />
      </Box>
      <Box className="hidden lg:flex flex-center w-full">
        <Input type="checkbox" className="w-10 h-5 mb-0" id="agreement" />
        <label htmlFor="agreement" className="text-lg">
          I have read and accepted the Terms and conditions and the Privacy
          policy
        </label>
      </Box>
    </Box>
  );
};

export default Subscribe;
