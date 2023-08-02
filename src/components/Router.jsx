
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import LogIn from "../pages/LogIn"
import SignUp from "../pages/SignUp"
function Router() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/signup"element={<SignUp/>}/>
        </Routes>
        </BrowserRouter>
        
        
    )
    
}
export default Router