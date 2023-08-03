import pancake from "../assets/images/pancakes.jpg";
import { useState } from "react";


function HeroRecipe() {
    

  return (
    <div className="mx-auto container border-2 shadow-[0_0_12px_rgba(211,211,211)] ">
      
      <div className="w-[80%] mx-auto my-[2em]">
        <div className="w-[1000px] h-[600px] ">
          <img src={pancake} alt="" className="w-[100%] h-[100%] object-fill" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Low-Carb Pancake</h2>
          <p>
            A delicious almond flour pancake recipe that serves as a solid
            substitute for the real thing
          </p>

          <div>
            <h4>Ingredients:</h4>
            <ul>
              <li> 1 cup almond flour</li>
              <li>2 tablespoons coconut flour</li>
              <li>1 teaspoon baking powder</li>
              <li>1/4 teaspoon salt</li>
              <li>3 large eggs</li>
              <li>
                1/4 cup unsweetened almond milk (or any low-carb milk of your
                choice)
              </li>
              <li>1 teaspoon vanilla extract</li>
              <li>
                1-2 tablespoons granulated sweetener of your choice (such as
                stevia or erythritol)
              </li>
              <li>Butter or coconut oil for cooking</li>
              <li>Sugar-free maple syrup or berries for topping (optional)</li>
            </ul>
            <h4>Instructions:</h4>
            <ul>
              <li>
                {" "}
                In a large mixing bowl, whisk together the almond flour, coconut
                flour, baking powder, and salt until well combined.
              </li>

              <li>
                In a separate bowl, whisk the eggs, almond milk, vanilla
                extract, and sweetener until smooth.
              </li>

              <li>
                Add the wet ingredients to the dry ingredients and stir until
                you have a smooth pancake batter. Let the batter sit for a
                couple of minutes to allow the coconut flour to absorb the
                liquid.
              </li>

              <li>
                Heat a non-stick skillet or griddle over medium heat and add a
                little butter or coconut oil to coat the surface.
              </li>

              <li>
                Pour about 1/4 cup of the pancake batter onto the skillet to
                form each pancake. Cook for 2-3 minutes on one side until
                bubbles start to form on the surface.
              </li>

              <li>
                Carefully flip the pancakes and cook for an additional 1-2
                minutes on the other side until they are lightly browned and
                cooked through.
              </li>

              <li>
                Repeat the process with the remaining batter, adding more butter
                or coconut oil to the skillet as needed.
              </li>

              <li>
                Serve the low-carb pancakes with sugar-free maple syrup or a
                handful of fresh berries for added flavor (optional).
              </li>
            </ul>
          </div>
          <div>
            <h3>Nutrition Per Serving</h3>
            <div>
              <div>
                <p>CALORIES</p>
                <p>382</p>
              </div>
              <div>
                <p>CALORIES</p>
                <p>382</p>
              </div>
              <div>
                <p>CALORIES</p>
                <p>382</p>
              </div>
              <div>
                <p>CALORIES</p>
                <p>382</p>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-green-300 text-black p-2 rounded  w-[30%] font-bold text-center text-2xl">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroRecipe;
