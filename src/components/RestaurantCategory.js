import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* header */}
      <div
        onClick={handleClick}
        className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer"
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⌄</span>
        </div>
        {/* accordion body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
