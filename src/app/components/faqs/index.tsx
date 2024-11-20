import { FC } from "react";
import { Box, Grid2 as Grid } from "@mui/material";
import Image from "next/image";
import Text from "../text";
import Card from "../card";
import Assests from "@/app/assests/images";

// Define the type for props
type FAQItem = {
  question: string;
  answer: string;
};

type FAQsProps = {
  faqs: FAQItem[];
  heading?:string
  mt?:number
};

const FAQs: FC<FAQsProps> = ({ faqs,heading,mt }) => {
  return (
    <Box px={3} component={"div"} mt={mt} className="FAQsComponent">
      <Image src={Assests.FAQ} alt="FAQ Illustration" />
      <Text fontSize="65px" fontWeight="700" margin={"30px 0"} className="head_1">{heading}</Text>
      <Grid
        container
        rowSpacing={6}
        columnSpacing={3}
        alignItems={"center"}
        component={"div"}
      >
        {faqs?.map((faq, index) => (
          <Card key={`${faq.question}_${index}`} className="faqscard">
            <Text className="Cardhead_1" fontWeight="600" fontSize="24px">
              {faq.question}
            </Text>
            <Text className="text_1" fontSize="16px" marginTop={8}>
              {faq.answer}
            </Text>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default FAQs;
