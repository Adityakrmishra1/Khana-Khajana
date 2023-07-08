import React from "react";
import _ from "lodash";

function ResturantTitle(props) {
  console.log(props);
  let {
    name,
    locality,
    areaName,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingString,
  } = _.get(props, "props.card.card.info", {});

  return (
    <div className="res-details-container">
      <div className="res-main-details">
        <h3>{name}</h3>
        <h4>{locality}</h4>
        <h5>{areaName}</h5>
      </div>
      <div className="res-secondary-details">
        <span>{costForTwoMessage}</span>
        <span>{cuisines}</span>
        <span> {avgRating}</span>
        <span>{totalRatingString}</span>
      </div>
    </div>
  );
}

export default ResturantTitle;
