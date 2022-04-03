import { Fragment } from "react";
import Ads from "../../components/Ads";
import Hero from "../../components/Hero";
import HowItWorks from "../../components/HowItWorks";
import RecentOrders from "../../components/RecentOrders";

type Props = {};

const Home = (props: Props) => {
  return (
    <Fragment>
      <Hero />
      <Ads />
      <HowItWorks />
      <RecentOrders />
    </Fragment>
  );
};

export default Home;
