"use client";
import React, { useState, useEffect } from 'react';
import IconBtn from '@/app/components/iconButton';
import SearchAppBar from '@/app/components/search';
import TabSection from '@/app/components/tabSection';
import PaginationBar from '@/app/components/pagination';
import Topbar from '@/app/components/dashboardTopbar/topbar';
import Grid from "@mui/material/Grid2";
import Route from '@/app/utils/routes';

export default function TeamsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);


  const handleTabChange = (event: any, newValue: any) => {
    setActiveTab(newValue);
  };

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      const fetchTeamData = async () => {
        try {
          const response = await fetch(`https://ezsignature-backend-production.up.railway.app/teams?userId=${userId}`);
          const data = await response.json();
          setTeamMembers(data);
        } catch (error) {
          console.error('Error fetching team data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchTeamData();
    } else {
      console.error('No userId found in localStorage');
      setLoading(false);
    }
  }, []);

  return (
    <Topbar title="Teams" buttonText="New Team Members" firstBtnUrl={Route.NEW_TEAM_MEMBER}>
      <Grid sx={{ padding: '20px', width: '100%' }}>
        {/* Toolbar */}
        <Grid container justifyContent="space-between">
          <IconBtn />
          <SearchAppBar />
        </Grid>

        {/* Tab Section */}
        <TabSection
          activeTab={activeTab}
          handleTabChange={handleTabChange}
          tabLabels={['All']}
          teams={teamMembers} // Pass the team members to TabSection
          pageType="teams" // Set pageType as "teams"

        />

        {/* Team Members */}
        <Grid container spacing={2}>
          {loading ? <p>Loading...</p> : null}
        </Grid>

        {/* Pagination Bar */}
        <PaginationBar />
      </Grid>
    </Topbar>
  );
}
