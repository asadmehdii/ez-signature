"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Grid from "@mui/material/Grid2";
import Topbar from "@/app/components/dashboardTopbar/topbar";
import Text from "@/app/components/text";
import Button from "@/app/components/button";
import { CheckCircle, Home } from '@mui/icons-material';
import { Box, Card, CardContent, Typography } from "@mui/material";
import toast from 'react-hot-toast';

export default function SubscriptionSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);
  const [sessionData, setSessionData] = useState<any>(null);

  useEffect(() => {
    if (sessionId) {
      // You can fetch session details from your backend if needed
      setSessionData({ id: sessionId });
      setLoading(false);
      toast.success('Payment successful! Your subscription has been activated.');
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  const handleGoToDashboard = () => {
    window.location.href = '/dashboard';
  };

  const handleGoToSubscription = () => {
    window.location.href = '/subscription';
  };

  if (loading) {
    return (
      <Topbar title="Payment Processing">
        <Grid component="div" container direction="column" marginInline="20px" marginBottom="40px">
          <Text>Processing your payment...</Text>
        </Grid>
      </Topbar>
    );
  }

  return (
    <Topbar title="Payment Successful">
      <Grid component="div" container direction="column" marginInline="20px" marginBottom="40px">
        {/* Success Card */}
        <Card sx={{ mb: 3, backgroundColor: '#f8f9fa' }}>
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <CheckCircle sx={{ fontSize: 64, color: '#4caf50', mb: 2 }} />
            <Typography variant="h4" color="text.primary" gutterBottom>
              Payment Successful!
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Your subscription has been activated
            </Typography>
            {sessionId && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Session ID: {sessionId}
              </Typography>
            )}
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" color="text.primary" gutterBottom>
              What's Next?
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" color="text.primary" sx={{ mb: 1 }}>
                • Your subscription is now active
              </Typography>
              <Typography variant="body1" color="text.primary" sx={{ mb: 1 }}>
                • You can start using all premium features
              </Typography>
              <Typography variant="body1" color="text.primary" sx={{ mb: 1 }}>
                • Manage your billing in the subscription section
              </Typography>
              <Typography variant="body1" color="text.primary">
                • Check your email for the receipt
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Home />}
            onClick={handleGoToDashboard}
            sx={{ textTransform: 'none' }}
          >
            Go to Dashboard
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleGoToSubscription}
            sx={{ textTransform: 'none' }}
          >
            View Subscription
          </Button>
        </Box>
      </Grid>
    </Topbar>
  );
}











