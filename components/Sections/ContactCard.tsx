// react
import * as React from 'react';
// mui
import { Box, CardActionArea, Paper, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
// custom component
import ConstantsContext from "../../context/constantsContext";

interface ContactCardProps {}

const BoxMain = styled(Box)(({theme})=> ({
  width: "100%",
  [theme.breakpoints.down("md")]: {
      width: "70%",
  }
}))

const Item = styled(Paper)(({ theme }) => ({
  width: '250px',
  height: '80px',
  display: "flex", 
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  margin: "1rem",
  border: '2px solid #89345e',
  [theme.breakpoints.down("xs")]: {
    display: "none"
}
}));

const BoxLabel = styled(Box)(({theme}) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none"
  }
}))

const ContactCard: React.FC<ContactCardProps> = (props) => {
    const { contactLinks } = React.useContext(ConstantsContext);
    contactLinks?.sort((a, b) => (a.id > b.id ? 1 : -1));

  return (   
    <BoxMain>
      <Grid container xs={8} m="auto" sx={{justifyContent: "center"}}>
      {contactLinks?.map((ContactLink, index) => (            
          <Item key={ContactLink.id + index}>
            <CardActionArea                               
              href={ContactLink.href}                  
            >         
              {ContactLink.Icon}
                <BoxLabel>
                  {ContactLink.label}       
                </BoxLabel>
            </CardActionArea>
            </Item>  
        ))}          
      </Grid>
    </BoxMain>
  );
}
export default ContactCard;
