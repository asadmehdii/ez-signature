import React from "react"
import { Box,Grid2 as Grid, Typography } from "@mui/material"
import ContentBox from "@/app/components/contentBox"
import Footer from "@/app/components/footer"
import MoreQuestion from "@/app/components/more question"
import Navbar from "@/app/components/navbar"
import SignAnytime from "@/app/components/signAnytime"
import BlogsCards from "../blogs/blogsCards"
import { BlogCardData } from "../blogs/content"
import BlogDetails from "./blogDetail"


const BlogExtended:React.FC = ()=>{
    return(
        <main>
        <Navbar/>
        <ContentBox>
        <Grid container mt={5} justifyContent={"space-between"} alignItems={"flex-start"}>
        <Grid size={{xs:12,md:7,lg:8}}><BlogDetails/></Grid>
            <Grid size={{xs:12,md:4.5,lg:3.5}} container flexDirection={"column"}>
               <Typography fontSize={29} fontWeight={700} fontFamily={"var(--mada-text)"} >Featured Blogs</Typography>
               <Box m={{xs:"auto",md:0}}>{BlogCardData.filter((_, index) => index !== 4).map((values)=><BlogsCards key={values.title} data={values} />)}</Box></Grid>
        </Grid>
        </ContentBox>
        <MoreQuestion mt={5}/>
        <SignAnytime/>
        <Footer/>
        </main>
    )
}

export default BlogExtended