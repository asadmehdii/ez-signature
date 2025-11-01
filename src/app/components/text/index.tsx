import React, { FC, CSSProperties, ReactNode } from "react";

type TextVariant = "body" | "title" | "caption";

type TextProps = {
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  pointer?: boolean;
  fontWeight?: string;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
  variant?: TextVariant;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  margin?: number | string;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  padding?: number;
  textAlign?:"center"|"left"|"right"
  onClick?: () => void; // Updated prop name
  id?:string
};



const Text: FC<TextProps> = (props) => {
  const {
    color,
    fontFamily,
    fontSize,
    fontWeight,
    pointer = false,
    style,
    className,
    children,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    margin = 0,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    padding = 0,
    textAlign,
    onClick, // Updated destructuring
    id,
  } = props;


  return (
    <p
      id={id}
      className={className}
      onClick={onClick} // Updated usage
      style={{
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
        color,
        textAlign,
        fontFamily: fontFamily,
        fontSize: fontSize ,
        fontWeight: fontWeight,
        cursor: pointer ? "pointer" : "default",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export default Text;
