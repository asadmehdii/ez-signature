"use client"
import Footer from "@/app/components/footer"
import Navbar from "@/app/components/navbar"
import { Box, Grid2 as Grid, Typography } from "@mui/material"
import Button from "@/app/components/button"
import Assests from "@/app/assests/images"
import ContentBox from "@/app/components/contentBox"
import {CategoryButtonContent,BlogCardData} from"./content"
import { useState } from "react"
import BlogsCards from "./blogsCards"
import MoreQuestion from "@/app/components/more question"
import SignAnytime from "@/app/components/signAnytime"

const Blogs:React.FC = ()=>{
    const [selectItem,setSelectItem] = useState<string>("API")
    return(
  <Box>
    <Navbar/>
    <ContentBox>
        {/* Top banner and text */}
    <Grid pb={3} borderBottom={"1px solid #606060"} container flexWrap={{xs:"wrap",md:"nowrap"}} flexDirection={{xs:"column-reverse",md:"row"}} alignItems={{xs:"flex-start",md:"center"}} justifyContent={{xs:"flex-start",md:"space-between"}} rowGap={4}>
        <Box sx={{maxWidth:{xs:"100%",md:550}}}>
          <Typography fontFamily={"var(--mada-text)"} sx={{fontSize:{xs:38,md:55}}} lineHeight={"normal"} fontSize="55px" fontWeight="800" >
          Welcome to EzSignatur Blog
          </Typography>
          <Typography fontFamily={"var(--mada-text)"}  fontSize="22px" fontWeight="600" mt={4} mb={4}>
            Securely approve, send and sign documents online with EzSignature
          </Typography>
          <Box component={"div"} display={"flex"} columnGap={2}>
            <Button backgroundColor="var(--secondary-color)" color="#fff" height={76} width={206} borderRadius={15}>
              Sign up for free
            </Button>
            <Button borderWidth={1} borderColor="#000000" height={76} width={206} borderRadius={15}>
              Take a tour
            </Button>
          </Box>
        </Box>
          <Box  component={"img"} sx={{objectFit:'cover'}} width={{xs:"100%",md:530}} height={431} m={{xs:"auto",md:0}}  src={Assests.HomeImage_1.src}
            alt="image_here"/>
    </Grid>
      {/* ------------------------------------ */}
      {/* -----------Category Buttons------------- */}
      <Grid mt={5} container justifyContent={"center"}  columnGap={{xs:1.5,sm:3}} rowGap={0} >
         {CategoryButtonContent.map((item:string)=><Box onClick={()=>setSelectItem(item)} component="p" key={item} sx={[Styles.categoryBtn,item === selectItem && Styles.categoryActiveBtn]}>{item}</Box>)}
      </Grid>
      {/* ------------------------------------ */}
      {/* -------------Blogs Cards---------- */}
      <Grid mt={2} container rowGap={3} columnGap={3} justifyContent={'center'}>
      {BlogCardData.map((values)=><BlogsCards key={values.title} data={values} />)} 
     </Grid>
      {/* ------------------------------------ */}
    </ContentBox>
    <MoreQuestion mt={5}/>
    <SignAnytime/>
    <Footer/>
    </Box>
    )
}


const Styles ={
    categoryBtn:{
        border:"1px solid #606060",
        width:"fit-content",
        height:"43px",
        textAlign:"center",
        borderRadius:"9px",
        fontSize:18,
        fontWeight:"600",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"#606060",  
        px:{xs:2,sm:5},
        cursor:"pointer",
        "&:hover":{
            borderColor:"#21D1B3"
        }     
    },
    categoryActiveBtn:{
       backgroundColor:"#21D1B3",
       color:"#fff",     
       borderColor:"#21D1B3"

    } 
}

export default Blogs