import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ArrowDropDown } from "@mui/icons-material";

type CustomPopoverProps = {
  options: string[];
  title: string;
  onChange: (selected: string) => void; // ✅ added this
};

const CustomPopover: React.FC<CustomPopoverProps> = ({ options, title, onChange }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedValue, setSelectedValue] = useState<string>(title); // ✅ initialized to title

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onChange(value); // ✅ notify parent of change
    handleClose();
  };

  return (
    <Grid component={"div"} container alignItems={"center"}>
      <Button
        className="custom-menu-item"
        variant="outlined"
        onClick={handleClick}
        endIcon={<ArrowDropDown />}
      >
        {selectedValue}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "expire-document-button",
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleSelect(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Grid>
  );
};

export default CustomPopover;
