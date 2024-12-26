/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 25/11/2024 - 22:40:58
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2024
    * - Author          : 
    * - Modification    : 
**/
"use client"; 
import Button from '@/app/components/button';
import Card from '@/app/components/card';
import Link from 'next/link';
import Box from '@mui/material/Box';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import Text from '@/app/components/text';
import Grid from "@mui/material/Grid2";
import { grey } from '@mui/material/colors';
import Topbar from '@/app/components/dashboardTopbar/topbar';



const Dashboard: React.FC = () => {
      const user = JSON.parse(localStorage.getItem('user') || 'null');

    return(
        <Topbar title='Dashboard' buttonText='Quick Actions' isCaretIcon isBellIcon>
              <Grid 
              component={"div"}
              container
              width={"100%"}
              justifyContent={"space-evenly"}
              flexDirection={{xs: "column", md: "row"}}
              alignItems={{xs: "center"}}
              flexWrap={"nowrap"}
              size={{xs: 12}}
            >
            <Card
            className="card1"
            padding={"0px"}
            width={"45%"} 
            height={"100%"}
            borderWidth={1}
            borderColor="#cccccc"
            borderRadius={3}
          >
            <h2 style={{backgroundColor: 'rgba(25, 118, 210, 0.08)', margin: '0', padding: '11px'}}>Documents</h2>
            <div style={{padding: '21px', }}>
               <Link href='' style={{backgroundColor: 'rgba(25, 118, 210, 0.08)', display: 'flex', marginBottom: '11px', alignItems: "center", borderRadius: "5px"}}>
                <Box component={"div"} sx={{display: 'flex', backgroundColor: '#D60D31', padding: '12px 7px', borderEndStartRadius: "6px", borderStartStartRadius: "6px", }}>
                <WarningAmberIcon sx={{ color: grey[100] }} />
                </Box>
                <div style={{display: 'flex', justifyContent: 'space-between', flex: '1 1 0%', padding: '0 12px', fontSize: "0.875rem"}}>
                    <p>Awaiting my Signature</p>
                    <p>0</p>
                </div>
               </Link>
               <Link href='' style={{backgroundColor: 'rgba(25, 118, 210, 0.08)', display: 'flex', marginBottom: '11px', alignItems: "center", borderRadius: "5px"}}>
               <Box sx={{display: 'flex', backgroundColor: '#7B8191', padding: '12px 7px', borderEndStartRadius: "6px", borderStartStartRadius: "6px" }}>
                <AlarmOutlinedIcon sx={{ color: grey[100] }} />
                </Box>
                <div style={{display: 'flex', justifyContent: 'space-between', flex: '1 1 0%', padding: '0 12px', fontSize: "0.875rem"}}>
                    <p>Waiting for Others</p>
                    <p>Show all</p>
                </div>
               </Link>
               <Link href='' style={{backgroundColor: 'rgba(25, 118, 210, 0.08)', display: 'flex', marginBottom: '11px', alignItems: "center", borderRadius: "5px"}}>
                <Box sx={{display: 'flex', backgroundColor: '#0206A8', padding: '12px 7px', borderEndStartRadius: "6px", borderStartStartRadius: "6px" }}>
                <TaskAltOutlinedIcon sx={{ color: grey[100] }} />
                </Box>
                <div style={{display: 'flex', justifyContent: 'space-between', flex: '1 1 0%', padding: '0 12px'}}>
                    <p>Completed</p>
                    <p>Show all</p>
                </div>
               </Link>
            </div>
          </Card>
          <Card
            className="card1 card-Activity"
            padding={"0px"}
            width={"45%"} 
            height={"100%"}
            borderWidth={1}
            borderColor="#cccccc"
            borderRadius={3}
          >
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(25, 118, 210, 0.08)', margin: '0', padding: '0 19px'}}>
            <h3>Recent Activity</h3>
            <Link href=''>View Activity log</Link>
            </div>
           <Grid component={"div"} container flexDirection={"column"} alignItems={"center"} overflow={"hidden"}>
            <Link href='' className='card-section' style={{padding: "1rem", borderBottom: "1px solid #E8EFF6"}}>
            <Text
             color='#0206A8'
             fontSize='16px'
             style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}
             
            >
                Oct 09 2024- document Appointment Leter.pdf completed by user@gmail.com
            </Text>
            </Link>
            <Link href='' className='card-section' style={{padding: "1rem", borderBottom: "1px solid #E8EFF6"}}>
            <Text
             color='#0206A8'
             
            //  paddingLeft={5}
            //  paddingTop={5}
            //  paddingBottom={5}
             fontSize='16px'
             style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}
             
            >
                Oct 09 2024- document Appointment Leter.pdf completed by user@gmail.com
            </Text>
            </Link>
            <Link href='' className='card-section' style={{padding: "1rem", borderBottom: "1px solid #E8EFF6"}}>
            <Text
             color='#0206A8'
            //  paddingLeft={5}
            //  paddingTop={5}
            //  paddingBottom={5}
             fontSize='16px'
             style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}
             
            >
                Oct 09 2024- document Appointment Leter.pdf completed by user@gmail.com
            </Text>
            </Link>
            <Link href='' className='card-section' style={{padding: "1rem", borderBottom: "1px solid #E8EFF6"}}>
            <Text
             color='#0206A8'
            //  paddingLeft={5}
            //  paddingTop={5}
            //  paddingBottom={5}
             fontSize='16px'
             style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}
            >
                Oct 09 2024- document Appointment Leter.pdf completed by user@gmail.com
            </Text>
            </Link>
           </Grid>
          </Card>
            </Grid>
            {/* 2nd card senction */}
            <Grid 
              component={"div"}
              container
              width={"100%"}
              justifyContent={"center"}
              flexDirection={{xs: "column", sm: "row"}}
              alignItems={{xs: "center"}}
              flexWrap={"nowrap"}
              size={{xs: 12}}
              marginTop={"20px"}
            >
            <Card
            className="card2 "
            padding={"0px"}
            width={"31%"} 
            height={"250px"}
            borderWidth={1}
            borderColor="#cccccc"
            borderRadius={3}
          >
            <div>
            <Text margin={12} fontSize='20px'>My Signature</Text>
           <div
            style={{
              fontSize: "40px",
              fontFamily: "'Great Vibes', cursive", 
              fontStyle: "italic",
              margin: "20px 0",
              color: "#000",
            }}
          >
            {user?.name || "No User"}
          </div>
            <Text margin={9} fontSize='16px' color='blue' style={{textDecoration: 'underline'}}>Edit</Text>
            </div>
          </Card>
          <Card
            className="card2"
            padding={"12px"}
            width={"31%"} 
            height={"250px"}
            borderWidth={1}
            borderColor="#cccccc"
            borderRadius={3}
          >
            <div>
            <Text margin={12} fontSize='17px'>Document send this month</Text>
            <Button backgroundColor="var(--secondary-color)" height={52} width={150} color='#fff' borderRadius={"15px"} sx={{ml:1}}>Upgrade</Button>
            </div>
          </Card>
          <Card
            className="card2"
            padding={"0px"}
            width={"31%"} 
            height={"250px"}
            borderWidth={1}
            borderColor="#cccccc"
            borderRadius={3}
          >
            <Grid>
            <Text margin={12} fontSize='20px' fontWeight='700'>Business Account</Text>
            <Text margin={9} fontSize='16px' fontWeight='400'>Business Subscription: Free Plan</Text>
            <Text margin={9} fontSize='16px' fontWeight='400'>Logged in as: </Text>
          </Grid>
          </Card>
            </Grid>
        </Topbar>
    )
}
export default Dashboard;