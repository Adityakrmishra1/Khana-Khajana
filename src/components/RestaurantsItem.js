import { CDN_URL } from "../../utils/constants";

let RestaurantsItem = function (props) {
  console.log("props", props.data.data);
  const name = props.data.data.name;
  const avgRating = props.data.data.avgRating;
  let cusines = props.data.data.cuisines;
  const eta = props.data.data.deliveryTime;
  const imageId = props.data.data.cloudinaryImageId;
  const priceForTwo = props.data.data.costForTwo;
  cusines = cusines.join(", ");
  return (
    <div className="res-card-box" onMouseOver={() => {}}>
      <div className="res-item">
        <img src={CDN_URL + imageId} />
        <h4 className="res-item-title"> {name} </h4>
        <h5 className="res-item-cusine"> {cusines} </h5>
        <div className="res-other-details">
          <span className="res-item-rating">
            <span className="star">&#9733;</span> {avgRating}
          </span>
          <div className="res-item-seperator">.</div>
          <span className="res-item-eta"> {eta} Minutes </span>
          <div className="res-item-seperator">.</div>
          <span> ₹{priceForTwo / 100} For Two</span>
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
