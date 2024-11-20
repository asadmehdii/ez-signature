"use client";
import React, { useState } from 'react';
import { Box, Pagination, TablePagination } from '@mui/material';
import IconBtn from '@/app/components/iconButton';
import SearchAppBar from '@/app/components/search';
import TabSection from '@/app/components/tabSection';

export default function DocumentPage() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Tab labels
  const tabLabels = ['All', 'Drafts', 'Completed', 'In Process', 'I need to sign', 'Cancelled'];

  // Function to handle tab changes
  const handleTabChange = (event: any, newValue: any) => {
    setActiveTab(newValue);
  };

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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

      <Pagination variant="outlined" shape="rounded" />
      <TablePagination
  component="div"
  count={100}
  page={page}
  onPageChange={handleChangePage}
  rowsPerPage={rowsPerPage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/>
    </Box>
  );
}
