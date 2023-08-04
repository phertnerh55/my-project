import {BsFillCartXFill} from "react-icons/bs"
import { Link } from "react-router-dom"
function EmptyCart(){
    return(
        <div>
        <div className="flex items-center justify-center gap-5">
            <BsFillCartXFill size={150}/>
            <h4 className="my-[1em] text-center text-6xl font-bold ">
               The Cart Is Empty
            </h4>
        </div>
        <div className="flex justify-center w-[70%] mx-auto rounded">   
           <Link to="/recipe"> <button className=" p-3 bg-green-500 text-white  hover:text-green-800 font-bold text-center text-2xl mb-5 w-[100%]">View Recipes</button></Link>
        </div>

        </div>
    
    )
}
export default EmptyCart