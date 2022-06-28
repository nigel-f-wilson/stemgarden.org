import React, { useState, createContext } from "react";

// Custom Hooks
import { useScreenWidth, useScreenHeight } from "./hooks"

export const AppContext = createContext();

export const AppContextProvider = props => {
  // COLOR THEME
  const [colorTheme, setColorTheme] = useState("dark")
  const [navbarHidden, setNavbarHidden] = useState(false)


  // SCREEN LAYOUT
  let screenHeight = useScreenHeight()
  let screenWidth = useScreenWidth()
  let narrowScreen = screenWidth < 900

  let navbarStyle = navbarHidden ? 'hidden' : narrowScreen ? 'mobile' : 'desktop'
  let navbarHeightPx = (navbarStyle === 'hidden') ? 0 : (navbarStyle === 'mobile') ? 48 : 96



  let availableHeight = screenHeight - navbarHeightPx
  let availableWidth = (screenWidth < 900) ? screenWidth : 900

  let maxSquareSideLength = (availableHeight < availableWidth) ? availableHeight : availableWidth
  
  const layoutAndColorContext = {
    screenWidth,
    // screenHeight,
    narrowScreen,
    availableHeight, 
    availableWidth,
    maxSquareSideLength,

    colorTheme,
    setColorTheme,

    navbarStyle,
    navbarHeightPx,
    navbarHidden,
    setNavbarHidden
  }

  // console.log(`ROOT PAGE LAYOUT CONTEXT: ${JSON.stringify(layout, null, 4)}`);
  
  return (
    <AppContext.Provider 
      value={layoutAndColorContext} 
      children={props.children}
    />
  )
};