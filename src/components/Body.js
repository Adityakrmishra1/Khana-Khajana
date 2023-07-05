import RestaurantsItem from "./RestaurantsItem";
import Search from "./Search";
import { useEffect, useState } from "react";
import { LIVE_DATA_URL } from "../../utils/constants";

let Body = function () {
	console.log(useState)
	let [restaurantLists, setRestaurantLists] = useState([]);

	async function fetchData() {
		try {
			let data = await fetch(LIVE_DATA_URL);
			let json = await data.json();
			console.log(json);
			let cardData = json?.data?.cards[2]?.data?.data?.cards;
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

	return (
		<div className="body">
			<Search />
			<div className="res-container" >
				{
					restaurantLists.map((item) => {
						console.log(item);
						return <RestaurantsItem key={item.id} data={item} />
					})
				}

			</div>
		</div>
	);
}

export default Body;