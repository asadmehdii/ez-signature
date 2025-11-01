"use client";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import Topbar from "@/app/components/dashboardTopbar/topbar";
import Text from "@/app/components/text";
import Button from "@/app/components/button";
import { 
  CheckCircle,
  PhoneAndroid,
  Extension,
  HeadsetMic,
  Palette,
  Edit,
  VolumeUp,
  CloudQueue
} from '@mui/icons-material';
import { Box, ToggleButton, ToggleButtonGroup, Chip } from "@mui/material";
import toast from 'react-hot-toast';

interface UserSubscription {
  hasActiveSubscription: boolean;
  subscription: any;
  customer: any;
  allSubscriptions: any[];
}

export default function SubscriptionPage() {
  const [billingFrequency, setBillingFrequency] = useState<'monthly' | 'yearly'>('yearly');
  const [loading, setLoading] = useState<string | null>(null); // Track which plan is loading
  const [currentPlan, setCurrentPlan] = useState('free');
  const [userSubscription, setUserSubscription] = useState<UserSubscription | null>(null);
  const [subscriptionLoading, setSubscriptionLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) {
      window.location.href = '/signup';
      return;
    }

    // Fetch user subscription status
    fetchUserSubscription();
  }, []);

  const fetchUserSubscription = async () => {
    try {
      setSubscriptionLoading(true);
      const token = localStorage.getItem('token') || '';
      const response = await fetch('/api/stripe/user-subscription', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      
      if (data.success) {
        setUserSubscription(data.data);
        
        // Determine current plan based on subscription
        if (data.data.hasActiveSubscription && data.data.subscription) {
          const priceId = data.data.subscription.items.data[0]?.price.id;
          if (priceId?.includes('basic')) {
            setCurrentPlan('basic');
          } else if (priceId?.includes('professional')) {
            setCurrentPlan('professional');
          }
        }
      }
    } catch (error) {
      console.error('Error fetching user subscription:', error);
    } finally {
      setSubscriptionLoading(false);
    }
  };

  const handleSelectPlan = async (plan: string) => {
    if (plan === 'free') {
      toast.success('You are already on the Free Plan');
      return;
    }

    try {
      setLoading(plan); // Set loading for specific plan
      
      // Map plan IDs to Stripe price IDs - USING YOUR ACTUAL PRICE IDS
      const priceIdMap: { [key: string]: { monthly: string; yearly: string } } = {
        'basic': { 
          monthly: 'price_1SK0yhKfNYS4pA93GgokElGz', // Basic Monthly
          yearly: 'price_1SK0yiKfNYS4pA93lKqvh1vT'   // Basic Yearly
        },
        'professional': { 
          monthly: 'price_1SK0yjKfNYS4pA93bFiENd6D', // Professional Monthly
          yearly: 'price_1SK0ykKfNYS4pA93zVV7KVTb'   // Professional Yearly
        },
      };

      const priceId = priceIdMap[plan]?.[billingFrequency];
      if (!priceId) {
        toast.error('Plan not available for upgrade');
        return;
      }

      const token = localStorage.getItem('token') || '';
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          priceId,
          successUrl: `${window.location.origin}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}/subscription`,
        }),
      });

      const data = await response.json();
      
      if (data.success && data.data.url) {
        window.location.href = data.data.url;
      } else {
        toast.error(data.message || 'Failed to create checkout session');
      }
    } catch (error) {
      console.error('Plan upgrade error:', error);
      toast.error('Failed to upgrade plan');
    } finally {
      setLoading(null); // Clear loading state
    }
  };

  const handleBillingPreferences = async () => {
    try {
      setLoading('billing'); // Set loading for billing preferences
      const token = localStorage.getItem('token') || '';
      
      if (!userSubscription?.customer?.id) {
        toast.error('No customer found. Please contact support.');
        return;
      }

      const response = await fetch('/api/stripe/customer-portal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          customerId: userSubscription.customer.id,
          returnUrl: `${window.location.origin}/subscription`,
        }),
      });

      const data = await response.json();
      
      if (data.success && data.data.url) {
        window.location.href = data.data.url;
      } else {
        toast.error(data.message || 'Failed to open billing preferences');
      }
    } catch (error) {
      console.error('Billing preferences error:', error);
      toast.error('Failed to open billing preferences');
    } finally {
      setLoading(null); // Clear loading state
    }
  };

  return (
    <main>
      <Topbar />
      <Box sx={{ 
        padding: '24px', 
        maxWidth: '1400px', 
        margin: '0 auto',
        marginLeft: '280px', // Add left margin to account for sidebar
        '@media (max-width: 1200px)': {
          marginLeft: '0',
          padding: '16px'
        }
      }}>
        <Grid container component={"div"} rowGap={4} justifyContent={"center"}>
          <Box textAlign={"center"} component={"div"} width={"100%"}>
            <Text fontSize="44px" fontWeight="800">Upgrade Your Plan</Text>
            <Text fontSize="18px" color="var(--lightGray-color)" style={{marginTop:8}}>
              Choose the perfect plan for your business needs and unlock powerful features.
            </Text>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} gap={4} flexWrap={"wrap"} width={"100%"}>
            <Box component={"div"} flex={1} minWidth={320} maxWidth={400}>
              <Text fontSize="18px" fontWeight="700">Subscription</Text>
              <Text fontSize="36px" fontWeight="800">Management</Text>
              
              <Box mt={4}>
                {subscriptionLoading ? (
                  <Text fontWeight="700">Loading subscription...</Text>
                ) : (
                  <>
                    <Text fontWeight="700">
                      Current Plan: {currentPlan === 'free' ? 'Free Plan ($0.00 / year)' : 
                        currentPlan === 'basic' ? 'Basic Plan' : 
                        currentPlan === 'professional' ? 'Professional Plan' : 'Free Plan ($0.00 / year)'}
                    </Text>
                    {userSubscription?.hasActiveSubscription && userSubscription.subscription && (
                      <>
                        <Text fontSize="14px" color="var(--lightGray-color)" mt={1}>
                          Status: {userSubscription.subscription.status}
                        </Text>
                        <Text fontSize="14px" color="var(--lightGray-color)" mt={1}>
                          Next billing: {new Date(userSubscription.subscription.current_period_end * 1000).toLocaleDateString()}
                        </Text>
                        <Text fontSize="14px" color="var(--lightGray-color)" mt={1}>
                          Amount: ${(userSubscription.subscription.items.data[0]?.price.unit_amount / 100).toFixed(2)} / {userSubscription.subscription.items.data[0]?.price.recurring.interval}
                        </Text>
                      </>
                    )}
                  </>
                )}
              </Box>

              <Box mt={4}>
                <Button
                  height={40} 
                  borderRadius={20} 
                  backgroundColor="transparent" 
                  color="var(--secondary-color)" 
                  hoverStyle={{bgcolor:"#F4F4F4"}}
                  onClick={handleBillingPreferences}
                  disabled={loading === 'billing'}
                >
                  {loading === 'billing' ? 'PROCESSING...' : 'Billing Preferences'}
                </Button>
            </Box>

              <Box mt={4}>
                <Text fontWeight="700">Billing Frequency</Text>
                <Box mt={1}>
                  <ToggleButtonGroup 
                    exclusive 
                    size="small" 
                    value={billingFrequency}
                    onChange={(_, value) => value && setBillingFrequency(value)}
                  >
                    <ToggleButton value="monthly">Monthly</ToggleButton>
                    <ToggleButton value="yearly">Yearly</ToggleButton>
                  </ToggleButtonGroup>
            </Box>
          </Box>
        </Box>

            <Box component={"div"} flex={2} minWidth={600}>
              <Grid container component={"div"} spacing={3} sx={{ height: '100%' }}>
                {/* Free Plan */}
                <Grid size={{ xs: 12, md: 4 }} component={"div"}>
                  <Box 
                    component={"div"} 
                    borderRadius={3} 
                    padding={3} 
            sx={{
                      border: "1px solid #E0E0E0",
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box>
                      <Text fontSize="24px" fontWeight="800">Free</Text>
                      <Text color="var(--lightGray-color)" style={{marginTop:8}}>
                        Perfect for getting started with eSignatures.
                      </Text>
                      <Box mt={2}>
                        <Text fontWeight="700">Seats:</Text>
                        <Text>1</Text>
                      </Box>
                      <Text fontSize="36px" fontWeight="800" style={{marginTop:10}}>
                        $0 <span style={{fontSize:16}}>/month</span>
                      </Text>
                    </Box>
                    
                    <Box>
                      <Button 
                        width={"100%"} 
                        height={48} 
                        borderRadius={24} 
                        backgroundColor={currentPlan === 'free' ? "#4caf50" : "var(--secondary-color)"} 
                        color="#fff" 
                        style={{marginTop:16}}
                        onClick={() => handleSelectPlan('free')}
                        disabled={currentPlan === 'free'}
                      >
                        {currentPlan === 'free' ? 'CURRENT PLAN' : 'SELECT PLAN'}
                      </Button>
                      <Box mt={2} component={"ul"} style={{paddingLeft:18, minHeight: '120px'}}>
                        <li>3 Documents / month</li>
                        <li>1 Template</li>
                        <li>LIV Enabled</li>
                        <li style={{opacity: 0}}>Spacer</li>
                        <li style={{opacity: 0}}>Spacer</li>
                        <li style={{opacity: 0}}>Spacer</li>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                {/* Basic Plan */}
                <Grid size={{ xs: 12, md: 4 }} component={"div"}>
                  <Box 
                    component={"div"} 
                    borderRadius={3} 
                    padding={3} 
                    sx={{ 
                      border: "1px solid #E0E0E0",
                      height: '100%',
                  display: 'flex', 
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box>
                      <Text fontSize="24px" fontWeight="800">Basic</Text>
                      <Text color="var(--lightGray-color)" style={{marginTop:8}}>
                        Make use of core eSignature features — ideal for growing businesses.
                      </Text>
                      <Box mt={2}>
                        <Text fontWeight="700">Seats:</Text>
                        <Text>1</Text>
                  </Box>
                      <Text fontSize="36px" fontWeight="800" style={{marginTop:10}}>
                        {billingFrequency === 'yearly' ? '$10' : '$20'} 
                        <span style={{fontSize:16}}>/month {billingFrequency === 'yearly' && '(billed yearly)'}</span>
                      </Text>
                </Box>

                    <Box>
                      <Button 
                        width={"100%"} 
                        height={48} 
                        borderRadius={24} 
                        backgroundColor="var(--secondary-color)" 
                        color="#fff" 
                        style={{marginTop:16}}
                        onClick={() => handleSelectPlan('basic')}
                        disabled={loading === 'basic'}
                      >
                        {loading === 'basic' ? 'PROCESSING...' : 'UPGRADE'}
                      </Button>
                      <Box mt={2} component={"ul"} style={{paddingLeft:18, minHeight: '120px'}}>
                        <li>Unlimited Documents</li>
                        <li>3 Templates (per user)</li>
                        <li>LIV Enabled</li>
                        <li>Mobile App</li>
                        <li>App Integrations</li>
                        <li>Basic Support</li>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                {/* Professional Plan */}
                <Grid size={{ xs: 12, md: 4 }} component={"div"}>
                  <Box 
                    component={"div"} 
                    borderRadius={3} 
                    padding={3} 
                    sx={{ 
                      border: "2px solid var(--secondary-color)", 
                      position:'relative',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Chip 
                      label="MOST POPULAR" 
                      color="primary" 
                      size="small" 
                      sx={{ 
                        position:'absolute', 
                        top: -12, 
                        right: 16, 
                        bgcolor:'var(--secondary-color)', 
                        color:'#fff' 
                      }} 
                    />
                    
                    <Box>
                      <Text fontSize="24px" fontWeight="800">Professional</Text>
                      <Text color="var(--lightGray-color)" style={{marginTop:8}}>
                        Enjoy the full suite of eSignature tools and advanced features.
                      </Text>
                      <Box mt={2}>
                        <Text fontWeight="700">Seats:</Text>
                        <Text>1</Text>
                      </Box>
                      <Text fontSize="36px" fontWeight="800" style={{marginTop:10}}>
                        {billingFrequency === 'yearly' ? '$16' : '$32'} 
                        <span style={{fontSize:16}}>/month {billingFrequency === 'yearly' && '(billed yearly)'}</span>
                      </Text>
                  </Box>

                    <Box>
                      <Button 
                        width={"100%"} 
                        height={48} 
                        borderRadius={24} 
                        backgroundColor="var(--secondary-color)" 
                        color="#fff" 
                        style={{marginTop:16}}
                        onClick={() => handleSelectPlan('professional')}
                        disabled={loading === 'professional'}
                      >
                        {loading === 'professional' ? 'PROCESSING...' : 'UPGRADE'}
                      </Button>
                      <Box mt={2} component={"ul"} style={{paddingLeft:18, minHeight: '120px'}}>
                        <li>Unlimited Documents</li>
                        <li>Unlimited Templates</li>
                        <li>LIV Enabled</li>
                        <li>Mobile App</li>
                        <li>10 Bulk Sending credits (per user)</li>
                        <li>10 SMS Credits (per user)</li>
                        <li>App Integrations</li>
                        <li>Custom Branding</li>
                        <li>Advanced Editing & AI Tools</li>
                        <li>Premium Support</li>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
            </Grid>
            </Box>
          </Box>
        </Grid>
      </Box>
    </main>
  );
}