import {AiOutlineShoppingCart} from "react-icons/ai"
function Nav(){
    return(
        <div className="container mx-auto flex justify-between p-2">
        <div className="flex gap-5 items-center">
            <h2 className="text-4xl font-bold text-green-500 ">Sick <span className="text-black">2</span> Strong</h2>
        
        </div>
        <div className="flex gap-5">
        <p className="text-2xl hover:text-emerald-600	 cursor-pointer">Home</p>
            <p className="text-2xl hover:text-emerald-600	">About Us </p>
        </div>
        <div className="flex gap-5 items-center">

            <AiOutlineShoppingCart size={30}/>
        <button className="text-2xl hover:text-emerald-600  border-2 rounded-full py-2 px-5 ">Login</button>
        <button className="text-2xl hover:text-emerald-600 border-2 rounded-full py-2 px-5">Signup</button>

        </div>
        </div>
    )

}
export default Nav