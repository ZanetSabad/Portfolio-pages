import React from 'react';
import { Divider, Paper, PaperProps, styled, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
import CustomPaper from '../CustomComponent/CustomPaper';
import Certificate from '../Certificate';

interface ResumeContentProps{}

const ResumeContent: React.FC<ResumeContentProps> = (props) => {
  return (
    <>
       <CustomPaper> 
            <Grid container spacing={2} columns={{ xs: 1}}>
                <Grid xs={6} >                    
                <Typography variant='h2' color="secondary.main" textAlign="center">Kurzy</Typography>
                        <Typography variant='h4'>Webová vývojářka</Typography>
                        <Typography variant='h5' color="primary.main">Attavena, o.p.s. - 2021 / 2022</Typography>
                        <Typography variant="body1">
                            Orientace v HTML, CSS, SASS, WordPress, 
                            responzivita webu (media queries a flex-box). 
                            Základy JavaScriptu. Google Analytics, SEO, Google Search Console.
                        </Typography><br/>
                        <Divider />
                        <Typography variant='h4'>Kurz osobního rozvoje</Typography>
                        <Typography variant='h5' color="primary.main">Attavena, o.p.s. - 2021</Typography>
                        <Typography variant="body1">MS Excel, Canva, Zoner Photo Studio X, práce v týmu</Typography> <br/>  
                </Grid>
                 <Grid xs={6}>
                 <Typography variant='h2' color="secondary.main" textAlign="center">Pracovní zkušenosti</Typography>
                        <Typography variant='h4'>Rodičovská dovolená</Typography>
                        <Typography variant='h5' color="primary.main">2014 / dosud</Typography>
                        <Typography variant="body1">
                            Schopnost práce pod tlakem, multitasking, 
                            krizový management, asertivita, maximální pracovní výdrž, 
                            komunikační dovednosti, trvalá práce na sobě
                        </Typography><br/>
                        <Divider />
                        <Typography variant='h4'>Crew</Typography>
                        <Typography variant='h5' color="primary.main">Mc´Donalds - Tábor - 2017 / dosud</Typography>
                        <Typography variant="body1">
                            Schopnost práce pod tlakem, krizový management, rychlé učení, týmová spolupráce
                        </Typography><br/>
                        <Divider />
                        <Typography variant='h4'>Manager obchodu</Typography>
                        <Typography variant='h5' color="primary.main">Český národní podnik, s.r.o. - 2011 / 2017</Typography>
                        <Typography variant="body1">
                            Bezproblémový chod obchodu, aktivní starost o zákazníky, komunikace, 
                            delegování úkolů, práce s financemi, empatie a zpětná vazba
                        </Typography>
                 <Typography variant='h2' color="secondary.main" textAlign="center">Vzdělání</Typography>
                        <Typography variant='h4'>Jihočeská univerzita v Českých Budějovicích</Typography>
                        <Typography variant='h5' color="primary.main">Biologie a ochrana zájmových organismů</Typography>
                        <Typography variant="body1">
                            Ukončeno Bc.
                        </Typography><br/>
                        <Divider />
                        <Typography variant='h4'>SOŠ veterinární, mechanizační a zahradnická a JŠ s právem státní jazykové zkoušky ČB</Typography>
                        <Typography variant='h5' color="primary.main">Veterinární prevence - 2005 / 2009</Typography>   
                </Grid>
                <Certificate />
            </Grid>    
        </CustomPaper>
    </>
  );
}

export default ResumeContent;
