import pancakes from "../assets/images/pancakes.jpg";
import { AiOutlineDelete } from "react-icons/ai";
function HeroCart() {
  return (
    <div>
      <div className="container mx-auto border-2 shadow my-[2em]">
        <div className="flex justify-around items-center my-[1em]">
          <div className="w-[300px] h-[300px]">
            <img src={pancakes} alt="" className="w-[100%] h-[100%]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Low-Carb Pancake</h3>
            <p className="font-bold text-2xl my-5">ksh 2000</p>
            <div className="flex  justify-around items-center">
              <button className="font-bold text-4xl border-2 border-black rounded px-7 ">
                -
              </button>
              <p className="font-bold text-4xl">1</p>
              <button className="font-bold text-4xl border-2 border-black rounded px-7 ">
                +
              </button>
            </div>
          </div>
          <AiOutlineDelete size={50} className="text-red-500" />
        </div>
      </div>
      
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
          <h3 className="font-bold text-[2.5rem] text-center ">Cart Summary</h3>
          <div className="mx-auto w-[70%]">
          <div className="flex gap-2 items-center justify-between mb-3">
            <p className="text-2xl">Subtotal</p>
            <p className="text-2xl">Ksh 2000</p>
          </div>
          <div className="flex gap-2 items-center justify-between mb-3">
            <p className="text-2xl">Delivery Fee</p>
            <p className="text-2xl">ksh 500</p>
          </div>
          <div className="border-b-2 border-gray-300"></div>
          <div className="flex gap-2 items-center justify-between mb-3 ">
            <p className="text-2xl">Total</p>
            <p className="text-2xl">ksh 2500</p>
          </div>
          </div>
        </div>
        <div className="w-[50%] mx-[1em]">
          <button className=" p-7 bg-green-300 text-black rounded-full shadow font-bold text-center text-[2rem] my-[1em] w-[100%]">
            Checkout
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
}
export default HeroCart;
