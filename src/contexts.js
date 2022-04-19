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
  let screenHeight = useScreenHeight()
  let screenWidth = useScreenWidth()
  
  let narrowScreen = screenWidth < 900
  
  let navbarStyle = narrowScreen ? 'mobile' : 'desktop'
  let navbarHeightPx = (navbarStyle === 'mobile') ? 48 : 96

  let availableHeight = screenHeight - navbarHeightPx
  let availableWidth = screenWidth

  let maxSquareSideLength = (availableHeight < availableWidth) ? availableHeight : availableWidth
  
  const layout = {
    // screenWidth,
    // screenHeight,
    navbarStyle,
    navbarHeightPx,
    availableHeight, 
    availableWidth,
    maxSquareSideLength
  }

  console.log(`ROOT PAGE LAYOUT CONTEXT: ${JSON.stringify(layout, null, 4)}`);
  
  return (
    <PageLayoutContext.Provider 
      value={layout} 
      children={props.children}
    />
  )
};