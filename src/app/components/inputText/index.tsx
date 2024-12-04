"use client"
import React, { useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Text from "@/app/components/text";
import { Box, TextField, Typography } from "@mui/material";

type Props = {
    width?:any,
    height?:number|string,
    placeholder?:string,
    lable?:string,
    errorMessage?:string,
    value?:string|number
    type?:"password"| "number"|"email"|"text"
    onChange?:()=>void
    protect?:boolean
    maxWidth?:number|string,
    mt?:number
    mb?:number
    validationMsg?:string
    }

const InputText:React.FC<Props> = ({
    width,
    maxWidth,
    height = 56,
    placeholder,
    lable,
    errorMessage,
    protect = false,
    type = "text",
    value,
    onChange, 
    mt,mb, 
    validationMsg
}) => {
  const Styles = {
    textInputField: {
      borderRadius: "12px",
      height:height,
      "& .MuiOutlinedInput-root": {
        height:70,
        "& fieldset": {
          borderRadius: "12px",
          borderColor: "#666666", // Default color
        },
        "&:hover fieldset": {
          borderColor: "#666666", // Hover color
        },
        "&.Mui-focused fieldset": {
          borderColor: "#000000", // Focus color
        },
      },
    },
    lableStyle:{
      fontFamily:"var(--text-mada)",
      fontSize:16,
      fontWeight:500,
      color:"#666666"
    },
    errorStyle:{
        fontFamily:"var(--text-mada)",
        fontSize:16,
        fontWeight:500,
        color:"red"
      }
  };
const [hidePassword,setHidePassword] = useState<string>("password") 

 return(
        <Box maxWidth={maxWidth} width={width} mt={mt} mb={mb}>
        <Box display={"flex"} justifyContent={"space-Between"}>
        <Typography sx={Styles.lableStyle} mb={1}>{lable}</Typography>
         {protect &&
         <>
        {hidePassword === "password"? 
        (<Text color="var(--lightGray-color)" onclick={()=>setHidePassword("text")} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:8}} fontSize="18px" fontWeight="600" ><RemoveRedEyeIcon/> Show</Text>):
        (<Text color="var(--lightGray-color)" onclick={()=>setHidePassword("password")} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:8}} fontSize="18px" fontWeight="600" ><VisibilityOffIcon /> Hide</Text>)
        }
         </>    
       }
        </Box>
        <TextField value={value} onChange={onChange} fullWidth type={protect? hidePassword : type} variant="outlined" sx={Styles.textInputField} placeholder={placeholder}/>
       {errorMessage? 
        <Typography sx={Styles.errorStyle} mt={1}>{errorMessage}</Typography>:
        <Typography sx={Styles.lableStyle} mt={0.5}>{validationMsg}</Typography>
      }
      </Box>
    )
}



export default InputText