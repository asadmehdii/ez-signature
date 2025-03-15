import React from "react";
import {
  Tabs,
  Tab,
  Typography,
  Badge,
  Box,
  Checkbox,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useRouter } from "next/navigation"
import Route from '@/app/utils/routes';


interface Contact {
  id: string;
  firstName: string; // added
  lastName: string;  // added
  email: string;
  archived: boolean;
}

interface Team {
  id: string;
  name: string;
  role: string;
  email: string;
  status: string; // e.g., Active, Inactive
  archived: boolean;
}

interface TabSectionProp {
  activeTab: number;
  tabLabels: string[];
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  contacts?: Contact[];
  teams?: Team[]; // New teams prop
  pageType: "generic" | "contacts" | "teams"; // Added "teams" as a valid pageType

}

const TabSection: React.FC<TabSectionProp> = ({
  activeTab,
  handleTabChange,
  tabLabels,
  contacts = [],
  teams = [],
  pageType,
}) => {
  const formattedContacts = contacts.map((contact) => ({
    ...contact,
    name: `${contact.firstName} ${contact.lastName}`,
  }));

  const formattedTeams = teams.map((team) => ({
    ...team,
    name: team.name,
  }));

  const filteredContacts =
    pageType === "contacts"
      ? activeTab === 0
        ? formattedContacts.filter((contact) => contact.archived)
        : formattedContacts
      : [];

 
      const filteredTeams =
  pageType === "teams"
    ? activeTab === 0
      ? formattedTeams // No filter for "All"
      : formattedTeams.filter((team) => team.status === "Active") // Optionally filter for other status
    : [];
    const Route = {
      NEW_TEAM_MEMBER: "/newTeamMember",
    };
    
    const navigate = useRouter();

    const handleEdit = (teamMember: any) => {
      console.log("teamMember:", teamMember);  // Check the object here
    
      if (!teamMember._id) {
        console.error("Team member ID (_id) is missing!");
        return;  // Stop the navigation if the _id is missing
      }
    
      const path = Route.NEW_TEAM_MEMBER;
      const query = new URLSearchParams({
        id: teamMember._id,  // Use _id instead of id
        name: teamMember.name,
        role: teamMember.role,
        email: teamMember.email,
      }).toString();
    
      navigate.push(`${path}?${query}`);
    };
    
    
    
    
  return (
    <>
      <Grid
        container
        justifyContent={pageType === "contacts" || pageType === "teams" ? "space-between" : "flex-end"}
        alignItems="center"
        sx={{ marginBottom: "10px" }}
      >
        {pageType !== "generic" && (
          <Typography variant="body2" color="textSecondary" sx={{ marginLeft: "10px" }}>
            Showing {pageType === "contacts" ? filteredContacts.length : filteredTeams.length} results on 1 page
          </Typography>
        )}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="document tabs"
          variant="scrollable"
          sx={{ marginRight: "10px" }}
        >
          {tabLabels.map((label, index) => (
            <Tab
              key={index}
              label={label}
              sx={{
                textTransform: "none",
                fontWeight: activeTab === index ? "bold" : "normal",
                color: activeTab === index ? "primary.main" : "text.secondary",
              }}
            />
          ))}
        </Tabs>
      </Grid>

      {/* Content Section */}
      {pageType === "contacts" ? (
        <Box sx={{ border: "1px solid #ddd", borderRadius: "4px", padding: "10px", backgroundColor: "#fafafa" }}>
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <Box
                key={contact.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  borderBottom: "1px solid #e0e0e0",
                  "&:last-child": { borderBottom: "none" },
                }}
              >
                <Checkbox color="primary" sx={{ marginRight: "10px" }} />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "5px" }}>
                    {contact.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", display: "flex", alignItems: "center" }}>
                    <MailOutlineIcon fontSize="small" sx={{ marginRight: "5px", color: "#757575" }} />
                    {contact.email}
                  </Typography>
                </Box>
                <Button variant="outlined" sx={{ textTransform: "none", fontSize: "12px", borderColor: "#007bff", color: "#007bff" }}>
                  Edit
                </Button>
                <Button variant="outlined" sx={{ textTransform: "none", fontSize: "12px", marginLeft: "8px", borderColor: "#007bff", color: "#007bff" }}>
                  ▼
                </Button>
              </Box>
            ))
          ) : (
            <Grid display="flex" justifyContent="center" alignItems="center" height="300px" border="5px solid gainsboro">
              <Typography variant="body1" color="textSecondary">
                No results to display
              </Typography>
            </Grid>
          )}
        </Box>
      ) : pageType === "teams" ? (
        <Box sx={{ border: "1px solid #ddd", borderRadius: "4px", padding: "10px", backgroundColor: "#fafafa" }}>
          {filteredTeams.length > 0 ? (
            filteredTeams.map((team) => (
              <Box
                key={team.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  borderBottom: "1px solid #e0e0e0",
                  "&:last-child": { borderBottom: "none" },
                }}
              >
              <Checkbox color="primary" sx={{ marginRight: "10px" }} />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "5px" }}>
                  Role: {team.role}                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", display: "flex", alignItems: "center" }}>
                    <MailOutlineIcon fontSize="small" sx={{ marginRight: "5px", color: "#757575" }} />
                    {team.email}
                  </Typography>
                  
                </Box>
                <Button variant="outlined" sx={{ textTransform: "none", fontSize: "12px", borderColor: "#007bff", color: "#007bff" }}
  onClick={() => handleEdit(team)} // Use 'team' here
  >
                  Edit
                </Button>
                <Button variant="outlined" sx={{ textTransform: "none", fontSize: "12px", marginLeft: "8px", borderColor: "#007bff", color: "#007bff" }}>
                  ▼
                </Button>
              </Box>
            ))
          ) : (
            <Grid display="flex" justifyContent="center" alignItems="center" height="300px" border="5px solid gainsboro">
              <Typography variant="body1" color="textSecondary">
                No results to display
              </Typography>
            </Grid>
          )}
        </Box>
      ) : (
        <Grid display="flex" justifyContent="center" alignItems="center" height="300px" border="5px solid gainsboro">
          <Typography variant="body1" color="textSecondary">
            No results to display
          </Typography>
        </Grid>
      )}
    </>
  );
};

export default TabSection;



