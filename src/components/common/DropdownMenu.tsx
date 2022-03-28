import Chevrondown from "../../assets/svg/Chevrondown";

type Props = {
  menuItems: { title: string; id: number; active: boolean }[];
  hoverLnHandler: () => void;
  mouseOutLnHandler: () => void;
  lnHovered: boolean;
  label: string;
};

const DropdownMenu: React.FC<Props> = ({
  menuItems,
  hoverLnHandler,
  mouseOutLnHandler,
  lnHovered,
  label,
}) => {
  return (
    <div className="" onMouseOver={hoverLnHandler}>
      <div className="px-4 mx-1 flex items-center uppercase relative">
        <p className="mr-1">{label}</p>
        <Chevrondown />
        {lnHovered ? (
          <div
            onMouseOver={hoverLnHandler}
            onMouseLeave={mouseOutLnHandler}
            className="shadow-lg bg-white w-full rounded-b capitalize px-5 py-2 pr-12 absolute inset-x-0 top-8 border-t border-gray-300"
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
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DropdownMenu;
