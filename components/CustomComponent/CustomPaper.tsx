import React from 'react';
//mui
import { Paper, PaperProps, styled } from "@mui/material"

interface CustomPaperProps{
    children?: React.ReactNode
}

const PaperRoot = styled(Paper)<PaperProps>(({theme})=>({
    height: "auto",
    padding: "1rem",
    margin: "2rem 1rem",
    flexGrow: 1,
    [theme.breakpoints.down("md")]:{
        boxShadow: "none",     
    }
}))

const CustomPaper: React.FC<CustomPaperProps> = (props) => {
    const {children, ...otherProps } = props
  return (
    <>
        <PaperRoot  
            elevation={5}
        > 
        {children}
        </PaperRoot>
      
    </>
  );
}
export default CustomPaper;
