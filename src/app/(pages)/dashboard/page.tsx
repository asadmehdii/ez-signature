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
import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import Route from '@/app/utils/routes'


const Dashboard: React.FC = () => {
  const [user, setUser] = useState<{ email: string,name: string  } | null>(null);
  const [signature, setSignature] = useState<string | null>(null);
  const [signatureImage, setSignatureImage] = useState<string | null>(null);
  const [recentDrafts, setRecentDrafts] = useState([]);
  const [totalContacts, setTotalContacts] = useState<number | null>(null);
const [totalTemplates, setTotalTemplates] = useState<number | null>(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Error parsing user from local storage:', error);
    }
  }, []);


  const [recentActivities, setRecentActivities] = useState<
    {
      _id: string;
      documentTitle: string;
      action: string;
      documentStatus: string;
      performedBy: string;
      createdAt: Date;
    }[]
  >([]);

  const fetchSignature = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.warn('No auth token found.');
        return;
      }

      const response = await axios.get('http://ezsignature.org/api/signatures/default', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const signatureData = response.data;

      if (!signatureData) {
        console.warn('No signature data found.');
        return;
      }

      if (signatureData.type === 'typed' && signatureData.content) {
        setSignature(signatureData.content.trim());
        setSignatureImage(null);
      } else if ((signatureData.type === 'draw' || signatureData.type === 'upload') && signatureData.image) {
        setSignatureImage(signatureData.image);
        setSignature(null);
      } else {
        console.warn('Unsupported signature type or missing data.');
        setSignature(null);
        setSignatureImage(null);
      }

    } catch (error) {
      console.error('Failed to fetch signature:', error);
    }
  };

  const fetchRecentActivities = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://ezsignature.org/api/document/activity', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Full response:', response);
      console.log('Response data:', response.data);

      if (Array.isArray(response.data)) {
        setRecentActivities(response.data);
      } else {
        console.warn('Response data is not an array:', response.data);
        setRecentActivities([]);
      }
    } catch (error) {
      console.error('Failed to fetch recent activities:', error);
    }
  };

  const fetchRecentDrafts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://ezsignature.org/api/document/activity', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status !== 200) {
        console.error(`Error fetching drafts: ${response.status} ${response.statusText}`);
        return;
      }


      const allActivities = response.data;
      const drafts = Array.isArray(allActivities)
        ? allActivities.filter((doc) => doc.documentStatus === 'draft')
        : [];
      setRecentDrafts(drafts);
    } catch (error) {
      console.error('Failed to fetch recent drafts:', error);
    }
  };


  useEffect(() => {
    fetchRecentDrafts();
  }, []);

