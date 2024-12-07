"use client";
import React from "react";
import { Box, MenuItem, SxProps, TextField, Theme, Typography } from "@mui/material";
import EmergencyIcon from '@mui/icons-material/Emergency';

type SelectInputProps = {
  width?: any;
  maxWidth?: number | string;
  mt?: number;
  mb?: number;
  height?:number
  placeholder?: string;
  label?: string;
  errorMessage?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: any[];
  borderRadius?: number;
  labelStyle?: SxProps<Theme>;
  important?: boolean;
  validationMsg?: string;
  sx?:SxProps<Theme>
  itemStyle?:SxProps<Theme>
  padding?:number|string
  margin?:number|string
}
const InputSelect: React.FC<SelectInputProps> = ({
  width,
  maxWidth,
  mt,
  mb,
  placeholder,
  label,
  errorMessage,
  value,
  onChange,
  options,
  borderRadius = 12,
  labelStyle,
  important,
  validationMsg,
  height,
  itemStyle,
  sx,
  padding,
  margin,
}) => {
  const Styles = {
    selectField: {
      "& .MuiOutlinedInput-root": {
        fontFamily: "var(--text-mada)",
        fontSize: 16,
        fontWeight: 400,
        height:height,
        padding:0,
        borderRadius: `${borderRadius}px`,
        
        "& fieldset": {
          borderColor: "#666666", // Default color
        },
        "&:hover fieldset": {
          borderColor: "#666666", // Hover color
        },
        "&.Mui-focused fieldset": {
          borderColor: "#000000", // Focus color
        },
      },
    },
    labelStyle: {
      fontFamily: "var(--text-mada)",
      fontSize: 16,
      fontWeight: 500,
      color: "#666666",
    },
    errorStyle: {
      fontFamily: "var(--text-mada)",
      fontSize: 16,
      fontWeight: 500,
      color: "red",
    },
    itemStyle:{
       m:0,
       p:0,
       px:1,
       height:"fir-content",
       fontFamily: "var(--text-mada)",
      fontSize: 16,
      fontWeight: 400,
    }
  };

  return (
    <Box maxWidth={maxWidth} width={width} margin={margin} padding={padding} mt={mt} mb={mb}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography sx={{...Styles.labelStyle, ...labelStyle}} mb={1}>
          {label}{" "}
          {important && (
            <EmergencyIcon
              sx={{ fontSize: "8px", mb: 0.7, color: "#ef5350" }}
            />
          )}
        </Typography>
      </Box>
      <TextField
        select
        value={value}
        onChange={onChange}
        variant="outlined"
        sx={{ ...Styles.selectField, ...sx }}
        fullWidth
        placeholder={placeholder}
        defaultValue={'placeholder'}         
      >
       {placeholder && <MenuItem sx={{...Styles.itemStyle,...itemStyle}} value="placeholder"  disabled>{placeholder}</MenuItem>}
        {options.map((option) => {
            return(
            <MenuItem sx={{...Styles.itemStyle,...itemStyle}} key={option} value={option}>
            {option}
          </MenuItem>

            )
        })}
        
        
      </TextField>
      {errorMessage ? (
        <Typography sx={Styles.errorStyle} mt={1}>
          {errorMessage}
        </Typography>
      ) : (
        <Typography sx={Styles.labelStyle} mt={0.5}>
          {validationMsg}
        </Typography>
      )}
    </Box>
  );
};

export default InputSelect;
