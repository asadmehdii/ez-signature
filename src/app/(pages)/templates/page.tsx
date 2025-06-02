"use client";
import React, { useState, useEffect } from 'react';
import IconBtn from '@/app/components/iconButton';
import SearchAppBar from '@/app/components/search';
import TabSection from '@/app/components/tabSection';
import PaginationBar from '@/app/components/pagination';
import Topbar from '@/app/components/dashboardTopbar/topbar';
import Grid from "@mui/material/Grid2";
import Route from '@/app/utils/routes';
import axios from 'axios';

export default function TemplatesPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(false);

  const tabLabels = ['Archived', 'Active', 'Draft'];
  const statusMap = ['archived', 'active', 'draft'];

  const handleTabChange = (_: any, newValue: number) => {
    setActiveTab(newValue);
  };

useEffect(() => {
  const fetchTemplates = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const status = statusMap[activeTab];

      const response = await axios.get(`http://ezsignature.org/api/template/status/${status}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setTemplates(response.data || []);
      console.log("Fetched templates:", response.data); 
    } catch (error) {
      console.error("Failed to fetch templates:", error);
      setTemplates([]);
    } finally {
      setLoading(false);
    }
  };

  fetchTemplates();
}, [activeTab]);


  return (
    <Topbar title='Templates' secondText='New Templates' buttonText='Bulk Jobs' secondBtnUrl={Route.NEW_TEMPLATE}>
      <Grid sx={{ padding: '20px', width: '100%' }}>
        {/* Toolbar */}
        <Grid container justifyContent="space-between">
          <IconBtn />
          <SearchAppBar />
        </Grid>

        {/* Tabs */}
      <TabSection
  activeTab={activeTab}
  handleTabChange={handleTabChange}
  pageType="templates"
  tabLabels={tabLabels}
  documents={templates}
  loading={loading}
/>



      </Grid>
    </Topbar>
  );
}
