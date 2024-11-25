/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 25/11/2024 - 22:45:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2024
    * - Author          : 
    * - Modification    : 
**/
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
          <Box sx={{border: "1px solid gray", background: "rgba(25, 118, 210, 0.08)", borderRadius:"2px"}} >
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
              <Box sx={{ background: "rgba(25, 118, 210, 0.08)", width: "150px"}}>
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