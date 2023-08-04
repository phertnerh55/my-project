import { createContext, useState, useContext } from "react";
export const StateContext = createContext();

function StateProvider({ children }) {
  const [recipe, setRecipe] = useState([]);
  const [cart, setCart] = useState([]);
  return(
  <StateContext.Provider value={{ recipe, setRecipe, cart, setCart }}>
    {children}
  </StateContext.Provider>
  )
}
export default StateProvider;