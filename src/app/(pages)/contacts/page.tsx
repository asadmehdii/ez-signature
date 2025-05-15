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
  id: string;          // or number, depending on your API
  firstName: string;
  lastName: string;
  email: string;
  archived: boolean;
  // Add any additional properties if needed
}

export default function ContactsPage() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const tabLabels: string[] = ["Archived", "All Contacts"];

  useEffect(() => {
    const fetchContacts = async () => {
       
    const userId = localStorage.getItem("userId");
   
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:4000/api/contacts/user/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }
        const data = (await response.json()) as Contact[];
        setContacts(data);
      } catch (err: unknown) {
        console.error("Error fetching contacts:", err);
        setError("Failed to fetch contacts");
      } finally {
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const filteredContacts =
    activeTab === 0
      ? contacts.filter((contact) => contact.archived)
      : contacts;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
          contacts={filteredContacts}
          pageType="contacts"

        />
        <PaginationBar />
      </Grid>
    </Topbar>
  );
}
