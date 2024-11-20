import React,{FC} from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import FAQs from "@/app/components/faqs";
import MoreQuestion from "@/app/components/more question";
import PressLegalBanner from "@/app/components/PressLegalBanner";
import {ContactFaqsQuestion} from "./content"
import ContentBox from "@/app/components/contentBox";
const ContactUs :FC = ()=>{
    return(
        <main className="contactUS">
            <Navbar/>
            <PressLegalBanner textWidth={970} heading="We&apos;d love to hear from you" text="There&apos;s an entire team dedicated to making your life easier, for free. But don&apos;t take our word for it — use the link to the Help-Center below to reach out to us and see for yourself." isButton={true} btnText="START SIGNING NOW" />
            <ContentBox><FAQs mt={8} faqs={ContactFaqsQuestion} heading="Frequently Asked Questions?"/></ContentBox>
            <MoreQuestion mt={8}/>
            <Footer/>
        </main>
    )
}

export default ContactUs