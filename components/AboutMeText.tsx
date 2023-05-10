import React from 'react'
//MUI
import { Box, BoxProps, styled, Typography } from '@mui/material'
//Components
import ContactCard from './Sections/ContactCard'

interface AboutMeTextProps{}

const BoxRoot = styled(Box)<BoxProps>(({theme})=> ({
    maxHeight: "100%",
    padding: "10px 10px 0px",
}))

const BoxWrapper = styled(Box)<BoxProps>(({theme})=> ({
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
    }
}))

const AboutMeText: React.FC<AboutMeTextProps> = (props) => {
  return (
    <>
        <BoxRoot>         
            <BoxWrapper>           
                    <Box>
                        <Typography variant="h2">
                            Jmenuji se 
                        </Typography>
                        <Typography variant="h1"  color='secondary.main'>
                            Žaneta Sabadková
                        </Typography>
                        <Typography variant='h5'>
                            začínající
                        </Typography>
                        <Typography variant='h3'>
                            Front-end 
                        </Typography>
                        <Typography variant='h3'>
                            developer 
                        </Typography>
                    </Box>
            </BoxWrapper>
            <Box sx={{display: {xs: "none", sm:"flex"}}}>
                <ContactCard />
            </Box>   
        </BoxRoot>      
    </>
  );
}
export default AboutMeText
