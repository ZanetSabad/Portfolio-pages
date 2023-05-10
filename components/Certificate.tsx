import React from 'react';
import { Box, Typography, styled } from "@mui/material"
import ConstantsContext from '../context/constantsContext';
import Link, { LinkProps } from 'next/link';

interface CertificateProps{}

const LinkRoot = styled(Link)<LinkProps>(({theme})=> ({
    textDecoration: "none",
    ...theme.typography.h5,
    color: theme.palette.secondary.main,
    margin: "0.5rem 1rem",
    "&:hover": {
        color: theme.palette.primary.main
    }
}))

const Certificate: React.FC<CertificateProps> = (props) => {

    const { certificates } = React.useContext(ConstantsContext);
    certificates?.sort((a, b) => (a.id > b.id ? 1 : -1))
  return (
    <>
    <Box sx={{display: "flex", flexDirection: "column", marginTop: "2rem"}}>
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
        </Box>
      
    </>
  );
}

interface CertificateProps{}

export default Certificate;
