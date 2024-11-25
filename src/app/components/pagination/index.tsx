import React, { useState } from 'react';
import { Box, Pagination, Select, MenuItem, Typography, SelectChangeEvent } from '@mui/material';
import Grid from "@mui/material/Grid2";

 export default function PaginationBar() {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.ChangeEvent<unknown> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: SelectChangeEvent<number>) => {
    setRowsPerPage(Number(event.target.value)); // Convert to number
    setPage(1); // Reset to page 1 when results per page change
    console.log(`Results per page: ${event.target.value}`);
  };

    return (
        <>
        <Grid 
  component={"div"}
  container
  alignItems={"center"}
  justifyContent={"space-between"}
>
      {/* Pagination  */}
      <Pagination
        count={10} // Total number of pages
        page={page}
        onChange={handleChangePage}
        variant="outlined"
        shape="rounded"
        siblingCount={1}
        boundaryCount={1}
      />

      {/* Rows Per Page Selector */}
      <Box display="flex" alignItems="center" sx={{ ml: 2 }}>
        <Typography sx={{ mr: 1 }}>Number of Results:</Typography>
        <Select
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
          size="small"
          sx={{ minWidth: 80 }}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </Box>

</Grid>
        </>
    );
 }