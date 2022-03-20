import React from 'react';

import DesktopMenuPopover from "./DesktopMenuPopover";

import {  
    Box, 
} from "@mui/material"

import { aboutListData,servicesListData, resourcesListData } from './lists';

export default function DesktopMenus() {
 
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

