"use client";
import { FC, CSSProperties, ReactNode, useState } from "react";

type ButtonProps = {
  children: ReactNode;
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
  borderRadius?: number;
};

const Button: FC<ButtonProps> = ({
  children,
  height = 60,
  width = "fit-content",
  fontSize = 18,
  fontWeight = "600",
  backgroundColor = "#ffffff",
  borderWidth = 0,
  borderColor = "#2c2c2c",
  color = "black",
  borderRadius = 4,
  className,
  onClick,
  onBlur,
  onFocus,
  style,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  return (
    <button
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        backgroundColor,
        height,
        width,
        fontSize,
        fontWeight,
        border: `${borderWidth}px solid ${borderColor}`,
        color,
        borderRadius,
        padding: 10,
        transition: "all 0.2s ease",
        transform: isPressed ? "scale(0.95)" : "scale(1)",
        ...style,
      }}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {children}
    </button>
  );
};

export default Button;
