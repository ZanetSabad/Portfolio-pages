import React from 'react';
//mui
import { Box, Card, CardMedia, Typography } from '@mui/material';
//next
import Image from 'next/image';
import Link from 'next/link';
//css
import style from "../../styles/Portfolio.module.css"

interface PortfolioMuiFirstProps{}

const PortfolioMuiFirst: React.FC<PortfolioMuiFirstProps> = (props) => {
  return (
    <>
      <Card className={style.container} sx={{ maxWidth: 400}}>        
            <CardMedia className={style.img}
            component="img"
            height="200"
            image="/images/portfolio/portfolio_mui1.png"
            alt="Moje první portfolio"
            />        
            <Card className={style.caption}>      
                <Typography variant="h3" color="secondary.light">Moje první portfolio</Typography>   
                <Box>     
                    <Image src="/images/logo/html.png" alt='HTML' width={70} height={70}></Image>        
                    <Image src="/images/logo/css.png" alt="CSS" width={70} height={70}></Image>               
                    <Image src="/images/logo/react.png" alt="React" width={70} height={70}></Image>               
                    <Image src="/images/logo/material_ui.png" alt="Material UI" width={70} height={70}></Image>               
                </Box>
            </Card>
        </Card>
    </>
  );
}

export default PortfolioMuiFirst;