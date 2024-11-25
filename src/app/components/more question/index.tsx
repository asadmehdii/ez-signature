import React, { FC } from "react";
import Grid from "@mui/material/Grid2";
import Button from "../button";
import { Box, Typography } from "@mui/material";
import Assests from "@/app/assests/images";

type MoreQuestionProps = {
  mt?:number;
  mb?:number;
}

const MoreQuestion: FC<MoreQuestionProps> = ({mt,mb}) => {
  return (
    <Grid
    container
    sx={{
      bgcolor:"#F3FEFD",
      flexWrap:"nowrap",
      paddingX: { xs: 2, sm: 5, lg: "100px" },
      justifyContent: { xs: "center", xl: "space-between" },
      flexDirection: { xs: "column-reverse", md: "row" },
      alignItems: "center",
      py: 8,
      rowGap: 5,
      mt: mt,
      mb: mb,
    }}
    >
      <Box component={"div"} maxWidth={812}>
        <Typography fontFamily={"var(--text-mada)"} fontSize={{xs:"38px",md:"40px",lg:"60px"}} fontWeight="700">MORE QUESTIONS?</Typography>
        <Typography mt={2} fontFamily={"var(--text-mada)"} fontSize={{xs:18,md:16,lg:18}} fontWeight="600">The Ezsignature platform comes with an extensive Help-Center focused 
         on answering any questions you may have — maybe even before you have them. </Typography>
        <Button style={{marginTop:'30px'}} borderRadius={19} width={288} height={70} backgroundColor="#263238" color="#fff" fontSize={24} fontWeight="500"> Enter Help Center </Button>
      </Box>
      <Box  component={"img"} sx={{zIndex:10, width: {xs:"100%",sm:"450px",md:"45%",xl:"520px"}, height: {xs:"100%",sm:"100%",objectFit:"cover"}}} src={Assests.MoreQuestion.src} alt="image_here"/>
    </Grid>
  );
};

export default MoreQuestion;
