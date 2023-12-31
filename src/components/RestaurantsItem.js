import { CDN_URL } from "../../utils/constants";

let RestaurantsItem = function (props) {
  let {
    name,
    avgRating,
    sla,
    cuisines,
    cloudinaryImageId,
    costForTwo,
  } = props?.data;

  cuisines = cuisines.join(", ");
  return (
    <div className="p-4 mb-4 w-96 border border-solid bg-fuchsia-100 shadow-2xl hover:bg-cyan-100 ">
      <div className="res-item">
        <img className="w-64 ml-11" src={CDN_URL + cloudinaryImageId} />
        <h4 className="font-bold my-1 text-sm"> {name} </h4>
        <h5 className="font-extralight text-xs my-2"> {cuisines} </h5>
        <div className="flex flex-wrap  text-sm justify-between my-2 font-sans">
          <div className="font-semibold border w-12 p-1 text-xs bg-green-500 text-white">
            <span>&#9733;</span> {avgRating}
          </div>
          <div className="font-light ">.</div>
          <span className="font-light my-1"> {sla.deliveryTime} Minutes </span>
          <div className="font-light ">.</div>
          <span className="font-light"> {costForTwo}</span>
        </div>
        {/* <div>
          <hr className="my-2"></hr>
          <h5 className="flex justify-evenly p-1 my-2">QUICK VIEW</h5>
        </div> */}
      </div>
    </div>
  );
};

//higher order components.
export const withPromotedLable = (RestaurantsItem) => {
  return (props) => {
    // console.log(props);
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg accent-transparent">
          Promoted
        </label>
        <RestaurantsItem {...props} />
      </div>
    );
  };
};

export default RestaurantsItem;
