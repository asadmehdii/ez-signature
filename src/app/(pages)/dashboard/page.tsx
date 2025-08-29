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
import { useRouter, useSearchParams } from 'next/navigation';
import { Box, Typography, Button, Card, CardContent, Grid, Alert } from '@mui/material';
import Navbar from "@/app/components/navbar";
import ContentBox from "@/app/components/contentBox";
import Text from "@/app/components/text";
import { toast } from 'react-hot-toast';

export default function Dashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [workspace, setWorkspace] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [emailVerified, setEmailVerified] = useState<boolean>(false);
  const [sendingVerify, setSendingVerify] = useState<boolean>(false);

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
    
    // Always fetch workspace data based on subdomain
      fetchWorkspaceData(subdomain, token);
    // Also fetch profile, to get email & verification status
    fetchUserProfile(token);
    
    setLoading(false);
  }, [router, searchParams]);

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

  const fetchUserProfile = async (token: string) => {
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000/api';
      const res = await fetch(`${apiBase}/user/profile`, { headers: { Authorization: `Bearer ${token}` } });
      if (res.ok) {
        const data = await res.json();
        setUser((prev: any) => ({ ...prev, ...data }));
        setEmailVerified(!!data.emailVerified);
      }
    } catch (e) {
      // ignore
    }
  };

  const handleSendVerification = async () => {
    const email = localStorage.getItem('signupEmail') || user?.email;
    if (!email) {
      toast.error('Missing email for verification');
      return;
    }
    try {
      setSendingVerify(true);
      const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000/api';
      await fetch(`${apiBase}/user/send-verification`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      toast.success('Verification email sent');
    } catch (e) {
      toast.error('Failed to send verification email');
    } finally {
      setSendingVerify(false);
    }
  };

  const handleMarkVerified = () => {
    setEmailVerified(true);
    toast.success('Email verified');
  };

  // Always redirect simplified dashboard to the main app area
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const subdomain = hostname.split('.')[0];
    const base = subdomain && subdomain !== 'localhost' && subdomain !== '127.0.0.1'
      ? `https://${subdomain}.${window.location.host.split(':')[0].split('.').slice(1).join('.')}`
      : '';
    const target = base ? `${window.location.protocol}//${subdomain}.${window.location.host.split(':')[0].split('.').slice(1).join('.')}/documents` : '/documents';
    window.location.replace(target);
    return null;
  }
  return null;
}