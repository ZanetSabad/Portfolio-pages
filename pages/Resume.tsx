import React from 'react';
import { Box, BoxProps, Paper, GridProps, styled } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
import CustomBanner from "../components/CustomComponent/CustomBanner"
import CustomTitle from "../components/CustomComponent/CustomTitle"
import NavBar from '../components/Sections/NavBar';
import NavBarMob from '../components/Sections/NavBarMob';
import Footer from '../components/Sections/Footer';
import ResumeContent from '../components/Sections/ResumeContent';
import LinkDownload from '../components/LinkDownload';
interface ResumeProps{}

const GridWrapper = styled(Grid)<GridProps>(({theme})=> ({
  [theme.breakpoints.down("sm")]: {
    marginTop: "0rem",
    flexFlow: "row wrap",
    alignItems: "center"
  }
}))

const Resume: React.FC<ResumeProps> = (props) => {
  return (
    <>
      <CustomBanner>Životopis <LinkDownload /> </CustomBanner>
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
          <Grid xs={9} height="auto" sx={{margin: "auto"}}>
            <ResumeContent />  
          </Grid>
        </Grid>   
      </Paper>  
      <Footer />
    </>
  );
}
export default Resume
