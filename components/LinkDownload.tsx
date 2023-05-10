// react
import * as React from 'react';
// type
import { Link, LinkProps, styled } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

interface LinkDownloadProps extends LinkProps {}

const LinkDownloadRoot = styled(Link)<LinkDownloadProps>(({ theme, variant }) => ({
      position: "absolute",
      color: theme.palette.secondary.main,
      ...theme.typography.h4,
      textTransform: "uppercase", 
      marginLeft: "2rem",    
}));

const LinkDownload: React.FunctionComponent<LinkDownloadProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <LinkDownloadRoot  {...otherProps} 
          href='/docs/Zaneta_Sabadkova_CV.pdf' 
          download 
          target='_blank' 
          rel='noopener' 
        >
      <DownloadIcon fontSize='large'/>
    </LinkDownloadRoot>
  );
};

export default LinkDownload;