import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const [btnNameReact, setBtnNameReact] = useState("Sign In");
  const cartItems = useSelector((store) => store.cart.item);
  return (
    <div className="flex justify-between bg-slate-50 shadow-lg">
      <div className="logo-container">
        <Link to="/">
          <img
            src={LOGO_URL}
            className="cursor-pointer m-1 p-1 w-[125px] hover:scale-110"
          />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4 font-medium text-lg cursor-default ">
            <span
              className={
                onlineStatus ? "hover:text-green-500" : "hover:text-red-500"
              }
            >
              Online Status:{onlineStatus ? "🟢" : "🔴"}
            </span>
          </li>
          <li className="px-4 text-lg font-medium hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-lg font-medium hover:text-orange-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-lg font-medium hover:text-orange-500">
            <Link to="/contact">Contact</Link>
          </li>
          <li className=" px-4 text-lg font-medium hover:text-orange-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-lg font-medium hover:text-orange-500 group">
            <Link to="/cart">
              <div className="  group flex items-center justify-center">
                <PiShoppingCartSimpleDuotone className="w-10 h-5 " />
                <span className="w-4 h-5 flex items-center justify-center ml-2">
                  {cartItems.length}
                </span>
              </div>
            </Link>
          </li>
          <div className="w-28 px-4 ">
            <button
              className=" w-full text-lg font-medium hover:text-orange-500"
              onClick={() => {
                btnNameReact === "Sign In"
                  ? setBtnNameReact("Sign Out")
                  : setBtnNameReact("Sign In");
              }}
            >
              {btnNameReact}
            </button>
          </div>
          <li className="px-4 text-lg  font-medium hover:text-orange-500 cursor-pointer">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
