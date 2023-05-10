import React from 'react';
//mui
import { styled, Typography, TypographyProps } from "@mui/material"

interface CustomTitleProps extends TypographyProps{}

const TypographyRoot = styled(Typography)<TypographyProps>(({theme})=>({
    textAlign: "center",
    margin: "3rem 0"
}))

const CustomTitle: React.FC<CustomTitleProps> = (props) => {
    const {children, color, ...otherProps } = props
  return (
    <>
      <TypographyRoot 
        variant='h2'
        color="primary.main"
      > 
            {children} 
      </TypographyRoot>
    </>
  );
}

export default CustomTitle
