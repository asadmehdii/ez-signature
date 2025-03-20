"use client";
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { DriveFileMove, Storage } from "@mui/icons-material";
import Topbar from "@/app/components/dashboardTopbar/topbar";
import CustomButton from "@/app/components/button";
import Text from "@/app/components/text";
import CustomPopover from "@/app/components/popover";
import ModelToggle from "@/app/components/modelToggle";

export default function NewDocumentPage() {
  return (
    <Topbar title="Prepare">
      <Grid
        container
        spacing={0}
        sx={{
          height: "calc(100vh - 64px)",
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingBottom: "20px",
        }}
      >
        {/* Left Sidebar - Documents */}
        <Grid
          item
          xs={2}
          sx={{
            backgroundColor: "#E8EEF4",
            borderRight: "1px solid #ccc",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
            DOCUMENTS
          </Typography>

          <Paper
            variant="outlined"
            sx={{
              padding: "10px",
              backgroundColor: "white",
              marginBottom: "10px",
              flexGrow: 1,
            }}
          >
            <Typography variant="body2" sx={{ mb: 1 }}>
              false (1)
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Pages: 1
            </Typography>

            <Box
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #ccc",
                height: "150px",
              }}
            >
              <Typography variant="caption">1</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Main Canvas Area */}
        <Grid
          item
          xs={7}
          sx={{
            backgroundColor: "#fff",
            borderRight: "1px solid #ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" color="text.secondary">
            Document preview area
          </Typography>
        </Grid>

        {/* Right Sidebar - Recipients and Fields */}
        <Grid
          item
          xs={3}
          sx={{
            backgroundColor: "#F5F7FA",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
            RECIPIENTS
          </Typography>

          <Paper
            variant="outlined"
            sx={{
              mb: 2,
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Button variant="contained" color="inherit" sx={{ mb: 1 }}>
              No Signer
            </Button>
            <Button variant="contained" color="success" sx={{ mb: 1 }}>
              ALI A.
            </Button>
            
          </Paper>

          <Divider sx={{ mb: 2 }} />

          <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
            FIELDS
          </Typography>

          <List dense>
            {[
              "Signature",
              "Initials",
              "Date Signed",
              "Text",
              "Full Name",
              "Company",
              "Title",
              "Email",
              "Checkbox",
            ].map((field) => (
              <ListItem
                key={field}
                button
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  mb: 1,
                  backgroundColor: "white",
                }}
              >
                <ListItemText primary={field} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Topbar>
  );
}
