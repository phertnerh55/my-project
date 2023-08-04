import { BiTimeFive } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { useEffect, useContext, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { addToCart } from "../components/AddToCart";
import { addToCartText } from "../components/AddToCart";

import { StateContext } from "../context/state";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function SingleRecipe() {
  const {name} = useParams();
  const [singleRecipe,setSingleRecipe]=useState("")
  const { cart, setCart } = useContext(StateContext)
  useEffect(() => {

    (async function () {
      const q = query(collection(db, "recipe"));



      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        if(doc.data().foodName.toLowerCase().split(" ").join("-") === name){
          setSingleRecipe(doc.data())

          
        }
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    })();
  });
  const { recipe, setRecipe } = useContext(StateContext);
  
      return (
        <div>
          <Nav/>
        <div className="mx-auto my-[2em] w-[70%] container border-2 shadow-[0_0_12px_rgba(211,211,211)] border-green-300 rounded items-center">
          <div className="w-[900px] h-[400px] mx-auto">
            <img src={singleRecipe.recipeImage} alt="" className="w-[100%] h-[100%]" />
          </div>
          <div className="shadow border-2 border-gray-300 rounded-t mx-3	">
            <h2 className="font-bold text-2xl text-green-800 my-2em">
              {singleRecipe.foodName}
            </h2>
            <p className="">{singleRecipe.shortDescription}</p>

            <div>
              <div className="  w-[60%] ">
                <div className="flex gap-5 my-2 items-center">
                  <BiTimeFive size={25} />
                  <p className="">{singleRecipe.mealTime}</p>
                </div>
                <div className="flex  my-2 gap-5 items-center">
                  <AiOutlineStar size={25} />

                  <p className="">{singleRecipe.diseaseName}</p>
                </div>
                <div className="flex  my-2 gap-5 items-center">
                  <BsCurrencyDollar size={25} />
                  <p className="">{singleRecipe.price}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-green-700">Ingredients:</h3>
              {singleRecipe.addIngredients}
              <h3 className="font-bold text-green-700">Instructions:</h3>
              <p>{singleRecipe.addInstructions}</p>
            </div>

            <div className="flex justify-center">
              <button  onClick={(e) => addToCart(e,singleRecipe, cart, setCart)} className="bg-green-600 text-white p-2 rounded  w-[50%] font-bold text-center text-2xl hover:text-green-800 my-2">
              {addToCartText(cart,singleRecipe)}
              </button>
            </div>
          </div>
        </div>
        <Footer/>
        </div>
      )
  
}
