import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../Features/user/userSlice";
import { clearCart } from "../Features/cart/cartSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    navigate("/");
    dispatch(logoutUser());
    dispatch(clearCart());
  };

  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2  sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm ">hello,{user.userName}</p>
            <button
              className="btn btn-xs btn-outline btn-primary"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className=" flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              sign in/guest
            </Link>
            <Link to="./register link link-hover text-xs sm:text-sm">
              create a account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
