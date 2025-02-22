"use client";

import { Box, SxProps, Theme } from "@mui/material";
import { useRouter } from "next/navigation";
import { FC, CSSProperties, ReactNode, useState } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "outlined" | "text" | "contained";
  height?: number | string;
  width?: number | string;
  fontWeight?: string;
  fontSize?: number;
  backgroundColor?: string;
  onClick?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  className?: string;
  style?: CSSProperties;
  borderWidth?: number;
  borderColor?: string;
  color?: string;
  borderRadius?: number | string;
  to?: string;
  sx?: SxProps<Theme>;
  hoverStyle?: SxProps<Theme>;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({
  children,
  hoverStyle,
  type = "contained",
  height = 60,
  width = "fit-content",
  fontSize = 18,
  fontWeight = "600",
  backgroundColor = "var(--secondary-color)",
  borderWidth = 1,
  borderColor = "#2c2c2c",
  color = "#000",
  borderRadius = "4px",
  className,
  onClick,
  onBlur,
  onFocus,
  style,
  to,
  sx,
  disabled = false,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const router = useRouter();

  const handleMouseDown = () => {
    if (!disabled) setIsPressed(true);
  };
  const handleMouseUp = () => {
    if (!disabled) setIsPressed(false);
  };

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 0.4s ease",
    transform: isPressed ? "scale(0.95)" : "scale(1)",
    border:
      type === "outlined" ? `${borderWidth}px solid ${borderColor}` : "none",
    backgroundColor:
      type !== "contained" ? "transparent" : disabled ? "#ccc" : backgroundColor,
    color: color,
    padding: "10px",
    height,
    width,
    fontSize,
    fontWeight,
    borderRadius,
    opacity: disabled ? 0.5 : 1,
    ...sx,
    ":hover": !disabled ? hoverStyle : {},
  };

  return (
    <Box
      component="button"
      className={className}
      onClick={() => {
        if (disabled) return;
        if (to) router.push(to);
        if (onClick) onClick();
      }}
      sx={buttonStyle}
      style={style}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      disabled={disabled}
    >
      {children}
    </Box>
  );
};

export default Button;
