import pancakes from "../assets/images/pancakes.jpg";
import { AiOutlineDelete } from "react-icons/ai";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../context/state";
import EmptyCart from "./EmptyCart";

function HeroCart() {
  const [cartCopy, setcartCopy] = useState([]);
  const { recipe, setRecipe, cart, setCart } = useContext(StateContext);
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    cartData && setcartCopy(cartData);
  }, []);
  function manageCart(action, product) {
    if (action === "add") {
      setcartCopy((prev) => [...prev, product]);
    } else if (action === "remove") {
      const cartCopyArray = [...cartCopy];
      const productIndex = cartCopyArray.indexOf(product);
      cartCopyArray.splice(productIndex, 1);
      setcartCopy(cartCopyArray);
    } else if (action === "delete") {
      alert("delete");
    }
  }
  return (
    <div>
      {cart.map((item) => {
        return (
          <div className="container mx-auto border-2 shadow my-[2em]">
            <div className="flex justify-around items-center my-[1em]">
              <div className="w-[300px] h-[300px]">
                <img
                  src={` /src/assets/images/${item.recipeImage}`}
                  alt=""
                  className="w-[100%] h-[100%]"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Low-Carb Pancake</h3>
                <p className="font-bold text-2xl my-5">{`Ksh. ${cartCopy
                  .filter((cartitem) => cartitem.foodName === item.foodName)
                  .reduce((acc, curr) => acc + curr.price, 0)
                  .toLocaleString()}`}</p>
                <div className="flex  justify-around items-center">
                  <button
                    className="font-bold text-4xl border-2 border-black rounded px-7  "
                    onClick={() => manageCart("remove", item)}
                    disabled={
                      cartCopy.filter(
                        (cartItem) => cartItem.foodName === item.foodName
                      ).length === 1
                        ? true
                        : false
                    }
                  >
                    -
                  </button>
                  <p className="font-bold text-4xl">
                    {
                      cartCopy.filter(
                        (element) => element.foodName === item.foodName
                      ).length
                    }
                  </p>
                  <button
                    onClick={() => manageCart("add", item)}
                    className="font-bold text-4xl border-2 border-black rounded px-7 "
                  >
                    +
                  </button>
                </div>
              </div>
              <AiOutlineDelete size={50} className="text-red-500" />
            </div>
          </div>
        );
      })}

      <div className="shadow border-2 container w-[70%] mx-auto mb-[2em]">
        <div className="rounded border-gray-300 shadow border 2    p-[3em]  my-[1em] mx-[1em] flex items-center">
          <input
            type="textarea"
            placeholder="Delivery instructions "
            className="outline-0"
          />
        </div>

        <div className="flex items-center justify-between my-[2em] ">
          <div className="mx-[1em] border-2 w-[50%] ">
            <h3 className="font-bold text-[2.5rem] text-center ">
              Cart Summary
            </h3>
            <div className="mx-auto w-[70%]">
              <div className="flex gap-2 items-center justify-between mb-3">
                <p className="text-2xl">Subtotal</p>
                <p className="text-2xl"></p>
                {`Ksh. ${cartCopy
                  .reduce((acc, curr) => acc + curr.price, 0)
                  .toLocaleString()}`}
              </div>
              <div className="flex gap-2 items-center justify-between mb-3">
                <p className="text-2xl">Delivery Fee</p>
                <p className="text-2xl">ksh 500</p>
              </div>
              <div className="border-b-2 border-gray-300"></div>
              <div className="flex gap-2 items-center justify-between mb-3 ">
                <p className="text-2xl">Total</p>
                <p className="text-2xl">
                  {" "}
                  {`Ksh. ${cartCopy

                    .reduce((acc, curr) => acc + curr.price, 0 + 500)
                    .toLocaleString()}`}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[50%] mx-[1em]">
            <button className=" p-7 bg-green-500 text-white rounded-full shadow font-bold text-center text-[2rem] my-[1em] w-[100%] hover:text-green-800">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroCart;
