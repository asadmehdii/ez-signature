/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 25/11/2024 - 22:36:58
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2024
    * - Author          : 
    * - Modification    : 
**/
"use client";
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Grid from "@mui/material/Grid2";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ClearOutlined } from '@mui/icons-material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  width: '453px',
  height: '100%',
  borderRadius: theme.shape.borderRadius,
  border: '2px solid rgb(226, 232, 240)',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
//   width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    // width: '100%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '35ch',
      // '&:focus': {
      //   width: '20ch',
      // },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Document"
              inputProps={{ 'aria-label': 'search' }}
            />
            <Grid container alignContent= {'center'} paddingRight={'5px'}>
             <ClearOutlined />
             </Grid>
          </Search>
    </>
  );
}
