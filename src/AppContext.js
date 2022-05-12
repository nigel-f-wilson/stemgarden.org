import React, { useState, createContext } from "react";

// Custom Hooks
import { useScreenWidth, useScreenHeight } from "./hooks"

export const AppContext = createContext();

export const AppContextProvider = props => {
  // COLOR THEME
  const [colorTheme, setColorTheme] = useState("dark")

  // SCREEN LAYOUT
  let screenHeight = useScreenHeight()
  let screenWidth = useScreenWidth()
  let narrowScreen = screenWidth < 900
  let navbarStyle = narrowScreen ? 'mobile' : 'desktop'
  let navbarHeightPx = (navbarStyle === 'mobile') ? 48 : 96
  let availableHeight = screenHeight - navbarHeightPx
  let availableWidth = screenWidth

  let maxSquareSideLength = (availableHeight < availableWidth) ? availableHeight : availableWidth
  
  const layoutAndColorContext = {
    // screenWidth,
    // screenHeight,
    narrowScreen,
    navbarStyle,
    navbarHeightPx,
    availableHeight, 
    availableWidth,
    maxSquareSideLength,

    colorTheme,
    setColorTheme
  }

  // console.log(`ROOT PAGE LAYOUT CONTEXT: ${JSON.stringify(layout, null, 4)}`);
  
  return (
    <AppContext.Provider 
      value={layoutAndColorContext} 
      children={props.children}
    />
  )
};