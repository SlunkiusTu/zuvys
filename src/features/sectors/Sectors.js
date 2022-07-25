import React from "react";
import { useSelector } from "react-redux";
import { selectSectors } from "./sectorsSlice";

export const Sectors = () => {
  const sectors = useSelector(selectSectors);
  return <div>{sectors.length}</div>;
};
