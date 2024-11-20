import {Box, Checkbox, Popover, Button, Typography, IconButton} from "@mui/material"
import { ClearOutlined, ArrowDropDown } from '@mui/icons-material';
import React from "react";

const IconBtn = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


    return(
        <Box display="flex" alignItems="center">
          <Box sx={{border: "1px solid gray", background: "gainsboro", borderRadius:"2px"}} >
              <Checkbox defaultChecked />
              <Button aria-describedby={id} onClick={handleClick}>
              <ArrowDropDown />
              </Button>
              <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  
                >
              <Box sx={{ background: "gainsboro", width: "150px"}}>
              <Typography sx={{ p: 2, border: "3x solid gray" }}>All</Typography>
              <Typography sx={{ p: 2, border: "3x solid gray" }}>None</Typography>
            </Box>

            </Popover>

          </Box>
          <IconButton>
            <ClearOutlined />
          </IconButton>
        </Box>
    )
}
export default IconBtn;
