import React from "react";
import _ from "lodash";
import { CDN_URL } from "../../utils/constants";

const ResturantMenuListBody = (props) => {
  let allCards = _.get(
    props,
    "props.groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards",
    []
  );

  return (
    <div className="res-menu-body">
      <div className="res-menu-body-filters">
        <button className="is-vegetarian">Veg</button>
      </div>
      <div className="res-menu-body-info-container">
        <ul>
          {allCards.map((card) => {
            return (
              <>
                <div className="res-menu-item-container">
                  <div key={card.card.info.id} className="res-menu-item-info">
                    <h3 classname="res-menu-item-info-name">
                      {_.get(card, "card.info.name", "")}
                    </h3>
                    <li classname="res-menu-item-info-description">
                      {_.get(card, "card.info.description", "")}
                    </li>
                    <li classname="res-menu-item-info-price">
                      ₹{_.get(card, "card.info.price", "") / 100}
                    </li>
                  </div>
                  <img src={CDN_URL + "/" + card.card.info.imageId} />
                </div>
                <hr></hr>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenuListBody;
