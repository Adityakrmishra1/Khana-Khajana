import RestaurantsItem from "./RestaurantsItem";
import _ from "lodash";
import { useEffect, useState } from "react";

import ShimmerUiContainer from "./ShimmerUi";
import { LIVE_DATA_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

let Body = function () {
  console.log(useState);
  let [restaurantLists, setRestaurantLists] = useState([]);
  let [filteredRestaurantLists, setFilteredRestaurantLists] = useState([]);
  let [searchText, setSearchText] = useState("");

  async function fetchData() {
    try {
      let data = await fetch(LIVE_DATA_URL);
      let json = await data.json();
      console.log(json);
      let cardData = json?.data?.cards;
      cardData = cardData.filter(
        (card) => card.cardType === "seeAllRestaurants"
      );
      cardData = cardData[0]?.data?.data?.cards;
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
  console.log("online status: " + onlineStatus);
  if (!onlineStatus) {
    return <h1>you are offline :( please check your internet status</h1>;
  }

  return !restaurantLists || restaurantLists.length === 0 ? (
    <ShimmerUiContainer />
  ) : (
    <div className="body">
      <div className="filters">
        <div className="top-rated-res-container">
          <button className="top-rated-res-btn" onClick={() => {}}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="serch-btn"
            onClick={(e) => {
              e.preventDefault();
              console.log(restaurantLists);
              const filterdResturant = restaurantLists.filter((res) => {
                console.log(res);
                return res?.data?.name
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
      <div className="res-container">
        {filteredRestaurantLists.map((item) => {
          console.log("item");
          console.log(item);
          return (
            <Link
              key={_.get(item, "data.id", "")}
              to={"/restaurant/" + _.get(item, "data.id", "")}
            >
              <RestaurantsItem data={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
