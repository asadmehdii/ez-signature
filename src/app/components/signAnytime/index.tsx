import React, { FC } from "react";
import Grid from "@mui/material/Grid2";
import Text from "../text";
import Button from "../button";
import { Box } from "@mui/material";
import Image from "next/image";

import Image_1 from "../../assests/images/signIn.png";

const SignAnytime: FC = () => {
  return (
    <Grid
      component={"div"}
      className="SignAnytime_Div"
    >
      <Box component={"div"} className="leftDiv">
        <Text className="head_1">Sign anytime, anywhere, on any device</Text>
        <Text className="text_1">Experience the ease of signing your documents with EzSignature anytime, anywhere. Use your PC, tablet, or mobile device for secure signing at home, in the office, or on the go. </Text>
        <Button className="button">Sign Up for free</Button>
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

export default SignAnytime;
