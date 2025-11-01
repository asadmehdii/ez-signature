import Button from "@/app/components/button"
import { Box, Typography } from "@mui/material"

type props = {
 heading:string,
 text:string,
 to?:string
 btnText?:string
 bgImage:any
 mt?:number
 mb?:number
}

const TextOnImage:React.FC<props> = ({
    heading,
    text,
    to,
    bgImage,
    btnText = "Contact Us",
    mt = 0,
    mb = 0,
})=>{   
const Styles = {
    bgImage:{
    background:`linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)),url("${bgImage}") no-repeat`,
    backgroundSize: "100% 100%",
    flexDirection:"column",
    marginTop:mt,
    marginBottom:mb,
}}
    return(
        <Box sx={Styles.bgImage}>
        <Box maxHeight={448} height={"fit-content"} py={8} maxWidth={560} margin={"auto"} display={"flex"} flexDirection={"column"} gap={3} justifyContent={"center"} alignItems={"center"}>
            <Typography fontFamily= "var(--mada-text)" fontSize={28} color="#fff" fontWeight={700}>{heading}</Typography>
            <Typography textAlign={"center"} fontFamily= "var(--mada-text)" fontSize={18} color="#fff" fontWeight={500}>{text}</Typography>
             <Button to={to} backgroundColor="var(--secondary-color)" color="#000" height={76} width={206} borderRadius={15}>{btnText}</Button>
        </Box>
        </Box>
    )
}


export default TextOnImage