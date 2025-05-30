"use client";
import React, { useState, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import IconBtn from '@/app/components/iconButton';
import SearchAppBar from '@/app/components/search';
import TabSection from '@/app/components/tabSection';
import PaginationBar from '@/app/components/pagination';
import Topbar from '@/app/components/dashboardTopbar/topbar';
import Route from '@/app/utils/routes';
import { useRouter, useSearchParams } from 'next/navigation';

const tabLabels = ['All', 'Draft', 'Completed', 'In Process', 'I need to sign', 'Cancelled'];

const statusMap: { [key: number]: string | null } = {
  0: 'all',
  1: 'draft',
  2: 'completed',
  3: 'in_process',
  4: 'waiting_for_me',
  5: 'cancelled',
};

export default function DocumentPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const tab = searchParams.get('tab');

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

const fetchDocuments = async (status: string | null, email: string | null) => {
  setLoading(true);
  setDocuments([]);

  try {
    let url = 'http://ezsignature.org/api/document';

    if (status === 'waiting_for_me') {
      if (!email) return; 
      const encodedEmail = encodeURIComponent(email);
      url += `/need-to-sign/${encodedEmail}`;
    } else if (status && status !== 'all') {
      url += `/status/${status}`;
    } else {
      url += '/all';
    }

    const token = localStorage.getItem('token');
    if (!token) throw new Error('JWT token not found in localStorage');

    const res = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Failed to fetch documents");

    const data = await res.json();

    let filtered = data;

    if (status === 'waiting_for_me') {
      filtered = data.filter(
        (doc: any) =>
          doc.status === 'waiting_for_me' &&
          doc.pendingSignerEmail === email
      );
    } else if (status && status !== 'all') {
      filtered = data.filter((doc: any) => doc.status === status);
    }

    setDocuments(filtered);
  } catch (error) {
    console.error("Error fetching documents:", error);
    setDocuments([]);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    const status = statusMap[activeTab];

    if (status === 'waiting_for_me') {
      if (!currentUserEmail) return;
      fetchDocuments(status, currentUserEmail);
    } else {
      fetchDocuments(status, null);
    }
  }, [activeTab, currentUserEmail]);

  useEffect(() => {
    if (tab) {
      const formattedTab = tab.charAt(0).toUpperCase() + tab.slice(1);
      const tabIndex = tabLabels.indexOf(formattedTab);
      if (tabIndex !== -1) {
        setActiveTab(tabIndex);
      }
    }
  }, [tab]);

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
