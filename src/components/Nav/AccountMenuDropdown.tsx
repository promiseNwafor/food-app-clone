import Chevrondown from "../../assets/svg/Chevrondown";
import User from "../../assets/svg/User";

type Props = {
  menuItems: { title: string; id: number; active: boolean }[];
  hoverHandler: () => void;
  mouseOutHandler: () => void;
  isHovered: boolean;
};

const AccountMenuDropdown: React.FC<Props> = ({
  menuItems,
  hoverHandler,
  mouseOutHandler,
  isHovered,
}) => {
  return (
    <div className="z-50 bg-white" onMouseOver={hoverHandler}>
      <div className="px-4 mx-1 flex items-center relative">
        <div className="bg-gray-100 rounded-full p-1 mr-1">
          <User />
        </div>
        <p className="mx-1">Promise Nwafor</p>
        <Chevrondown />
        {isHovered ? (
          <div
            onMouseLeave={mouseOutHandler}
            className="shadow-lg bg-white z-40 w-full rounded-b capitalize px-5 py-2 pr-5 absolute inset-x-0 top-10 border-t border-gray-300"
          >
            <ul>
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`py-2 cursor-pointer ${
                    item.active && "text-orange"
                  }`}
                >
                  {item.title}
                </li>
              ))}
            </ul>
            <button className="w-full pt-2 mt-2 text-left border-t border-gray-300">
              Log Out
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AccountMenuDropdown;
