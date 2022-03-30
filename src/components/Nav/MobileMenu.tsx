import Chevrondown from "../../assets/svg/Chevrondown";
import PrimeIcon from "../../assets/svg/PrimeIcon";

type Props = {};

const MobileMenu: React.FC<Props> = () => {
  return (
    <div
      className={`lg:hidden absolute top-16 w-full shadow-y bg-white text-center py-2 overflow-hidden text-body z-10 font-muli transition ease duration-200`}
    >
      <div className="mx-7">
        <ul className="">
          <li className="menu-list flex items-center justify-center">
            <PrimeIcon />
            <span className="inline-block ml-2">Jumia Prime</span>
          </li>

          <li className="menu-list flex items-center justify-center">
            <span className="inline-block mr-1">English</span> <Chevrondown />
          </li>
          <li className="menu-list">Vendors</li>
          <li className="menu-list">Help</li>
          <li className="menu-list">My account</li>
        </ul>
        <button className="hover:bg-black w-full font-semibold text-sm uppercase text-white rounded-sm bg-body mb-2 py-2">
          Log out
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
