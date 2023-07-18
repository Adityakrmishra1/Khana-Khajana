import { CDN_URL } from "../../utils/constants";

let RestaurantsItem = function (props) {
  let {
    name,
    avgRating,
    deliveryTime,
    cuisines,
    cloudinaryImageId,
    costForTwo,
  } = props.data.data;

  cuisines = cuisines.join(", ");
  return (
    <div className="res-card-box" onMouseOver={() => {}}>
      <div className="res-item">
        <img src={CDN_URL + cloudinaryImageId} />
        <h4 className="res-item-title"> {name} </h4>
        <h5 className="res-item-cusine"> {cuisines} </h5>
        <div className="res-other-details">
          <span className="res-item-rating">
            <span className="star">&#9733;</span> {avgRating}
          </span>
          <div className="res-item-seperator">.</div>
          <span className="res-item-eta"> {deliveryTime} Minutes </span>
          <div className="res-item-seperator">.</div>
          <span> ₹{costForTwo / 100} For Two</span>
        </div>
        <div className="res-item-quick-view">
          <hr className="res-item-quick-view-hr"></hr>
          <h5 className="res-item-quick-view-title">QUICK VIEW</h5>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsItem;
