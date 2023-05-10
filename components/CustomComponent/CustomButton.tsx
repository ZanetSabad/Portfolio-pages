import React from 'react';
//mui
import { Button, ButtonProps, LinkProps, styled } from "@mui/material"
//next
import Link from 'next/link';

interface CustomButtonProps extends ButtonProps {
  href?: string
  children?: React.ReactNode
}

const LinkRoot = styled(Link)<LinkProps>(({theme}) =>
({
  textDecoration: "none",
}))
 
 const CustomButtonRoot= styled(Button)<ButtonProps>(({ theme, variant}) => 
 ({   
      fontFamily: 'Inconsolata, monospace',
      padding: "10px 15px",
      fontSize: "20px",
      textTransform: "capitalize",
      color: theme.palette.secondary.main,
      background: theme.palette.primary.main,
      borderRadius: "10px",
      "&:hover": {
        background: theme.palette.primary.light,
      }
  })) 
 
    const CustomButtonLink: React.FC<CustomButtonProps> = (props) => {
      const {children, href="#", ref, ...otherProps } = props
    return(
      <LinkRoot href={href} passHref>  
        <CustomButtonRoot> {children} </CustomButtonRoot>
      </LinkRoot>
    )
  }
    
export default CustomButtonLink;
