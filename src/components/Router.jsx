
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home"

import Cart from "../pages/Cart"
import Recipe from "../pages/Recipe"
import AddForm from "../pages/AddForm"

import LogIn from "../pages/LogIn"
import SignUp from "../pages/SignUp"

function Router() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/cart" element={<Cart/>}/>
            <Route path="/recipe" element={<Recipe/>}/>
            <Route path="/add" element={<AddForm/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/signup"element={<SignUp/>}/>

        </Routes>
        </BrowserRouter>
        
        
    )
    
}
export default Router