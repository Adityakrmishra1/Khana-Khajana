import React, { useState } from "react";
import _ from "lodash";
import { CDN_URL } from "../../utils/constants";

const ResturantMenuListBody = (props) => {
  let allCards = _.get(
    props,
    "props.groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards",
    []
  );
  let [orgResList, setOrgResList] = useState(allcards);
  let [resLists, setResList] = useState([]);

  return (
    <div className="mx-20">
      <div className="flex justify-evenly m-3">
        <button
          className="border px-6 py-2 mt-4 bg-green-200 hover:bg-sky-400 p-2 m-4 rounded-md text-sm text-slate-800"
          onClick={() => {
            let filteredVegItems = _.filter(allCards, (card) => {
              return _.get(card, "card.info.isVeg", 0) === 1;
            });
            setResList(filteredVegItems);
          }}
        >
          Veg
        </button>
        <button
          className="border px-6 py-2 mt-4 bg-green-200 hover:bg-sky-400 p-2 m-4 rounded-md text-sm text-slate-800"
          onClick={() => {
            let filteredVegItems = _.filter(allCards, (card) => {
              return _.get(card, "card.info.isVeg", 0) === 1;
            });
            setResList(filteredVegItems);
          }}
        >
          Non-veg
        </button>
        <button
          className="border px-6 py-2 mt-4 bg-green-200 hover:bg-sky-400 p-2 m-4 rounded-md text-sm text-slate-800"
          onClick={() => {
            setResList(filteredVegItems);
          }}
        >
          All
        </button>
      </div>
      <div className="flex flex-col gap-1 mt-10">
        <ul className="flex flex-wrap flex-col justify-between">
          {resLists.map((card) => {
            return (
              <>
                <div className="flex justify-between mx-56">
                  <div
                    key={card.card.info.id}
                    className="text-sm text-slate-800 p-20 m-10"
                  >
                    <h3 className="font-extrabold text-lg">
                      {_.get(card, "card.info.name", "")}
                    </h3>
                    <li className="font-lg">
                      {_.get(card, "card.info.description", "")}
                    </li>
                    <li className="res-menu-item-info-price">
                      ₹{_.get(card, "card.info.price", "") / 100}
                    </li>
                  </div>
                  <img
                    className="w-80 h-40 mt-16"
                    src={CDN_URL + "/" + card.card.info.imageId}
                  />
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
