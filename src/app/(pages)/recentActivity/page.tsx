"use client";

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

type Activity = {
  _id: string;
      documentTitle: string;
      action: string;
      documentStatus: string;
      performedBy: string;
  createdAt: Date;  //
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
        title="Recent Activities"
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
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Activity Log
          </Typography>

          {loading ? (
            <Typography>Loading...</Typography>
          ) : activityData.length === 0 ? (
            <Typography>No recent activities found.</Typography>
          ) : (
            <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
              <Table stickyHeader size="small">
                <TableBody>
                  {activityData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ width: "20%", fontWeight: 500 }}>
                        {row.documentTitle}
                      </TableCell>
                      <TableCell sx={{ width: "65%" }}>{row.documentStatus}</TableCell>
                      <TableCell
                        sx={{ width: "15%", textAlign: "right", color: "gray" }}
                      >
                        {row.performedBy}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Topbar>
    </main>
  );
};

export default RecentActivity;
