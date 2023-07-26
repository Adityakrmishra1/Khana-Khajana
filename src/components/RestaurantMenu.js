import { useParams } from "react-router-dom";

import ResturantMenuListBody from "./ResturantMenuListBody";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // custom hooks

  const resMenuData = useRestaurantMenu(resId);
  // console.log(resMenuData);
  return (
    <div className="res-menu-container">
      <ResturantMenuListBody props={resMenuData} />
    </div>
  );
};

export default RestaurantMenu;
