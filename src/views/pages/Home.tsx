import { Fragment } from "react";
import Ads from "../../components/Ads";
import Hero from "../../components/Hero";
import HowItWorks from "../../components/HowItWorks";

type Props = {};

const Home = (props: Props) => {
  return (
    <Fragment>
      <Hero />
      <Ads />
      <HowItWorks />
    </Fragment>
  );
};

export default Home;
