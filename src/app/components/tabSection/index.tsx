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

interface Contact {
  id: string;
  name: string;
  email: string;
  archived: boolean;
}

interface TabSectionProp {
  activeTab: number;
  tabLabels: string[];
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  contacts?: Contact[]; // Optional for non-contact pages
  pageType: "generic" | "contacts"; // Determines behavior
}

const TabSection: React.FC<TabSectionProp> = ({
  activeTab,
  handleTabChange,
  tabLabels,
  contacts = [],
  pageType,
}) => {
  // Combine firstName and lastName into name for contacts
  const formattedContacts = contacts.map((contact) => ({
    ...contact,
    name: `${contact.firstName} ${contact.lastName}`,
  }));

  // Filter contacts for 'contacts' pageType
  const filteredContacts =
    pageType === "contacts"
      ? activeTab === 0
        ? formattedContacts.filter((contact) => contact.archived) // Archived contacts
        : formattedContacts
      : [];

  return (
    <>
      {/* Tabs Section */}
      <Grid
        container
        justifyContent={
          pageType === "contacts" ? "space-between" : "flex-end"
        }
        alignItems="center"
        sx={{ marginBottom: "10px" }}
      >
        {pageType === "contacts" && (
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginLeft: "10px" }}
          >
            Showing {filteredContacts.length} results on 1 page
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
              label={
                label === "I need to sign" ? (
                  <Badge color="error" badgeContent={1}>
                    {label}
                  </Badge>
                ) : (
                  label
                )
              }
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
        <Box
          sx={{
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "10px",
            backgroundColor: "#fafafa",
          }}
        >
          {filteredContacts.length > 0 ? (
            <>
              {filteredContacts.map((contact) => (
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
              ))}
            </>
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
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="300px"
          border="5px solid gainsboro"
        >
          <Typography variant="body1" color="textSecondary">
            {activeTab === 0 && "No results to display"}
            {activeTab === 1 && "No results to display"}
            {activeTab === 2 && "No results to display"}
            {activeTab === 3 && "No results to display"}
            {activeTab === 4 && "No results to display"}
            {activeTab === 5 && "No results to display"}
          </Typography>
        </Grid>
      )}
    </>
  );
};

export default TabSection;
