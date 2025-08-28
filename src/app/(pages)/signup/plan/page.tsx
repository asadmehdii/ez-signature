"use client";
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from "@/app/components/navbar";
import ContentBox from "@/app/components/contentBox";
import Text from "@/app/components/text";
import Button from "@/app/components/button";
import Grid from "@mui/material/Grid2";
import { Box, ToggleButton, ToggleButtonGroup, Chip } from "@mui/material";

export default function SignupPlanPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // if user is not signed in, send back to signup
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) {
      router.push('/signup');
    }
  }, [router]);

  const goToDashboard = () => {
    const workspace = searchParams.get('workspace');
    const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
    const isDev = hostname === 'localhost' || hostname === '127.0.0.1';
    if (isDev && workspace) {
      window.location.href = `http://${workspace}.localhost:3000/documents`;
      return;
    }
    if (workspace) {
      const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN || 'ezsignature.org';
      window.location.href = `https://${workspace}.${baseDomain}/documents`;
      return;
    }
    router.push('/documents');
  };

  const handleSelectPlan = (plan: string) => {
    // Persist selected plan for later billing if needed
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedPlan', plan);
    }
    goToDashboard();
  };

  return (
    <main>
      <Navbar showBtn={false} />
      <ContentBox mt={6}>
        <Grid container component={"div"} rowGap={4} justifyContent={"center"}>
          <Box textAlign={"center"} component={"div"} width={"100%"}>
            <Text fontSize="44px" fontWeight="800">eSignatures made simple</Text>
            <Text fontSize="18px" color="var(--lightGray-color)" style={{marginTop:8}}>Thank you for choosing Xodo Sign. You're just a few steps away from making the digital leap.</Text>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} gap={3} flexWrap={"wrap"} width={"100%"}>
            <Box component={"div"} flex={1} minWidth={320}>
              <Text fontSize="18px" fontWeight="700">Sign Up</Text>
              <Text fontSize="36px" fontWeight="800">Business</Text>
              <Box display={"flex"} gap={2} mt={2}>
                <Button height={40} borderRadius={20} backgroundColor="transparent" color="var(--secondary-color)" hoverStyle={{bgcolor:"#F4F4F4"}} onClick={() => router.back()}>Back</Button>
                <Button height={40} borderRadius={20} backgroundColor="transparent" color="var(--secondary-color)" hoverStyle={{bgcolor:"#F4F4F4"}} onClick={goToDashboard}>Skip for now</Button>
              </Box>
              <Box mt={4}>
                <Text fontWeight="700">You're almost done!</Text>
                <Box mt={1}>
                  <ToggleButtonGroup exclusive size="small" value={"yearly"}>
                    <ToggleButton value="monthly">Monthly</ToggleButton>
                    <ToggleButton value="yearly">Yearly</ToggleButton>
                  </ToggleButtonGroup>
                </Box>
              </Box>
            </Box>

            <Box component={"div"} flex={2} minWidth={320}>
              <Grid container component={"div"} spacing={3}>
                <Grid size={{ xs: 12, md: 6 }} component={"div"}>
                  <Box component={"div"} borderRadius={3} padding={3} sx={{ border: "1px solid #E0E0E0" }}>
                    <Text fontSize="24px" fontWeight="800">Basic</Text>
                    <Text color="var(--lightGray-color)" style={{marginTop:8}}>Make use of core eSignature features — ideal for growing businesses.</Text>
                    <Box mt={2}>
                      <Text fontWeight="700">Seats:</Text>
                      <Text>1</Text>
                    </Box>
                    <Text fontSize="36px" fontWeight="800" style={{marginTop:10}}>$10 <span style={{fontSize:16}}>/month (billed yearly)</span></Text>
                    <Button width={"100%"} height={48} borderRadius={24} backgroundColor="var(--secondary-color)" color="#fff" style={{marginTop:16}} onClick={() => handleSelectPlan('basic')}>SELECT PLAN</Button>
                    <Box mt={2} component={"ul"} style={{paddingLeft:18}}>
                      <li>Unlimited Documents</li>
                      <li>3 Templates (per user)</li>
                      <li>LTV Enabled</li>
                      <li>Mobile App</li>
                      <li>App Integrations</li>
                      <li>Basic Support</li>
                    </Box>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }} component={"div"}>
                  <Box component={"div"} borderRadius={3} padding={3} sx={{ border: "2px solid var(--secondary-color)", position:'relative' }}>
                    <Chip label="MOST POPULAR" color="primary" size="small" sx={{ position:'absolute', top: -12, right: 16, bgcolor:'var(--secondary-color)', color:'#fff' }} />
                    <Text fontSize="24px" fontWeight="800">Professional</Text>
                    <Text color="var(--lightGray-color)" style={{marginTop:8}}>Enjoy the full suite of eSignature tools and advanced features.</Text>
                    <Box mt={2}>
                      <Text fontWeight="700">Seats:</Text>
                      <Text>1</Text>
                    </Box>
                    <Text fontSize="36px" fontWeight="800" style={{marginTop:10}}>$16 <span style={{fontSize:16}}>/month (billed yearly)</span></Text>
                    <Button width={"100%"} height={48} borderRadius={24} backgroundColor="var(--secondary-color)" color="#fff" style={{marginTop:16}} onClick={() => handleSelectPlan('professional')}>SELECT PLAN</Button>
                    <Box mt={2} component={"ul"} style={{paddingLeft:18}}>
                      <li>Unlimited Documents</li>
                      <li>Unlimited Templates</li>
                      <li>LTV Enabled</li>
                      <li>Mobile App</li>
                      <li>10 Bulk Sending credits (per user)</li>
                      <li>10 Signer SMS Credits (per user)</li>
                      <li>App Integrations</li>
                      <li>Custom Branding</li>
                      <li>Advanced Editing & AI Tools</li>
                      <li>Premium Support</li>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </ContentBox>
    </main>
  );
}


