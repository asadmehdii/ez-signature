"use client";
import React, { useState } from 'react';
import Grid from "@mui/material/Grid2";
import IconBtn from '@/app/components/iconButton';
import SearchAppBar from '@/app/components/search';
import TabSection from '@/app/components/tabSection';
import PaginationBar from '@/app/components/pagination';
import Topbar from '@/app/components/dashboardTopbar/topbar';
import Route from '@/app/utils/routes';

export default function ContactsPage() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Tab labels
  const tabLabels = ['Archived', 'All'];

  // Function to handle tab changes
  const handleTabChange = (event: any, newValue: any) => {
    setActiveTab(newValue);
  };

  

  return (
    <Topbar title='Contacts' firstBtnUrl={Route.NEW_CONTACT}  buttonText='New Contacts'>

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