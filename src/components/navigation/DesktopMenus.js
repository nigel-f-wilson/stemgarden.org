import React from 'react';

import DesktopMenuPopover from "./DesktopMenuPopover";

import {  
    Box, 
} from "@mui/material"

import { aboutListData, servicesListData, resourcesListData } from './navigationListData';

export default function DesktopMenus() {
 
    return (
        <Box 
          flexGrow='1' 
          pl={8}
          pr={0}
          display='flex'
          flexDirection='row'
          justifyContent='right'
          alignItems='flex-end'
        >
          <DesktopMenuPopover
            name="about"
            listData={aboutListData}
          />
          <DesktopMenuPopover
            name="services"
            listData={servicesListData}
          />
          <DesktopMenuPopover
            name="resources"
            listData={resourcesListData}
          />
          {/* <ContactPageLink />  */}
        </Box>
    )
}

