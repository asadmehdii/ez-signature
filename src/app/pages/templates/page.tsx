/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 25/11/2024 - 22:34:37
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2024
    * - Author          : 
    * - Modification    : 
**/
"use client";
import React, { useState } from 'react';
import { Box} from '@mui/material';
import IconBtn from '@/app/components/iconButton';
import SearchAppBar from '@/app/components/search';
import TabSection from '@/app/components/tabSection';
import PaginationBar from '@/app/components/pagination';

export default function TemlatesPage() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Tab labels
  const tabLabels = ['Archived', 'Active', 'Draft'];

  // Function to handle tab changes
  const handleTabChange = (event: any, newValue: any) => {
    setActiveTab(newValue);
  };

  

  return (
    <Box sx={{ padding: '20px', width: '100%' }}>
      {/* Toolbar */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <IconBtn />
       <SearchAppBar />
      </Box>

      {/* Tab Section */}
      <TabSection activeTab={activeTab} handleTabChange={handleTabChange} tabLabels={tabLabels}/>
      <PaginationBar />
    </Box>
  );
}