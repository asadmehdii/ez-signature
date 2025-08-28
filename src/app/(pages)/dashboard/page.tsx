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
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import Navbar from "@/app/components/navbar";
import ContentBox from "@/app/components/contentBox";
import Text from "@/app/components/text";
import { toast } from 'react-hot-toast';

export default function Dashboard() {
  const router = useRouter();
  const [workspace, setWorkspace] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get workspace info from localStorage or URL
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    
    if (!token || !userId) {
      toast.error('Please log in to access dashboard');
      router.push('/login');
      return;
    }

    // Get workspace info from the current subdomain
    const hostname = window.location.hostname;
    const subdomain = hostname.split('.')[0];
    
    if (subdomain === 'localhost' || subdomain === '127.0.0.1') {
      // Development mode - get from localStorage or create mock data
      const mockWorkspace = {
        name: 'Development Workspace',
        subdomain: 'dev',
        ownerUserId: userId
      };
      setWorkspace(mockWorkspace);
      setUser({ id: userId, name: 'Developer' });
    } else {
      // Production mode - fetch workspace data
      fetchWorkspaceData(subdomain, token);
    }
    
    setLoading(false);
  }, [router]);

  const fetchWorkspaceData = async (subdomain: string, token: string) => {
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000/api';
      const response = await fetch(`${apiBase}/workspace/by-subdomain/${subdomain}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.ok) {
        const workspaceData = await response.json();
        setWorkspace(workspaceData);
        
        // Fetch user data
        const userResponse = await fetch(`${apiBase}/user/profile`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        if (userResponse.ok) {
          const userData = await userResponse.json();
          setUser(userData);
        }
      }
    } catch (error) {
      console.error('Error fetching workspace data:', error);
      toast.error('Failed to load workspace data');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    toast.success('Logged out successfully');
    router.push('/login');
  };

  if (loading) {
    return (
      <main>
        <Navbar showBtn={false} />
        <ContentBox mt={4}>
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
            <Text fontSize="24px" color="var(--lightGray-color)">
              Loading dashboard...
            </Text>
          </Box>
        </ContentBox>
      </main>
    );
  }

  return (
    <main>
      <Navbar showBtn={false} />
      <ContentBox mt={4}>
        {/* Header */}
        <Box mb={4}>
          <Text fontWeight="700" textAlign="center" fontSize="42px" mb={2}>
            Welcome to {workspace?.name || 'Your Workspace'}
          </Text>
          <Text fontSize="18px" textAlign="center" color="var(--lightGray-color)" mb={4}>
            Manage your documents and signatures
          </Text>
        </Box>

        {/* Workspace Info */}
        <Card sx={{ mb: 4, backgroundColor: 'var(--secondary-color)', color: 'white' }}>
          <CardContent>
            <Text fontSize="24px" fontWeight="600" mb={2}>
              Workspace Information
            </Text>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Text fontSize="16px" color="rgba(255,255,255,0.9)">
                  <strong>Name:</strong> {workspace?.name || 'N/A'}
                </Text>
              </Grid>
              <Grid item xs={12} md={6}>
                <Text fontSize="16px" color="rgba(255,255,255,0.9)">
                  <strong>Subdomain:</strong> {workspace?.subdomain || 'N/A'}
                </Text>
              </Grid>
              <Grid item xs={12} md={6}>
                <Text fontSize="16px" color="rgba(255,255,255,0.9)">
                  <strong>Owner:</strong> {user?.name || 'N/A'}
                </Text>
              </Grid>
              <Grid item xs={12} md={6}>
                <Text fontSize="16px" color="rgba(255,255,255,0.9)">
                  <strong>URL:</strong> {window.location.hostname}
                </Text>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
              <CardContent>
                <Text fontSize="20px" fontWeight="600" textAlign="center" mb={2}>
                  📄 Create Document
                </Text>
                <Text fontSize="14px" color="var(--lightGray-color)" textAlign="center">
                  Start a new document for signatures
                </Text>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
              <CardContent>
                <Text fontSize="20px" fontWeight="600" textAlign="center" mb={2}>
                  ✍️ Manage Signatures
                </Text>
                <Text fontSize="14px" color="var(--lightGray-color)" textAlign="center">
                  View and manage your signatures
                </Text>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
              <CardContent>
                <Text fontSize="20px" fontWeight="600" textAlign="center" mb={2}>
                  👥 Team Members
                </Text>
                <Text fontSize="14px" color="var(--lightGray-color)" textAlign="center">
                  Invite and manage team members
                </Text>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Logout Button */}
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            style={{ margin: "10px 0" }}
            fontSize={16}
            color="var(--lightGray-color)"
            fontWeight="600"
            backgroundColor="transparent"
            borderRadius={25}
            width={"200px"}
            height={"45px"}
            onClick={handleLogout}
            sx={{ border: '2px solid var(--lightGray-color)' }}
          >
            Logout
          </Button>
        </Box>
      </ContentBox>
    </main>
  );
}