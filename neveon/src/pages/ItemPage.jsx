import React, { useContext, useEffect } from "react";
import { Context } from "../index";

export const ItemPage = () => {
  const { BreadCrumbs } = useContext(Context);

  useEffect(() => {
    BreadCrumbs.setCrumbs([
      {
        to: "/",
        name: "Головна",
      },
      {
        to: "/category",
        name: "Категорія", //TODO: add category name
      },
      {
        to: `/category/${2}`,
        name: "Предмет", //TODO: add item name
      },
    ]);
  });

  return (
    <div>
      <h1>Item Page</h1>
    </div>
  );
};
