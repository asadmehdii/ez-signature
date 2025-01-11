"use client";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import IconBtn from "@/app/components/iconButton";
import SearchAppBar from "@/app/components/search";
import TabSection from "@/app/components/tabSection";
import PaginationBar from "@/app/components/pagination";
import Topbar from "@/app/components/dashboardTopbar/topbar";
import Route from "@/app/utils/routes";

export default function ContactsPage() {
  const [activeTab, setActiveTab] = useState(1); // State to manage the active tab
  const [contacts, setContacts] = useState([]); // State for contacts
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const tabLabels = ["Archived", "All Contacts"];

  // Fetch contacts from the API
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:4000/contacts", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }
        const data = await response.json();
        setContacts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // Handle tab changes
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  // Filter contacts based on the active tab
  const filteredContacts =
    activeTab === 0
      ? contacts.filter((contact) => contact.archived) // Show only archived contacts
      : contacts; // Show all contacts

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Topbar title="Contacts" firstBtnUrl={Route.NEW_CONTACT} buttonText="New Contacts">
      <Grid sx={{ padding: "20px", width: "100%" }}>
        {/* Toolbar */}
        <Grid container justifyContent="space-between">
          <IconBtn />
          <SearchAppBar />
        </Grid>

        {/* Tab Section */}
        <TabSection
          activeTab={activeTab}
          tabLabels={tabLabels}
          handleTabChange={handleTabChange}
          contacts={filteredContacts}
          pageType="contacts"
        />

        {/* Pagination */}
        <PaginationBar />
      </Grid>
    </Topbar>
  );
}
