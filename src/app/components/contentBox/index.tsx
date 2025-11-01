import React, { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material";

type ContentBoxProps = {
  children?: ReactNode;
  style?: React.CSSProperties; 
  className?: string; 
  sx?: SxProps<Theme>; 
  mt?: number; 
  mb?: number; 
};

const ContentBox: FC<ContentBoxProps> = ({ children, style, className, sx, mt, mb }) => {
  return (
    <Box sx={{...sx, px: { xs: 2, sm: 5, lg: "100px" }, mt:mt, mb:mb }}
      component="div"
      className={className}
      style={style}
    >
      {children}
    </Box>
  );
};

export default ContentBox;
