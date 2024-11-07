"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import  Grid  from '@mui/material/Grid2';
import Button from '../button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from "next/link";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import SidebarData from "./content"


const drawerWidth = 260;

interface Props {
    children:React.ReactNode
}

export default function Sidebar(props: Props) {
  const children = props.children
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [pageName,setPagename] = React.useState("Dashboard")

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawerContent = (
    <Grid container height={"100%"} component={"div"} flexDirection={"column"}>
     <Grid height={"100%"}>
         <Link href={"/"} style={{ textAlign: "center" }}>
             <h1 className="logo"> EzSignature </h1>
         </Link>
         <Button backgroundColor="var(--secondary-color)" height={60} width={170} borderRadius={15} style={{ margin: "0 auto" }} >
             Upgrade!
         </Button>
         {/* Pages */}
         <Grid component={"div"} container >
             <div style={{ marginTop: "20px", marginLeft: "12px" }}>
                 {SidebarData.map((data) => {
                     return (
                         <Link onClick={()=>{setPagename(data.title)}} key={data.title} href={`/pages/${data.title.toLowerCase()}`}
                             style={{
                                 display: "flex",
                                 alignItems: "center",
                                 fontSize: "1.5rem",
                                 margin: "12px",
                                 gap: "7px",
                             }}>
                             {data.icon}
                             {data.title}
                         </Link>
                     )
                 })}
             </div>
         </Grid>
     <Link href="/pages/help-center" 
         style={{
             fontSize: "1.5rem",
             display: "flex",
             alignItems: "center",
             gap: "7px",
             marginTop: "40px",  
             justifyContent: "center", 
             padding: "10px 0", 
             textAlign: "center",
             height:"auto" 
         }}>
         <DonutSmallOutlinedIcon /> Help center
     </Link>
     </Grid> 
    </Grid>
 )
 
 


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          background:"#fff",
          border:"none",
          boxShadow:"none"
        }}
      >
    <Grid component={"div"} container justifyContent={"space-between"} padding={"0 12px"}>
   <Box component={"div"} display={"flex"}>
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ display: { md: 'none' } }}>
          <MenuIcon />
          </IconButton>    
          <h1>{pageName}</h1>
  </Box>
  <Box component={"div"} display={"flex"} alignItems={"center"}>
       <NotificationsIcon sx={{cursor:"pointer"}} />
   <Button backgroundColor="var(--secondary-color)" height={52} width={160} borderRadius={15} style={{marginLeft: '18px'}}>Quick Actions</Button>
    </Box>
  </Grid>
</AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 }}}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
           // here you can set the width of sidebar shows on small screen 
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,bgcolor:"#21f1A6"},
          }}
        >{drawerContent}</Drawer>
      <Drawer
          variant="permanent"
          open
          sx={{
           // here you can set the width of sidebar shows on large screen 
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor:"#21f1A6" },
          }}
        >{drawerContent}</Drawer> 
     </Box> 
      <Grid
        container
        component="main"
        sx={{ flexGrow: 1, p: 2,mt:10, width: {xs:"100%", md: `calc(100% - ${drawerWidth}px)` } }}
      >{children}
      </Grid>
    </Box>
  );
}

