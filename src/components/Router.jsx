
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import Cart from "../pages/Cart"
import Recipe from "../pages/Recipe"
import AddForm from "../pages/AddForm"
function Router() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/recipe" element={<Recipe/>}/>
            <Route path="/add" element={<AddForm/>}/>
        </Routes>
        </BrowserRouter>
        
        
    )
    
}
export default Router