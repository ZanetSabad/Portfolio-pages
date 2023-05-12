import React from 'react';
import { Typography, styled } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
import ConstantsContext from '../context/constantsContext';
import Link, { LinkProps } from 'next/link';

interface CertificateProps{}

const LinkRoot = styled(Link)<LinkProps>(({theme})=> ({
    textDecoration: "none",
    ...theme.typography.h5,
    color: theme.palette.primary.main,
    margin: "0.5rem 1rem",
    "&:hover": {
        color: theme.palette.secondary.main
    }
}))

const Certificate: React.FC<CertificateProps> = (props) => {

    const { certificates } = React.useContext(ConstantsContext);
    certificates?.sort((a, b) => (a.id > b.id ? 1 : -1))
  return (
    <>
    <Grid container spacing={2} columns={{ xs: 1}} margin="auto">
        {certificates?.map ((Certificate, id) => (
            <LinkRoot
                key={Certificate.id}
                href={Certificate.href}
                target='_black'
                rel="nooper"
            >
                {Certificate.label}
                {Certificate.icon}
            </LinkRoot>
        ))}
        </Grid>
      
    </>
  );
}

interface CertificateProps{}

export default Certificate;
