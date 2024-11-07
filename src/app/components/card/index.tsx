import React, { CSSProperties, FC, ReactNode } from "react";
type CardProps = {
  width?: string;
  height?: string;
  style?: CSSProperties;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  margin?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  padding?: string;
  className?: string;
  backgroundColor?: string;
  children: ReactNode;
};

const Card: FC<CardProps> = (props) => {
  const {
    width,
    height,
    style,
    className,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    margin,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    padding,
    borderColor,
    borderRadius,
    borderWidth,
    children,
    backgroundColor = "#fff",
  } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width,
        height,
        margin: `${margin}`,
        padding: `${padding}`,
        marginBottom: `${marginBottom}`,
        marginLeft: `${marginLeft}`,
        marginRight: `${marginRight}`,
        marginTop: `${marginTop}`,
        paddingBottom: `${paddingBottom}`,
        paddingLeft: `${paddingLeft}`,
        paddingRight: `${paddingRight}`,
        paddingTop: `${paddingTop}`,
        borderRadius,
        backgroundColor,
        border: `${borderWidth}px solid ${borderColor}`,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
