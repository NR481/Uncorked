import { getWines } from "./store/wines";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Wines = () => {
  const dispatch = useDispatch;


  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  return (
    <h1>Wines</h1>
  )
};

export default Wines;
