"use client";
import React, { useState } from 'react';
import IconBtn from '@/app/components/iconButton';
import SearchAppBar from '@/app/components/search';
import TabSection from '@/app/components/tabSection';
import PaginationBar from '@/app/components/pagination';
import Topbar from '@/app/components/dashboardTopbar/topbar';
import Grid from "@mui/material/Grid2";
import Route from '@/app/utils/routes';


export default function TeamsPage() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(0);
 
  // Tab labels
  const tabLabels = ['Archived', 'All', 'Active', 'Inactive'];

  // Function to handle tab changes
  const handleTabChange = (event: any, newValue: any) => {
    setActiveTab(newValue);
  };

  

  return (
    <Topbar title='Teams' buttonText='New Team Members' firstBtnUrl={Route.NEW__TEAM_MEMBER}>

<Grid sx={{ padding: '20px', width: '100%' }}>
      {/* Toolbar */}
      <Grid 
        component={"div"}
        container
        justifyContent={"space-between"}
>
        <IconBtn />
       <SearchAppBar />
      </Grid>

      {/* Tab Section */}
      <TabSection activeTab={activeTab} handleTabChange={handleTabChange} tabLabels={tabLabels}/>
      <PaginationBar />

    </Grid>
    </Topbar>
  );
}