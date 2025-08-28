"use client";
import Navbar from "@/app/components/navbar";
import TextField from "@mui/material/TextField";
import { Box, Checkbox, Typography } from "@mui/material";
import styled from "@emotion/styled/base";
import Grid from "@mui/material/Grid2";
import { FC, useState } from "react";
import Image from "next/image";
import Assests from "@/app/assests/images";
import Text from "@/app/components/text";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from "@/app/components/button";
import Link from "next/link";
import ContentBox from "@/app/components/contentBox";
import Route from "@/app/utils/routes";
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const SignUp: FC = () => {
  const router = useRouter();

  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // CustomTextField styled from MUI's TextField.
  const CustomTextField = styled(TextField)({
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
  });

  const validateForm = () => {
    const newErrors = { name: "", email: "", password: "" };
    if (!formData.name) newErrors.name = "Username is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 5) {
      newErrors.password = "Password must be at least 5 characters.";
    }
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000/api';
      const response = await fetch(`${apiBase}/user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // Persist auth for next step
        if (data?.token) localStorage.setItem('token', data.token);
        if (data?.id) localStorage.setItem('userId', data.id);
        if (formData?.email) localStorage.setItem('signupEmail', formData.email);
        toast.success('Account created successfully! Setting up workspace...');
        router.push('/signup/workspace');
      } else {
        const errorData = await response.json();
        if (response.status === 409) {
          toast.error('An account with this email already exists. Please log in instead.');
        } else {
          toast.error(errorData.message || "Failed to create an account.");
        }
        alert(errorData.message || "Failed to create an account.");
      }
    } catch {
      toast.error("An error occurred. Please try again later.");
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
              <Text fontWeight="700" textAlign="center" fontSize="42px">
                Create an account
              </Text>
              <Box component={"div"} my={3}>
                <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">
                  Username
                </Text>
                {/* Use CustomTextField here */}
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  error={!!errors.name}
                  helperText={errors.name}
                />
              </Box>
              <Box component={"div"} my={3}>
                <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">
                  Email Address
                </Text>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Box>
              <Box my={3}>
                <Box
                  component={"div"}
                  m={0}
                  p={0}
                  display={"flex"}
                  justifyContent={"space-between"}
                  maxWidth={"450px"}
                >
                  <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">
                    Your Password
                  </Text>
                  {hidePassword ? (
                    <Text
                      color="var(--lightGray-color)"
                      onClick={() => setHidePassword(false)}
                      style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 3 }}
                      fontSize="18px"
                      fontWeight="600"
                    >
                      <RemoveRedEyeIcon /> Show
                    </Text>
                  ) : (
                    <Text
                      color="var(--lightGray-color)"
                      onClick={() => setHidePassword(true)}
                      style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 3 }}
                      fontSize="18px"
                      fontWeight="600"
                    >
                      <VisibilityOffIcon sx={{ color: "red" }} /> Hide
                    </Text>
                  )}
                </Box>
                <TextField
                  fullWidth
                  variant="outlined"
                  type={hidePassword ? "password" : "text"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  error={!!errors.password}
                  helperText={errors.password}
                />
                <Text
                  color="var(--lightGray-color)"
                  fontSize="14px"
                  fontWeight="600"
                  style={{ marginTop: '7px' }}
                >
                  Use 8 or more characters with a mix of letters, numbers & symbols
                </Text>
              </Box>
              <Typography
                fontFamily={"var(--text-mada)"}
                variant="body1"
                fontSize="16px"
                color="var(--lightGray-color)"
                fontWeight="500"
                sx={{ maxWidth: "300px", marginX: { xs: "auto", sm: 0 } }}
              >
                By creating an account, you agree to our{" "}
                <Link
                  href={Route.TERM_CONDITION}
                  style={{ fontWeight: "700", color: "#111111", textDecoration: 'underline' }}
                >
                  Terms of use
                </Link>{" "}
                and{" "}
                <Link
                  href={Route.PRIVACY_POLICY}
                  style={{ fontWeight: "700", color: "#111111", textDecoration: 'underline' }}
                >
                  Privacy Policy
                </Link>
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                border={"1px solid #333333"}
                width={"260px"}
                px={2}
                margin={"auto"}
                mt={2}
                borderRadius={"18px"}
                height={"50px"}
              >
                <Box display={"flex"} alignItems={"center"} gap={0.5}>
                  <Checkbox defaultChecked size="small" sx={{ color: "#121212", m: 0, p: 0 }} />
                  <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">
                    I'm not a robot
                  </Text>
                </Box>
                <Image src={Assests.Recaptcha} alt="image_here" width={35} height={35} />
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                my={1}
                maxWidth={"450px"}
              >
                <Button
                  style={{ margin: "20px 0" }}
                  fontSize={18}
                  color="#fff"
                  fontWeight="600"
                  backgroundColor="var(--secondary-color)"
                  borderRadius={25}
                  width={"300px"}
                  height={"50px"}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating..." : "Create an account"}
                </Button>
                <Box
                  my={1}
                  color={"#cdcdcd"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={3}
                >
                  <hr style={{ width: '30px', borderColor: "#cdcdcd", borderWidth: "1px", borderStyle: "solid" }} />
                  <Text fontSize="14px" fontWeight="500" color="#cdcdcd">
                    Or Sign up With
                  </Text>
                  <hr style={{ width: '30px', borderColor: "#cdcdcd", borderWidth: "1px", borderStyle: "solid" }} />
                </Box>
                <Box display={"flex"} alignItems={"center"} columnGap={2}>
                  <Box
                    component={"img"}
                    sx={{
                      cursor: 'pointer',
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.2)" }
                    }}
                    src={Assests.Google.src}
                    alt="icon_here"
                  />
                  <Box
                    component={"img"}
                    sx={{
                      cursor: 'pointer',
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.2)" }
                    }}
                    src={Assests.Facebook.src}
                    alt="icon_here"
                  />
                  <Box
                    component={"img"}
                    sx={{
                      cursor: 'pointer',
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.2)" }
                    }}
                    src={Assests.Instagram.src}
                    alt="icon_here"
                  />
                  <Box
                    component={"img"}
                    sx={{
                      cursor: 'pointer',
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.2)" }
                    }}
                    src={Assests.Linkedin.src}
                    alt="icon_here"
                  />
                </Box>
                <Text
                  color="#cdcdcd"
                  fontSize="14px"
                  fontWeight="500"
                  marginTop={20}
                >
                  Already have an account?{" "}
                  <Link href={Route.LOGIN} style={{ color: "var(--secondary-color)", cursor: 'pointer' }}>
                    Login
                  </Link>
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            component={"img"}
            width={{ xs: "90%", sm: "430px", lg: "auto" }}
            src={Assests.SignUpImage.src}
            alt="img_here"
          />
        </Grid>
      </ContentBox>
    </main>
  );
};

export default SignUp;
