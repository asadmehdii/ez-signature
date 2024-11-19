import React, { FC } from "react";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Grid from "@mui/material/Grid2";
import Text from "@/app/components/text";
import Button from "@/app/components/button";
import { Box } from "@mui/material";
import Image from "next/image";
import Card from "@/app/components/card";

// imoprt Image here
import CardImage_1 from "../../assests/images/home/cardImage1.png";
import CardImage_2 from "../../assests/images/home/cardImage2.png";
import CardImage_3 from "../../assests/images/home/cardImage3.png";
import CardImage_4 from "../../assests/images/home/cardImage4.png";
import CardImage_5 from "../../assests/images/home/cardImage5.png";
import CardImage_6 from "../../assests/images/home/cardImage6.png";
import CardImage_7 from "../../assests/images/home/cardIimage7.png";
import BusinessImage_1 from "../../assests/images/home/bussinessImage1.png";
import BusinessImage_2 from "../../assests/images/home/bussinessImage2.png";
import BusinessImage_3 from "../../assests/images/home/bussinessImage3.png";
import BusinessImage_4 from "../../assests/images/home/bussinessImage4.png";
import BusinessImage_5 from "../../assests/images/home/bussinessImage5.png";
import BusinessImage_6 from "../../assests/images/home/bussinessImage6.png";
import BusinessImage_7 from "../../assests/images/home/bussinessImage7.png";
import HomeImage_1 from "../../assests/images/home/homeIImage_1.svg";
import HomeImage_2 from "../../assests/images/home/homeIImage_2.png";
import Categ_1 from "../../assests/images/home/categ_1.png"
import Categ_2 from "../../assests/images/home/categ_2.png";
import Categ_3 from "../../assests/images/home/categ_3.png";
import Categ_4 from "../../assests/images/home/categ_4.png";
import FinancialDeppartment from "../../assests/images/home/financtional.png";
import Star from "../../assests/images/home/mdi_star-four-points-small.png";
import ArrowIcon from "../../assests/images/home/arrowIcon.png";
import Offer_1 from "../../assests/images/home/offer_1.png";
import Offer_2 from "../../assests/images/home/offer_2.png";
import Offer_3 from "../../assests/images/home/offer_3.png";

