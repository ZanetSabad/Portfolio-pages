import React from 'react';
//mui
import { styled, Typography, TypographyProps } from "@mui/material"

interface CustomBannerProps extends TypographyProps{}

const TypographyRoot = styled(Typography)<TypographyProps>(({theme})=>({
    textAlign: "center",
    padding: "3rem 0",
    backgroundColor: theme.palette.primary.main,
    color:theme.palette.text.secondary, 
    letterSpacing: "0.1rem",
    [theme.breakpoints.down("md")]:{
      padding: "1rem 0"
  }
}))

const CustomBanner: React.FC<CustomBannerProps> = (props) => {
    const {children, ...otherProps } = props
  return (
    <>
      <TypographyRoot 
        variant='h3'   
      > 
            {children} 
      </TypographyRoot>
    </>
  );
}

export default CustomBanner