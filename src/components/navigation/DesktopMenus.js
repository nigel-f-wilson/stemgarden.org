import React from 'react';

import DesktopPopper from "./DesktopPopper";

import {  
    Box, 
} from "@mui/material"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { aboutListData,servicesListData, resourcesListData } from './lists';


export default function DesktopMenus() {
    const [openDropdown, setOpenDropdown] = React.useState("none")   // "none", "about", "services", "resources"

    const setDropdownState = (newState) => {
      console.log(`setOpenDropdown state to: ${newState}`)
      setOpenDropdown(newState)
    }
 
    return (
        <Box 
          flexGrow='1'
          pl={24}
          pr={4}
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='flex-end'
        >
          <DesktopPopper
            name="about"
            listData={aboutListData}
            open={openDropdown === "about"}
            setDropdownState={setDropdownState}
          />
          <DesktopPopper
            name="services"
            listData={servicesListData}
            open={openDropdown === "services"}
            setDropdownState={setDropdownState}
          />
          <DesktopPopper
            name="resources"
            listData={resourcesListData}
            open={openDropdown === "resources"}
            setDropdownState={setDropdownState}
          />
          {/* <ContactPageLink />  */}
        </Box>
    )
}

