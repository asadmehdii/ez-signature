import React, { FC } from "react";
import Grid from "@mui/material/Grid2";
import Text from "../text";
import { Box, Input, InputAdornment } from "@mui/material";
import Image from "next/image";
import Assests from "@/app/assests/images";
import ContentBox from "../contentBox";
import Navigate from "../linkText";
import { General, Developer, PressLegal ,MainFeature } from "./content";


const Footer: FC = () => {
  return (
    <ContentBox sx={{bgcolor:"#2191D0",pt:10,pb:3,}}>
      <Grid container rowSpacing={6} sx={{ justifyContent: { sm: "flex-start", lg: "center",},}}>
        <Grid size={{ sm: 5, md: 3, lg: 2 }}>
          <Text color="#fff" fontWeight="700" fontSize={"24px"} marginBottom={25}>General</Text>
        <Box sx={{display: { xs: "flex", sm: "block" },flexWrap: { xs: "wrap", sm: "nowrap" }, columnGap: 2,}}>
            {General.map((item)=><Navigate key={item.text} sx={{mb:1.5}} color="#fff" fontSize={18} fontWeight="500" text={item.text} to={item.navigate}/>)}
        </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 5, md: 3, lg: 2.5 }}>
          <Text color="#fff" fontWeight="700" fontSize={"24px"} marginBottom={25}> Main Features </Text>
          <Box sx={{display: { xs: "flex", sm: "block" },flexWrap: { xs: "wrap", sm: "nowrap" }, columnGap: 2,}}>
            {MainFeature.map((item)=><Navigate key={item.text} sx={{mb:1.5}} color="#fff" fontSize={18} fontWeight="500" text={item.text} to={item.navigate}/>)}
        </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 5, md: 3, lg: 2.5 }}>
          <Text color="#fff" fontWeight="700" fontSize={"24px"} marginBottom={25}> Developer </Text>
          <Box sx={{display: { xs: "flex", sm: "block" },flexWrap: { xs: "wrap", sm: "nowrap" }, columnGap: 2,}}>
            {Developer.map((item)=><Navigate key={item.text} sx={{mb:1.5}} color="#fff" fontSize={18} fontWeight="500" text={item.text} to={item.navigate}/>)}
        </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 5, md: 3, lg: 2 }}>
          <Text color="#fff" fontWeight="700" fontSize={"24px"} marginBottom={25}> Press & Legal </Text>
          <Box sx={{display: { xs: "flex", sm: "block" },flexWrap: { xs: "wrap", sm: "nowrap" }, columnGap: 2,}}>
            {PressLegal.map((item)=><Navigate key={item.text} sx={{mb:1.5}} color="#fff" fontSize={18} fontWeight="500" text={item.text} to={item.navigate}/>)}
        </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3}}>
          <Text color="#fff" fontWeight="700" fontSize={"24px"} marginBottom={30}> Subscribe </Text>
          <Text color="#fff" fontWeight="500" fontSize={"18px"} marginBottom={30}>Subscribe now the EzSignature and get the News & letters.</Text>
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
      <Box mt={8} component={"div"} sx={{borderTop: "1px solid #fff", width: "100%", paddingY: "10px",}}/> 
        <Box sx={{marginLeft: { xs: "30px", lg: "80px", sm: "20px" },}}>
        <Text fontWeight="700" fontSize="18px" color="#fff">
          Copyright © {new Date().getFullYear()} EzSignature
        </Text>
      </Box>
    </ContentBox>
  );
};

export default Footer;