const fetchTotalContacts = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://ezsignature.org/api/contacts?status=all', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      const contactsData = response.data;
      setTotalContacts(contactsData.total); // Use the 'total' field from the response
    } else {
      console.error(`Error fetching contacts: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error('Failed to fetch total contacts:', error);
  }
};

useEffect(() => {
  fetchTotalContacts();
}, []);


const fetchTotalTemplates = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://ezsignature.org/api/template/all', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      const templatesData = response.data;
      setTotalTemplates(templatesData.total); // Use the 'total' field from the response
    } else {
      console.error(`Error fetching templates: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error('Failed to fetch total templates:', error);
  }
};
useEffect(() => {
  fetchTotalTemplates();
}, []);


  useEffect(() => {
    if (user?.email) {
      console.log("Fetching signature for user:", user.email);
      fetchSignature();
      fetchRecentActivities();
    }
  }, [user]);


  useEffect(() => {
    console.log('Signature state after update:', signature);
  }, [signature]);


  useEffect(() => {
    console.log('Recent Activities:', recentActivities);
  }, [recentActivities]);

  return (
    <Topbar title='Dashboard' buttonText='Quick Actions' isCaretIcon isBellIcon>
      <Grid
        component={"div"}
        container
        width={"100%"}
        justifyContent={"space-evenly"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center" }}
        flexWrap={"nowrap"}
        size={{ xs: 12 }}
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
          <h2 style={{ backgroundColor: 'rgba(25, 118, 210, 0.08)', margin: '0', padding: '11px' }}>Documents</h2>
          <div style={{ padding: '21px', }}>
            <Link href={{ pathname: '/documents', query: { tab: 'I need to sign' } }} style={{ backgroundColor: 'rgba(25, 118, 210, 0.08)', display: 'flex', marginBottom: '11px', alignItems: "center", borderRadius: "5px" }}>
              <Box component={"div"} sx={{ display: 'flex', backgroundColor: '#D60D31', padding: '12px 7px', borderEndStartRadius: "6px", borderStartStartRadius: "6px", }}>
                <WarningAmberIcon sx={{ color: grey[100] }} />
              </Box>
              <div style={{ display: 'flex', justifyContent: 'space-between', flex: '1 1 0%', padding: '0 12px', fontSize: "0.875rem" }}>
                <p>Awaiting my Signature</p>
                <p>Show All</p>
              </div>
            </Link>
            <Link href={{ pathname: '/documents', query: { tab: 'In Process' } }} style={{ backgroundColor: 'rgba(25, 118, 210, 0.08)', display: 'flex', marginBottom: '11px', alignItems: "center", borderRadius: "5px" }}>
              <Box sx={{ display: 'flex', backgroundColor: '#7B8191', padding: '12px 7px', borderEndStartRadius: "6px", borderStartStartRadius: "6px" }}>
                <AlarmOutlinedIcon sx={{ color: grey[100] }} />
              </Box>
              <div style={{ display: 'flex', justifyContent: 'space-between', flex: '1 1 0%', padding: '0 12px', fontSize: "0.875rem" }}>
                <p>Waiting for Others</p>
                <p>Show all</p>
              </div>
            </Link>
            <Link href={{ pathname: '/documents', query: { tab: 'completed' } }} style={{ backgroundColor: 'rgba(25, 118, 210, 0.08)', display: 'flex', marginBottom: '11px', alignItems: "center", borderRadius: "5px" }}>
              <Box sx={{ display: 'flex', backgroundColor: '#0206A8', padding: '12px 7px', borderEndStartRadius: "6px", borderStartStartRadius: "6px" }}>
                <TaskAltOutlinedIcon sx={{ color: grey[100] }} />
              </Box>
              <div style={{ display: 'flex', justifyContent: 'space-between', flex: '1 1 0%', padding: '0 12px' }}>
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(25, 118, 210, 0.08)', margin: '0', padding: '0 19px' }}>
            <h3>Recent Activity</h3>
            <Link href='/recentActivity'>View Activity log</Link>
          </div>
          <Grid component={"div"} container flexDirection={"column"} alignItems={"center"} overflow={"hidden"}>
            {recentActivities.length === 0 ? (
              <Link href='' className='card-section' style={{ padding: "1rem", borderBottom: "1px solid #E8EFF6" }}>
                <Text
                  color='#0206A8'
                  fontSize='16px'
                  style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}
                >
                  No Document Recent Activity
                </Text>
              </Link>
            ) : (
              recentActivities.slice(0, 4).map((activity) => (
                <Link key={activity._id} href='/documents' className='card-section' style={{ padding: "1rem", borderBottom: "1px solid #E8EFF6" }}>
                  <Text
                    color='#0206A8'
                    fontSize='16px'
                    style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}
                  >
                    {new Date(activity.createdAt).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })} - document {`${activity.documentTitle}  ${activity.documentStatus} by ${activity.performedBy}`}
                  </Text>
                </Link>
              ))
            )}
          </Grid>

        </Card>
      </Grid>
      {/* 2nd card senction */}
      <Grid
        component={"div"}
        container
        width={"100%"}
        justifyContent={"center"}
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "center" }}
        flexWrap={"nowrap"}
        size={{ xs: 12 }}
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
          <div className="border_padding">
            {/* My Signature */}
            <div className="signature_card">
              <div className="signature_header">
                <div>
                  <span className="signature_title">My Signature</span>
                  <br />
                  <span className="edit_link">
                    <Link href={Route.SIGNATURE}>Edit</Link></span>
                </div>
                <div className="signature_content">
                  {signatureImage ? (
                    <img src={signatureImage} alt="My Signature" style={{ maxHeight: '50px' }} />
                  ) : (
                    <span className="signature_text">{signature ? signature : "No signature available"}</span>
                  )}
                </div>
              </div>
            </div>


            {/* My Initials */}
            <div className="signature_card">
              <div className="signature_header">
                <div>
                  <span className="signature_title">My Initials</span>
                  <br />
                  <span className="edit_link">Edit</span>
                </div>
                <div className="signature_content">
                  <span className="signature_text initials_text">
                    {user?.name
                      ? user.name
                        .split(" ")
                        .map((part) => part[0]?.toUpperCase())
                        .join("")
                      : "No User"}
                  </span>
                </div>
              </div>
            </div>
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
    <div
  style={{
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
  }}
>
  <Text fontSize='17px'>Document send this month</Text>
  <Button
    backgroundColor="var(--secondary-color)"
    height={30}
    width={100}
    color='#fff'
    borderRadius={"15px"}
    sx={{ ml: 1 }}
  >
    Upgrade
  </Button>
</div>


   <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
  <svg width="200" height="110">
    <defs>
      <linearGradient id="gaugeBg" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#eaf0f6" />
        <stop offset="100%" stopColor="#eaf0f6" />
      </linearGradient>
    </defs>
    <path
      d="M20,90 A80,80 0 0,1 180,90"
      fill="none"
      stroke="url(#gaugeBg)"
      strokeWidth="18"
    />
    <text x="100" y="70" textAnchor="middle" fontSize="18" fill="#333">0</text>
    <text x="100" y="85" textAnchor="middle" fontSize="14" fill="#333">Documents Sent</text>
    <text x="20" y="95" fontSize="13" fill="#333">0</text>
    <text x="175" y="95" fontSize="13" fill="#333">3</text>
  </svg>
