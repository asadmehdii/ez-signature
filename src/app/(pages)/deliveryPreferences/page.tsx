"use client";
import React from "react";
import Grid from "@mui/material/Grid2";
import Topbar from "@/app/components/dashboardTopbar/topbar";
import Text from "@/app/components/text";
import { Help} from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import Input from '@/app/components/input';
import CustomCheckbox from '@/app/components/customCheckbox';

export default function DeliveryPreferencesPage() {
    const btnTypeOptions =[
        "Business Owner",
        "Current User",
    ]
   
    return(
        <Topbar title='Delivery Preferences' buttonText="Save Changes" >
            <Grid component={"div"} container direction={"column"} marginInline={"20px"} marginBottom={"40px"}>
                {/* grid_1 */}
                <Grid component={"div"} container border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">Delivery</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <CustomCheckbox text="Attach completed document as PDF when sending completion email" showHelpIcon={true} checkboxProps={{ defaultChecked: true }} />
      <CustomCheckbox text="Attach Audit Trail to completed PDF document when sending completion email" showHelpIcon={true} checkboxProps={{ defaultChecked: true }} />   
      </Grid>
          {/* 3rd div */}
          <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} fontWeight="500" fontSize="1rem" color="rgb(0 8 61)">Contact Button Type</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        
            <Input options={btnTypeOptions} />
   
      </Grid>
      {/* 4th div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container alignItems={"center"} direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} paddingTop={5} fontWeight="500" fontSize="1rem" color="rgb(0 8 61)">Completed Document Prefix</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        <input type="text" className="title_input" placeholder="[Completed]" style={{height: "35px", width:"39%"}}/>     
   
      </Grid>
      {/* 5th */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container alignItems={"center"} direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} paddingTop={5} fontWeight="500" fontSize="1rem" color="rgb(0 8 61)">Custom Requester Email</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        <input type="text" className="title_input" placeholder="max@example.com" style={{height: "35px", width:"39%"}}/>     
   
      </Grid>
          </Grid>

          {/* grid_2 */}
          <Grid component={"div"} container marginTop={"30px"} border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">Sender</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <CustomCheckbox text="Be notified via email when a document is initially opened by a signer" checkboxProps={{ defaultChecked: true }} />
      <CustomCheckbox text="Be notified via email when a document is declined by a signer"  />
      <CustomCheckbox text="Be notified via email when a document is reassigned by a signer to another person" checkboxProps={{ defaultChecked: true }} />
      <CustomCheckbox text="Be notified via email when a document is expired" checkboxProps={{ defaultChecked: true }} />
      <CustomCheckbox text="Be notified via email when a document is signed by a signer" checkboxProps={{ defaultChecked: true }} />
      <CustomCheckbox text="Be notified via email when a document is completed" checkboxProps={{ defaultChecked: true }} />
      
      </Grid>
      </Grid>

      {/* grid_3 */}
      <Grid component={"div"} container marginTop={"30px"} border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">Signer</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <CustomCheckbox text='Send "Document Signed " email to signers' showHelpIcon={true} checkboxProps={{ defaultChecked: true }} />
      <CustomCheckbox text='Send "Document Expired" email to signers' showHelpIcon={true} checkboxProps={{ defaultChecked: true }} />
      <CustomCheckbox text='Send "Document Cancelled" email to signers' showHelpIcon={true} checkboxProps={{ defaultChecked: true }} />
      <CustomCheckbox text='Send "Document Reassigned" email to signers' showHelpIcon={true} checkboxProps={{ defaultChecked: true }} />
      <CustomCheckbox text='Send "Document Completed" email to signers' showHelpIcon={true} checkboxProps={{ defaultChecked: true }} />

    </Grid>
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <CustomCheckbox text='Template Links - Send "Document Completed" email to signer' showHelpIcon={true} checkboxProps={{ defaultChecked: true }} />
      <CustomCheckbox text='Template Links - Enable document updates to signer' showHelpIcon={true} checkboxProps={{ defaultChecked: true }} />
      </Grid>
    </Grid>

    {/* Grid_4 */}
    <Grid component={"div"} container marginTop={"30px"} border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">CC/Recipients</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <CustomCheckbox text='Send "Signature Request Sent" email to CCs' showHelpIcon={true} checkboxProps={{ defaultChecked: true }} />

      </Grid>
      </Grid>






</Grid>
</Topbar>
);
}