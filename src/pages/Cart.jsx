import Footer from "../components/Footer";
import HeroCart from "../components/HeroCart";
import Nav from "../components/Nav";
import EmptyCart from "../components/EmptyCart";
import { StateContext } from "../context/state";
import { useState, useEffect, useContext } from "react";

function Cart() {
  const { cart, setCart } = useContext(StateContext);

  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <Nav cart={cart} setCart={setCart} />
      {cart.length === 0 ? <EmptyCart /> : <HeroCart />}
      <Footer />
    </div>
  );
}
export default Cart;
