import React, { createContext } from "react";


// Custom Hooks
import { useScreenWidth, useScreenHeight } from "./hooks"

// export const AppStateContext = createContext();

// const AppStateContextProvider = props => {
//   const [appState, setAppState] = useState({
//     cartOpen: false
//   });

//   return <AppStateContext.Provider value={{ appState, setAppState }}>{props.children}</AppStateContext.Provider>;
// };


export const PageLayoutContext = createContext();

export const PageLayoutContextProvider = props => {
  const height = useScreenHeight()
  const width = useScreenWidth()
  const boardSideLength = (height <= width) ? height : width
  
  const narrowScreen = width < 600
  
  const navbarStyle = narrowScreen ? 'mobile' : 'desktop'
  
  
  return (
    <PageLayoutContext.Provider 
      value={{ boardSideLength }} 
      children={props.children}
    />
  )
};