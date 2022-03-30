import React from "react";
import Box from "./Box";
import Button from "./Button";
import ListItem from "./ListItem";

type Props = {
  dropdownMapItems: {
    title: string;
    id: number;
    active: boolean;
  }[];
  listItemProps?: {
    className?: string;
    activeItemStyle?: string;
  };
  boxStyle?: string;
  ulStyle?: string;
  buttonProps?: { children: string; className: string };
};

const Dropdown: React.FC<Props> = ({
  dropdownMapItems,
  boxStyle,
  ulStyle,
  listItemProps,
  buttonProps,
}) => {
  return (
    <Box className={`shadow-lg bg-white w-full rounded-b-md py-2 ${boxStyle}`}>
      <ul className={`px-5 ${ulStyle}`}>
        {dropdownMapItems.map((item) => (
          <ListItem
            key={item.id}
            listItemStyle={`${item.active && listItemProps?.activeItemStyle} ${
              listItemProps?.className
            }`}
            children={item.title}
          />
        ))}
      </ul>
      {buttonProps && (
        <Button
          className={`${buttonProps.className}`}
          children={buttonProps.children}
        />
      )}
    </Box>
  );
};

export default Dropdown;
