"use client"
import React, { FC,useState } from "react";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Grid from "@mui/material/Grid2";
import Text from "@/app/components/text";
import Button from "@/app/components/button";
import { Box } from "@mui/material";
import Image from "next/image";
import Card from "@/app/components/card";
import {PaperlessCard, financialDepartments, salesDepartments, legalDepartments, hrDepartments,Category } from "./content";

// imoprt Image here
import CardImage_1 from "../../assests/images/home/cardImage1.svg";
import CardImage_2 from "../../assests/images/home/cardImage2.svg";
import CardImage_3 from "../../assests/images/home/cardImage3.svg";
import CardImage_4 from "../../assests/images/home/cardImage4.svg";
import BusinessImage_1 from "../../assests/images/home/bussinessImage1.png";
import BusinessImage_2 from "../../assests/images/home/bussinessImage2.png";
import BusinessImage_3 from "../../assests/images/home/bussinessImage3.png";
import BusinessImage_4 from "../../assests/images/home/bussinessImage4.png";
import BusinessImage_5 from "../../assests/images/home/bussinessImage5.png";
import BusinessImage_6 from "../../assests/images/home/bussinessImage6.png";
import BusinessImage_7 from "../../assests/images/home/bussinessImage7.png";
import HomeImage_1 from "../../assests/images/home/homeIImage_1.svg";
import FinancialDeppartment from "../../assests/images/home/financtional.png";
import Star from "../../assests/images/home/mdi_star-four-points-small.png";
import ArrowIcon from "../../assests/images/home/arrowIcon.png";
import Offer_1 from "../../assests/images/home/offer_1.png";
import Offer_2 from "../../assests/images/home/offer_2.png";
import Offer_3 from "../../assests/images/home/offer_3.png";
import SignAnytime from "@/app/components/signAnytime";
import ContentBox from "@/app/components/contentBox";
import Route from "@/app/utils/routes";
import Assests from "@/app/assests/images";
import { useRouter } from "next/navigation"; 

