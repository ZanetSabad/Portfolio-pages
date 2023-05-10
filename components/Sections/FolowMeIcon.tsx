import React from 'react';
//mui
import { Box, BoxProps, IconButton, MenuItem, styled, Typography } from "@mui/material"
//custom components
import ConstantsContext from '../../context/constantsContext';

interface FolowMeIconProps{}

const IconBox = styled(Box)<BoxProps>(({theme}) => ({
    textAlign: 'center'
  }))

const FolowMeIcon: React.FC<FolowMeIconProps> = () => {
    
    const { iconLinks } = React.useContext(ConstantsContext);
    iconLinks?.sort((a, b) => (a.order > b.order ? 1 : -1));
  
    return (
    <>
      <IconBox > 
        <MenuItem>             
          {iconLinks?.map((IconLink, index) => (
                 <IconButton
                    key={IconLink.href}
                    href={IconLink.href}
                    target='_blank'
                  >
                    {IconLink.Icon}
                    </IconButton>
            ))}
        </MenuItem>
      </IconBox>
    </>
  );
}

export default FolowMeIcon;
