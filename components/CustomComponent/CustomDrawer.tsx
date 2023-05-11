import React from 'react'
//mui
import { Box, Button, Drawer, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
//components
import FolowMeIcon from '../Sections/FolowMeIcon';
import ConstantsContext from '../../context/constantsContext';

interface CustomDrawerProps{
  open?: boolean | undefined;
  onClose: () => void;
}

const CustomDrawer:React.FC<CustomDrawerProps> = (props) => {
  const {open, onClose, ...otherProps} = props

  const { navLinks } = React.useContext(ConstantsContext);
  navLinks?.sort((a, b) => (a.id > b.id ? 1 : -1));

  return (
    <>
    <Drawer
      PaperProps={{
        sx: { width: '50%', background: "#89345e"},
      }}
      anchor='left'
      open={open}
      onClose={onClose}
    >
      <Box sx={{ padding: '2px' }}>
        <IconButton onClick={onClose} sx={{ padding: 0, marginLeft: '5px' }}>
          <CloseIcon />
        </IconButton>
       
        <Box sx={{ display: "flex", flexDirection: "column", }}>
        {navLinks?.map((NavLink, index) => (
                    <Button
                        sx={{fontsize: "25px"}}
                        key={NavLink.id}
                        href={NavLink.href}
                        {...NavLink.buttonProps}
                    >
                        {NavLink.label}
                    </Button>
                ))}     
          <Box sx={{ margin: "auto"}}> 
            <FolowMeIcon />   
          </Box>       
        </Box>
      </Box>
    </Drawer>
    </>
  )
}

export default CustomDrawer