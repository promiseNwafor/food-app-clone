import Phone from "../../assets/svg/Phone";

type Props = {};

const TopBar = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-17 text-base bg-primary font-arial">
      <p className="">
        Need help placing an order? Call: <a href="tel:018832408">018832408 </a>
        or <a href="tel:017000556">017000556</a>
      </p>
      <Phone />
    </div>
  );
};

export default TopBar;
