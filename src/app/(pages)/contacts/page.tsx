"use client";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import IconBtn from "@/app/components/iconButton";
import SearchAppBar from "@/app/components/search";
import TabSection from "@/app/components/tabSection";
import PaginationBar from "@/app/components/pagination";
import Topbar from "@/app/components/dashboardTopbar/topbar";
import Route from "@/app/utils/routes";

interface Contact {
  id: string; // or number
  firstName: string;
  lastName: string;
  email: string;
  status: string; // e.g., "archived" or "active"
}

export default function ContactsPage() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState<string | null>(null);
  const tabLabels: string[] = ["Archived", "All Contacts"];
  
  useEffect(() => {
    const fetchContacts = async () => {
      setError(null);
      const status = activeTab === 0 ? "archived" : "all";

      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await fetch(`http://ezsignature.org/api/contacts?status=${status}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch ${status} contacts: ${response.statusText}`);
        }

        const data = await response.json() as Contact[];
        console.log(data); // Log the fetched data
        setContacts(data);
      } catch (err: unknown) {
        console.error("Error fetching contacts:", err);
        setError("Failed to fetch contacts");
      }
    };

    fetchContacts();
  }, [activeTab]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Topbar title="Contacts" firstBtnUrl={Route.NEW_CONTACT} buttonText="New Contacts">
      <Grid sx={{ padding: "20px", width: "100%" }}>
        <Grid container justifyContent="space-between">
          <IconBtn />
          <SearchAppBar />
        </Grid>
        <TabSection
          activeTab={activeTab}
          tabLabels={tabLabels}
          handleTabChange={handleTabChange}
          contacts={contacts}
          pageType="contacts"
        />
      </Grid>
    </Topbar>
  );
}
