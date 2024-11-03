import React, { CSSProperties, FC, ReactNode } from "react";
type CardProps = {
  width?: number | string;
  height?:number | string;
  style?: CSSProperties;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  margin?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  padding?: number|string;
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
        margin: `${margin}px`,
        padding: `${padding}px`,
        marginBottom: `${marginBottom}px`,
        marginLeft: `${marginLeft}px`,
        marginRight: `${marginRight}px`,
        marginTop: `${marginTop}px`,
        paddingBottom: `${paddingBottom}px`,
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${paddingRight}px`,
        paddingTop: `${paddingTop}px`,
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
