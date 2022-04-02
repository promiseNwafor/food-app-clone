import { Fragment } from "react";
import Ads from "../../components/Ads";
import Hero from "../../components/Hero";

type Props = {};

const Home = (props: Props) => {
  return (
    <Fragment>
      <Hero />
      <Ads />
    </Fragment>
  );
};

export default Home;
