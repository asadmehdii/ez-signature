"use client";
import React, { useState, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import IconBtn from '@/app/components/iconButton';
import SearchAppBar from '@/app/components/search';
import TabSection from '@/app/components/tabSection';
import PaginationBar from '@/app/components/pagination';
import Topbar from '@/app/components/dashboardTopbar/topbar';
import Route from '@/app/utils/routes';

const tabLabels = ['All', 'Draft', 'Completed', 'In Process', 'I need to sign', 'Cancelled'];

const statusMap: { [key: number]: string | null } = {
  0: 'all',
  1: 'draft',
  2: 'completed',
  3: 'in_process',
  4: 'need_to_sign',
  5: 'cancelled',
};

export default function DocumentPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);

  const handleTabChange = (event: any, newValue: number) => {
    setActiveTab(newValue);
  };

  useEffect(() => {
    const userJson = localStorage.getItem("user");
    if (userJson) {
      try {
        const user = JSON.parse(userJson);
        setCurrentUserEmail(user?.email ?? null);
      } catch (err) {
        console.error("Error parsing user from localStorage", err);
      }
    }
  }, []);

useEffect(() => {
  const fetchDocuments = async () => {
    setLoading(true);
    try {
      const status = statusMap[activeTab];
      let url = 'http://ezsignature.org/api/document';

      if (status === 'need_to_sign') {
        if (!currentUserEmail) {
          throw new Error('No user email found in localStorage or state');
        }
        const email = encodeURIComponent(currentUserEmail);
        url += `/need-to-sign/${email}`;
      } else if (status && status !== 'all') {
        url += `/status/${status}`;
      } else {
        url += '/all';
      }

      // Get token from localStorage
      const token = localStorage.getItem('token');
      if (!token) throw new Error('JWT token not found in localStorage');

      const res = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch documents");

      const data = await res.json();
      setDocuments(data);
    } catch (error) {
      console.error("Error fetching documents:", error);
      setDocuments([]);
    } finally {
      setLoading(false);
    }
  };

  if (activeTab !== 4 || (activeTab === 4 && currentUserEmail)) {
    fetchDocuments();
  }
}, [activeTab, currentUserEmail]);




  return (
    <Topbar title='Documents' buttonText='New Document' firstBtnUrl={Route.NEW_DOCUMENT}>
      <Grid sx={{ padding: '20px', width: '100%' }}>
        <Grid container justifyContent="space-between">
          <IconBtn />
          <SearchAppBar />
        </Grid>

        <TabSection
          activeTab={activeTab}
          handleTabChange={handleTabChange}
          tabLabels={tabLabels}
          documents={documents}
          loading={loading}
          pageType="generic"
        />

      </Grid>
    </Topbar>
  );
}
