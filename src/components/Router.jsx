
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import Cart from "../pages/Cart"
import Recipe from "../pages/Recipe"
function Router() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/recipe" element={<Recipe/>}/>
        </Routes>
        </BrowserRouter>
        
        
    )
    
}
export default Router