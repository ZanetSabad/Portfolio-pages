import React from 'react';
//mui
import { Paper, PaperProps, styled, Typography } from "@mui/material"

interface CustomSubtitleProps {
    children?: React.ReactNode
    textAlign?: string
}

const PaperRoot = styled(Paper)<PaperProps>(({theme}) => ({
    width: 500, 
    padding: "1rem",
}))

const CustomSubtitle: React.FC<CustomSubtitleProps> = (props) => {
    const { children, textAlign, ...otherProps} = props
  return (
    <>
       <PaperRoot elevation={0}>
            <Typography variant='h3' fontWeight='bold' color='secondary'>
               {children}
            </Typography>
        </PaperRoot>
    </>
  );
}

export default CustomSubtitle
