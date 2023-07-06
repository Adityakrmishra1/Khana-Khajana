import RestaurantsItem from "./RestaurantsItem";
import Search from "./Search";
import { useEffect, useState } from "react";
import { LIVE_DATA_URL } from "../../utils/constants";
import ShimmerUiContainer from "./ShimmerUi";

let Body = function () {
	console.log(useState)
	let [restaurantLists, setRestaurantLists] = useState([]);

	async function fetchData() {
		try {
			let data = await fetch(LIVE_DATA_URL);
			let json = await data.json();
			console.log(json);
			let cardData = json?.data?.cards;
			cardData = cardData.filter((card) => card.cardType === "seeAllRestaurants");
			cardData = cardData[0]?.data?.data?.cards;
			setRestaurantLists(cardData)
		}
		catch (error) {
			console.log("error while fetching the data..." + error);
			setRestaurantLists([]);
		}
	}
	// this will be called after the rendering the of component is done.
	useEffect(() => {
		fetchData();
	}, []);

	return (!restaurantLists || restaurantLists.length === 0) ?
		(<ShimmerUiContainer />) : (
			<div className="body">
				<div className="filters">
					<div className="top-rated-res-container">
						<button className="top-rated-res-btn" onClick={() => { }} >Top Rated Restaurants</button>
					</div>
					<div className="search-container">
						<input type="text" className="search-box" placeholder="Search Restaurants" />
					</div>
				</div>
				<div className="res-container" >
					{
						restaurantLists.map((item) => {
							console.log(item);
							return <RestaurantsItem key={item.id} data={item} />
						})
					}

				</div>
			</div >
		);
}

export default Body;