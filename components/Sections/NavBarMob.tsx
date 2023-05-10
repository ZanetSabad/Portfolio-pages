import React, { useState } from 'react'
//mui
import { AppBar, AppBarProps, Box, BoxProps, Container, ContainerProps, IconButton, styled, Toolbar, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
//next
import Image, {ImageProps} from 'next/image'
///custom components
import CustomDrawer from '../CustomComponent/CustomDrawer'
import MenuIcon from '@mui/icons-material/Menu';
import ContactCardMob from './ContactCardMob'

interface NavBarMobProps{}

const AppBarRoot = styled(AppBar)<AppBarProps>(({theme})=> ({
  backgroundColor: "transparent",
  padding: "20px 0",
  height: "100%"
}))

const ButtonMenu = styled(Box)<BoxProps>(({theme})=>
({
    backgroundColor: "#89345e", 
    border: "2px solid #89345e", 
    width: "20vw", 
    height: "10vh",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      background: theme.palette.primary.light,
      cursor: "pointer",
    },
    [theme.breakpoints.up("md")]: {
        display: "none",}
}))

const NavBarMob: React.FC<NavBarMobProps> = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <AppBarRoot position='static'>
      <Container>
        <CustomDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        <Toolbar disableGutters> 
          <Grid container sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <Grid xs={3} display="flex" justifyContent="center" alignItems="center">
            <ButtonMenu
              aria-label='menu'
              sx={{justifyContent: "center"}}
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </ButtonMenu>
            </Grid>
            <Grid xs={9} sx={{display: { sm: 'flex', md: 'none' }}}>
              <ContactCardMob />
            </Grid>
            </Grid>                  
        </Toolbar> 
      </Container>
    </AppBarRoot>
  )
}
export default NavBarMob