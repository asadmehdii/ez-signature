"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import Topbar from "@/app/components/dashboardTopbar/topbar";
import Text from "@/app/components/text";
import { Help} from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors';
import Input from '@/app/components/input';
import CustomCheckbox from '@/app/components/customCheckbox';

export default function ExpirationPage() {
    const options = [
        "1 day (December 06)",
        "3 days",
        "7 days",
        "2 weeks",
        "3 weeks",
        "1 month",
        "3 months",
        "6 months",

      ];
      const reminderOptions = [
        "1 day (December 06)",
        "2 days",
        "3 days",
        "4 days",
        "5 days",
        "6 days",
        "1 weeks",
        "2 weeks",
        "3 weeks",
        "1 month",

      ];
      const firstSecondOptions = [
        "1 day (December 06)",
        "2 days",
        "3 days",
        "4 days",
        "5 days",
        "6 days",
        "1 weeks",
        "2 weeks",
        "3 weeks",
        "1 month",
        "3 months"
      ];
   
    return(
        <Topbar title='Expirations & Reminders' buttonText="Save Changes" >
            <Grid component={"div"} container direction={"column"} marginInline={"20px"} marginBottom={"40px"}>
                {/* grid_1 */}
                <Grid component={"div"} container border= {"1px solid #d7d7d9"} borderRadius={"3px"} marginBottom={"30px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">Expirations</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} fontWeight="500" fontSize="1rem" color="rgb(0 8 61)">Expire Document After</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        
            <Input options={options} />
   
      </Grid>
      {/* 3rd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <CustomCheckbox text="Allow staff members to set document expiration date" showHelpIcon={true} checkboxProps={{ defaultChecked: true }} />
      <CustomCheckbox text="Enable expiration reminders" showHelpIcon={true} checkboxProps={{ defaultChecked: true }} />   
      </Grid>
{/* 4th div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} fontWeight="500" fontSize="1rem" color="rgb(0 8 61)">Contact Button Type</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        
            <Input options={reminderOptions} />
   
      </Grid>
      </Grid>
{/* grid_2 */}
<Grid component={"div"} container border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">Reminders</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <CustomCheckbox text="Enable auto reminders " showHelpIcon={true} checkboxProps={{ defaultChecked: true }} />   
      </Grid>
      {/* 3rd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} fontWeight="500" fontSize="1rem" color="rgb(0 8 61)">Send First Reminder After</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
            <Input options={firstSecondOptions} />
      </Grid>
{/* 4th div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} fontWeight="500" fontSize="1rem" color="rgb(0 8 61)">Send Second Reminder After</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        
            <Input options={firstSecondOptions} />
   
      </Grid>
      </Grid>



      </Grid>
      </Topbar>
)
}
