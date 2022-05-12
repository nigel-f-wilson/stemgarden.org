import React, { useContext } from 'react';
import { Link as RouterLink } from "react-router-dom";

import { Box } from "@mui/material"
import { AppContext } from '../../AppContext';

const chess_logo = "https://res.cloudinary.com/nola-stem-garden/image/upload/c_scale,h_150,w_150/v1647198083/stemgarden.org/nsgLogoSnipped_li5iap.png"
// const leaf_logo = "https://www.logoai.com/oss/icons/2022/03/14/fe7fdb2f7fd12c15c1bfd8441e7c346e.svg"

export default function Logo() {
  const { navbarHeightPx } = useContext(AppContext)
  
  return (
    <RouterLink to='/' >
      <Box
        sx={{
          height: navbarHeightPx,
          width: navbarHeightPx,
          backgroundImage: `url(${chess_logo})`,
          backgroundPosition: 'left bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 95%',
        }}
      />
    </RouterLink>
  );
}

