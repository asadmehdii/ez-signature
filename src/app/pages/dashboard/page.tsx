"use client"; 
import Button from '@/app/components/button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Card from '@/app/components/card';
import Link from 'next/link';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import Text from '@/app/components/text';
import Grid from "@mui/material/Grid2";
import { Box } from '@mui/material';



const Dashboard: React.FC = () => {
    return(
        <>
                {/* navbar */}
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
            height={"350px"}
            borderWidth={1}
            borderColor="#cccccc"
            borderRadius={3}
          >
            <h1 style={{backgroundColor: '#cccccc', margin: '0', padding: '11px'}}>Documents</h1>
            <div style={{padding: '21px', }}>
               <Link href='' style={{backgroundColor: '#ECECEC', display: 'flex', marginBottom: '11px'}}>
                <div style={{backgroundColor: 'red', padding: '12px 7px'}}>
                <WarningAmberIcon />
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', flex: '1 1 0%', padding: '0 12px'}}>
                    <p>Awaiting my Signature</p>
                    <p>0</p>
                </div>
               </Link>
               <Link href='' style={{backgroundColor: '#ECECEC', display: 'flex', marginBottom: '11px'}}>
                <div style={{backgroundColor: 'gray', padding: '12px 7px'}}>
                <AlarmOutlinedIcon />
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', flex: '1 1 0%', padding: '0 12px'}}>
                    <p>waiting for Others</p>
                    <p>Show all</p>
                </div>
               </Link>
               <Link href='' style={{backgroundColor: '#ECECEC', display: 'flex', marginBottom: '11px'}}>
                <div style={{backgroundColor: 'dark-blue', padding: '12px 7px'}}>
                <TaskAltOutlinedIcon />
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', flex: '1 1 0%', padding: '0 12px'}}>
                    <p>Completed</p>
                    <p>Show all</p>
                </div>
               </Link>
            </div>
          </Card>
          <Card
            className="card1"
            padding={"0px"}
            width={"45%"} 
            height={"350px"}
            borderWidth={1}
            borderColor="#cccccc"
            borderRadius={3}
          >
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#cccccc', margin: '0', padding: '0 19px'}}>
            <h3 style={{}}>Recent Activity</h3>
            <Link href=''>View Activity log</Link>
            </div>
           <Grid>
            <Link href=''>
            <Text
             color='#1e88e5'
             paddingLeft={12}
             paddingRight={12}
             fontSize='20px'
             
            >
                Oct 09 2024- document Appointment Leter.pdf completed by user@gmail.com
            </Text>
            </Link>
            <hr/>
            <Link href=''>
            <Text
             color='#1e88e5'
             paddingLeft={12}
             paddingRight={12}
             fontSize='20px'
             
            >
                Oct 09 2024- document Appointment Leter.pdf completed by user@gmail.com
            </Text>
            </Link>
            <hr />
            <Link href=''>
            <Text
             color='#1e88e5'
             paddingLeft={12}
             paddingRight={12}
             fontSize='20px'
             
            >
                Oct 09 2024- document Appointment Leter.pdf completed by user@gmail.com
            </Text>
            </Link>
            <hr />
           </Grid>
          </Card>
            </Grid>
            {/* 2nd card senction */}
            <Grid 
              component={"div"}
              container
              width={"100%"}
              justifyContent={"space-evenly"}
              flexDirection={{xs: "column", md: "row"}}
              alignItems={{xs: "center"}}
              flexWrap={"nowrap"}
              size={{xs: 12}}
              marginTop={"20px"}
            >
            <Card
            className="card"
            padding={"0px"}
            width={"350px"} 
            height={"250px"}
            borderWidth={1}
            borderColor="#cccccc"
            borderRadius={3}
          >
            <div>
                <p>My Signature</p>
            </div>
          </Card>
          <Card
            className="card"
            padding={"0px"}
            width={"350px"} 
            height={"250px"}
            borderWidth={1}
            borderColor="#cccccc"
            borderRadius={3}
          >
            <div>
                <p>My Signature</p>
            </div>
          </Card>
          <Card
            className="card"
            padding={"0px"}
            width={"350px"} 
            height={"250px"}
            borderWidth={1}
            borderColor="#cccccc"
            borderRadius={3}
          >
            <div>
                <p>My Signature</p>
            </div>
          </Card>
            </Grid>
        </>
    )
}
export default Dashboard;