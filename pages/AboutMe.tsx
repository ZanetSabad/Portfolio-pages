import React from 'react';
//mui
import { Box, BoxProps, GridProps, Paper, styled } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
//custom components
import NavBar from "../components/Sections/NavBar"
import NavBarMob from '../components/Sections/NavBarMob';
import CustomBanner from "../components/CustomComponent/CustomBanner"
import TextAboutMy from '../components/Sections/TextAboutMe';
import Footer from '../components/Sections/Footer';

interface AboutMeProps{}

const BoxWrapper = styled(Box)<BoxProps>(({theme})=> ({
  [theme.breakpoints.up("md")]: {
      // maxWidth: "1240px",
      display: "flex",
      alignItems: "center",
      // gap: "35px",
  }
}))

const GridWrapper = styled(Grid)<GridProps>(({theme})=> ({
  [theme.breakpoints.down("sm")]: {
    marginTop: "0rem",
    flexFlow: "row wrap",
    alignItems: "center"
  }
}))

const AboutMe: React.FC<AboutMeProps> = (props) => {
  return (
    <>
      <CustomBanner>O mně</CustomBanner>
      <Paper
       elevation = {3}
       sx={{
         flexGrow: 1,
       }}
      >
        <Grid container>
          <Grid xs={3} sx={{display: {xs: "none", sm:"flex"}}} >
            <NavBar />   
          </Grid>
          <Grid xs={12} sx={{display: {xs: "flex", sm:"none"}}} >
            <NavBarMob />   
          </Grid>
          <GridWrapper xs={9} height="auto" sx={{margin: "auto"}}>
            <TextAboutMy />  
          </GridWrapper>
        </Grid>   
      </Paper>  
      <Footer />
    </>
  );
}
export default AboutMe;
