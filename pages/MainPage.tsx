import React from 'react';
// MUI
import { Box, BoxProps, GridProps, Paper, styled } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
//Next
import Image, {ImageProps} from 'next/image';
//Components
import NavBar from '../components/Sections/NavBar';
import NavBarMob from '../components/Sections/NavBarMob';
import AboutMeText from '../components/AboutMeText';
//FOTO
import MyFoto from "../public/images/ja.png"
//CSS
import styles from "../styles/Home.module.css"

interface MainPageProps {
  href?: string
}

const GridMain = styled(Grid)<GridProps>(({theme})=> ({
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center"
  }
}))

const Foto = styled(Image)<ImageProps>(({theme})=> ({
  borderRadius: "40%",
  [theme.breakpoints.down("sm")]: {
  width: "150px",
  height: "220px",
  },
}))

const GridWrapper = styled(Grid)<GridProps>(({theme})=> ({
  [theme.breakpoints.down("sm")]: {
    marginTop: "0rem",
    flexFlow: "row wrap",
    alignItems: "center"
  }
}))

const MainPage: React.FC<MainPageProps> = (props) => {
  return (
    <>       
     <Paper
        className={styles.myImg}
        elevation = {3}
        sx={{
          flexGrow: 1,
        }}
      >
        <GridMain container>    
            <Grid xs={3} sx={{display: {xs: "none", sm:"flex"}}} >
              <NavBar />   
            </Grid>
            <Grid xs={12} sx={{display: {xs: "flex", sm:"none"}}} >
              <NavBarMob />   
            </Grid>
            <GridWrapper xs={9} width="600px" height="80vh" sx={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", margin: "4rem 1rem"}}>
                <AboutMeText/>
              <Box sx={{display: {xs: "flex", sm:"none"}}}>
                <Foto src={MyFoto} alt="Moje fotografie" width={200} height={320} priority/>
              </Box>
            </GridWrapper>   
        </GridMain>       
      </Paper>        
    </>
  );
}
export default MainPage;