const businessCategories = [
  { image: BusinessImage_1, department: "Financial", data: financialDepartments },
  { image: BusinessImage_3, department: "Sales", data: salesDepartments },
  { image: BusinessImage_5, department: "Legal", data: legalDepartments },
  { image: BusinessImage_4, department: "HR", data: hrDepartments },



];
const Home: FC = () => {
  const router = useRouter();
  const [selectedDepartment, setSelectedDepartment] = useState(salesDepartments);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleTakeTour = () => {
    router.push("/features?feature=Electronic-Signatures");
  };
  return (
    <main className="home">
      <Navbar />
      {/* grid_1 start here */}
      <Grid
        component={"div"}
        className="grid_1"
        container
        alignItems={"center"}
        paddingX={{xs:3,lg:"100px"}}
        justifyContent={"space-evenly"}
        flexDirection={{ xs: "column-reverse", md: "row" }}
      >
        <Grid m={"auto"} size={{ xs: 12, md: 6, lg: 6 }}>
          <Text fontSize="55px" fontWeight="800" className="head_1" style={{maxWidth:"829px"}}>
            Free electronic signatures at work, at home or on the go.
          </Text>
          <Text fontSize="22px" fontWeight="600" marginBottom={20} marginTop={20} className="text_1">
            Securely approve, send and sign documents online with EzSignature
          </Text>
          <Box component={"div"} display={"flex"} columnGap={2}>
            <Button
              backgroundColor="var(--secondary-color)"
              hoverStyle={{bgcolor:"#fff",border:"1px solid var(--secondary-color)",color:"var(--secondary-color)"}} 
              color="#fff"
              height={58}
              width={224}
              borderRadius={"15px"}
              to={Route.SIGNUP}
            >
              Sign up for free
            </Button>
            <Button
              hoverStyle={{bgcolor:"var(--text-color)",borderColor:"transparent",color:"#fff"}}
              type="outlined"
              borderWidth={1}
              borderColor="#000000"
              height={58}
              width={184}
              borderRadius={"15px"}
              to={Route.ELECTRONIC_SIGNATURES}
            >
              Take a tour
            </Button>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={{ width: "auto", height: "100%" }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            src={HomeImage_1}
            alt="image_here"
          />
        </Grid>
      </Grid>
      {/* ----------------- */}

      {/* grid_2 start here */}
      <Grid
        component={"div"}
        className="grid_2"
        container
        alignItems={"center"}
        mt={8}
        paddingX={{xs:3,lg:"100px"}}
      >
        <Text className="head_1" fontSize="55px" fontWeight="700">
          Easy to use, reliable, And completely secure
        </Text>
        <Text className="text_1" fontSize="26px" fontWeight="500" marginTop={20} marginBottom={30}>
          It is a long established fact that a reader will be distracted by the
          readable <br className="removeBreak" />
          content of a page when looking at its layout.
        </Text>
        <Grid container margin={"auto"} rowSpacing={5} columnSpacing={3} paddingBottom={5}>
          <Card className="card" padding={25} width={"450px"} height={"350px"} borderWidth={1} borderColor="#cccccc" borderRadius={57}>
            <Text className="cardHead" fontWeight="700" fontSize="35px"> eSign from anywhere </Text>
            <Text fontWeight="500" fontSize="20px" marginTop={15} marginBottom={25} className="cardText">
              Upload documents from device or cloud and your signature with ease
              : draw: upload. or type it on your mobile
            </Text>
            <Image src={CardImage_1} alt="image_here"
              style={{ width: "100%", height: "50%", objectFit: "fill", margin: "auto",}} />
          </Card>
          <Card className="card" padding={25} width={"450px"} height={"350px"} borderWidth={1} borderColor="#cccccc" borderRadius={57}>
            <Text fontWeight="700" className="cardHead" fontSize="35px"> Capture Legally eSignature </Text>
            <Text fontWeight="500" fontSize="20px" marginTop={15} marginBottom={25} className="cardText">
              Upload documents from device or cloud and your signature with ease
              : draw: upload. or type it on your mobile
            </Text>
            <Image src={CardImage_2} alt="image_here"
              style={{width: "100%", height: "50%", objectFit: "fill", margin: "auto",}}
            />
          </Card>
        </Grid>
        <Grid container marginLeft={"auto"} rowSpacing={5} columnSpacing={3}>
          <Card
            className="card"
            padding={25}
            width={"450px"}
            height={"350px"}
            borderWidth={1}
            borderColor="#cccccc"
            borderRadius={57}
          >
            <Text fontWeight="700" className="cardHead" fontSize="35px">
              Fast Document Sharing
            </Text>
            <Text
              className="cardText"
              fontWeight="500"
              fontSize="20px"
              marginTop={15}
              marginBottom={25}
            >
              Upload documents from device or cloud and your signature with ease
              : draw: upload. or type it on your mobile
            </Text>
            <Image
              src={CardImage_3}
              alt="image_here"
              style={{
                width: "100%",
                height: "50%",
                objectFit: "fill",
                margin: "auto",
              }}
            />
          </Card>
          <Card
            className="card"
            padding={25}
            width={"450px"}
            height={"350px"}
            borderWidth={1}
            borderColor="#cccccc"
            borderRadius={57}
          >
            <Text fontWeight="700" className="cardHead" fontSize="35px">
              Securing Signing Priority
            </Text>
            <Text
              className="cardText"
              fontWeight="500"
              fontSize="20px"
              marginTop={15}
              marginBottom={25}
            >
              Upload documents from device or cloud and your signature with ease
              : draw: upload. or type it on your mobile
            </Text>
            <Image
              src={CardImage_4}
              alt="image_here"
              style={{
                width: "100%",
                height: "50%",
                objectFit: "fill",
                margin: "auto",
              }}
            />
          </Card>
        </Grid>
      </Grid>
      {/* ----------------- */}

      {/* grid_3 start here */}
      <Grid
        component={"div"}
        className="grid_3"
        container
        alignItems={"center"}
        mt={12}
        paddingX={{xs:3,lg:"100px"}}
      >
        <Text className="head_1" fontSize="60px" fontWeight="700">
          Go paperless with trusted electronic signatures
        </Text>
        <Text className="text_1" fontSize="26px" fontWeight="500" marginTop={20} marginBottom={20}>
          Individuals&#39; small & medium-sized businesses&#39; and large
          corporations – EzSignature is tailored to all.{" "}
          <br className="removeBreak" />
          We are here to help you securely sign documents online &#39; get
          paperwork out of the way and close important deals faster.
        </Text>
        <Grid container justifyContent={"center"} margin={"auto"} columnSpacing={2} rowSpacing={5}>
          {PaperlessCard.map((data)=>{
            return(
           <Box key={data.text} height="380px" width={{xs:"300px",md:"29%"}}
             style={{border:'1px solid #25252540',borderRadius:"60px",padding:"10px", backgroundColor:"#fcfcfc",textAlign: "center", display: "flex", justifyContent: "space-evenly",alignItems: "center", flexDirection: "column",}}>
            <Image style={{background:`url("${Assests.SemiEllipse.src}") no-repeat`,backgroundPosition:"center bottom",padding:"3px 15px" }} src={data.icon} alt="img_here" />
            <Text fontSize="24px" fontWeight="700"> {data.title} </Text>
            <Text fontSize="16px" fontWeight="500" color="#232323">{data.text}</Text>
            {/* <Button fontSize={16} fontWeight="700" height={44} width={160} borderRadius={"19px"} hoverStyle={{color:"var(--text-color)",bgcolor:'#fff',border:"1px solid var(--text-color)"}} backgroundColor="#000" color="#fff"> Select Now </Button> */}
          </Box>
          )})}
        </Grid>
      </Grid>
      {/* ----------------- */}
      <ContentBox mt={12}><SignAnytime homeScreen /></ContentBox>
      {/* ----------------- */}

      <Grid container flexDirection={{xs:"column",lg:"row"}} justifyContent={{xs:"flex-start",lg:"space-between"}} alignItems={{lg:"center"}} mt={12} paddingX={{xs:3,lg:"30px",xl:"100px"}} component="div" className="offerCard_Grid">
        <Grid>
          <Text fontSize="55px" fontWeight="800" className="head_1">
            What We Offer
          </Text>
          <Text
            fontSize="22px"
            fontWeight="600"
            marginBottom={20}
            marginTop={20}
            className="text_1"
            style={{maxWidth:"520px"}}
          >
            In the EzSignature we create the best, easy to use and useful online
            document with every custom info of your business.
          </Text>
        </Grid>
        <Grid maxWidth={{xs:"90%",lg:"600px"}} >
          <Grid container gap={3} justifyContent={"center"}>
            <Card
              className="card_1"
              borderRadius={20}
            >
              <Image src={Offer_1} alt="image_here" />
              <Text fontSize={"18px"} fontWeight="700">
                High-Level Security
              </Text>
              <Text fontSize={"12px"} fontWeight="500">
                Your data is encrypted using 256-bit SSL and handled by a
                closely monitored infrastructure.
              </Text>
              <Button
                width={93}
                borderRadius={"16px"}
                height={34}
                backgroundColor={"#222222"}
                fontSize={12}
                color="#fff"
                fontWeight="700"
                to={Route.SECURITY}

              >
                Learn more
              </Button>
            </Card>
            <Card
              className="card_1"
            >
              <Image src={Offer_2} alt="image_here" />
              <Text fontSize={"18px"} fontWeight="700">
                Automate Your Documents
              </Text>
              <Text fontSize={"12px"} fontWeight="500">
                Boost your efficiency by automating both internal and
                client-facing signatures and approvals. infrastructure.
              </Text>
              <Button
                width={93}
                borderRadius={16}
                height={34}
                backgroundColor={"#222222"}
                fontSize={12}
                color="#fff"
                fontWeight="700"
                to={Route.FEATURE}

              >
                Learn more
              </Button>
            </Card>
            <Card
              className="card_1"
            >
              <Image src={Offer_3} alt="image_here" />
              <Text fontSize={"18px"} fontWeight="700">
                Electronic Signatures
              </Text>
              <Text fontSize={"12px"} fontWeight="500">
                Use any device to sign any document — signing with Docu Sign is
                simple, quick and secure
              </Text>
              <Button
                width={93}
                borderRadius={16}
                height={34}
                backgroundColor={"#222222"}
                fontSize={12}
                color="#fff"
                fontWeight="700"
                to={Route.ELECTRONIC_SIGNATURES}
              >
                Learn more
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      {/* grid_5 ---- Discover how EzSignature can help you run your business & financtional department */}
      <Grid component={"div"} className="grid_5" mt={12} paddingX={{ xs: 3, lg: "100px" }}>
      <h1>Discover how EzSignature can help you run your business</h1>

      <Grid container gap={2} alignItems="center" mt={5} justifyContent="center">
        {businessCategories.map((category, index) => (
          <Image
            key={index}
            src={category.image}
            alt={category.department}
            style={{
              width: "146px",
              height: "90px",
              objectFit: "contain",
              cursor: "pointer",
              borderRadius: 6,
              border: "2px solid",
              borderColor: selectedCategory === index ? "black" : "transparent",
              backgroundColor: selectedCategory === index ? "white" : "white",
              transition: "border 0.3s ease-in-out"
            }}
            onClick={() => {
              setSelectedCategory(index);
              setSelectedDepartment(category.data);
            }}
          />
        ))}
      </Grid>

      <Box textAlign="center" my={2}>
  <Text fontWeight="bold" >
    {selectedCategory !== null && businessCategories[selectedCategory]
      ? `${businessCategories[selectedCategory].department} Department`
      : 'Sales Department'}
  </Text>
</Box>



<Box
  component="div"
  sx={{
    mx: "auto",
    maxWidth: "1400px",
    width: "100%",
    height: "calc(fit-content + 350px)",
    background: "linear-gradient(101.82deg,#263238 2.51%,#66efdc 39.22%,#263238 97.85%)",
    borderRadius: "78px",
    padding: 0.2,
  }}
>
  <Box
    sx={{
      width: "100%",
      position: "relative",
      height: "100%",
      mx: "auto",
      bgcolor: "#f3fefd",
      borderRadius: "78px",
      overflow: "hidden", // Prevent content overflow
    }}
  >
    <Grid
      container
      flexDirection={{ xs: "column", md: "row" }}
      rowGap={4} // Increased gap for small devices
      justifyContent={{ xs: "center", md: "space-evenly" }}
      alignItems={{ xs: "center", md: "flex-start" }}
      py={{ xs: 4, md: 8 }}
      px={{ xs: 2, sm: 4 }}
    >
      <Box
        mt={{ xs: 2, sm: 0 }}
        display="flex"
        flexDirection="column"
        rowGap={2}
        width={{ xs: "100%", md: "auto" }} // Take full width on small screens
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        {selectedDepartment &&
          selectedDepartment.leftSide.map((item: string) => (
            <Box
              key={item}
              display="flex"
              columnGap={1}
              alignItems="center"
              width="100%" // Ensures the content doesn't shrink
            >
              <Image src={Star} width={24} height={24} alt="image_here" />
              <span
                style={{
                  fontSize: "16px", // Slightly smaller on small devices
                  fontWeight: "600",
                  wordBreak: "break-word", // Break long words
                }}
              >
                {item}
              </span>
            </Box>
          ))}
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        rowGap={2}
        width={{ xs: "100%", md: "auto" }}
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        {selectedDepartment &&
          selectedDepartment.rightSide.map((item: string) => (
            <Box
              key={item}
              display="flex"
              columnGap={1}
              alignItems="center"
              width="100%"
            >
              <Image src={Star} width={24} height={24} alt="image_here" />
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  wordBreak: "break-word",
                }}
              >
                {item}
              </span>
            </Box>
          ))}
      </Box>
    </Grid>
  </Box>
</Box>

    </Grid>



      {/* ----------------- */}
      <ContentBox mt={12}>
         <SignAnytime homeScreen maxWidth={450}  imageSrc={Assests.TakeFullControl} isBtn={false} heading="Take Full Control Of Your Documents" text="The built-in document editor gives you all the tools you need to
            securely edit, send and sign documents in seconds."/>
      </ContentBox>      
      {/* ----------------- */}
      <ContentBox>
      <Grid container alignItems={"flex-end"} justifyContent={"space-between"} mt={12} columnGap={2} rowGap={4}>
        {Category.map((item)=>
        <Box key={item.text} display={"flex"} width={{xs:"100%",sm:"200px"}} rowGap={3} 
        flexDirection={"column"} justifyContent={"center"} alignItems={"center`"}
         onClick={() => router.push(item.link)}
        >
          <Box sx={{padding:4,background:`url("${Assests.CategEllipseBg.src}") no-repeat`,backgroundPosition:"bottom center" }} m={"auto"} component={"img"} src={item.icon.src} alt="img_here"/>
          <Text textAlign="center" style={{width:"100%"}} fontSize="21px" fontWeight="700">{item.text}</Text>
        </Box> 
        )}
      </Grid>
      </ContentBox>
      <Box component="div" display="flex" justifyContent="center" my={12}>
        <Button backgroundColor={"#263238"} borderRadius={"19px"} height={69} hoverStyle={{border:"1px solid var(--text-color)",bgcolor:"#fff",
          color:"var(--text-color)"}} width={269} color="#fff" fontSize={18} fontWeight={"700"}
          to={Route.FEATURE}
          >
          Browse All Features
        </Button>
      </Box>
      <Footer />
    </main>
  );
};

export default Home;