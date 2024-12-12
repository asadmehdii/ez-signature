"use client"
import React, { CSSProperties, useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Text from "@/app/components/text";
import { Box,TextField, Typography } from "@mui/material";
import EmergencyIcon from '@mui/icons-material/Emergency';

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
    borderRadius?:number
    multiline?:boolean;
    rows?:number
    important?:boolean
    lableStyle?:CSSProperties
    }

const InputText:React.FC<Props> = ({
    width,
    important,
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
    validationMsg,
    borderRadius = 12,
    rows,
    multiline,
    lableStyle
}) => {
  const Styles = {
    textInputField: {
      // height:height,
      "& .MuiOutlinedInput-root": {
        height:multiline? "auto" : height,
        "& fieldset": {
          borderRadius: `${borderRadius}px`,
          borderColor: "#666666", // Default color
        },
        "&:hover fieldset": {
          border: "0.5px solid #666666", // Hover color
        },
        "&.Mui-focused fieldset": {
          border: "0.5px solid #666666", // Focus color
        },
      },
    },
    lableStyle:{
      fontFamily:"var(--font-mada)",
      fontSize:16,
      fontWeight:500,
      color:"#666666"
    },
    errorStyle:{
      fontFamily:"var(--font-mada)",
      fontSize:16,
      fontWeight:500,
      color:"red"
      }
  };
const [hidePassword,setHidePassword] = useState<string>("password") 

 return(
        <Box maxWidth={maxWidth} width={width} mt={mt} mb={mb}>
        <Box display={"flex"} justifyContent={"space-Between"}>
        <Typography sx={[Styles.lableStyle,{...lableStyle}]} mb={1}>{lable} {important && <EmergencyIcon sx={{fontSize:"8px",mb:0.7,color:"#ef5350"}} />}</Typography>
         {protect &&
         <>
        {hidePassword === "password"? 
        (<Text color="var(--lightGray-color)" onclick={()=>setHidePassword("text")} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:8}} fontSize="18px" fontWeight="600" ><RemoveRedEyeIcon/> Show</Text>):
        (<Text color="var(--lightGray-color)" onclick={()=>setHidePassword("password")} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:8}} fontSize="18px" fontWeight="600" ><VisibilityOffIcon /> Hide</Text>)
        }
         </>    
       }
        </Box>
        <TextField multiline rows={rows} value={value} onChange={onChange} fullWidth type={protect? hidePassword : type} variant="outlined" sx={Styles.textInputField} placeholder={placeholder}/>
       {errorMessage? 
        <Typography sx={Styles.errorStyle} mt={1}>{errorMessage}</Typography>:
        <Typography sx={Styles.lableStyle} mt={0.5}>{validationMsg}</Typography>
      }
      </Box>
    )
}



export default InputText