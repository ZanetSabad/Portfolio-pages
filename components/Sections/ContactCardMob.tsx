// react
import * as React from 'react';
// @mui
import { Box, CardActionArea, Paper, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
// custom component
import ConstantsContext from "../../context/constantsContext";

interface ContactCardMobProps {}

const Item = styled(Paper)(({ theme }) => ({ 
    width: "40px",
    height: "40px",
    border: '0px solid #89345e',
    textAlign: "center",
    margin: "0 1rem",
}));

const ContactCardMob: React.FC<ContactCardMobProps> = (props) => {
    const { contactLinks } = React.useContext(ConstantsContext);
    contactLinks?.sort((a, b) => (a.id > b.id ? 1 : -1));

  return (   
    <Box>
      <Grid container xs={8} sx={{width: "100%", justifyContent: "flex-end"}}>
      {contactLinks?.map((ContactLink, index) => (            
          <Item key={ContactLink.id + index}>
            <CardActionArea                               
              href={ContactLink.href}                  
            >         
              {ContactLink.Icon}
            </CardActionArea>
            </Item>  
        ))}          
      </Grid>
    </Box>
  );
}
export default ContactCardMob;