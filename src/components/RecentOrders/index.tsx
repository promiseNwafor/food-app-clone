import React from "react";
import { useAppSelector } from "../../app/hooks";
import Box from "../common/Box";
import Card from "../common/Card";
import Paragraph from "../common/Paragraph";
import Image from "../common/Image";
import Button from "../common/Button";
import ListItem from "../common/ListItem";
import { RECENTORDERITEMS } from "./constants";

const RecentOrders = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <Box
      className={`${!user.isAuth && "hidden"} flex flex-col flex-center mt-12`}
    >
      <Paragraph
        className="capitalize font-semibold pb-4 text-text text-3xl md:text-h1"
        children="Recent orders"
      />
      <Box className="flex md:flex-wrap overflow-auto md:overflow-auto justify-center">
        {RECENTORDERITEMS.map((item) => (
          <>
            <Card
              key={item.id}
              className="hidden md:flex w-full lg:w-96 min-h-sm p-4 justify-between m-5 shadow-none border"
            >
              <Box className="flex flex-col justify-between">
                <Image
                  alt={item.image.alt}
                  className="w-16 self-start"
                  src={item.image.src}
                />
                <Button
                  children="Repeat order"
                  className="uppercase rounded-sm text-xs p-2 px-3 font-semibold text-white bg-green"
                />
              </Box>
              <Box className="flex-grow capitalize ml-3">
                <Paragraph
                  className=" font-semibold pb-2"
                  children={item.vendor}
                />
                {item.items.map((it, i) => (
                  <ListItem
                    listItemStyle="flex justify-between text-text py-0"
                    key={i}
                  >
                    <Paragraph
                      className=""
                      children={`${it.quantity} x ${it.order}`}
                    />
                    <Paragraph children={`N${it.amount.toFixed(2)}`} />
                  </ListItem>
                ))}
                <ListItem listItemStyle="flex justify-between mt-2 font-semibold text-text py-0">
                  <Paragraph className="" children="Total (incl. VAT)" />
                  <Paragraph
                    className=""
                    children={`N${item.items
                      .reduce((acc, i) => i.amount + acc, 0)
                      .toFixed(2)}`}
                  />
                </ListItem>
              </Box>
            </Card>
            <CardMobile item={item} />
          </>
        ))}
      </Box>
    </Box>
  );
};

type Props = {
  item: {
    id: number;
    vendor: string;
    image: { src: string; alt: string };
    items: {
      order: string;
      quantity: number;
      amount: number;
    }[];
  };
};

const CardMobile: React.FC<Props> = ({ item }) => {
  return (
    <Card
      key={`${item.vendor}${item.id}`}
      className="md:hidden flex flex-col min-w-full lg:w-96 min-h-sm p-4 justify-between m-5 shadow-none border"
    >
      <Box className="flex justify-between">
        <Image
          alt={item.image.alt}
          className="w-16 self-start"
          src={item.image.src}
        />
        <Paragraph className=" font-semibold pb-2" children={item.vendor} />
      </Box>
      <Box>
        {item.items.map((it, i) => (
          <ListItem listItemStyle="flex justify-between text-text py-0" key={i}>
            <Paragraph className="" children={`${it.quantity} x ${it.order}`} />
            <Paragraph children={`N${it.amount.toFixed(2)}`} />
          </ListItem>
        ))}
        <ListItem listItemStyle="flex justify-between mt-2 font-semibold text-text py-0">
          <Paragraph className="" children="Total (incl. VAT)" />
          <Paragraph
            className=""
            children={`N${item.items
              .reduce((acc, i) => i.amount + acc, 0)
              .toFixed(2)}`}
          />
        </ListItem>
      </Box>
      <Button
        children="Repeat order"
        className="uppercase rounded-sm p-2 px-3 mt-4 font-semibold text-white bg-green"
      />
    </Card>
  );
};

export default RecentOrders;
