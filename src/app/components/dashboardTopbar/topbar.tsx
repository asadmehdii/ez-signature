"use client"
import React,{ CSSProperties, FC, ReactNode, useState } from "react";
import { Box,IconButton, Typography } from "@mui/material";
import Sidebar from "../sidebar";
import Button from "../button";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


interface TopbarProps {
  children:ReactNode
  isBellIcon?:boolean,
  buttonText?:string,
  secondText?:string,
  title:string,
  hideRightContent?:string
  leftBtnText?:string
  isCaretIcon? : boolean
  firstBtnUrl?:string
  secondBtnUrl?:string
  onFirstBtnClick?:()=>void
  onSecondBtnClick?:()=>void
  btnStyle?:CSSProperties
} 

const Topbar:FC<TopbarProps> = ({onFirstBtnClick,onSecondBtnClick,leftBtnText,children,title,buttonText,secondText,hideRightContent = true,isBellIcon,isCaretIcon,firstBtnUrl,secondBtnUrl,btnStyle})=>{
   const [showSideBar,setShowSidebar] = useState<boolean>(false)
    const handleDrawerToggle = () => {
        setShowSidebar(!showSideBar)
      };
    return(
    <Sidebar open = {showSideBar} onToggle = {handleDrawerToggle}>
       <Box zIndex={1200} bgcolor={"#fff"} position={"fixed"} top={0} right={0}  ml= {{ md: `250px` }} left={0} borderBottom={"1px solid #CED4DA"} maxWidth={{md:"calc(100% - 250px)"}} component={"div"}>  
          <Typography textAlign={"center"} pb={2} pt={2} display={{xs:"inline-block",sm:"none"}} width={"100%"} color="var(--secondary-color)" fontFamily={"font-mada"} fontSize={26} fontWeight={500}>{title}</Typography>  
        <Box px={{xs:1,sm:3}} display={"flex"} justifyContent={"space-between"} alignItems={"center"}  height={66}>
           <Box component={"div"} display={"flex"} alignItems={"center"} gap={1}> 
            <IconButton onClick={handleDrawerToggle} sx={{display:{xs:"flex",md:"none"}, boxShadow:"none",bgcolor:"none",padding:1,borderRadius:2}}><MenuIcon  sx={{border:"3px solid var(--secondary-color)",fontSize:24,borderRadius:1}}/></IconButton>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            {leftBtnText && <Button to={firstBtnUrl} onClick={onFirstBtnClick} color="#fff" fontWeight="500" fontSize={16} borderRadius={20}  height={"35px"} width={"fit-content"} style={{padding:"0 25px",backgroundColor:"var(--secondary-color)", display:"flex",alignItems:"center",...btnStyle}}>{leftBtnText} {isCaretIcon && <KeyboardArrowDownIcon/>}</Button> } 
            <Typography display={{xs:"none",sm:"flex"}} color="var(--secondary-color)" fontFamily={"font-mada"} fontSize={26} fontWeight={500}>{title}</Typography>
          </Box>
           </Box>
          {hideRightContent && <Box component={"div"} display={"flex"} alignItems={"center"} gap={2}>
          {isBellIcon && <IconButton sx={{boxShadow:"none",bgcolor:"none"}}><NotificationsIcon  sx={{fontSize:26,color:"#000"}} /></IconButton> }
          {buttonText && <Button to={firstBtnUrl} onClick={onFirstBtnClick} color="#fff" fontWeight="500" fontSize={16} borderRadius={20}  height={"35px"} width={"fit-content"} style={{padding:"0 25px",backgroundColor:"var(--secondary-color)", display:"flex",alignItems:"center",...btnStyle}}>{buttonText} {isCaretIcon && <KeyboardArrowDownIcon/>}</Button> }
          {secondText && <Button to={secondBtnUrl} onClick={onSecondBtnClick} color="#fff" fontWeight="500" fontSize={16} borderRadius={20}  height={"35px"} width={"fit-content"} style={{padding:"0 25px",backgroundColor:"var(--secondary-color)", display:"flex",alignItems:"center"}}>{secondText} {isCaretIcon && <KeyboardArrowDownIcon/>}</Button> }
     </Box> 
          }
        </Box>
        </Box>
        <Box mt={{xs:20,sm:14}} mb={5} width={"100%"}>{children}</Box>
    </Sidebar>
  )
}

export default Topbar