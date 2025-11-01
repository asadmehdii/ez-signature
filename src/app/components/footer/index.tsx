import React, { FC } from "react";
import Grid from "@mui/material/Grid2";
import Text from "../text";
import { Box, Input, InputAdornment } from "@mui/material";
import Image from "next/image";
import Assests from "@/app/assests/images";
import Navigate from "../linkText";
import { General, Developer, PressLegal, MainFeature } from "./content";

const Footer: FC = () => {
  return (
    <Box sx={{ bgcolor: "#66EFDC", pt: 10, pb: 3 ,mt:2}}>{/* old color was 2191D0 */}
      
      {/* Wrapper to center content */}
      <Box
        sx={{
          maxWidth: "1440px", // Define the max width for content
          mx: "auto", // Centers the content
          px: { xs: 2, sm: 5, lg: "100px" }, // Add padding for smaller screens
        }}
      >
        <Grid
          container
          rowSpacing={6}
          sx={{
            justifyContent: { sm: "flex-start", lg: "center" },
          }}
        >
          <Grid size={{ xs: 12, sm: 3, md: 3, lg: 2 }}>
            <Text color="#000" fontWeight="700" fontSize={"24px"} marginBottom={25}>
              General
            </Text>
            <Box>
              {General.map((item) => (
                <Navigate
                  key={item.text}
                  sx={{ mb: 1.5 }}
                  color="#000"
                  fontSize={18}
                  fontWeight="500"
                  text={item.text}
                  to={item.navigate}
                />
              ))}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 4.5, md: 3, lg: 2.5 }}>
            <Text color="#000" fontWeight="700" fontSize={"24px"} marginBottom={25}>
              Main Features
            </Text>
            <Box>
              {MainFeature.map((item) => (
                <Navigate
                  key={item.text}
                  sx={{ mb: 1.5 }}
                  color="#000"
                  fontSize={18}
                  fontWeight="500"
                  text={item.text}
                  to={item.navigate}
                  />
              ))}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 3, lg: 2.5 }}>
            <Text color="#000" fontWeight="700" fontSize={"24px"} marginBottom={25}>
              Developer
            </Text>
            <Box>
              {Developer.map((item) => (
                <Navigate
                  key={item.text}
                  sx={{ mb: 1.5 }}
                  color="#000"
                  fontSize={18}
                  fontWeight="500"
                  text={item.text}
                  to={item.navigate}
                />
              ))}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 3, lg: 2 }}>
            <Text color="#000" fontWeight="700" fontSize={"24px"} marginBottom={25}>
              Press & Legal
            </Text>
            <Box>
              {PressLegal.map((item) => (
                <Navigate
                  key={item.text}
                  sx={{ mb: 1.5 }}
                  color="#000"
                  fontSize={18}
                  fontWeight="500"
                  text={item.text}
                  to={item.navigate}
                />
              ))}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 7, md: 12, lg: 3 }}>
            <Text color="#000" fontWeight="700" fontSize={"24px"} marginBottom={30}>
              Subscribe
            </Text>
            <Text color="#000" fontWeight="500" fontSize={"18px"} marginBottom={30}>
              Subscribe now to EzSignature and get the News & letters.
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
                    backgroundColor: "#2191D0",
                    padding: 1,
                    borderRadius: 50,
                  }}
                  position="end"
                >
                  <Image width={25} height={25} src={Assests.InputArrow} alt="image_here" />
                </InputAdornment>
              }
            />
          </Grid>
        </Grid>
        <Box
          mt={8}
          component={"div"}
          sx={{
            borderTop: "1px solid #000",
            width: "100%",
            paddingY: "10px",
          }}
        />
        <Box>
          <Text fontWeight="700" fontSize="18px" color="#000">
            Copyright © {new Date().getFullYear()} EzSignature
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
