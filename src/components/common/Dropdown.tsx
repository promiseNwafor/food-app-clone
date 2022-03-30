import React from "react";
import ListItem from "./ListItem";

type Props = {
  dropdownMapItems: {
    title: string;
    id: number;
    active: boolean;
  }[];
  listItemProps: {
    className: string;
    activeItemStyle?: string;
  };
  boxStyle?: string;
  buttonProps?: { children: string; className: string };
};

const Dropdown: React.FC<Props> = ({
  dropdownMapItems,
  boxStyle,
  listItemProps,
  buttonProps,
}) => {
  return (
    <div className={`shadow-lg bg-white w-full rounded-b-md py-2 ${boxStyle}`}>
      <ul className="px-5">
        {dropdownMapItems.map((item) => (
          <ListItem
            key={item.id}
            listItemStyle={`${item.active && listItemProps.activeItemStyle} ${
              listItemProps.className
            }`}
            children={item.title}
          />
        ))}
      </ul>
      {buttonProps && (
        <button className={`${buttonProps.className}`}>
          {buttonProps.children}
        </button>
      )}
    </div>
  );
};

export default Dropdown;
