// import Search from '@/app/components/search';

// const Document: React.FC = () => {
//   return(
//     <>
//    // pages/DocumentPage.js

// pages/DocumentPage.js
"use client";
import { useState } from 'react';
import { Box, TextField, IconButton, Tabs, Tab, Typography, Badge } from '@mui/material';
import { Search, Delete, ArrowDropDown } from '@mui/icons-material';
import SearchAppBar from '@/app/components/search';

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
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box display="flex" alignItems="center">
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
        </Box>
       <SearchAppBar />
      </Box>

      {/* Tab Section */}
      <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="document tabs"
      >
        {tabLabels.map((label, index) => (
          <Tab
            key={index}
            label={
              label === 'I need to sign' ? (
                <Badge color="error" badgeContent={1}>
                  {label}
                </Badge>
              ) : (
                label
              )
            }
          />
        ))}
      </Tabs>
      </Box>

      {/* Content Section */}
      <Box display="flex" justifyContent="center" alignItems="center" height="300px" border= "5px solid gainsboro">
        <Typography variant="body1" color="textSecondary">
          {activeTab === 0 && 'All Documents Displayed'}
          {activeTab === 1 && 'Drafts Displayed'}
          {activeTab === 2 && 'Completed Documents Displayed'}
          {activeTab === 3 && 'In Process Documents Displayed'}
          {activeTab === 4 && 'Documents that Need to be Signed'}
          {activeTab === 5 && 'Cancelled Documents Displayed'}
        </Typography>
      </Box>
    </Box>
  );
}


//     </>
//   );
// }

// export default Document;