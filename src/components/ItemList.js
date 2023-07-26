import React, { useState } from "react";
import { CDN_URL } from "../../utils/constants";

function ItemList(props) {
  return props?.data.map((item) => {
    const { name, description, price, imageId } = item.card.info;
    return (
      <div
        key={item?.info?.id}
        className="mt-4 mb-6 p-1 border-b-2 border-gray-200 text-left flex justify-between flex-wrap"
      >
        <div className="w-9/12">
          <div className="py-1">
            <span className="font-medium text-lg">{name}</span>
            <span className="font-medium"> - ₹{price / 100}</span>
          </div>
          <p className="text-slate-500">{description}</p>
        </div>
        <div className="w-3/12 mb-3">
          {/* <div className="absolute ml-[82px] mt-20">
            <button className="px-4 py-2 bg-white text-black shadow-lg rounded-lg">
              Add +
            </button>
          </div> */}
          <img className="w-40 h-auto ml-10 mb-4" src={CDN_URL + imageId} />
        </div>
      </div>
    );
  });
}

export default ItemList;
