"use client"; 
import Button from '@/app/components/button';
import Card from '@/app/components/card';
import Link from 'next/link';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import Text from '@/app/components/text';
import Grid from "@mui/material/Grid2";



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
            className="card1 card-Activity"
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
             fontSize='17px'
             
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
             fontSize='17px'
             
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
             fontSize='17px'
             
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
              flexDirection={{xs: "column", sm: "row"}}
              alignItems={{xs: "center"}}
              flexWrap={"nowrap"}
              size={{xs: 12}}
              marginTop={"20px"}
            >
            <Card
            className="card2 "
            padding={"0px"}
            width={"30%"} 
            height={"250px"}
            borderWidth={1}
            borderColor="#cccccc"
            borderRadius={3}
          >
            <div>
            <Text margin={12} fontSize='20px'>My Signature</Text>
            <Text margin={9} fontSize='16px' color='blue' style={{textDecoration: 'underline'}}>Edit</Text>
            </div>
          </Card>
          <Card
            className="card2"
            padding={"12px"}
            width={"30%"} 
            height={"250px"}
            borderWidth={1}
            borderColor="#cccccc"
            borderRadius={3}
          >
            <div>
            <Text margin={12} fontSize='17px'>Document send this month</Text>
            <Button backgroundColor="var(--secondary-color)" height={52} borderRadius={15}>Upgrade</Button>
            </div>
          </Card>
          <Card
            className="card2"
            padding={"0px"}
            width={"30%"} 
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
        </>
    )
}
export default Dashboard;