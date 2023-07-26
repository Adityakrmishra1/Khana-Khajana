import React, { useEffect, useState } from "react";
import RestaurantCateogry from "./RestaurantCateogry";
import _ from "lodash";
import { CDN_URL } from "../../utils/constants";

const ResturantMenuListBody = (props) => {
  console.log(props.props);

  let resturantDetails = props?.props?.[0]?.card?.card?.info;
  let { name, cuisines, costForTwo, avgRating } = resturantDetails || {};
  let cards = _.get(
    props?.props?.[2],
    "groupedCard.cardGroupMap.REGULAR.cards",
    []
  );

  let categories = cards?.filter((c) =>
    c.card.card["@type"].includes("food.v2.ItemCategory")
  );
  if (!_.size(categories)) {
    return (
      <h1 className="text-center mt-80 p-4 font-semibold text-lg">
        Loading ...
      </h1>
    );
  }
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-semibold p-2">{name}</h1>
      <h3 className="text-lg">{cuisines.join(", ")}</h3>
      {/* <h3 className="text-lg"> cost for 2 ₹ {costForTwo / 100}</h3> */}
      <div className="mt-3 text-xs font-semibold border w-14 p-2  bg-green-500 text-white m-auto rounded-xl">
        {avgRating} <span>&#9733;</span>
      </div>
      {categories.map((c) => {
        return <RestaurantCateogry cateogryData={c} />;
      })}
    </div>
  );
};

export default ResturantMenuListBody;
