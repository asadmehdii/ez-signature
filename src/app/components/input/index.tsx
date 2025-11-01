"use client"
import React, { useState, useEffect } from 'react';
import { MenuItem, Select, FormControl, SelectChangeEvent } from '@mui/material';

type InputProps = {
    options: string[]; 
    value?: string;
    onChange?: (value: string) => void;
  };

  const Input: React.FC<InputProps> = ({ options, value, onChange }) => {
  const [internalValue, setInternalValue] = useState<string>('');

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newVal = event.target.value as string;
    if (onChange) {
      onChange(newVal);
    } else {
      setInternalValue(newVal);
    }
  };

  const selected = value !== undefined ? value : internalValue;

  return (
    <FormControl size="medium" sx={{ display: "flex", width: "40%", height: "35px", }} >
      <Select
        labelId="font-selector-label"
        value={selected}
        onChange={handleChange}
        sx={{height: "35px", fontSize: "14px", color:"rgb(51, 51, 51)"}}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Input;
