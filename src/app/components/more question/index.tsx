import React, { FC } from "react";
import Grid from "@mui/material/Grid2";
import Text from "../text";
import Button from "../button";
import { Box } from "@mui/material";
import Image from "next/image";

import Image_1 from "../../assests/images/more question.png";

const MoreQuestion: FC = () => {
  return (
    <Grid
      component={"div"}
      className="morequestion_Div"
    >
      <Box component={"div"} className="leftDiv">
        <Text className="head_1">MORE QUESTIONS?</Text>
        <Text className="text_1">The Ezsignature platform comes with an extensive Help-Center focused 
         on answering any questions you may have — maybe even before you have them. </Text>
        <Button className="button"> Enter Help Center </Button>
      </Box>
      <Box component={"div"} className="rightDiv">
        <Image
          style={{ width: "100%", height: "100%", objectFit:"contain" }}
          src={Image_1}
          alt="image_here"
        />
      </Box>
    </Grid>
  );
};

export default MoreQuestion;
