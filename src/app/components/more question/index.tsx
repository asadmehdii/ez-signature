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
      component={"div"}
      container
      bgcolor={"#F3FEFD"}
      paddingX={{xs:2,sm:5,lg:"100px"}}
      justifyContent={{xs:"center",xl:"space-between"}}
      flexDirection={{xs:"column-reverse",xl:"row"}}
      alignItems={"center"}
      py={8}
      rowGap={4}
      mt={mt}
      mb={mb}
    >
      <Box component={"div"} maxWidth={812}>
        <Typography fontSize={{xs:"34px",md:"60px"}} fontWeight="700">MORE QUESTIONS?</Typography>
        <Typography mt={2} fontSize={{xs:"18px",md:"24px"}} fontWeight="500">The Ezsignature platform comes with an extensive Help-Center focused 
         on answering any questions you may have — maybe even before you have them. </Typography>
        <Button style={{marginTop:'30px'}} borderRadius={19} width={288} height={70} backgroundColor="#263238" color="#fff" fontSize={24} fontWeight="500"> Enter Help Center </Button>
      </Box>
      <Box  component={"img"} sx={{ width: {xs:"90%",sm:"350px"}, height: {xs:"90%",sm:"350px"},  }} src={Assests.MoreQuestion.src} alt="image_here"/>
    </Grid>
  );
};

export default MoreQuestion;
