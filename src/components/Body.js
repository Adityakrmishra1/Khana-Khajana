import _ from "lodash";
import { useEffect, useState } from "react";

import RestaurantsItem, { withPromotedLable } from "./RestaurantsItem";
import ShimmerUiContainer from "./ShimmerUi";
import { LIVE_DATA_URL, TOP_RATE_RATING } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";


//higher order functions

const ResturantCardPromoted = withPromotedLable(RestaurantsItem);

let Body = function () {
  // console.log(useState);
  let [restaurantLists, setRestaurantLists] = useState([]);
  let [filteredRestaurantLists, setFilteredRestaurantLists] = useState([]);
  let [searchText, setSearchText] = useState("");

  async function fetchData() {
    try {
      let data = await fetch(LIVE_DATA_URL);
      let json = await data.json();
      let cardData = json?.data?.cards;
      cardData = cardData.filter(
        (c) => {
          // console.log(c.card.card.id);
          return c.card.card.id === "restaurant_grid_listing";
        }
      );
      cardData = cardData?.[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      // cardData = cardData[0]?.data?.data?.cards;
      setRestaurantLists(cardData);
      setFilteredRestaurantLists(cardData);
    } catch (error) {
      console.log("error while fetching the data..." + error);
      setRestaurantLists([]);
    }
  }
  // this will be called after the rendering the of component is done.
  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>you are offline :( please check your internet status</h1>;
  }

  return !restaurantLists || restaurantLists.length === 0 ? (
    <ShimmerUiContainer />
  ) : (
    <div className="p-5 flex flex-col bg-slate-100 m-10">
      <div className="flex flex-wrap justify-evenly mb-4">
        <div className="mt-4">
          <button
            className="border-slate-950 bg-green-200 hover:bg-sky-400 p-2 rounded-md text-sm text-slate-800 shadow-xl"
            onClick={(e) => {
               e.preventDefault();
              const filterdResturant = restaurantLists.filter((res) => {
                console.log(res);
                return +res?.info?.avgRatingString >= TOP_RATE_RATING;
              });
              setFilteredRestaurantLists(filterdResturant);
            }}
          >
            Top Rated
          </button>
        </div>
        <div className="">
          <input
            type="text"
            className="p-1 px-4 border border-slate-800 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-200 hover:bg-sky-400 p-2 m-4 rounded-md text-sm text-slate-800"
            onClick={(e) => {
              e.preventDefault();
              const filterdResturant = restaurantLists.filter((res) => {
                // console.log(res);
                return res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText?.toLowerCase());
              });
              setFilteredRestaurantLists(filterdResturant);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-between">
        {filteredRestaurantLists.map((item) => {
          return (
            <Link
              key={_.get(item, "info.id", "")}
              to={"/restaurant/" + _.get(item, "info.id", "")}
            >
              {_.get(item, "data.promoted", false) ? (
                <ResturantCardPromoted data={item?.info} key={item?.info?.id}/>
              ) : (
                <RestaurantsItem data={item?.info} key={item?.info?.id} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
