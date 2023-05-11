// react
import React from 'react';
// mui
import { ButtonProps } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
export interface NavLink {
  buttonProps?: ButtonProps;
  href: string;
  label: string | React.ReactNode;
  id: number;
}

const navLinks: NavLink[] = [
  {
    buttonProps: { color: 'info' },
    href: '/',
    label: <HomeIcon fontSize='large' color='info'/>,
    id: 1,
  },
  {
    buttonProps: { color: 'info' },
    href: '/AboutMe',
    label: 'Kdo jsem',
    id: 2,
  },
  {
    buttonProps: { color: 'info' },
    href: '/Portfolio',
    label: 'Portfolio',
    id: 3,
  },
  {
    buttonProps: { color: 'info' },
    href: '/Resume',
    label: 'Životopis',
    id: 4,
  },
];

export default navLinks;
