import React, { FC, CSSProperties, ReactNode } from "react";

type ViewProps = {
  children: ReactNode;
  display: "flex" | "block" | "inline-block";
  justifyContent:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-evenly"
    | "space-around";
  alignItems:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-evenly"
    | "space-around";
  textAlign: "left" | "center" | "right";
  className: string;
  style: CSSProperties;
  background: string;
  width: number | string;
  height: number | string;
};

const View: FC<ViewProps> = (props) => {
  const {
    children,
    display,
    alignItems,
    justifyContent,
    textAlign,
    style,
    background,
    width,
    height,
  } = props;
  return (
    <div
      style={{
        ...style,
        display,
        justifyContent,
        alignItems,
        textAlign,
        background,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: typeof width == "number" ? `${width}px` : width,
        height: typeof height == "number" ? `${height}px` : height,
      }}
    >
      {children}
    </div>
  );
};

export default View;
