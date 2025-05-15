"use client";
import React, { FC } from "react";
import Link from "next/link";
import { Typography, SxProps, Theme } from "@mui/material";

type ResponsiveTypographyProps = {
  text: string;
  fontSize?: number;
  color?: string;
  className?: string;
  fontWeight?: string;
  sx?: SxProps<Theme>;
  cursor?: string;
  hoverColor?: string;
  to: string;
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
  to,
}) => {
  if (!to || typeof to !== "string") {
    if (process.env.NODE_ENV !== "production") {
      console.log("passed to <Navigate />:", to);
    }
    return null;
  }

  return (
    <Link
      href={to}
      style={{ textDecoration: "none" }}
    >
      <Typography
        sx={{
          ...sx,
          cursor,
          transition: "all 0.4s ease",
          fontFamily: "var(--font-mada)",
          "&:hover": {
            color: hoverColor,
          },
        }}
        fontSize={fontSize}
        color={color}
        fontWeight={fontWeight}
        className={className}
      >
        {text}
      </Typography>
    </Link>
  );
};

export default Navigate;
