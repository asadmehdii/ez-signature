"use client"
import React, { FC } from "react";
import { Typography, SxProps, Theme } from "@mui/material";
import { useRouter } from "next/navigation";

type ResponsiveTypographyProps = {
  text: string; 
  fontSize?: number; 
  color?: string; 
  className?: string; 
  fontWeight?:string;
  sx?:SxProps<Theme>;
  cursor?:string;
  hoverColor?:string;
  to:string;
};


const Navigate: FC<ResponsiveTypographyProps> = ({
    text,
    fontSize,
    color = "#000",
    className,
    fontWeight,
    sx,
    hoverColor,
    cursor = "pointer",
    to
    
}) => {
    const navigate = useRouter() 
  return (
    <Typography sx={{...sx,cursor:cursor,"&:hover": {
          color: hoverColor, 
        },}} fontSize={fontSize} color = {color} fontWeight={fontWeight} onClick ={()=>{navigate.push(to)}} className={className}>
      {text}
    </Typography>
  );
};

export default Navigate;
