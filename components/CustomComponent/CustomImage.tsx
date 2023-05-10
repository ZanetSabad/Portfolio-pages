import React from 'react';
//mui
import { CardProps } from "@mui/material"
//next
import Image from 'next/image';

interface CustomImageProps extends CardProps{
    imageAlt: string | any;
    imageSrc: string | any;
    title: string;
}

const CustomImage: React.FC<CustomImageProps> = (props) => {
    const { imageAlt, imageSrc, title, ...otherProps } = props
    
  return (
    <>
    <Image 
        title={title}
        alt={imageAlt}
        src={imageSrc}
        width={100}
        height={100}
        quality={50}
        />

    </>
  );
}

export default CustomImage