type Props = {
  listItemStyle: string;
  onItemClickHandler?: () => void;
};

const ListItem: React.FC<Props> = ({
  listItemStyle,
  onItemClickHandler,
  children,
}) => {
  return (
    <li
      onClick={onItemClickHandler}
      className={`py-2 list-none ${listItemStyle}`}
    >
      {children}
    </li>
  );
};

export default ListItem;
