import chef from "../assets/images/chef.jpg";
import whyus from "../assets/images/whyus.png";
import pancake from "../assets/images/pancakes.jpg";
import breakfast from "../assets/images/breakfast.png";
import lunch from "../assets/images/lunch.png";
import dinner from "../assets/images/dinner.png";
import delivery from "../assets/images/delivery.jpg";
import { BsSearch } from "react-icons/bs";
import { VscFilter } from "react-icons/vsc";
import { StateContext } from "../context/state";
import { useEffect, useContext } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import categories from "../categories";
import { useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
function ContentHome() {
  const { recipe, setRecipe } = useContext(StateContext);
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [data, setData] = useState(categories);
  //   const filterResult = (catitem) => {
  //     const result = categories.filter((currentData) => {
  //       return currentData === catitem;
  //     });
  //   };
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
      {console.log(recipe && recipe)}

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
        <div className="flex justify-center items-center">
          <div className="flex-1">
            <h2 className="text-2xl text-center text-green-800 mb-2 font-bold">
              Why Us
            </h2>
            <p className="mb-2 mx-3 ">
              Sick2Strong offers versatility by accommodating various dietary
              needs and restrictions, ensuring that individuals can easily
              discover options that align with their health goals, such as
              low-carb, vegetarian, gluten-free, or diabetic-friendly recipes.
            </p>
            <p className="mx-3">
              This inclusivity fosters a sense of empowerment and encourages
              users to explore new flavors and ingredients while maintaining
              control over their nutritional intake.
            </p>
          </div>
          <div className="flex-1 w-[300px] h-[300px]">
            <img src={whyus} alt="" className="w-[100%] h-[100%] object-fill" />
          </div>
        </div>
        {/* <div className="flex justify-center mb-2"></div> */}
      </div>
      <div className="container mx-auto border-2 shadow-[0_0_12px_rgba(211,211,211)] rounded border-gray-300  mb-[2em] p-2 ">
        <h2 className="text-3xl text-center text-green-800 my-2 font-bold">Latest Recipes</h2>
        <div className="grid grid-cols-3">
        <div className=" mx-auto my-[2em]">
          <div className="border-black shadow rounded p-1 ">
            <div className="w-[400px] h-[200px] ">
              <img
                src=""
                alt=""
                className="w-[100%] h-[100%] object-fill"
              />
            </div>
            <h2 className="font-bold text-2xl text-green-800 my-2em">
              {}
            </h2>
            <p className=""></p>

            <div>
              <div className="  w-[60%] ">
                <div className="flex gap-5 my-2 items-center">
                  <BiTimeFive size={25} />
                  <p className=""></p>
                </div>
                <div className="flex  my-2 gap-5 items-center">
                  <AiOutlineStar size={25} />

                  <p className=""></p>
                </div>
                <div className="flex  my-2 gap-5 items-center">
                  <BsCurrencyDollar size={25} />
                  <p className=""></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-auto my-[2em]">
          <div className="border-black shadow rounded p-1 ">
            <div className="w-[400px] h-[200px] ">
              <img
                src=""
                alt=""
                className="w-[100%] h-[100%] object-fill"
              />
            </div>
            <h2 className="font-bold text-2xl text-green-800 my-2em">
              {}
            </h2>
            <p className=""></p>

            <div>
              <div className="  w-[60%] ">
                <div className="flex gap-5 my-2 items-center">
                  <BiTimeFive size={25} />
                  <p className=""></p>
                </div>
                <div className="flex  my-2 gap-5 items-center">
                  <AiOutlineStar size={25} />

                  <p className=""></p>
                </div>
                <div className="flex  my-2 gap-5 items-center">
                  <BsCurrencyDollar size={25} />
                  <p className=""></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-auto my-[2em]">
          <div className="border-black shadow rounded p-1 ">
            <div className="w-[400px] h-[200px] ">
              <img
                src=""
                alt=""
                className="w-[100%] h-[100%] object-fill"
              />
            </div>
            <h2 className="font-bold text-2xl text-green-800 my-2em">
              {}
            </h2>
            <p className=""></p>

            <div>
              <div className="  w-[60%] ">
                <div className="flex gap-5 my-2 items-center">
                  <BiTimeFive size={25} />
                  <p className=""></p>
                </div>
                <div className="flex  my-2 gap-5 items-center">
                  <AiOutlineStar size={25} />

                  <p className=""></p>
                </div>
                <div className="flex  my-2 gap-5 items-center">
                  <BsCurrencyDollar size={25} />
                  <p className=""></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="container mx-auto border-2 shadow-[0_0_12px_rgba(211,211,211)] rounded border-gray-300 flex mb-[2em] items-center">
        <div className="flex-1 w-[300px] h-[200px]">
          <img
            src={delivery}
            alt=""
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl mb-2 text-green-800 font-bold">
            Get Your Delivery
          </h3>
          <p className=" ">
            Each week, you’ll open simple step-by-step recipes complete with
            nutritional information and fresh, pre-measured ingredients to get
            you whipping up delicious dinners in no time.
          </p>
        </div>
      </div>
    </div>
  );
}
export default ContentHome;
