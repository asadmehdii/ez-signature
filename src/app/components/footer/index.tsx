import React, { FC } from "react";
import Grid from "@mui/material/Grid2";
import Text from "../text";
import { Box, Input, InputAdornment } from "@mui/material";
import Image from "next/image";

// import images here
import SendArrow from "../../assests/images/inputSend .svg";

const Footer: FC = () => {
  return (
    <Box component={"div"} className="footer">
      <Grid
        component={"div"}
        container
        rowSpacing={3}
        sx={{
          padding: "30px",
          justifyContent: {
            sm: "flex-start",
            lg: "center",
          },
        }}
      >
        <Grid size={{ sm: 4, md: 3, lg: 2 }}>
          <Text
            color="#fff"
            fontWeight="700"
            fontSize={"24px"}
            marginBottom={20}
          >
            General
          </Text>
          <Box
            component={"div"}
            sx={{
              display: { xs: "flex", sm: "block" },
              flexWrap: { xs: "wrap", sm: "nowrap" },
              columnGap: 3,
            }}
          >
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              Home
            </Text>
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              Feature
            </Text>
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              Home
            </Text>
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              Pricing Plans
            </Text>
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              Blog
            </Text>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 4, md: 3, lg: 2 }}>
          <Text
            color="#fff"
            fontWeight="700"
            fontSize={"24px"}
            marginBottom={20}
          >
            Main Features
          </Text>
          <Box
            component={"div"}
            sx={{
              display: { xs: "flex", sm: "block" },
              flexWrap: { xs: "wrap", sm: "nowrap" },
              columnGap: 3,
            }}
          >
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              Electronic Signatures
            </Text>
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              Documents & Security
            </Text>
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              In-Person Signing
            </Text>
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              Audit Trail
            </Text>
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              Templates
            </Text>
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              App Integrations
            </Text>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 4, md: 3, lg: 2 }}>
          <Text
            color="#fff"
            fontWeight="700"
            fontSize={"24px"}
            marginBottom={20}
          >
            Developer
          </Text>
          <Box
            component={"div"}
            sx={{
              display: { xs: "flex", sm: "block" },
              flexWrap: { xs: "wrap", sm: "nowrap" },
              columnGap: 3,
            }}
          >
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              Developer Portal
            </Text>
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              Create Free SandBox
            </Text>
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              API Pricing
            </Text>
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              API Documentation
            </Text>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 4, md: 3, lg: 2 }}>
          <Text
            color="#fff"
            fontWeight="700"
            fontSize={"24px"}
            marginBottom={20}
          >
            Press & Legal
          </Text>
          <Box
            component={"div"}
            sx={{
              display: { xs: "flex", sm: "block" },
              flexWrap: { xs: "wrap", sm: "nowrap" },
              columnGap: 3,
            }}
          >
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              Contact Us
            </Text>
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              Terms & Conditions
            </Text>
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              Privacy Policy
            </Text>
            <Text
              pointer
              color="#fff"
              fontWeight="500"
              fontSize={"18px"}
              marginBottom={12}
            >
              Cookie Policy
            </Text>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Text
            color="#fff"
            fontWeight="700"
            fontSize={"24px"}
            marginBottom={20}
          >
            Subscribe
          </Text>
          <Text
            pointer
            color="#fff"
            fontWeight="500"
            fontSize={"18px"}
            marginBottom={12}
          >
            Subscribe now the EzSignature and get the News & letters.
          </Text>
          <Input
            placeholder="Enter Your email"
            disableUnderline
            sx={{
              backgroundColor: "#fff",
              borderRadius: "30px",
              height: "64px",
              width: "273px",
              paddingX: 2,
              boxShadow: "none",
              fontSize: "12px",
              fontWeight: "500",
            }}
            endAdornment={
              <InputAdornment
                sx={{
                  cursor: "pointer",
                  backgroundColor: "#33cafb",
                  padding: 1,
                  borderRadius: 50,
                }}
                position="end"
              >
                <Image width={25} height={25} src={SendArrow} alt="image_here" />
              </InputAdornment>
            }
          />
        </Grid>
      </Grid>
      <Grid
        container
        marginTop={"30px"}
        component={"div"}
        sx={{
          borderTop: "1px solid #fff",
          width: "100%",
          paddingY: "15px",
        }}
      >
        <Grid
          sx={{
            marginLeft: { xs: "30px", lg: "80px", sm: "20px" },
          }}
        ></Grid>
        <Text fontWeight="700" fontSize="18px" color="#fff">
          Copyright © {new Date().getFullYear()} EzSignature
        </Text>
      </Grid>
    </Box>
  );
};

export default Footer;
