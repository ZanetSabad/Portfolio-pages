// react
import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
// type
import { ButtonProps } from '@mui/material';
export interface Certificate {
  buttonProps?: ButtonProps;
  href: string;
  label: string;
  icon?: React.ReactNode,
  id: number;
}

const certificates: Certificate[] = [
  {
    buttonProps: { color: 'info' },
    href: '/Webová vývojářka.pdf',
    label: 'Webová vývojářka',
    icon: <DownloadIcon />,
    id: 1,
  },
  {
    buttonProps: { color: 'info' },
    href: '/docs/pracovni_navyky.pdf',
    label: 'Pracovní návyky',
    icon: <DownloadIcon />,
    id: 2,
  },
  {
    buttonProps: { color: 'info' },
    href: '/tematicke miniworkshopy.pdf',
    label: 'Miniworshopy',
    icon: <DownloadIcon />,
    id: 3,
  },
];

export default certificates;