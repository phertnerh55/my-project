import pancake from "../assets/images/pancakes.jpg";

function HeroRecipe() {
  return (
    <div className="mx-auto container border-2">
      <div className="w-[700px] h-[500px] ">
        <img src={pancake} alt="" className="w-[100%] h-[100%]" />
      </div>

    </div>
  );
}
export default HeroRecipe;
