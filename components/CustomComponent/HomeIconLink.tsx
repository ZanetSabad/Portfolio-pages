import * as React from 'react';
// mui
import { ButtonProps } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
// custom component
import CustomButton from './CustomButton';

interface HomeIconLinkProps extends ButtonProps {
  anchorStyles?: React.CSSProperties;
  href?: string;
  iconColor?:
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';

}

const HomeIconLink: React.FC<HomeIconLinkProps> = (
  props
) => {
  const {
    anchorStyles,
    href = '/',
    iconColor = 'info',
    ...otherProps
  } = props;

  return (
    <CustomButton href={href} {...otherProps}>
      <HomeIcon color={iconColor} sx={{fontSize: '50px'}} />
    </CustomButton>
  );
};

export default HomeIconLink;