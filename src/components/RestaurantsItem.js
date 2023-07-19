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
    <div
      className="p-4 w-96 border border-solid bg-fuchsia-100 "
      onMouseOver={() => {}}
    >
      <div className="res-item">
        <img classname="w-64" src={CDN_URL + cloudinaryImageId} />
        <h4 className="font-semibold mt-2 w"> {name} </h4>
        <h5 className="font-extralight text-xs my-2"> {cuisines} </h5>
        <div className="flex flex-wrap  text-sm justify-between my-2 font-sans">
          <div className="font-light border w-10 p-1 text-xs bg-green-500 text-slate-100">
            <span>&#9733;</span> {avgRating}
          </div>
          <div className="font-light ">.</div>
          <span className="font-light my-1"> {deliveryTime} Minutes </span>
          <div className="font-light ">.</div>
          <span className="font-light"> ₹{costForTwo / 100} For Two</span>
        </div>
        {/* <div>
          <hr className="my-2"></hr>
          <h5 className="flex justify-evenly p-1 my-2">QUICK VIEW</h5>
        </div> */}
      </div>
    </div>
  );
};

export default RestaurantsItem;
