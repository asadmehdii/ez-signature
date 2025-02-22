"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid2';
import Button from '../button';
import Link from "next/link";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import SidebarData from "./content";
import DropDown from "../dropDown";

const drawerWidth = 220;

interface Props {
  children: React.ReactNode;
  open: boolean;
  onToggle: () => void;
}

export default function Sidebar({ children, open, onToggle }: Props) {
  // Removed the "user" variable because it was not used in the component.
  // If you want to display user information, you can add it to your rendered output.

  const drawerContent = (
    <Grid container>
      <Grid m="auto" px={2} width="100%" height="100%">
        {/* Dropdown */}
        <DropDown />
        <Link href="/" style={{ textAlign: "center" }}>
          <h1 className="logo">EzSignature</h1>
        </Link>
        <Button
          backgroundColor="var(--secondary-color)"
          height={60}
          width="79%"
          borderRadius={15}
          style={{ margin: "0 auto" }}
        >
          Upgrade!
        </Button>
        <Grid component="div" container>
          <Box component="div">
            {SidebarData.map((data) => (
              <Link
                key={data.title}
                href={`/pages/${data.title.toLowerCase()}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "20px",
                  marginTop: "18px",
                  gap: "6px",
                }}
              >
                {data.icon} {data.title}
              </Link>
            ))}
          </Box>
        </Grid>
        <Link
          href="/pages/help-center"
          style={{
            fontSize: "1.5rem",
            position: "absolute",
            bottom: "20px",
            left: 0,
            right: 0,
            gap: "7px",
            textAlign: "center",
          }}
        >
          <DonutSmallOutlinedIcon /> Help center
        </Link>
      </Grid>
    </Grid>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Drawer for small screens */}
        <Drawer
          variant="temporary"
          open={open}
          onClose={onToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              bgcolor: "#21f1A6",
            },
          }}
        >
          {drawerContent}
        </Drawer>
        {/* Permanent drawer for larger screens */}
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              bgcolor: "#21f1A6",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>
      <Grid
        component="div"
        sx={{ width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` } }}
      >
        {children}
      </Grid>
    </Box>
  );
}
