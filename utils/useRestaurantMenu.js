import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData(resId);
  }, []);

  const fetchData = async (resId) => {
    const response = await fetch(RESTAURANT_MENU_URL + "/" + resId);
    const data = await response.json();
    setResInfo(data?.data?.cards);
  };
  // console.log(resInfo);
  return resInfo;
};

export default useRestaurantMenu;
