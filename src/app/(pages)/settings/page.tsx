import Button from "@/app/components/button";
import Topbar from "@/app/components/dashboardTopbar/topbar";
import Text from "@/app/components/text";
import Grid from "@mui/material/Grid2";
import Link from 'next/link';
import {InsertDriveFileOutlined, SaveAsOutlined, Telegram, ColorLens, AccessTimeOutlined} from '@mui/icons-material';

export default function SettingsPage() {
    return(
        <Topbar title='Business settings' >

        <Grid component={"div"}
         container
         flexDirection={"column"}
         justifyContent={"center"}
         marginInline={"20px"}
         padding={"1rem"}
        >
                    {/* 1st grid */}
                    <Grid component={"section"} container flex={"0 0 auto"} border={"1px solid #E8EFF6"} borderRadius={"3px"} minWidth={"0"} direction={"column"}>
                        <Grid component={"div"} container paddingInline={"20px"} fontSize={"1rem"} paddingTop={"10px"} paddingBottom={"10px"} sx={{background: "#E8EFF6"}}>
                            <span>Business</span>
                        </Grid>
                        <Grid component={"div"} container flexDirection={"column"} color={"#00083D"}>
                            <form className="settings_form">
                                <Grid borderBottom={"1px solid #E8EFF6"}>
                                    <Text paddingLeft={20} paddingRight={20} paddingBottom={15} paddingTop={15} fontSize={"1rem"}>All of the preferences below are directly associated with the current business (variable) you are currently using.
                                        <br /> Changes on this page will only affect the current business. </Text>
                                </Grid>
                                <Grid container direction={"column"} width={"100%"} paddingInline={"20px"} paddingBottom={"10px"} paddingTop={"10px"} borderBottom={"1px solid #E8EFF6"}>
                                    <Grid container marginInlineEnd={"0.75rem"} marginBottom={"0.5rem"} paddingBottom={"5px"}>
                                    <label htmlFor="">Business Name </label>
                                    <span className="settings_span">*</span>
                                    </Grid>
                                    <input type="text" className="settings_input" />
                                </Grid>
                                <Grid container flex={"0 0 auto"} paddingTop={"15px"} paddingBottom={"15px"} paddingInline={"20px"} >
                                <Button color="#fff" fontWeight="500" fontSize={16} borderRadius={"20px"} borderWidth={1} borderColor="var(--secondary-color)" height={"35px"} width={"fit-content"} style={{padding:"0 2.5rem", display:"flex",alignItems:"center"}}>Save Changes</Button>

                                </Grid>
                            </form>
                        </Grid>

                    </Grid>

                    {/* 2nd grid */}
                    <Grid component={"section"} container marginTop={"20px"} flex={"0 0 auto"} border={"1px solid #E8EFF6"} borderRadius={"3px"} minWidth={"0"} direction={"column"}>
                    <Link href="/pages/generalPreferences" className="settings_link">
                    <InsertDriveFileOutlined sx={{color: "rgb(51, 51, 51)", fontWeight: "100"}} />
                        <Text fontWeight="400" color="rgb(51, 51, 51)">General Preferences</Text>
                    </Link>
                    <Link href="/pages/signingPreferences" className="settings_link" >
                    <SaveAsOutlined  sx={{color: "rgb(51, 51, 51)"}} />
                        <Text fontWeight="400" color="rgb(51, 51, 51)">Signing Preferences</Text>
                    </Link>
                    <Link href="/pages/deliveryPreferences" className="settings_link">
                    <Telegram  sx={{color: "rgb(51, 51, 51)"}} />
                        <Text fontWeight="400" color="rgb(51, 51, 51)">Delivery Preferences</Text>
                    </Link>
                    <Link href="/pages/expiration" className="settings_link">
                    <AccessTimeOutlined  sx={{color: "rgb(51, 51, 51)"}} />
                        <Text fontWeight="400" color="rgb(51, 51, 51)">Expirations & Reminders</Text>
                    </Link>
                    <Link href="/pages/branding" className="settings_link">
                        <ColorLens  sx={{color: "rgb(51, 51, 51)"}}/>
                        <Text fontWeight="400" color="rgb(51, 51, 51)">Branding</Text>
                    </Link>
                
               </Grid>


            
        </Grid>
        </Topbar>
    );
}