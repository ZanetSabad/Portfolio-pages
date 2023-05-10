import React from 'react';
import { Button, ButtonProps, styled } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

const ButtonMenu = styled(Button)<ButtonProps>(({theme})=>
({
    backgroundColor: "#89345e", 
    border: "2px solid #89345e", 
    height: "10vh",
    borderRadius: "10px",
    "&:hover": {
      background: theme.palette.primary.light,
    },
    [theme.breakpoints.up("md")]: {
        display: "none",}
}))

const CustomButtonMenu = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
  
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
      };

    return (
    <div>
        <ButtonMenu
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MenuIcon sx={{color: 'black', margin: "0 auto"}} />
        </ButtonMenu>
    </div>
  );
}

export default CustomButtonMenu;
