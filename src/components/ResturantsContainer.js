import RestaurantsItem from "./RestaurantsItem";

let ResturantsContainer = function () {
	return (
		<div className="res-container">
			<RestaurantsItem
				resName="Meghna Foods"
				cuisine="Biryani, North Indian, Asian"
				rating="4.4 Star"
				eta="30 Minutes"
			/>
			<RestaurantsItem
				resName="KFC"
				cuisine="Fast Foods"
				rating="4.3 Star"
				eta="20 Minutes"
			/>
			<RestaurantsItem
				resName="KhanaVali"
				cuisine="North Karnataka Foods"
				rating="4.5 Star"
				eta="40 Minutes"
			/>
			<RestaurantsItem
				resName="Dosa"
				cuisine="South Indian"
				rating="4.4 Star"
				eta="35 Minutes"
			/>
		</div>
	);
}

export default ResturantsContainer;