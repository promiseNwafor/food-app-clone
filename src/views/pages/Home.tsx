import { Fragment } from "react";
import Ads from "../../components/Ads";
import Hero from "../../components/Hero";
import HowItWorks from "../../components/HowItWorks";
import RecentlyViewed from "../../components/RecentlyViewed";
import RecentOrders from "../../components/RecentOrders";

type Props = {};

const Home = (props: Props) => {
  return (
    <Fragment>
      <Hero />
      <Ads />
      <HowItWorks />
      <RecentOrders />
      <RecentlyViewed />
    </Fragment>
  );
};

export default Home;
