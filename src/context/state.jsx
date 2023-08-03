import { createContext, useState, useContext } from "react";
export const StateContext = createContext();

function StateProvider({ children }) {
  const [recipe, setRecipe] = useState([]);
  return(
  <StateContext.Provider value={{ recipe, setRecipe }}>
    {children}
  </StateContext.Provider>
  )
}
export default StateProvider;