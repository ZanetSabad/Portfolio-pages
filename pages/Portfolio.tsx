import React from 'react';
//mui
import { Box, BoxProps, Paper, GridProps, styled } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
//custom components
import NavBar from '../components/Sections/NavBar';
import NavBarMob from '../components/Sections/NavBarMob';
import CustomBanner from "../components/CustomComponent/CustomBanner"
import PortfolioCard from "../components/Sections/PortfolioCard"
import Footer from '../components/Sections/Footer';

interface PortfolioProps{}

const GridWrapper = styled(Grid)<GridProps>(({theme})=> ({
  [theme.breakpoints.down("sm")]: {
    marginTop: "0rem",
    flexFlow: "row wrap",
    alignItems: "center"
  }
}))

const Portfolio: React.FC<PortfolioProps> = (props) => {
  return (
    <>     
    <CustomBanner>Portfolio</CustomBanner>
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
            <PortfolioCard />  
          </GridWrapper>
        </Grid>   
      </Paper>  
      <Footer />
   </>
  );
}

export default Portfolio;
<h1>Ahoj</h1>