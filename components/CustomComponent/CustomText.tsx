import React from 'react';
//mui
import { styled, Typography, TypographyProps } from "@mui/material"

interface CustomTextProps{
    children?: React.ReactNode
}

const TextRoot = styled(Typography)<TypographyProps> (({theme}) =>({
    marginLeft: "1rem"
}))

const CustomText: React.FC<CustomTextProps> = (props) => {
    const {children, ...otherProps} = props
  return (
    <>
        <TextRoot variant='body1'>
            {children}
        </TextRoot>
    </>
  );
}

export default CustomText