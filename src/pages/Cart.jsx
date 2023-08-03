import Footer from "../components/Footer"
import HeroCart from "../components/HeroCart"
import Nav from "../components/Nav"

 

 function Cart() {
    return(
        <div className="flex flex-col h-[100vh]">
            <Nav/>
            <HeroCart/>
            <Footer/>

        </div>
    )
    
 }
 export default  Cart