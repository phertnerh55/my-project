import { useState, useEffect, useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { StateContext } from "../context/state";




function Nav() {

  
  const {cart, setCart} =useContext (StateContext)
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    cartItems && setCart(cartItems);
  }, []);
  return (
    <div className=" flex justify-between p-2">
      <div className="flex gap-5 items-center">
        <Link to={"/"}>
          <h2 className="text-4xl font-bold text-green-500 ">
            Sick <span className="text-black">2</span> Strong
          </h2>
        </Link>
      </div>
      <div className="flex gap-5">
        <Link to={"/"}>
          {" "}
          <p className="text-2xl hover:text-emerald-600	 cursor-pointer">Home</p>
        </Link>

        <Link to={"/recipe"}>
          {" "}
          <p className="text-2xl hover:text-emerald-600	cursor-pointer">
            Recipe{" "}
          </p>
        </Link>
      </div>
      <div className="flex gap-5 items-center relative">
        {cart.length > 0 && (
          <div className="rounded-full bg-green-400 w-7 h-7 border-2 absolute bottom-7 left-5 text-center">
            {cart.length}
          </div>
        )
      
     }

        <Link to={"/cart"}>
          {" "}
          <AiOutlineShoppingCart size={45} className="cursor-pointer" />
        </Link>
        <Link to={"/login"}>
          {" "}
          <button className="text-2xl hover:text-emerald-600  border-2 rounded-full py-2 px-5 ">
            Login
          </button>
        </Link>
        <Link>
          {" "}
          <button className="text-2xl hover:text-emerald-600 border-2 rounded-full py-2 px-5">
            Signup
          </button>{" "}
        </Link>
      </div>
    </div>
  );
}
export default Nav;
