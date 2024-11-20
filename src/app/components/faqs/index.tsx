import { FC } from "react";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import Text from "../text";
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
    <Box component={"div"} mt={mt}>
      <Box component={"img"} src={Assests.FAQ.src} alt="FAQ Illustration" />
      <Typography fontSize={{xs:"38px",md:"58px"}} fontWeight="700" margin={"30px 0"} className="head_1">{heading}</Typography>
      <Grid
        container
        rowSpacing={6}
        columnSpacing={3}
        alignItems={"center"}
        justifyContent={"space-between"}
        component={"div"}
      >
        {faqs?.map((faq, index) => (
          <Box component={"div"} key={`${faq.question}_${index}`} m={{sx:"auto",sm:0}} sx={{display:"flex",justifyContent:'center',flexDirection:'column',gap:'10px',boxSizing:"border-box", border:"1px solid #252525", width:{xs:"100%",sm:"90%",md:"47%"}, p:"40px", borderRadius:"50px", height:{xs:"100%",sm:"240px"}}} >
            <Text fontWeight="600" fontSize="24px">{faq.question}</Text>
            <Text fontSize="16px" marginTop={8}>{faq.answer}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default FAQs;
