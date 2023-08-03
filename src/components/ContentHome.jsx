import chef from "../assets/images/chef.jpg";
import whyus from "../assets/images/whyus.jpg";
import pancake from "../assets/images/pancakes.jpg";
import breakfast from "../assets/images/breakfast.png"
import lunch from "../assets/images/lunch.png"
import dinner from "../assets/images/dinner.png"
import delivery from "../assets/images/delivery.jpg";
import { BsSearch } from "react-icons/bs";
import { VscFilter } from "react-icons/vsc";
import { StateContext } from "../context/state";
import { useEffect, useContext } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import categories from "../categories";
import { useState } from "react";
function ContentHome() {
  const { recipe, setRecipe } = useContext(StateContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(categories);
  const filterResult = (catitem) => {
    const result = categories.filter((currentData) => {
      return currentData === catitem;
    });
  };
  useEffect(() => {
    (async function () {
      const q = query(collection(db, "recipe"));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc);
        setRecipe((prev) => [...prev, doc.data]);
        console.log(doc.id, " => ", doc.data());
      });
    })();
  }, []);
  //   const onChange=()>{setSearchTerm

  //   }
  return (
    <div>
      {/* {console.log(recipe && recipe)} */}

      <div className="container mx-auto border-2 shadow-[0_0_12px_rgba(211,211,211)] rounded border-gray-300 flex justify-center my-[2em]">
        <div className="flex-1 w-[400px] h-[400px] ">
          <img src={chef} alt="" className="w-[100%] h-[100%]" />
        </div>
        <div className="flex-1 flex items-center gap-7 ">
          <h1 className="text-[5rem] font-bold text-green-800 ">
            Discover Simple <br /> Delicious and <br /> Fast Recipes...
          </h1>
        </div>
      </div>
      <div className="container mx-auto border-2 shadow-[0_0_12px_rgba(211,211,211)] rounded border-gray-300 mb-[2em] ">
        <h2 className="text-6xl text-center text-green-800 my-2">Why Us</h2>
        <div className="flex justify-center">
          <div className="flex-1  h-[30vh]">
            <p className="text-2xl text-center ">
              Sick2Strong offers versatility by accommodating various dietary
              needs and restrictions, ensuring that individuals can easily
              discover options that align with their health goals, such as
              low-carb, vegetarian, gluten-free, or diabetic-friendly recipes.
              This inclusivity fosters a sense of empowerment and encourages
              users to explore new flavors and ingredients while maintaining
              control over their nutritional intake.
            </p>
          </div>
          <div className="flex-1 w-[300px] h-[300px]">
            <img src={whyus} alt="" className="w-[100%] h-[100%]" />
          </div>
        </div>
        <div className="flex justify-center mb-2">
          <button className="text-2xl font-bold bg-green-500 text-white p-2 w-[20%] rounded-full hover:text-green-800">
            View more
          </button>
        </div>
      </div>
      <div className="container mx-auto border-2 shadow-[0_0_12px_rgba(211,211,211)] rounded border-gray-300  mb-[2em] p-2">
        <div className="flex justify-center items-center">
          <div className="flex gap-5 shadow border-gray-300  border-2 w-[40%] rounded-full mx-5 my-2 p-7">
            <BsSearch size={35} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search for a disease"
              className="outline-0 "
            />
          </div>
          <div className="flex justify-between items-center shadow border-gray-300  border-2 w-[60%] rounded-full mx-5 my-2 p-7">
            <div className="flex gap-5 border-2 shodow p-1">
              <VscFilter size={30} />
              <h3 className="text-2xl"> By Category</h3>
            </div>

            <div
              className="border-black"
            //   onClick={() => filterResult("All")}
            >
              All
            </div>
            <div className="border-black">
                <div  className="w-[70px] h-[70px]" >
                <img src={breakfast} alt="" className="w-[100%] h-[100%]"  />
                </div>
              <p>  BreakFast</p>
                </div>
            <div className="border-black">
                <div className="w-[70px] h-[70px]">
            <img src={lunch} alt="" className="w-[100] h-[100%]" />
                </div>
                <p>
                Lunch
                </p>
                </div>
            <div className="border-black">
                <div className="w-[70px] h-[70px]">
            <img src={dinner} alt=""className="w-[100%] h-[100%]" />
                </div>
                <p>
                Supper
                </p>
                </div>
          </div>
        </div>
        <div className="flex justify-around">
          {data.map((item) => {
            return (
              <div className="shadow border-2 border-gray-300 rounded p-2">
                <div className="w-[200px] h[300px]">
                  <img src={item.foodImage} alt="" />
                </div>
                <h2 className="text-2xl font-bold">{item.foodName}</h2>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto border-2 shadow-[0_0_12px_rgba(211,211,211)] rounded border-gray-300 flex mb-[2em]">
        <div className="flex-1">
          <img src={delivery} alt="" />
        </div>
    
      </div>
    </div>
  );
}
export default ContentHome;