const Home: FC = () => {
  return (
    <main className="home">
      <Navbar />
      {/* grid_1 start here */}
      <Grid
        component={"div"}
        className="grid_1"
        container
        alignItems={"center"}
        paddingY={"5"}
        paddingX={{xs:3,lg:"100px"}}
        justifyContent={"space-evenly"}
        flexDirection={{ xs: "column-reverse", md: "row" }}
      >
        <Grid m={"auto"} size={{ xs: 12, md: 6, lg: 6 }}>
          <Text fontSize="55px" fontWeight="800" className="head_1" style={{maxWidth:"829px"}}>
            Free electronic signatures at work, at home or on the go.
          </Text>
          <Text
            fontSize="22px"
            fontWeight="600"
            marginBottom={20}
            marginTop={20}
            className="text_1"
          >
            Securely approve, send and sign documents online with EzSignature
          </Text>
          <Box component={"div"} display={"flex"} columnGap={2}>
            <Button
              backgroundColor="var(--secondary-color)"
              color="#fff"
              height={76}
              width={206}
              borderRadius={15}
            >
              Sign up for free
            </Button>
            <Button
              borderWidth={1}
              borderColor="#000000"
              height={76}
              width={206}
              borderRadius={15}
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
        paddingY={"5"}
        paddingX={{xs:3,lg:"100px"}}
      >
        <Text className="head_1" fontSize="55px" fontWeight="700">
          Easy to use, reliable, And completely secure
        </Text>
        <Text className="text_1" fontSize="26px" fontWeight="500" marginTop={20} marginBottom={20}>
          It is a long established fact that a reader will be distracted by the
          readable <br className="removeBreak" />
          content of a page when looking at its layout.
        </Text>
        <Grid container margin={"auto"} rowSpacing={5} columnSpacing={3} paddingBottom={"5"}>
          <Card
            className="card"
            padding={"20"}
            width={"450px"}
            height={"350px"}
            borderWidth={1}
            borderColor="#cccccc"
            borderRadius={57}
          >
            <Text className="cardHead" fontWeight="700" fontSize="35px">
              eSign from anywhere
            </Text>
            <Text
              fontWeight="500"
              fontSize="20px"
              marginTop={15}
              marginBottom={25}
              className="cardText"
            >
              Upload documents from device or cloud and your signature with ease
              : draw: upload. or type it on your mobile
            </Text>
            <Image
              src={CardImage_1}
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
            padding={"20"}
            width={"450px"}
            height={"350px"}
            borderWidth={1}
            borderColor="#cccccc"
            borderRadius={57}
          >
            <Text fontWeight="700" className="cardHead" fontSize="35px">
              Capture Legally eSignature
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
              src={CardImage_2}
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
        <Grid container marginLeft={"auto"} spacing={5}>
          <Card
            className="card"
            padding={"20"}
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
            padding={"20"}
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
        paddingY={"5"}
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
          <Card
            height="380px"
            width="300px"
            borderColor="#25252540"
            borderWidth={1}
            borderRadius={60}
            padding={"10"}
            backgroundColor="#fcfcfc"
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Image src={CardImage_5} alt="img_here" />
            <Text fontSize="24px" fontWeight="700">
              Individuals & Freelancers
            </Text>
            <Text fontSize="16px" fontWeight="500" color="#232323">
              Take control of your digital work and securely manage your
              documents in the cloud, regardless of the type of document that
              needs signing.
            </Text>
            <Button
              fontSize={16}
              fontWeight="700"
              height={44}
              width={160}
              borderRadius={19}
              backgroundColor="#000"
              color="#fff"
            >
              Select Now
            </Button>
          </Card>
          <Card
            height="380px"
            width="300px"
            borderColor="#25252540"
            borderWidth={1}
            borderRadius={60}
            padding={"10"}
            backgroundColor="#fcfcfc"
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Image src={CardImage_6} alt="img_here" />
            <Text fontSize="24px" fontWeight="700">
              Small & Medium Businesses
            </Text>
            <Text fontSize="16px" fontWeight="500" color="#232323">
              Focus on the really important parts of your business, accelerate
              sales and proposal paperwork, close deals faster and save more
              money.
            </Text>
            <Button
              fontSize={16}
              fontWeight="700"
              height={44}
              width={160}
              borderRadius={19}
              borderColor="#000"
              borderWidth={1}
              backgroundColor="#000"
              color="#fff"
            >
              Select Now
            </Button>
          </Card>
          <Card
            height="380px"
            width="300px"
            borderColor="#25252540"
            borderWidth={1}
            borderRadius={60}
            padding={"10"}
            backgroundColor="#fcfcfc"
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Image
              className="backgroundImage"
              src={CardImage_7}
              alt="img_here"
            />
            <Text fontSize="24px" fontWeight="700" marginTop={40}>
              Enterprises
            </Text>
            <Text fontSize="16px" fontWeight="500" color="#232323">
              Empower workers with secure signatures, reduce document turnaround
              time, save countless hours and preserve nature at the same time.
            </Text>
            <Button
              height={44}
              width={160}
              borderRadius={19}
              backgroundColor="#000"
              color="#fff"
              fontSize={16}
              fontWeight="700"
            >
              Select Now
            </Button>
          </Card>
        </Grid>
      </Grid>
      {/* ----------------- */}

      {/* grid_4 start here */}
      <Grid
        component={"div"}
        className="grid_4"
        container
        alignItems={"center"}
        paddingY={"5"}
        paddingX={{xs:3,lg:"100px"}}
        marginY={10}
        flexDirection={{ xs: "column-reverse", md: "row" }}
      >
        <Grid size={{ xs: 12, md: 5, lg: 6 }}>
          <Text fontSize="55px" fontWeight="800" className="head_1">
            Sign anytime, anywhere, on any device
          </Text>
          <Text
            fontSize="22px"
            fontWeight="600"
            marginBottom={20}
            marginTop={20}
            className="text_1"
          >
            Experience the ease of signing your documents with EzSignature
            anytime, anywhere. Use your PC, tablet, or mobile device for secure
            signing at home, in the office, or on the go.
          </Text>
          <Box component={"div"} display={"flex"} columnGap={2}>
            <Button
              backgroundColor="var(--secondary-color)"
              color="#fff"
              height={76}
              width={200}
              borderRadius={15}
            >
              Sign up for free
            </Button>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7, lg: 6 }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            src={HomeImage_2}
            alt="image_here"
          />
        </Grid>
      </Grid>
      {/* ----------------- */}

      <Grid container alignItems="center" paddingY={"5"} paddingX={{xs:3,lg:"30px",xl:"100px"}} component="div" className="offerCard_Grid">
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
        <Grid  maxWidth={"600px"} margin={"auto"}>
          <Grid container gap={3} justifyContent={"center"}>
            <Card
              className="card_1"
              width={"220px"}
              height={"220px"}
              padding={"15"}
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
                borderRadius={16}
                height={34}
                backgroundColor={"#222222"}
                fontSize={12}
                color="#fff"
                fontWeight="700"
              >
                Learn more
              </Button>
            </Card>
            <Card
              className="card_2"
              width={"220px"}
              height={"220px"}
              padding={"15"}
              borderRadius={20}
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
              >
                Learn more
              </Button>
            </Card>
            <Card
              className="card_3"
              width={"220px"}
              height={"220px"}
              padding={"15"}
              borderRadius={20}
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
              >
                Learn more
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      {/* grid_5 start here */}
      <Grid component={"div"} className="grid_5"  paddingY={"5"} paddingX={{xs:3,lg:"100px"}}>
        <Text fontSize="55px" fontWeight="800" className="head_1">
          Discover how EzSignature can help you run your business
        </Text>
        <Grid container gap={2} alignItems={"center"} marginY={4} justifyContent={"center"}>
          <Image style={{width:'146px',height:"90px",objectFit:"contain"}} src={BusinessImage_1} alt="image_here" />
          <Image style={{width:'156px',height:"128px",objectFit:"contain"}} src={BusinessImage_2} alt="image_here" />
          <Image style={{width:'146px',height:"90px",objectFit:"contain"}} src={BusinessImage_3} alt="image_here" />
          <Image style={{width:'146px',height:"90px",objectFit:"contain"}} src={BusinessImage_4} alt="image_here" />
          <Image style={{width:'146px',height:"90px",objectFit:"contain"}} src={BusinessImage_5} alt="image_here" />
          <Image style={{width:'146px',height:"90px",objectFit:"contain"}} src={BusinessImage_6} alt="image_here" />
          <Image style={{width:'146px',height:"90px",objectFit:"contain"}} src={BusinessImage_7} alt="image_here" />
        </Grid>
        <Grid container justifyContent={"center"}>
          <Image
            src={FinancialDeppartment}
            style={{ width: "100%", objectFit: "contain" }}
            alt="img_here"
            priority={true}
          />
          <div className="financtionalDepartmentCard">
            <Card
              height="100%"
              width="100%"
              backgroundColor="#f3fefd"
              borderRadius={78}
            >
              <Grid
                container
                paddingX={{xs:2,md:8}}
                gap={2}
                py={4}
                height={"100%"}
              >
                <Grid container width={"100%"} height={"85%"}  justifyContent={"space-between"} alignItems={"center"}>
                  <Box component={"div"} margin={0} padding={"0"}>
                    <Box
                      component={"div"}
                      display={"flex"}
                      columnGap={2}
                      alignItems={"center"}
                    >
                      <Image src={Star} alt="image_here" />
                      <Text fontSize="18px" fontWeight="600">NDAs</Text>
                    </Box>
                    <Box
                      component={"div"}
                      display={"flex"}
                      columnGap={2}
                      alignItems={"center"}
                    >
                      <Image src={Star} alt="image_here" />
                      <Text fontSize="18px" fontWeight="600">Asset Purchase Agreements</Text>
                    </Box>
                    <Box
                      component={"div"}
                      display={"flex"}
                      columnGap={2}
                      alignItems={"center"}
                    >
                      <Image src={Star} alt="image_here" />
                      <Text fontSize="18px" fontWeight="600">Engagement Letters</Text>
                    </Box>
                    <Box
                      component={"div"}
                      display={"flex"}
                      columnGap={2}
                      alignItems={"center"}
                    >
                      <Image src={Star} alt="image_here" />
                      <Text fontSize="18px" fontWeight="600">Independent Contractor Agreements</Text>
                    </Box>
                    <Box
                      component={"div"}
                      display={"flex"}
                      columnGap={2}
                      alignItems={"center"}
                    >
                      <Image src={Star} alt="image_here" />
                      <Text fontSize="18px" fontWeight="600">Employment Contracts</Text>
                    </Box>
                    <Box
                      component={"div"}
                      display={"flex"}
                      columnGap={2}
                      alignItems={"center"}
                    >
                      <Image src={Star} alt="image_here" />
                      <Text fontSize="18px" fontWeight="600">Practice Continuation Agreements</Text>
                    </Box>
                  </Box>
                  <Box component={"div"} margin={0} padding={"0"}>
                    <Box
                      component={"div"}
                      display={"flex"}
                      columnGap={2}
                      alignItems={"center"}
                    >
                      <Image src={Star} alt="image_here" />
                      <Text fontSize="18px" fontWeight="600">Practice Continuation Agreements</Text>
                    </Box>
                    <Box
                      component={"div"}
                      display={"flex"}
                      columnGap={2}
                      alignItems={"center"}
                    >
                      <Image src={Star} alt="image_here" />
                      <Text fontSize="18px" fontWeight="600">Power of Attorney Agreements </Text>
                    </Box>
                    <Box
                      component={"div"}
                      display={"flex"}
                      columnGap={2}
                      alignItems={"center"}
                    >
                      <Image src={Star} alt="image_here" />
                      <Text fontSize="18px" fontWeight="600">Business Contracts </Text>
                    </Box>
                    <Box
                      component={"div"}
                      display={"flex"}
                      columnGap={2}
                      alignItems={"center"}
                    >
                      <Image src={Star} alt="image_here" />
                      <Text fontSize="18px" fontWeight="600">Vendor Contracts</Text>
                    </Box>
                    <Box
                      component={"div"}
                      display={"flex"}
                      columnGap={2}
                      alignItems={"center"}
                    >
                      <Image src={Star} alt="image_here" />
                      <Text fontSize="18px" fontWeight="600">Document Approvals</Text>
                    </Box>
                  </Box>
                </Grid>
                <Button
                  color={"#fff"}
                  fontSize={18}
                  fontWeight={"600"}
                  backgroundColor="#263238"
                  width={170}
                  height={55}
                  style={{margin:"auto"}}
                >
                  Check out
                  <Image
                    style={{ marginLeft: "10px" }}
                    src={ArrowIcon}
                    alt="imghere"
                  />
                </Button>
              </Grid>
            </Card>
          </div>
        </Grid>
      </Grid>
      {/* ----------------- */}

      {/* grid_6 start here */}
      <Grid
        component={"div"}
        className="grid_6"
        container
        alignItems={"center"}
         paddingY={"5"}
        paddingX={{xs:3,lg:"100px"}}
        marginY={10}
        flexDirection={{ xs: "column-reverse", md: "row" }}
      >
        <Grid size={{ xs: 12, md: 5, lg: 6 }}>
          <Text fontSize="55px" fontWeight="800" className="head_1">
            Take Full Control Of Your Documents
          </Text>
          <Text
            fontSize="22px"
            fontWeight="600"
            marginBottom={20}
            marginTop={20}
            className="text_1"
          >
            The built-in document editor gives you all the tools you need to
            securely edit, send and sign documents in seconds.
          </Text>
        </Grid>
        <Grid size={{ xs: 12, md: 7, lg: 6 }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            src={HomeImage_2}
            alt="image_here"
          />
        </Grid>
      </Grid>
      {/* ----------------- */}

      <Grid
        container
        alignItems={"flex-end"}
        justifyContent={"space-evenly"}
        marginY={4}
        gap={3}
      >
        <Image
          style={{ width: "200px", height: "200px" }}
          src={Categ_1}
          alt="image_here"
        />
        <Image
          style={{ width: "200px", height: "200px", objectFit: "contain" }}
          src={Categ_2}
          alt="image_here"
        />
        <Image
          style={{ width: "200px", height: "200px", objectFit: "contain" }}
          src={Categ_3}
          alt="image_here"
        />
        <Image
          style={{ width: "200px", height: "200px", objectFit: "contain" }}
          src={Categ_4}
          alt="image_here"
        />
      </Grid>
      <Box component="div" display="flex" justifyContent="center" marginY={10}>
        <Button
          backgroundColor={"#263238"}
          borderRadius={19}
          height={55}
          width={200}
          color="#fff"
          fontSize={18}
          fontWeight={"700"}
        >
          Browse All Categories
        </Button>
      </Box>

      <Footer />
    </main>
  );
};

export default Home;