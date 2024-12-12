"use client";
import { useState } from "react";
import { Tabs, Tab, Box, Typography, Button, TextField } from "@mui/material";
import Topbar from "@/app/components/dashboardTopbar/topbar";
import Grid from "@mui/material/Grid2";
import { Diversity1Outlined } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import Text from "@/app/components/text";
import Icon from "@/app/assests/images/icon-64.png";
import Transparent_bg from "@/app/assests/images/transparent_bg_bit.png";
import Image from "next/image";
import CustomButton from "@/app/components/button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UndoIcon from '@mui/icons-material/Undo';

function createData(
    context: string,
    defaultColor: string,
    currentColor: string,
    setNewColor: string,
  ) {
    return { context, defaultColor, currentColor, setNewColor };
  }

const BrandingPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const rows = [
    createData('Primary Color', '#3A3E42', '#3A3E42', '3A3E42'),
    createData('Secondary Color', '#747D9D', '#747D9D', '#747D9D'),
    createData('Primary Button Color', '#0206A8', '#0206A8', '0206A8'),
    createData('Secondary Button Color', '#808080', '#808080', '808080'),
  ];

  return (
    <Topbar  title="Color Settings">
    <Grid component={"div"} container direction={"column"} marginInline={"30px"} marginBottom={"40px"}>
         {/* Tabs Navigation */}
         <Grid component={"section"} container borderBottom={"2px solid #e8e8e9"}>
      <Tabs value={selectedTab} onChange={handleTabChange} sx={{marginBottom: "30px", gap: 2}}>
        <Tab label="Logos & Icons" sx={{ color: "rgb(0 8 61)", opacity: 1, width: "175px", border: "1px solid #d7d7d9", borderRadius: "2px", background: "rgba(25, 118, 210, 0.08)",
             "&.Mui-selected": {
                background: "#fff", // Optional: Specific border for selected state
                color: "rgb(0 8 61)",
                borderColor: "#000",
              },
        }} />
        <Tab label="Colors" />
      </Tabs>
         </Grid>

 {/* Content for Tabs */}
 <Grid marginTop={4}>
        {selectedTab === 0 && (
            <Grid component={"div"} container direction={"column"} marginInline={"20px"} marginBottom={"40px"}>
                {/* grid_1 */}
          <Grid component={"div"} container border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} justifyContent={"space-between"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="14px" color="rgb(0 8 61)">Icon</Text>
          </Grid>
          {/* 2nd */}
          <Grid component={"section"} container padding={"15px 20px"} borderBottom= {"1px solid #d7d7d9"} justifyContent={"space-between"} width={"100%"}>
          <Text fontSize="14px" color="rgb(0 8 61)">Your icon will be used primarily within the Xodo Sign control panel, notification emails and on the businesses page.</Text>
          <Text fontSize="14px" color="rgb(0 8 61)">For your convenience here are two previews of the uploaded icon with both dark and light background color.</Text>
          </Grid>
{/* 3rd */}

<Grid component={"section"} container direction={"column"} padding={"15px 20px"} alignContent={"start"} borderBottom= {"1px solid #d7d7d9"} width={"100%"}>
           <Grid component={"div"} container alignItems={"center"}>
            <Grid component={"div"} marginRight={"5px"}>
            <Image
            style={{ width: "64px", height: "64px", background: "#00083D" }}
            src={Icon}
            alt="image_here"
          />
            </Grid>
            <Grid component={"div"}>
            <Image
            style={{ width: "64px", height: "64px", background: "#E8EFF6" }}
            src={Icon}
            alt="image_here"
          />
            </Grid>
            <Grid component={"div"} marginLeft={"10px"}>
        <CustomButton color="#fff" fontWeight="500" fontSize={16} borderRadius={20} borderWidth={1} borderColor="var(--secondary-color)" height={"35px"} width={"fit-content"} style={{padding:"0 28px", display:"flex",alignItems:"center"}}>Upload</CustomButton>

            </Grid>
           </Grid>
        <Grid component={"div"} container>
            <Text fontSize="13px" marginTop={10} fontWeight="300" color="rgb(0 8 61 )">64px x 64px, JPEG/PNG</Text>
        </Grid>

</Grid>

          </Grid>
           {/* grid_2 */}
           <Grid component={"div"} container border= {"1px solid #d7d7d9"} marginTop={"30px"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} justifyContent={"space-between"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="14px" color="rgb(0 8 61)">Logo</Text>
          </Grid>
          {/* 2nd */}
          <Grid component={"section"} container padding={"15px 20px"} borderBottom= {"1px solid #d7d7d9"} justifyContent={"space-between"} width={"100%"}>
          <Text fontSize="14px" color="rgb(0 8 61)">Your logo will be used primarily in your control panel and log-in screens.</Text>
          </Grid>
{/* 3rd */}

<Grid component={"section"} container direction={"column"} padding={"15px 20px"} alignContent={"start"} borderBottom= {"1px solid #d7d7d9"} width={"100%"}>
           <Grid component={"div"} container alignItems={"flex-end"}>
            <Grid component={"div"} marginRight={"5px"} sx={{background: "var(--secondary-color)"}} width={"255px"} height={"255px"}>
            <h1 style={{color: "#fff", fontSize: "47px", margin: "0"}}>EzSignature</h1>
            </Grid>
            <Grid component={"div"} marginLeft={"10px"}>
        <CustomButton color="#fff" fontWeight="500" fontSize={16} borderRadius={20} borderWidth={1} borderColor="var(--secondary-color)" height={"35px"} width={"fit-content"} style={{padding:"0 28px", display:"flex",alignItems:"center"}}>Upload</CustomButton>

            </Grid>
           </Grid>
        <Grid component={"div"} container>
            <Text fontSize="13px" marginTop={10} fontWeight="300" color="rgb(0 8 61 )">255px x 255px, JPEG/PNG</Text>
        </Grid>

</Grid>
          </Grid>
{/* grid_3 */}
<Grid component={"div"} container border= {"1px solid #d7d7d9"} marginTop={"30px"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} justifyContent={"space-between"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="14px" color="rgb(0 8 61)">Email Logo</Text>
          </Grid>
          {/* 2nd */}
          <Grid component={"section"} container padding={"15px 20px"} borderBottom= {"1px solid #d7d7d9"} justifyContent={"space-between"} width={"100%"}>
          <Text fontSize="14px" color="rgb(0 8 61)">Your email logo will be shown on the header section of outgoing emails.</Text>
          </Grid>
{/* 3rd */}

<Grid component={"section"} container direction={"column"} padding={"15px 20px"} alignContent={"start"} borderBottom= {"1px solid #d7d7d9"} width={"100%"}>
           <Grid component={"div"} container alignItems={"flex-end"}>
            <Grid component={"div"} marginRight={"5px"} className="transparentBg" width={"255px"} height={"255px"}>
            <h1 style={{color: "var(--secondary-color)", fontSize: "47px", margin: "0"}}>EzSignature</h1>
            </Grid>
            <Grid component={"div"} marginLeft={"10px"}>
        <CustomButton color="#fff" fontWeight="500" fontSize={16} borderRadius={20} borderWidth={1} borderColor="var(--secondary-color)" height={"35px"} width={"fit-content"} style={{padding:"0 28px", display:"flex",alignItems:"center"}}>Upload</CustomButton>

            </Grid>
           </Grid>
        <Grid component={"div"} container>
            <Text fontSize="13px" marginTop={10} fontWeight="300" color="rgb(0 8 61 )">255px x 255px, JPEG/PNG</Text>
        </Grid>

</Grid>
          </Grid>
{/* grid_4 */}
<Grid component={"div"} container border= {"1px solid #d7d7d9"} marginTop={"30px"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} justifyContent={"space-between"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="14px" color="rgb(0 8 61)">Audit Trail Logo</Text>
          </Grid>
          {/* 2nd */}
          <Grid component={"section"} container padding={"15px 20px"} borderBottom= {"1px solid #d7d7d9"} justifyContent={"space-between"} width={"100%"}>
          <Text fontSize="14px" color="rgb(0 8 61)">Your logo will be shown on the header section of your audit trails.</Text>
          </Grid>
{/* 3rd */}

<Grid component={"section"} container direction={"column"} padding={"15px 20px"} alignContent={"start"} borderBottom= {"1px solid #d7d7d9"} width={"100%"}>
           <Grid component={"div"} container alignItems={"flex-end"}>
            <Grid component={"div"} marginRight={"5px"} className="transparentBg" width={"255px"} height={"255px"}>
            <h1 style={{color: "var(--secondary-color)", fontSize: "47px", margin: "0"}}>EzSignature</h1>
            </Grid>
            <Grid component={"div"} marginLeft={"10px"}>
        <CustomButton color="#fff" fontWeight="500" fontSize={16} borderRadius={20} borderWidth={1} borderColor="var(--secondary-color)" height={"35px"} width={"fit-content"} style={{padding:"0 28px", display:"flex",alignItems:"center"}}>Upload</CustomButton>

            </Grid>
           </Grid>
        <Grid component={"div"} container>
            <Text fontSize="13px" marginTop={10} fontWeight="300" color="rgb(0 8 61 )">255px x 255px, JPEG/PNG</Text>
        </Grid>

</Grid>
          </Grid>
          </Grid>
        )}

        {selectedTab === 1 && (
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{background: "rgba(25, 118, 210, 0.08)", borderBottom: "1px solid #d7d7d9", fontSize: "14px", width:"100%"}}>
              <TableRow sx={{width: "100%"}}>
                <TableCell>Context</TableCell>
                <TableCell align="left">Default Color (HEX)</TableCell>
                <TableCell align="left">Current Color (HEX)</TableCell>
                <TableCell align="left">Set New Color</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.context}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.context}
                  </TableCell>
                  <TableCell align="left">
                    <Box sx={{display: "inline-flex", flexDirection:"row" }}>
                    <span>{row.defaultColor}</span>
                    <span style={{background:`${row.defaultColor}`, width: "20px", height: "20px", borderRadius: "999px", marginLeft: "10px"}}></span>
                    </Box> 
                  </TableCell>
                  <TableCell align="left">
                  <Box sx={{display: "inline-flex", flexDirection:"row" }}>
                    <span>{row.currentColor}</span>
                    <span style={{background:`${row.currentColor}`, width: "20px", height: "20px", borderRadius: "999px", marginLeft: "10px"}}></span>
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                  <input type="text" placeholder={row.setNewColor} />
                 </TableCell>
                 <TableCell>
        <CustomButton color="#fff" fontWeight="500" fontSize={16} borderRadius={20} borderWidth={1} borderColor="var(--secondary-color)" height={"35px"} width={"fit-content"} style={{padding:"0 28px", display:"flex",alignItems:"center"}}>Apply</CustomButton>     
                 </TableCell>
                 <TableCell>
                    <Box sx={{background: "#f5f5f5", width: "39px", height: "39px", }}>
                    <UndoIcon sx={{padding: "5px 10px",  verticalAlign: "middle"}} />
                    </Box>
                 </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        )}
      </Grid>

   </Grid> 
   
    </Topbar>
  );
};

export default BrandingPage;
