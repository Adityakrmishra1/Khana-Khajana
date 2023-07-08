import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { RESTAURANT_MENU_URL } from "../../utils/constants";
import ResturantTitle from "./ResturantTitle";
import ResturantMenuListBody from "./ResturantMenuListBody";

const RestaurantMenu = () => {
  const [resMenuData, setResMenuData] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurants();
  }, []);
  const fetchRestaurants = async () => {
    const response = await fetch(RESTAURANT_MENU_URL + "/" + resId);
    const data = await response.json();
    setResMenuData(data?.data?.cards);
  };
  return (
    <div className="res-menu-container">
      {/* <ResturantTitle props={resMenuData[0]} /> */}
      <ResturantMenuListBody props={resMenuData[2]} />
    </div>
  );
};

export default RestaurantMenu;
