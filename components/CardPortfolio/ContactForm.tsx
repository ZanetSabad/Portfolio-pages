import React from 'react';
//mui
import { Box, Card, CardMedia, Typography } from '@mui/material';
//next
import Image from 'next/image';
import Link from 'next/link';
//css
import style from "../../styles/Portfolio.module.css"

interface ContactFormProps{}

const ContactForm: React.FC<ContactFormProps> = (props) => {
  return (
    <>
      <Card className={style.container} sx={{ maxWidth: 400}}>        
            <CardMedia className={style.img}
            component="img"
            height="200"
            image="/images/portfolio/Contact.png"
            alt="Kontaktní formulář"
            />        
            <Card className={style.caption}>      
                <Typography variant="h3" color="secondary.light">Kontaktní formulář</Typography>   
                <Box>     
                    <Image src="/images/logo/html.png" alt='HTML' width={80} height={80}></Image>        
                    <Image src="/images/logo/css.png" alt="CSS" width={80} height={80}></Image>               
                    <Image src="/images/logo/php.png" alt="PHP" width={80} height={80}></Image>               
                </Box>
                <Link href="../Contact_form/index.html" style={{color: "black"}}>Náhled</Link>
            </Card>
        </Card>
    </>
  );
}

export default ContactForm;