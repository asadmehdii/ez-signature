import { Box } from "@mui/material"
import Assests from "@/app/assests/images"

type CloudBgProps = {
  image:any;
  mt?:number
  mb?:number
} 

const CloudBackground: React.FC<CloudBgProps> = ({ image, mt, mb }) => {
  return (
    <Box sx={Style.wrapper} mt={mt} mb={mb}>
      <Box component={"img"} sx={Style.image} src={image} alt="image_here" />
    </Box>
  );
};

const Style ={
    wrapper: {
    position: "relative",
    background: `url("${Assests.CloudBg.src}") no-repeat`,
    backgroundPosition: "bottom center",
    backgroundSize: "100% 400px", // Make clouds shorter
    height: "400px", // smaller overall height
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start", // push image to top
    overflow: "visible",

  },
  image: {
    position: "relative",
    top: "-60px", // move image higher above clouds
    maxWidth: "400px", // make image bigger
    width: { xs: "80%", md: "100%" },
    height: "auto",
    objectFit: "contain",
  },
    BgImage:{
      background: `url("${Assests.CloudBg.src}") no-repeat`,
      backgroundPosition:"center",
      backgroundSize:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"flex-end",

    }
}
export default CloudBackground