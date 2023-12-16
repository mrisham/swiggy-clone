import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [seachText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { setUserName, loggedInUser } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7955624&lng=80.90694719999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (onlineStatus === false)
    return (
      <h2>Seems like you are offline! Please check your internet Connection</h2>
    );
  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-100">
      <div className="filter flex">
        <div className="search m-4 p-4 w-[500px]">
          <div className="relative">
            <input
              data-testid="searchInput"
              type="text"
              className="p-2 border border-solid border-black rounded-lg w-full"
              value={seachText}
              placeholder="Search..."
              onChange={(e) => {
                // setSearchText(e.target.value);
                const searchText = e.target.value;
                setSearchText(searchText);
                const filteredRestaurant = listOfRestaurant.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
              }}
            />
            <AiOutlineSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500" />
          </div>
          {/* for search button */}
          {/* <button
            className="p-2 m-4 bg-green-200 rounded-md"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(seachText.toLocaleLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            <AiOutlineSearch />
          </button>  */}
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => {
              console.log("clicked");
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        {/* <div className="search m-4 p-4 flex items-center">
          <label>UserName: </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div> */}
      </div>
      <div className="flex flex-wrap mx-10">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
            {console.log(filteredRestaurant)}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
