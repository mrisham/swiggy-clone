import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  return (
    <div
      data-testid="resCard"
      className="p-4 m-4 w-[250px] h-[380px] rounded-lg shadow-md bg-gray-100  hover:scale-95"
    >
      <img
        className="rounded-md w-[300px] h-[200px]"
        src={CDN_URL + resData?.info?.cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-2 text-lg truncate break-words">
        {resData?.info?.name}
      </h3>
      <h4 className="font-bold">
        ⭐ {resData?.info?.avgRating} • {resData?.info?.sla?.deliveryTime} mins
      </h4>
      <h4 className="truncate ">{resData?.info?.cuisines.join(", ")}</h4>
      <h4>{resData?.info?.costForTwo}</h4>
    </div>
  );
};
//Higher order components, input restaurantCard ==> output restaurantwithPromotedLabel
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-green-800 font-semibold text-white absolute rounded-md m-2 p2">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
