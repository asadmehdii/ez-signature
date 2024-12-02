"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import  Grid  from '@mui/material/Grid2';
import Button from '../button';
import Link from "next/link";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import SidebarData from "./content"


const drawerWidth = 250;

interface Props {
    children:React.ReactNode
    open:boolean,
    onToggle:()=>void
}

export default function Sidebar({children,open,onToggle}: Props) {  



  const drawerContent = (
    <Grid container>
     <Grid m={"auto"} px={2} width={"100%"} height={"100%"}>
     <Link href={"/"} style={{ textAlign: "center" }}> <h1 className="logo"> EzSignature</h1></Link>
      <Button backgroundColor="var(--secondary-color)" height={60} width={'79%'} borderRadius={15} style={{ margin: "0 auto" }} >Upgrade!</Button>
         <Grid component={"div"} container >
             <Box component={"div"}>
                 {SidebarData.map((data) => {
                     return (
                         <Link key={data.title} href={`/pages/${data.title.toLowerCase()}`} style={{display: "flex", alignItems: "center", fontSize: "20px",marginTop:"18px", gap: "6px",}}>
                            {data.icon} {data.title}
                         </Link>
                     )})}
             </Box>
         </Grid>
     <Link href="/pages/help-center" 
         style={{fontSize: "1.5rem", position:"absolute", bottom:'20px', left:0, right:0, gap: "7px", textAlign: "center",}}>
         <DonutSmallOutlinedIcon /> Help center
     </Link>
     </Grid> 
    </Grid>
 )
 
 


  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      {/* <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          background:"#fff",
          border:"none",
          boxShadow:"none"
        }}
      >
    <Grid component={"div"} container justifyContent={"space-between"} padding={"0 12px"} flexWrap={"nowrap"}>
   <Box component={"div"} display={"flex"}>
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ display: { md: 'none' } }}>
          <MenuIcon />
          </IconButton>    
          <h1>{pageName}</h1>
  </Box>
    {pageName === 'Dashboard' ? (
  <Box component={"div"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
      <NotificationsIcon sx={{cursor:"pointer"}} />
      <Button className='nav-btn' backgroundColor="var(--secondary-color)" height={52} width={"100%"} borderRadius={15}>Quick Actions</Button>
      </Box>
    ) : (
    <Box component={"div"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
      <Button className='nav-btn' backgroundColor="var(--secondary-color)" height={52} width={"100%"} borderRadius={15}>New {pageName}</Button>
      </Box>
    )
    
    }
  
  </Grid>
</AppBar> */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 }}}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={open}
          // onTransitionEnd={handleDrawerToggle}
          onClose={onToggle}
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
        component="div"
        sx={{ flexGrow: 1, width: {xs:"100%", md: `calc(100% - ${drawerWidth}px )`} }}
      >{children}
      </Grid>
    </Box>
  );
}
 
