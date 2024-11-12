import Grid  from "@mui/material/Grid2";
import React,{FC} from "react";
import Text from "@/app/components/text";
import Button from "@/app/components/button";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import FAQs from "@/app/components/faqs";
import MoreQuestion from "@/app/components/more question";
const ContactUs :FC = ()=>{
    return(
        <main className="contactUS">
            <Navbar/>
            {/* Grid 1 with the backgroound image */}
            <Grid paddingX={3} paddingY={6} component={"div"} className="grid_1" justifyContent={"center"} alignItems={"center"} textAlign={"center"} >
                   <Text className="head_1">We&apos;d love to hear from you</Text>
                   <Text className="text_1">There&apos;s an entire team dedicated to making your life easier, for free. But don&apos;t take our word for it — use the link to the Help-Center below to reach out to us and see for yourself.</Text>
                   <Button className="button">START SIGNING NOW</Button>
              </Grid>
            {/* --------------------------------- */}
            <FAQs/>
            <MoreQuestion/>
            <Footer/>
        </main>
    )
}

export default ContactUs