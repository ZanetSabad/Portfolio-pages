import * as React from 'react';
import { Box, Paper, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CustomPaper from '../CustomComponent/CustomPaper';
import BuyList from "../CardPortfolio/BuyList";
import ContactForm from '../CardPortfolio/ContactForm';
import GeneratorCode from '../CardPortfolio/GeneratorCode';
import PortfolioMuiFirst from '../CardPortfolio/PortfolioMuiFirst';
import PortfolioMui from '../CardPortfolio/PortfolioMui';

interface PortfolioProps{}

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Portfolio: React.FC <PortfolioProps> = (props) => {

  return (
    <>
     <CustomPaper> 
        <Grid sx={{ flexGrow: 1,}} container spacing={{xs: 5}} justifyContent={"space-evenly"}>
                <Grid xs={12} sm={6} md={4} lg={4}>
                        <BuyList />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                        <ContactForm />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                        <GeneratorCode />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                        <PortfolioMuiFirst />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                        <PortfolioMui />
                </Grid>
        </Grid>
     </CustomPaper>
    </>
  );
}

export default Portfolio;