</div>

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
            <Text margin={5} fontSize='20px' fontWeight='700'>Business Account</Text>
            <Text margin={3} fontSize='16px' fontWeight='400'>Business Subscription: Free Plan</Text>
        <Text margin={3} fontSize='16px' fontWeight='400'> Logged in as: {user?.name || "Guest"}</Text>
<hr style={{ width: '100%', marginTop: '6x', height: '1px', backgroundColor: '#eee', border: 'none' }} />
           <Text margin={5} fontSize='20px' fontWeight='700'>{user?.name || "Guest"}</Text>
<Text margin={3} fontSize='16px' fontWeight='400'>Total Templates: {totalTemplates !== null ? totalTemplates : "Loading..."}</Text>
<Text margin={3} fontSize='16px' fontWeight='400'>Contacts: {totalContacts !== null ? totalContacts : "Loading..."}</Text>

<hr style={{ width: '100%', marginTop: '6px', height: '1px', backgroundColor: '#eee', border: 'none' }} />

         <Text margin={5} fontSize='20px' fontWeight='700'>API</Text>
            <Text margin={3} fontSize='16px' fontWeight='400'>API Requests this month: </Text>

          </Grid>
        </Card>
      </Grid>
      {/** Template and recent draft */}


      <Grid
        component={"div"}
        container
        width={"100%"}
        justifyContent={"space-evenly"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center" }}
        flexWrap={"nowrap"}
        marginTop={"30px"}
        size={{ xs: 12 }}
      >
        {/* First Card */}
        <Card
          className="card1 card-Activity"
          padding={"0px"}
          width={"45%"}
          height={"100%"}
          borderWidth={1}
          borderColor="#cccccc"
          borderRadius={3}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(25, 118, 210, 0.08)',
              margin: '0',
              padding: '0 19px',
            }}
          >
            <h3>Most Used Templates</h3>
            {/* <Link href="/recentActivity">View Activity log</Link> */}
          </div>
          <Grid
            component={"div"}
            container
            flexDirection={"column"}
            alignItems={"center"}
            overflow={"hidden"}
          >
            <Link
              href=""
              className="card-section"
              style={{ padding: "1rem", borderBottom: "1px solid #E8EFF6" }}
            >
              <Text
                color="#0206A8"
                fontSize="16px"
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                No most used templates
              </Text>
            </Link>
          </Grid>
        </Card>

        {/* Second Card */}
        <Card
          className="card1 card-Activity"
          padding={"0px"}
          width={"45%"}
          height={"100%"}
          borderWidth={1}
          borderColor="#cccccc"
          borderRadius={3}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(25, 118, 210, 0.08)',
              margin: '0',
              padding: '0 19px',
            }}
          >
            <h3>Recent Drafts</h3>
            <Link href={{ pathname: '/documents', query: { tab: 'Draft' } }} >View Recent Drafts</Link>
          </div>
          <Grid
            component={"div"}
            container
            flexDirection={"column"}
            alignItems={"center"}
            overflow={"hidden"}
          >
            {recentDrafts.length === 0 ? (
              <Link
                href=""
                className="card-section"
                style={{ padding: "1rem", borderBottom: "1px solid #E8EFF6" }}
              >
                <Text
                  color="#0206A8"
                  fontSize="16px"
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  No Document Recent Drafts
                </Text>
              </Link>
            ) : (
             
    recentDrafts
      .filter(draft => draft.documentStatus === 'draft') 
      .slice(0, 4)
      .map((draft) => {
                const draftDate = draft.createdAt;
                const formattedDate = draftDate
                  ? new Date(draftDate).toLocaleDateString("en-GB")
                  : "Date not available";
                return (
                  <Link
                    key={draft._id}
                    href={draft.fileUrl || "#"}
                    className="card-section"
                    style={{
                      padding: "1rem",
                      borderBottom: "1px solid #E8EFF6",
                      width: "100%",
                      textDecoration: "none",
                      paddingRight: "2.5rem",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        paddingRight: "0.5rem",
                        paddingLeft: "0.5rem",

                      }}
                    >
                      <Text
                        color="#0206A8"
                        fontSize="16px"
                        style={{
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          maxWidth: "70%",
                        }}
                      >
                        document {draft.documentTitle}
                      </Text>
                      <Text
                        color="#0206A8"
                        fontSize="16px"
                        style={{
                          whiteSpace: "nowrap",

                        }}
                      >
                        {formattedDate}
                      </Text>
                    </div>
                  </Link>


                );
              })
            )}
          </Grid>
        </Card>
      </Grid>


    </Topbar>
  )
}
export default Dashboard;