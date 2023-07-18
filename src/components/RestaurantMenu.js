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
      {/* <ResturantTitle props={resMenuData[0]} /> */}
      <ResturantMenuListBody props={resMenuData?.[2]} />
    </div>
  );
};

export default RestaurantMenu;
