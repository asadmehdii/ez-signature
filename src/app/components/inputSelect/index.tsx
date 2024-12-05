"use client";
import React, { CSSProperties } from "react";
import { Box, MenuItem, TextField, Typography } from "@mui/material";
import EmergencyIcon from '@mui/icons-material/Emergency';

type SelectInputProps = {
  width?: any;
  maxWidth?: number | string;
  mt?: number;
  mb?: number;
  height:number
  placeholder?: string;
  label?: string;
  errorMessage?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: any[];
  borderRadius?: number;
  labelStyle?: CSSProperties;
  important?: boolean;
  validationMsg?: string;
};

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
  height
}) => {
  const Styles = {
    selectField: {
      "& .MuiOutlinedInput-root": {
        height:height,
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
  };

  return (
    <Box maxWidth={maxWidth} width={width} mt={mt} mb={mb}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography sx={[Styles.labelStyle, { ...labelStyle }]} mb={1}>
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
        sx={[Styles.selectField,{position:"relative"}]}
        fullWidth
        placeholder={placeholder}
        defaultValue={'placeholder'} 
        
      >
        <MenuItem value="placeholder"  disabled>{placeholder}</MenuItem>
        {options.map((option) => {
            return(
            <MenuItem  key={option} value={option}>
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
