"use client";
import Sidebar from '@/app/components/sidebar'; 
import Button from '@/app/components/button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Card from '@/app/components/card';
import Link from 'next/link';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import Text from '@/app/components/text';


const Dashboard: React.FC = () => {
    return(
        <div className='dashboard'>
            <div>
                {/* navbar */}
            <div style={{display: 'flex', margin: '0 12px'}}>
                <div>
                <h1>Dashboard</h1>
                </div>
                <div style={{marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <NotificationsIcon />
                <Button
                backgroundColor="var(--secondary-color)"
                height={60}
                width={170}
                borderRadius={15}
                style={{marginLeft: '29px'}}
                >Quick Actions</Button>
                </div>
            </div>
            {/* 1st card section */}
            <div style={{margin: '12px', width: '100%', display: 'flex', justifyContent: 'space-between'}}>
            <Card
            className="card"
            padding={0}
            width={"550px"} 
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
            className="card"
            padding={0}
            width={"550px"} 
            height={"350px"}
            borderWidth={1}
            borderColor="#cccccc"
            borderRadius={3}
          >
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#cccccc', margin: '0', padding: '0 19px'}}>
            <h3 style={{}}>Recent Activity</h3>
            <Link href=''>View Activity log</Link>
            </div>
           <div>
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
           </div>
          </Card>
            </div>
            {/* 2nd card senction */}
            <div style={{display: 'flex', margin: '12px'}}>
            <Card
            className="card"
            padding={0}
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
            padding={0}
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
            padding={0}
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
            </div>
            </div>
        </div>
    )
}
export default Dashboard;