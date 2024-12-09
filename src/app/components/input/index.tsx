"use client"
import React, { useState } from 'react';
import { MenuItem, Select, FormControl, SelectChangeEvent } from '@mui/material';

type InputProps = {
    options: string[]; 

  };

  const Input: React.FC<InputProps> = ({ options }) => {
  const [font, setFont] = useState<string>('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setFont(event.target.value);
  };


  return (
    <FormControl size="medium" sx={{ display: "flex", width: "40%", height: "35px", }} >
      <Select
        labelId="font-selector-label"
        value={font}
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
