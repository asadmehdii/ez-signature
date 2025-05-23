  import React from "react";
  import {
    Tabs,
    Tab,
    Typography,
    Box,
    Checkbox,
    Button,
    CircularProgress
  } from "@mui/material";
  import Grid from "@mui/material/Grid2";
  import MailOutlineIcon from "@mui/icons-material/MailOutline";
  import { useRouter } from "next/navigation";

  interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    archived: boolean;
      status?: string; // Add this line to include status

  }

  interface Team {
    _id: string;
    name: string;
    role: string;
    email: string;
    status: string;
    archived: boolean;
  }

  interface Document {
    _id: string;
    title: string;
    status: string;
    createdAt: string;
    ownerEmail: string;
  }



  interface TabSectionProp {
    activeTab: number;
    tabLabels: string[];
    handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
    contacts?: Contact[];
    teams?: Team[];
    documents?: Document[];
    loading?: boolean;
  pageType: "generic" | "contacts" | "teams" | "templates";
  }

  const TabSection: React.FC<TabSectionProp> = ({
    activeTab,
    handleTabChange,
    tabLabels,
    contacts = [],
    teams = [],
    documents = [],
    loading = false,
    pageType,
  }) => {
    const router = useRouter();

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
      ? formattedContacts.filter((contact) => contact.status === "archived")
      : formattedContacts
    : [];

    

  const filteredTeams =
      pageType === "teams"
        ? activeTab === 0
          ? formattedTeams
          : formattedTeams.filter((team) => team.status === "Active")
        : [];

  const handleEdit = (teamMember: Team) => {
      const query = new URLSearchParams({
        id: teamMember._id,
        email: teamMember.email,
        role: teamMember.role,
      }).toString();
      router.push(`/newTeamMember?${query}`);
    };

    const handleEditContact = (contact: Contact) => {
      if (!contact || !contact.id) return;
      const query = new URLSearchParams({
        id: contact.id,
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
      }).toString();
      router.push(`/contacts/newContact?${query}`);
    };

    return (
      <>
        <Grid
          container
          justifyContent={
            pageType === "contacts" || pageType === "teams"
              ? "space-between"
              : "flex-end"
          }
          alignItems="center"
          sx={{ marginBottom: "10px" }}
        >
          {pageType !== "generic" && (
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ marginLeft: "10px" }}
            >
              Showing{" "}
              {pageType === "contacts"
                ? filteredContacts.length
                : filteredTeams.length}{" "}
              results on 1 page
            </Typography>
          )}

          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
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
                  color:
                    activeTab === index ? "primary.main" : "text.secondary",
                }}
              />
            ))}
          </Tabs>
        </Grid>

        {/* Generic Document View */}
        {pageType === "generic" ? (
        <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: "4px",
        backgroundColor: "#fff",
        padding: "8px",
      }}
    >
      {loading ? (
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="300px"
        >
          <Typography variant="body1">Loading...</Typography>
        </Grid>
      ) : documents.length > 0 ? (
        documents.map((doc) => (
          <Box
            key={doc._id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #eee",
              paddingY: 1.5,
            }}
          >
            {/* LEFT SIDE */}
            <Box>
              <Box sx={{ display: "flex", gap: 1, mb: 0.5 }}>
                <Box
                  sx={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    backgroundColor: "#f0f0f0",
                    paddingX: "6px",
                    paddingY: "2px",
                    borderRadius: "2px",
                  }}
                >
                  {new Date(doc.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  }).toUpperCase()}
                </Box>
              <Box
    sx={{
      fontSize: "10px",
      fontWeight: "bold",
      backgroundColor: "#334155",
      color: "#fff",
      paddingX: "6px",
      paddingY: "2px",
      borderRadius: "2px",
    }}
  >
    {(doc.status || "unknown").toUpperCase()}
  </Box>

              </Box>

              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#0f172a" }}
              >
                {doc.title}
              </Typography>

              {/* <Typography
                variant="caption"
                sx={{ color: "#64748b", display: "block" }}
              >
                To: {doc.ownerEmail.split("@")[0]}
              </Typography> */}
            </Box>

            {/* RIGHT SIDE */}
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                fontSize: "13px",
                borderColor: "#cbd5e1",
                color: "#0f172a",
                backgroundColor: "#f8fafc",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#e2e8f0",
                },
              }}
              endIcon={<span style={{ fontSize: "10px" }}>▼</span>}
            >
              Continue
            </Button>
          </Box>
        ))
      ) : (
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="300px"
        >
          <Typography variant="body1" color="textSecondary">
            No results to display
          </Typography>
        </Grid>
      )}
    </Box>

    ) : pageType === "templates" ? (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: "4px",
        backgroundColor: "#fff",
        padding: "8px",
      }}
    >
      {loading ? (
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="300px"
        >
          <Typography variant="body1">Loading...</Typography>
        </Grid>
      ) : documents.length > 0 ? (
        documents.map((template) => (
          <Box
            key={template._id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #eee",
              paddingY: 1.5,
            }}
          >
            {/* LEFT SIDE */}
            <Box>
              <Box sx={{ display: "flex", gap: 1, mb: 0.5 }}>
                <Box
                  sx={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    backgroundColor: "#f0f0f0",
                    paddingX: "6px",
                    paddingY: "2px",
                    borderRadius: "2px",
                  }}
                >
                  {new Date(template.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  }).toUpperCase()}
                </Box>
                <Box
                  sx={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    backgroundColor: "#0f172a",
                    color: "#fff",
                    paddingX: "6px",
                    paddingY: "2px",
                    borderRadius: "2px",
                  }}
                >
                  {(template.status || "unknown").toUpperCase()}
                </Box>
              </Box>

              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#0f172a" }}
              >
                {template.title}
              </Typography>

              {/* <Typography
                variant="caption"
                sx={{ color: "#64748b", display: "block" }}
              >
                Role: {template}
              </Typography> */}
            </Box>

            {/* RIGHT SIDE */}
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                fontSize: "13px",
                borderColor: "#cbd5e1",
                color: "#0f172a",
                backgroundColor: "#f8fafc",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#e2e8f0",
                },
              }}
              endIcon={<span style={{ fontSize: "10px" }}>▼</span>}
            >
              Manage
            </Button>
          </Box>
        ))
      ) : (
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="300px"
        >
          <Typography variant="body1" color="textSecondary">
            No templates to display
          </Typography>
        </Grid>
      )}
    </Box>

        ) : pageType === "contacts" ? (
        
     <Box
          sx={{
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "10px",
            backgroundColor: "#fafafa",
          }}
        >
          {loading ? ( 
            <Grid
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="300px"
            >
      <Typography variant="body1">Loading...</Typography> {/* Updated loading message */}
            </Grid>
          ) : filteredContacts.length > 0 ? (
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
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", marginBottom: "5px" }}
                  >
                    {contact.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "gray",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <MailOutlineIcon
                      fontSize="small"
                      sx={{ marginRight: "5px", color: "#757575" }}
                    />
                    {contact.email}
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    fontSize: "12px",
                    borderColor: "#007bff",
                    color: "#007bff",
                  }}
                  onClick={() => handleEditContact(contact)}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    fontSize: "12px",
                    marginLeft: "8px",
                    borderColor: "#007bff",
                    color: "#007bff",
                  }}
                >
                  ▼
                </Button>
              </Box>
            ))
          ) : (
            <Grid
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="300px"
              border="5px solid gainsboro"
            >
              <Typography variant="body1" color="textSecondary">
                No results to display
              </Typography>
            </Grid>
          )}
        </Box>


        ) : (
          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "10px",
              backgroundColor: "#fafafa",
            }}
          >
            {filteredTeams.length > 0 ? (
              filteredTeams.map((team) => (
                <Box
                  key={team._id}
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
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", marginBottom: "5px" }}
                    >
                      Role: {team.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "gray",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <MailOutlineIcon
                        fontSize="small"
                        sx={{ marginRight: "5px", color: "#757575" }}
                      />
                      {team.email}
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      fontSize: "12px",
                      borderColor: "#007bff",
                      color: "#007bff",
                    }}
                    onClick={() => handleEdit(team)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      fontSize: "12px",
                      marginLeft: "8px",
                      borderColor: "#007bff",
                      color: "#007bff",
                    }}
                  >
                    ▼
                  </Button>
                </Box>
              ))
            ) : (
              <Grid
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="300px"
                border="5px solid gainsboro"
              >
                <Typography variant="body1" color="textSecondary">
                  No results to display
                </Typography>
              </Grid>
            )}
          </Box>
        )}
      </>
    );
  };

  export default TabSection;
