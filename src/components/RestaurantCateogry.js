import React, { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCateogry(props) {
  let [showItems, setShowItems] = useState(false);
  const { title, itemCards } = props.cateogryData.card.card;
  const handleClick = (e) => {
    e.preventDefault();
    setShowItems(!showItems);
  };

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      {/* acordian header section */}
      <div className="w-6/12 mx-auto my-2 bg-slate-100 shadow-lg p-4 rounded-lg ">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList data={itemCards} />}
      </div>
      {/* acordian body  */}
    </div>
  );
}
export default RestaurantCateogry;
