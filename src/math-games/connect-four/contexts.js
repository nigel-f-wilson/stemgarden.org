import React, { useState, createContext } from "react";


// Custom Hooks
import { useScreenWidth, useScreenHeight } from "../../hooks"

// export const AppStateContext = createContext();

// const AppStateContextProvider = props => {
//   const [appState, setAppState] = useState({
//     cartOpen: false
//   });

//   return <AppStateContext.Provider value={{ appState, setAppState }}>{props.children}</AppStateContext.Provider>;
// };


export const LayoutContext = createContext();

export const LayoutContextProvider = props => {
  const height = useScreenHeight()
  const width = useScreenWidth()
  const boardSideLength = (height <= width) ? height : width
  return <LayoutContext.Provider value={{ boardSideLength }} >{props.children}</LayoutContext.Provider>;
};