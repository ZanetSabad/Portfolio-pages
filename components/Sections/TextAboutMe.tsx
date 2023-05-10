import React from 'react';
import { Box, BoxProps, Paper, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CustomPaper from '../CustomComponent/CustomPaper';
import CustomSubtitle from '../CustomComponent/CustomSubtitle';
import CustomText from '../CustomComponent/CustomText';

interface TextAboutMeProps{}

const TextAboutMe: React.FC<TextAboutMeProps> = (props) => {
  return (
    <>
       <CustomPaper>             
        <Grid container sx={{flexGrow: 1}}>
        <CustomSubtitle>
            Jmenuji se Žaneta Sabadková
        </CustomSubtitle>
        <CustomText>
            Kdybych se měla popsat 3 slovy, které mě charakterizují byly by to odhodlanost, hádavost, empatičnost
        </CustomText>
        <CustomSubtitle>
            Co dělám teď?
        </CustomSubtitle>
        <CustomText>
            Sice to valnou většinu lidí odradí, ale nyní jsem na rodičovské dovolené. 
            V tomto období jsem poznala sebe sama a zároveň se toho hodně naučila.  
            Naučila jsem se, že i když můžu mít vše naplánované, stejně se musím rychle přizpůsobit náhlým změnám. 
            Že, když mám pravdu musím si za tím stát. 
        </CustomText>
        <CustomSubtitle>
            Kým bych chtěla být
        </CustomSubtitle>               
        <CustomText>
            Chci dělat <b>Front-end</b>, do toho jsem se zamilovala. Chci se dál vzdělávat a posouvat svoje znalosti výš a výš.
            Baví mě psát kódy a hledat chyby. Baví mě přemýšlet, jak napsat kód lépe a srozumitelněji. 
            A kdo ví, třeba mě jednou pohltí svět backendu.
        </CustomText>
        <CustomSubtitle>
            Proč frontend?
        </CustomSubtitle>               
        <CustomText>
            Svět It je pro mě hodně lákavý. Bohužel tomu osud tak nechtěl a 
            vždy jsem se vydala jinou cestou a počítače se, tak staly jen mým koníčkem. Před dvěmi lety jsem si všimla inzerátu,
            na kurz <b>Webové vývojářky</b> a tím začala moje cesta k frontendu.  
        </CustomText>
        </Grid>
    </CustomPaper>      
    </>
  );
}
export default TextAboutMe

 