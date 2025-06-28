"use client";
import Navbar from "@/app/components/navbar";
import { TextField, Box, Checkbox } from "@mui/material";
import styled from "@emotion/styled/base";
import Grid from "@mui/material/Grid2";
import { FC, useState } from "react";
import Assests from "@/app/assests/images";
import Text from "@/app/components/text";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from "@/app/components/button";
import Link from "next/link";
import ContentBox from "@/app/components/contentBox";
import Route from "@/app/utils/routes";
import axios from "axios";
import { useRouter } from 'next/navigation';

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

const Login: FC = () => {
  const router = useRouter();
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const validateInputs = (): boolean => {
    let valid = true;
    setEmailError(null);
    setPasswordError(null);

    if (!email) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format.");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else if (password.length < 5) {
      setPasswordError("Password must be at least 5 characters.");
      valid = false;
    }

    return valid;
  };

const handleLogin = async () => {
  if (!validateInputs()) return;

  try {
    const response = await axios.post("http://localhost:4000/api/user/login", {
      email,
      password,
    });

    if (response.status === 200 || response.status === 201) {
      const { token, userId, name, email, subdomain } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("user", JSON.stringify({ name, email }));

      const isLocalhost = window.location.hostname.includes("localhost");

      if (isLocalhost) {
        window.location.href = `http://${subdomain}.localhost:3000/dashboard`;
      } else {
        window.location.href = `https://${subdomain}.ezsignature.org/dashboard`;
      }
    } else {
      setApiError("Login failed. Please check your credentials.");
    }
  } catch (error: any) {
    setApiError(error.response?.data?.message || "An error occurred during login.");
  }
};

  

  return (
    <main>
      <Navbar showBtn={false} />
      <ContentBox mt={8}>
        <Grid
          pb={2}
          container
          rowGap={5}
          columnSpacing={0.5}
          height={"100%"}
          flexDirection={{ xs: "column-reverse", md: "row" }}
          justifyContent={{ xs: "flex-start", md: "space-evenly" }}
          alignItems={"center"}
        >
          <Box display="flex" width={{ xs: "100%", sm: "auto" }}>
            <Box width={{ xs: "90%", sm: "430px", md: "370px", lg: "430px" }} m={"auto"}>
              <Text fontWeight="700" fontSize="42px">Welcome Back!</Text>
              <Box component={"div"} width="100%" my={3}>
                <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">Email Address</Text>
                <CustomTextField
                  fullWidth
                  variant="outlined"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!emailError}
                  helperText={emailError}
                />
              </Box>
              <Box my={3}>
                <Box
                  component={"div"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  width="100%"
                >
                  <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">Your password</Text>
                  <Text
                    color="var(--lightGray-color)"
                    onClick={() => setHidePassword(!hidePassword)}
                    style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 3 }}
                    fontSize="18px"
                    fontWeight="600"
                  >
                    {hidePassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />} {hidePassword ? "Show" : "Hide"}
                  </Text>
                </Box>
                <CustomTextField
                  fullWidth
                  variant="outlined"
                  type={hidePassword ? "password" : "text"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!passwordError}
                  helperText={passwordError}
                />
                <Text
                  fontSize="16px"
                  fontWeight="600"
                  style={{ marginLeft: "auto", cursor: "pointer", borderBottom: "1px solid #000", width: "fit-content", marginTop: '15px' }}
                >
                  Forget your password?
                </Text>
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <Checkbox defaultChecked sx={{ color: "#121212", m: 0, p: 0 }} />
                <Text fontSize="16px" fontWeight="600">Keep me signed in</Text>
              </Box>
              {apiError && <Text color="red" fontSize="14px">{apiError}</Text>}
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} my={1} maxWidth={"450px"}>
                <Button
                  style={{ margin: "20px 0" }}
                  fontSize={18}
                  color="#fff"
                  fontWeight="600"
                  backgroundColor="var(--secondary-color)"
                  borderRadius={25}
                  width={"300px"}
                  height={"50px"}
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <Text color="#cdcdcd" fontSize="14px" fontWeight="500" marginTop={20}>
                  Don’t have an account? <Link href={Route.SIGNUP} style={{ color: "var(--secondary-color)", cursor: 'pointer' }}>Sign up</Link>
                </Text>
              </Box>
            </Box>
          </Box>
          <Box component={"img"} width={{ xs: "90%", sm: "430px", lg: "auto" }} src={Assests.LoginImg.src} alt="Login Illustration" />
        </Grid>
      </ContentBox>
    </main>
  );
};

export default Login;
