"use client"
import React, { FC } from "react";
import { IconButton, InputAdornment, InputLabel, TextField } from "@mui/material";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';

type InputFieldProps = {
  label?: string;
  type?: "number" | "text";
  multiline?: boolean;
  rows?: number;
  value?: any;  
  onChange?: (newValue: any) => void; 
};

const InputField: FC<InputFieldProps> = ({ value, onChange, label, type = "text", multiline = false, rows = 1 }) => {
//  handle the increment with the icon
  const handleIncrement = () => {
    if (onChange) {
        onChange(value ? value + 1 : 1);
    }
  };

//  handle the decrement with the icon
  const handleDecrement = () => {
    if (onChange ) {
      onChange(value > 0 ? value - 1 : 0); 
    }
  };

  return (
    <>
      <InputLabel sx={{ fontSize: "12px", fontWeight: "700", color: "var(--text-color)", marginTop: "20px" }}>
        {label}
      </InputLabel>
      <TextField
        InputProps={type === "number" ? {
          endAdornment: (
            <InputAdornment sx={{ display: 'flex', flexDirection: "column", height: '100%' }} position="end">
              <IconButton sx={{ height: "5px", p: 1 }} onClick={handleIncrement}>
                <ArrowUpwardOutlinedIcon sx={{ fontSize: '12px', color: "#F6F6F6" }} />
              </IconButton>
              <IconButton sx={{ height: "5px", p: 1 }} onClick={handleDecrement}>
                <ArrowDownwardSharpIcon sx={{ fontSize: '12px', color: "#F6F6F6" }} />
              </IconButton>
            </InputAdornment>
          ),
        } : undefined}
        onChange={(e) => {
          const newValue = type === "number" ? Number(e.target.value) : e.target.value;
          if (onChange) {
            onChange(newValue);
          }
        }}
        type={type}
        multiline={multiline}
        rows={rows}
        variant="outlined"
        fullWidth
        value={value == 0 ? ' ' : value }
        sx={{
          boxShadow: "none",
          width: "100%",
          border: "none",
          margin: "10px 0",
          backgroundColor: "#F6F6F6",
          borderRadius: "18px",
          "& .MuiOutlinedInput-root": {
            height: multiline ? "auto" : "50px",
            backgroundColor: "transparent",
            borderRadius: "18px",
            "& fieldset": {
              border: 'none'
            },
            "&:hover fieldset": {
              borderColor: "gray",
            },
            "&.Mui-focused fieldset": {
              border: "1px solid #f6f6f6",
              borderColor: "gray",
            },
          },
          "& .MuiInputBase-input": {
            fontSize: "16px",
            color: "#a4a4a4"
          },
          "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
          "& input[type=number]": {
            MozAppearance: "textfield",
          },
        }}
      />
    </>
  );
};

export default InputField;
