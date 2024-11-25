/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 25/11/2024 - 22:41:49
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2024
    * - Author          : 
    * - Modification    : 
**/
"use client";
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Grid from "@mui/material/Grid2";
import IconBtn from '@/app/components/iconButton';
import SearchAppBar from '@/app/components/search';
import TabSection from '@/app/components/tabSection';
import PaginationBar from '@/app/components/pagination';

export default function DocumentPage() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Tab labels
  const tabLabels = ['All', 'Drafts', 'Completed', 'In Process', 'I need to sign', 'Cancelled'];

  // Function to handle tab changes
  const handleTabChange = (event: any, newValue: any) => {
    setActiveTab(newValue);
  };

  

  return (
    <Box sx={{ padding: '20px', width: '100%' }}>
      {/* Toolbar */}
      <Grid 
        component={"div"}
        container
>
        <IconBtn />
       <SearchAppBar />
      </Grid>

      {/* Tab Section */}
      <TabSection activeTab={activeTab} handleTabChange={handleTabChange} tabLabels={tabLabels}/>
      <PaginationBar />

    </Box>
  );
}