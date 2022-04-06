import { Fragment } from "react";
import Ads from "../../components/Ads";
import Hero from "../../components/Hero";
import HowItWorks from "../../components/HowItWorks";
import JumiaFoodApp from "../../components/JumiaFoodApp";
import JumiaForCorporate from "../../components/JumiaForCorporate";
import RecentlyViewed from "../../components/RecentlyViewed";
import RecentOrders from "../../components/RecentOrders";
import Subscribe from "../../components/Subscribe";

type Props = {};

const Home = (props: Props) => {
  return (
    <Fragment>
      <Hero />
      <Ads />
      <HowItWorks />
      <RecentOrders />
      <RecentlyViewed />
      <Subscribe />
      <JumiaForCorporate />
      <JumiaFoodApp />
    </Fragment>
  );
};

export default Home;
