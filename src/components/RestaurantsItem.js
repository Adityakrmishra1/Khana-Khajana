import { CDN_URL } from "../../utils/constants";

let RestaurantsItem = function (props) {
	console.log("props", props.data.data);
	const name = props.data.data.name;
	const avgRating = props.data.data.avgRating;
	const cusines = props.data.data.cuisines;
	const eta = props.data.data.deliveryTime;
	const imageId = props.data.data.cloudinaryImageId;
	console.log("name", name);
	return (
		<div className="res-item">
			<img src={CDN_URL + imageId} />
			<h3 className="res-item-title"> {name} </h3>
			<h4 className="res-item-cusine"> {cusines} </h4>
			<h5 className="res-item-rating"> {avgRating} </h5>
			<h5 className="res-item-eta"> {eta} </h5>
		</div>
	);
}

export default RestaurantsItem;