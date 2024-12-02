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
import {Checkbox, Popover, Button, Typography, IconButton} from "@mui/material"
import { ClearOutlined, ArrowDropDown } from '@mui/icons-material';
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { grey } from '@mui/material/colors';


const IconBtn = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


    return(
        <Grid component={'div'}
         container
         alignItems="center" gap={2}>
          <Grid display={"inline-block"}
           flex={'0 0 auto'}
          sx={{border: "1px solid gray", background: "rgba(25, 118, 210, 0.08)", borderRadius:"2px"}} >
              {/* <Button sx={{minWidth: '1em', }} >
              </Button> */}
              <Checkbox defaultChecked sx={{ color: "var(--secondary-color)" }}  />
              <Button sx={{ minWidth: '30px' }} aria-describedby={id} onClick={handleClick}>
              <ArrowDropDown sx={{ color: grey[900] }}  />
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
              <Grid sx={{ background: "rgba(25, 118, 210, 0.08)", minWidth: "156px", border: "2px solid transparent" , borderRadius: "0.375rem" }}>
              <Typography sx={{ padding: "9px 12px", border: "3x solid gray" }}>All</Typography>
              <Typography sx={{ padding: "9px 12px", border: "3x solid gray" }}>None</Typography>
            </Grid>

            </Popover>

          </Grid>
          <IconButton sx={{border: "1px solid gray", background: "rgba(25, 118, 210, 0.08)", borderRadius:"2px"}}>
            <ClearOutlined />
          </IconButton>
        </Grid>
    )
}
export default IconBtn;