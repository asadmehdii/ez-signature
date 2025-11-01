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
  to?: string; // This will be the link destination
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
    border: type === "outlined" ? `${borderWidth}px solid ${borderColor}` : "none",
    backgroundColor:
      type !== "contained" ? "transparent" : disabled ? "#ccc" : backgroundColor,
    color: color,
    padding: "1px",
    height,
    width,
    fontSize,
    fontWeight,
    borderRadius,
    opacity: disabled ? 0.5 : 1,
    textDecoration: "none",
    ...sx,
    ":hover": !disabled ? hoverStyle : {},
  };

  // onClick handler to navigate programmatically on left click only, preserving right click open in new tab
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    // 0 = left click
    // For other clicks (like right click or middle click), do nothing to allow default browser behavior
    if (
      to &&
      event.button === 0 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey
    ) {
      event.preventDefault();
      router.push(to);
      if (onClick) onClick();
    } else {
      if (onClick) onClick();
    }
  };

  if (to) {
    return (
      <Box
        component="a"
        href={to}
        className={className}
        onClick={handleClick}
        sx={buttonStyle}
        style={style}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      component="button"
      className={className}
      onClick={() => {
        if (disabled) return;
        if (onClick) onClick();
      }}
      sx={buttonStyle}
      style={style}
      disabled={disabled}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {children}
    </Box>
  );
};

export default Button;


