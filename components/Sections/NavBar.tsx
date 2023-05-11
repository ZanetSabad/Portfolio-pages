import * as React from 'react';
//Mui
import { MenuList, MenuListProps, Paper, PaperProps, styled } from "@mui/material"
//components
import FolowMeIcon from './FolowMeIcon';
import CustomButton from '../CustomComponent/CustomButton';
//context
import ConstantsContext from '../../context/constantsContext';


const PaperRoot = styled(Paper)<PaperProps>(({theme}) => 
({
    width: "300px",
    height: "80vh",
    margin: "4rem auto",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "10px",
    textTransform: "capitalize",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  }))

const MenuListRoot = styled(MenuList)<MenuListProps>(({theme}) => 
  ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  })
)

const CustomNavButton = () => {    
    const { navLinks } = React.useContext(ConstantsContext);
    navLinks?.sort((a, b) => (a.id > b.id ? 1 : -1));

  return (
    <>
      <PaperRoot elevation={3}>     
        <MenuListRoot>
                {navLinks?.map((NavLink, index) => (
                    <CustomButton
                        key={NavLink.id}
                        href={NavLink.href}
                        {...NavLink.buttonProps}
                    >
                        {NavLink.label}
                    </CustomButton>
                ))}        
            <FolowMeIcon />
        </MenuListRoot>
      </PaperRoot>
    </>
  );
}

export default CustomNavButton;
