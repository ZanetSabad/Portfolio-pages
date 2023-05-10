import * as React from 'react';
// mui
import { Card, CardProps, Typography, styled} from '@mui/material';

interface FooterProps {}

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: '2rem',
    color: theme.palette.text.secondary,
    letterSpacing: '0.1em'
}));

const Footer: React.FunctionComponent<FooterProps> = (props) => { 
  return (
    <>
      <CustomCard>
        <Typography variant='body1' textAlign='center'>
                &copy; Na brzkou shledanou - Žaneta Sabadková &#128540;
        </Typography>
      </CustomCard>
      
    </>
  );
};

export default Footer;