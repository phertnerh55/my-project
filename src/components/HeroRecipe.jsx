import pancake from "../assets/images/pancakes.jpg";
import { useState } from "react";
import { StateContext } from "../context/state";
import { useEffect, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import breakfast from "../assets/images/breakfast.png";
import lunch from "../assets/images/lunch.png";
import dinner from "../assets/images/dinner.png";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";

function HeroRecipe() {
  const { recipe, setRecipe } = useContext(StateContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  useEffect(() => {
    (async function () {
      const q = query(collection(db, "recipe"));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log();
        setRecipe((prev) => [...prev, doc.data()]);
        console.log(doc.id, " => ", doc.data());
      });
    })();
  }, []);

  return (
    <div className="mx-auto container border-2 shadow-[0_0_12px_rgba(211,211,211)] ">
      {console.log(recipe && recipe)}

      <div className="container mx-auto border-2 shadow-[0_0_12px_rgba(211,211,211)] rounded border-gray-300  mb-[2em] p-2">
        <div className="flex justify-center items-center">
          <div className="flex gap-5 shadow border-gray-300  border-2 w-[40%] rounded-full mx-5 my-2 p-7">
            <BsSearch size={35} className="text-gray-400" />

            <input
              type="search"
              placeholder="Search for a disease"
              className="outline-0 w-[100%] "
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex justify-around items-center shadow border-gray-300  border-2 w-[60%] rounded-full mx-5 my-2 p-2">
            <div
              className="border-black cursor-pointer"
              onClick={() => setFilterTerm("breakfast")}
            >
                          <div className="w-[70px] h-[70px]">
                <img src={breakfast} alt="" className="w-[100%] h-[100%]" />
              </div>
              <p> BreakFast</p>
            </div>
            <div className="border-black cursor-pointer"  onClick={() => setFilterTerm("lunch") }>
              <div className="w-[70px] h-[70px]">
                <img src={lunch} alt="" className="w-[100] h-[100%]" />
              </div>
              <p>Lunch</p>
            </div>
            <div className="border-black cursor-pointer"  onClick={() => setFilterTerm("dinner")}>
              <div className="w-[70px] h-[70px]">
                <img src={dinner} alt="" className="w-[100%] h-[100%]" />
              </div>
              <p>Supper</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {recipe.map((item) => {
            if (
              item.foodName.toLowerCase().includes(searchTerm.toLowerCase()) && item.mealTime.toLowerCase().includes(filterTerm)
            ) {
              

            

              return (
                <div className=" mx-auto my-[2em]">
                  <div className="border-black shadow rounded p-1 ">
                    <div className="w-[400px] h-[200px] ">
                      <img
                        src={item.recipeImage}
                        alt=""
                        className="w-[100%] h-[100%] object-fill"
                      />
                    </div>
                    <h2 className="font-bold text-2xl text-green-800 my-2em">
                      {item.foodName}
                    </h2>
                    <p className="">{item.shortDescription}</p>

                    <div>
                      <div className="  w-[60%] ">
                        <div className="flex gap-5 my-2 items-center">
                          <BiTimeFive size={25} />
                          <p className="">{item.mealTime}</p>
                        </div>
                        <div className="flex  my-2 gap-5 items-center">
                          <AiOutlineStar size={25} />

                          <p className="">{item.diseaseName}</p>
                        </div>
                        <div className="flex  my-2 gap-5 items-center">
                          <BsCurrencyDollar size={25} />
                          <p className="">{item.price}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <button className="bg-green-600 text-white p-2 rounded  w-[70%] font-bold text-center text-2xl hover:text-green-800 my-2">
                        View recipe
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
export default HeroRecipe;
