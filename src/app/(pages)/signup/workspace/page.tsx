"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, TextField, Checkbox, FormControlLabel, Alert, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navbar from "@/app/components/navbar";
import ContentBox from "@/app/components/contentBox";
import Text from "@/app/components/text";
import Button from "@/app/components/button";
import { toast } from 'react-hot-toast';
import Navigate from '@/app/components/linkText';

export default function WorkspaceStep() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    subdomain: '',
    isIndividual: false,
  });
  
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    subdomain: '',
  });
  
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(false);
  const [subdomainAvailable, setSubdomainAvailable] = useState<boolean | null>(null);

  const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000/api';

  const validateForm = () => {
    const newErrors = { firstName: '', lastName: '', businessName: '', subdomain: '' };
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!formData.isIndividual && !formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
      isValid = false;
    }

    if (!formData.subdomain.trim()) {
      newErrors.subdomain = 'Workspace URL is required';
      isValid = false;
    } else if (formData.subdomain.length < 3) {
      newErrors.subdomain = 'Workspace URL must be at least 3 characters';
      isValid = false;
    } else if (!/^[a-z0-9-]+$/.test(formData.subdomain)) {
      newErrors.subdomain = 'Workspace URL can only contain lowercase letters, numbers, and hyphens';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: '' });
    setError('');
    
    if (field === 'subdomain') {
      setSubdomainAvailable(null);
    }
  };

  const checkAvailability = async () => {
    if (!formData.subdomain.trim()) {
      setErrors({ ...errors, subdomain: 'Please enter a workspace URL first' });
      return;
    }

    setChecking(true);
    setError('');
    try {
      const res = await fetch(`${apiBase}/workspace/check/${encodeURIComponent(formData.subdomain)}`);
      const data = await res.json();
      setSubdomainAvailable(data.available);
      
      if (!data.available) {
        setErrors({ ...errors, subdomain: 'This workspace URL is already taken' });
        toast.error('This workspace URL is already taken');
      } else {
        setErrors({ ...errors, subdomain: '' });
        toast.success('This workspace URL is available!');
      }
    } catch (e) {
      setError('Could not check availability. Please try again.');
      toast.error('Could not check availability. Please try again.');
    } finally {
      setChecking(false);
    }
  };

  const createWorkspace = async () => {
    if (!validateForm()) return;

    const ownerUserId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    if (!ownerUserId || !token) {
      setError('Please log in again.');
      toast.error('Please log in again.');
      return;
    }

    setChecking(true);
    setError('');
    
    try {
      const res = await fetch(`${apiBase}/workspace/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ 
          ownerUserId, 
          subdomain: formData.subdomain,
          name: formData.businessName || `${formData.firstName} ${formData.lastName}`
        }),
      });
      
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to create workspace');
      }

      const workspaceData = await res.json();
      toast.success('Workspace created successfully!');
      
      // For development, redirect to localhost with subdomain
      // For production, this would be the actual domain
      const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      
      if (isDevelopment) {
        // Development: redirect to localhost with subdomain
        const target = `http://${formData.subdomain}.localhost:3000/dashboard`;
        toast.success(`Redirecting to ${target}...`);
        
        // Wait a moment for the toast to show, then redirect
        setTimeout(() => {
          window.location.href = target;
        }, 2000);
      } else {
        // Production: redirect to actual domain
        const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN || 'ezsignature.org';
        const target = `https://${formData.subdomain}.${baseDomain}/dashboard`;
        toast.success(`Redirecting to ${target}...`);
        
        setTimeout(() => {
          window.location.href = target;
        }, 2000);
      }
      
    } catch (e: any) {
      setError(e.message || 'Failed to create workspace');
      toast.error(e.message || 'Failed to create workspace');
    } finally {
      setChecking(false);
    }
  };

  const handleBack = () => {
    router.push('/signup');
  };

  return (
    <main>
      <Navbar showBtn={false} />
      <ContentBox mt={4}>
        <Grid
          pb={2}
          container
          rowGap={5}
          component={"div"}
          flexDirection={{ xs: "column-reverse", md: "row" }}
          justifyContent={{ xs: "flex-start", md: "space-evenly" }}
          alignItems={"center"}
        >
          <Box display="flex" width={{ xs: "90%", sm: "430px", md: "370px", lg: "430px" }}>
            <Box m={"auto"}>
              {/* Back Button */}
              <Box display="flex" alignItems="center" mb={3}>
                <IconButton 
                  onClick={handleBack}
                  sx={{ color: 'var(--lightGray-color)', mr: 2 }}
                >
                  <ArrowBackIcon />
                </IconButton>
                <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">
                  Back to Sign Up
                </Text>
              </Box>

              <Box mb={2}>
                <Text fontWeight="700" textAlign="center" fontSize="42px">
                  Set Up Your Business
                </Text>
              </Box>
              
              <Box mb={4}>
                <Text fontSize="18px" textAlign="center" color="var(--lightGray-color)">
                  Complete your profile and create your workspace
                </Text>
              </Box>

              {/* Form */}
              <Box component="form" onSubmit={(e) => { e.preventDefault(); createWorkspace(); }}>
                {/* First Name */}
                <Box component={"div"} my={3}>
                  <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">
                    First Name*
                  </Text>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    placeholder="Enter your first name"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: "47px",
                        borderRadius: '8px',
                        borderColor: '#666666',
                        fontSize: '20px',
                        padding: '10px 0px',
                        fontFamily: "var(--text-mada)",
                        '& fieldset': {
                          borderColor: '#666666',
                        },
                        '&:hover fieldset': {
                          borderColor: '#666666',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#666666',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: '#333',
                        fontSize: '20px',
                      },
                    }}
                  />
                </Box>

                {/* Last Name */}
                <Box component={"div"} my={3}>
                  <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">
                    Last Name*
                  </Text>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    placeholder="Enter your last name"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: "47px",
                        borderRadius: '8px',
                        borderColor: '#666666',
                        fontSize: '20px',
                        padding: '10px 0px',
                        fontFamily: "var(--text-mada)",
                        '& fieldset': {
                          borderColor: '#666666',
                        },
                        '&:hover fieldset': {
                          borderColor: '#666666',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#666666',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: '#333',
                        fontSize: '20px',
                      },
                    }}
                  />
                </Box>

                {/* Individual Checkbox */}
                <Box my={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.isIndividual}
                        onChange={(e) => setFormData({ ...formData, isIndividual: e.target.checked })}
                        sx={{
                          color: 'var(--secondary-color)',
                          '&.Mui-checked': {
                            color: 'var(--secondary-color)',
                          },
                        }}
                      />
                    }
                    label={
                      <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">
                        I'm an individual
                      </Text>
                    }
                  />
                </Box>

                {/* Business Name - Conditional */}
                {!formData.isIndividual && (
                  <Box component={"div"} my={3}>
                    <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">
                      Business Name
                    </Text>
                    <TextField
                      fullWidth
                      variant="outlined"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange("businessName", e.target.value)}
                      error={!!errors.businessName}
                      helperText={errors.businessName}
                      placeholder="Enter your business name"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          height: "47px",
                          borderRadius: '8px',
                          borderColor: '#666666',
                          fontSize: '20px',
                          padding: '10px 0px',
                          fontFamily: "var(--text-mada)",
                          '& fieldset': {
                            borderColor: '#666666',
                          },
                          '&:hover fieldset': {
                            borderColor: '#666666',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#666666',
                          },
                        },
                        '& .MuiInputBase-input': {
                          color: '#333',
                          fontSize: '20px',
                        },
                      }}
                    />
                  </Box>
                )}

                {/* Workspace URL */}
                <Box my={3}>
                  <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">
                    Workspace URL*
                  </Text>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={formData.subdomain}
                    onChange={(e) => handleInputChange("subdomain", e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                    error={!!errors.subdomain}
                    helperText={errors.subdomain}
                    placeholder="company"
                    InputProps={{
                      endAdornment: (
                        <Box mr={2}>
                          <Text fontSize="16px" color="var(--lightGray-color)">
                            .ezsignature.org
                          </Text>
                        </Box>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: "47px",
                        borderRadius: '8px',
                        borderColor: '#666666',
                        fontSize: '20px',
                        padding: '10px 0px',
                        fontFamily: "var(--text-mada)",
                        '& fieldset': {
                          borderColor: '#666666',
                        },
                        '&:hover fieldset': {
                          borderColor: '#666666',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#666666',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: '#333',
                        fontSize: '20px',
                      },
                    }}
                  />
                  
                  {subdomainAvailable === true && (
                    <Box mt={1}>
                      <Text fontSize="14px" color="#10B981">
                        ✓ This workspace URL is available
                      </Text>
                    </Box>
                  )}
                </Box>

                {/* Error display */}
                {error && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                  </Alert>
                )}

                {/* Action buttons */}
                <Box display="flex" flexDirection="column" gap={2} mt={4}>
                  <Button
                    style={{ margin: "10px 0" }}
                    fontSize={18}
                    color="#fff"
                    fontWeight="600"
                    backgroundColor="var(--secondary-color)"
                    borderRadius={25}
                    width={"100%"}
                    height={"50px"}
                    onClick={createWorkspace}
                    disabled={checking}
                  >
                    {checking ? 'Creating Workspace...' : 'Create Workspace'}
                  </Button>
                  
                  <Button
                    style={{ margin: "10px 0" }}
                    fontSize={16}
                    color="var(--lightGray-color)"
                    fontWeight="600"
                    backgroundColor="transparent"
                    borderRadius={25}
                    width={"100%"}
                    height={"45px"}
                    onClick={handleBack}
                    sx={{ border: '2px solid var(--lightGray-color)' }}
                  >
                    Back to Sign Up
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Right side - Image */}
              <Box sx={{ textAlign: "center", mt: 4.3, mr: 2 }}>
  <Typography fontSize={41} fontWeight={800}>
    EzSignature
  </Typography>
</Box>

          {/* <Box
            component={"img"}
            width={{ xs: "90%", sm: "430px", lg: "auto" }}
            src="/images/workspace-setup.png"
            alt="Workspace Setup"
            style={{ maxHeight: '500px', objectFit: 'contain' }}
          /> */}
        </Grid>
      </ContentBox>
    </main>
  );
}


