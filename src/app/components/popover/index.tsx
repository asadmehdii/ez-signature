import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ArrowDropDown } from '@mui/icons-material';


type CustomPopoverProps = {
  options: string[]; 
  title: string;
};

const CustomPopover: React.FC<CustomPopoverProps> = ({ options, title }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    handleClose();
  };

  return (
    <Grid component={"div"} container alignItems={"center"} >
      <Button className="custom-menu-item" variant="outlined" onClick={handleClick} endIcon={<ArrowDropDown />} >
      {selectedValue || title}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "expire-document-button",
        }}
        // sx={{color:"rgb(0 8 61)", fontSize:"14px", borderRadius:"3px", border: "1px solid #d7d7d9", backgroundColor:"rgba(25, 118, 210, 0.08)", padding:"0 28px",}}

      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleSelect(option)}
        >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Grid>
  );
};

export default CustomPopover;
