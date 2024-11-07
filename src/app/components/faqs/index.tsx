import { FC } from "react";
import { Box, Grid2 as Grid } from "@mui/material";
import Image from "next/image";
import Text from "../text";
import Card from "../card";
import { faqsQuestion, faqsQuestionProps } from "./content";
import Assests from "@/app/assests/images";

const FAQs: FC = () => {
  return (
    <Box component={"div"} marginY={3} className="FAQsComponent" padding={3}>
      <Image src={Assests.FAQ} alt="img_here" />
      <Text
        fontSize="65px"
        fontWeight="700"
        margin={"30px 0"}
        className="head_1"
      >
        Frequently Asked Questions?
      </Text>
      <Grid
        rowSpacing={6}
        component={"div"}
        columnSpacing={3}
        container
        alignItems={"center"}
      >
        {faqsQuestion.map((value: faqsQuestionProps, index: number) => {
          return (
            <Card key={`${value.question}_${index}`} className="faqscard">
              <Text className="Cardhead_1">{value.question}</Text>
              <Text className="text_1">{value.answer}</Text>
            </Card>
          );
        })}
      </Grid>
    </Box>
  );
};

export default FAQs;
