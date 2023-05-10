// react
import * as React from 'react';
// @mui
import {Box, BoxProps, Card, CardProps, Paper, PaperProps, Typography, styled,CardContent} from '@mui/material';
// custom component
import ConstantsContext from '../../context/constantsContext';
import CustomPaper from '../CustomComponent/CustomPaper';
// css
import style from "../../styles/Introduction.module.css"
interface IntroductionProps {}

const PaperRoot = styled(Paper)<PaperProps>(({theme})=>({
  width: '60%', 
  margin: "auto",
  flexGrow: 1,
  [theme.breakpoints.down("sm")]:{
      width: "100%",
      boxShadow: "none",     
  }
}))

const CustomBox = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  padding: "4rem",
  overflow: 'hidden',
}));

const Introduction: React.FunctionComponent<IntroductionProps> = (props) => {

  const { contactLinks } = React.useContext(ConstantsContext);
  contactLinks?.sort((a, b) => (a.order > b.order ? 1 : -1));

  return (
    <>
    <PaperRoot  elevation= {5} >      
      <CustomBox >
              <Typography variant='h2' color="primary.main" sx={{borderLeft: "6px solid #89345e", paddingLeft: "2rem"}}>
                O mně
              </Typography>
              <CardContent>
              <Typography variant='body1' color="text.primary">
              Jsem Junior Front-End Developer na počátku své kariéry. Rádá se zdokonaluji v kódování a vývoji aplikací 
              a webových stránek. Myslím si, že mohu říci, že ovládám <span className={style.textColor}>HTML, CSS, JavaScript </span>
              a moderní framework jako <span className={style.textColor}>React.js</span>. 
              Znám i lehce základy backendových technologií jako Php, MySql...
              </Typography>
              <Typography variant='body1' color="text.primary" mt={2}>
              V současné době se učím pracovat s <span className={style.textColor}> Next.js </span> a <span className={style.textColor}> Typescript </span>
              společně s open-source knihovnou <span className={style.textColor}> Materialy MUI </span>. 
              </Typography>
              </CardContent>
      </CustomBox>

      </PaperRoot>
    </>
  );
};

export default Introduction;