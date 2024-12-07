"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import  Grid  from '@mui/material/Grid2';
import Text from '@/app/components/text';
import Navigate from '@/app/components/linkText';

interface Props {
    children?:React.ReactNode
    open?:boolean,
    onToggle?:()=>void
}
const topics = [
  "Getting Started",
  "eSignature API",
  "API Access Key",
  "Business Selection",
  "HTTPS",
  "Supported Languages",
  "Sandbox Mode",
  "Methods",
  "Create Document: Field",
  "Bulk Sending",
  "Hidden Tags",
  "Embedded Signing",
  "Embedded Requesting",
  "OAuth 2.0",
  "Webhooks",
  "Libraries",
  "Stay up-to-date"
];

const APIDocumentationSidebar = ({children,open,onToggle}: Props)=>{


const drawerWidth = 220;

const drawerContent = (
    <Box>
      {topics.map((item)=><Navigate sx={{borderBottom:"1px solid #000000",pl:1,py:1}} fontSize={16} fontWeight='600' key={item} text={item} to={`#${item}`} />)}
    </Box>
 )
return(
  <Box sx={{ display: 'flex' }}>
    <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 }}} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    <Drawer variant="temporary" open={open} onClose={onToggle}
            ModalProps={{
              keepMounted: true, 
            }}
            sx={{
              zIndex:1300,
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {  width: drawerWidth,position:"relative"},
            }}>
              {drawerContent}
    </Drawer>
    <Drawer variant="permanent" open
       sx={{   display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': {boxSizing:"border-box", width: drawerWidth,position:"relative"}
            }}
          >{drawerContent}</Drawer> 
       </Box> 
        <Grid
          component="div"
          sx={{flex:1, width: {xs:"100%", md:"100%" ,bgcolor:"red"} }}
        >{children}
        </Grid>
      </Box> 
    )
}


export default  APIDocumentationSidebar