"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Topbar from "@/app/components/dashboardTopbar/topbar";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Route from "@/app/utils/routes";

type Activity = {
  _id: string;
  documentTitle: string;
  action: string;
  documentStatus: string;
  performedBy: string;
  createdAt: Date;
};

const RecentActivity: React.FC = () => {
  const [activityData, setActivityData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentActivities = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://ezsignature.org/api/document/activity", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        console.log("Full response:", response);
        console.log("Response data:", response.data);

        if (Array.isArray(response.data)) {
          setActivityData(response.data);
        } else {
          console.warn("Response data is not an array:", response.data);
          setActivityData([]);
        }
      } catch (error) {
        console.error("Failed to fetch recent activities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentActivities();
  }, []);

  return (
    <main>
      <Topbar
        title="Activity Log"
        leftBtnUrl={Route.DASHBOARD}
        leftBtnText={
          <>
            <ArrowBackIosNewIcon sx={{ fontSize: 15, mr: 0.5, mb: 0.2 }} />
            Dashboard
          </>
        }
        btnStyle={{
          color: "var(--secondary-color)",
          width: "135px",
          height: "35px",
          border: "1px solid var(--secondary-color)",
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ mt: 4 }}>
          <Box
            sx={{
              backgroundColor: "#edf2f9",
              padding: "12px 16px",
              borderTopLeftRadius: "4px",
              borderTopRightRadius: "4px",
              border: "1px solid #dbe3eb",
              borderBottom: "none",
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              Activity Log
            </Typography>
          </Box>

          {loading ? (
            <Typography sx={{ padding: "16px" }}>Loading...</Typography>
          ) : activityData.length === 0 ? (
            <Typography sx={{ padding: "16px" }}>No recent activities found.</Typography>
          ) : (
      <Box sx={{ overflowX: "auto", border: "1px solid #dbe3eb", borderRadius: "0 0 4px 4px" }}>
  <TableContainer component={Paper} sx={{ border: "none", boxShadow: "none" }}>
    <Table
      stickyHeader
      size="small"
      sx={{
        borderCollapse: "collapse",
        width: "100%",
      }}
    >
      <TableBody>
        {activityData.map((row, index) => (
          <TableRow
            key={index}
            sx={{
              borderBottom: "1px solid #dbe3eb",
              "&:last-of-type": {
                borderBottom: "none",
              },
            }}
          >
            <TableCell
              sx={{
                width: "20%",
                fontWeight: 500,
                padding: "12px 16px",
                borderTop: "1px solid #dbe3eb",
                borderBottom: "1px solid #dbe3eb",
              }}
            >
              {new Date(row.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </TableCell>

            <TableCell
              sx={{
                width: "65%",
                padding: "12px 16px",
                borderTop: "1px solid #dbe3eb",
                borderBottom: "1px solid #dbe3eb",
              }}
            >
              {row.documentTitle} created as{" "}
              {row.documentStatus} by {row.performedBy}
            </TableCell>

            <TableCell
              sx={{
                width: "15%",
                textAlign: "right",
                color: "#707070",
                fontSize: "0.85rem",
                whiteSpace: "nowrap",
                padding: "12px 16px",
                borderTop: "1px solid #dbe3eb",
                borderBottom: "1px solid #dbe3eb",
              }}
            >
              {new Date(row.createdAt).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Box>



          )}
        </Box>
        
      </Topbar>
    </main>
  );
};

export default RecentActivity;

