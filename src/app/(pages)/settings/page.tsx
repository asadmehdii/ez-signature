"use client";
import Button from "@/app/components/button";
import Topbar from "@/app/components/dashboardTopbar/topbar";
import Text from "@/app/components/text";
import Grid from "@mui/material/Grid2";
import Link from 'next/link';
import {InsertDriveFileOutlined, SaveAsOutlined, Telegram, ColorLens, AccessTimeOutlined} from '@mui/icons-material';
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';

export default function SettingsPage() {
	const [businessName, setBusinessName] = useState("");
	const [saving, setSaving] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const token = localStorage.getItem('token') || '';
				const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://66.135.21.215/api';
				const res = await fetch(`${apiBase}/settings`, { headers: { Authorization: `Bearer ${token}` }, cache: 'no-store' });
				if (!res.ok) return;
				const json = await res.json();
				const name = json?.data?.business?.businessName || "";
				setBusinessName(name);
			} catch (e) {
				console.warn('Failed to load settings');
			}
		})();
	}, []);

	const handleSave = async () => {
		try {
			setSaving(true);
			const token = localStorage.getItem('token') || '';
			const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://66.135.21.215/api';
			const res = await fetch(`${apiBase}/settings/business`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
				body: JSON.stringify({ businessName })
			});
			const json = await res.json();
			if (!res.ok || !json?.success) throw new Error(json?.message || 'Failed to save');
			toast.success('Settings saved successfully!');
		} catch (e: any) {
			console.error('Save error', e);
			toast.error(e?.message || 'Failed to save settings');
		} finally {
			setSaving(false);
		}
	};

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
                            <form className="settings_form" onSubmit={(e)=>{e.preventDefault(); handleSave();}}>
                                <Grid borderBottom={"1px solid #E8EFF6"}>
                                    <Text paddingLeft={20} paddingRight={20} paddingBottom={15} paddingTop={15} fontSize={"1rem"}>All of the preferences below are directly associated with the current business (variable) you are currently using.
                                        <br /> Changes on this page will only affect the current business. </Text>
                                </Grid>
                                <Grid container direction={"column"} width={"100%"} paddingInline={"20px"} paddingBottom={"10px"} paddingTop={"10px"} borderBottom={"1px solid #E8EFF6"}>
                                    <Grid container marginInlineEnd={"0.75rem"} marginBottom={"0.5rem"} paddingBottom={"5px"}>
                                    <label htmlFor="business-name">Business Name </label>
                                    <span className="settings_span">*</span>
                                    </Grid>
                                    <input id="business-name" value={businessName} onChange={(e)=>setBusinessName(e.target.value)} type="text" className="settings_input" />
                                </Grid>
                                <Grid container flex={"0 0 auto"} paddingTop={"15px"} paddingBottom={"15px"} paddingInline={"20px"} >
                                <Button color="#fff" fontWeight="500" fontSize={16} borderRadius={"20px"} borderWidth={1} borderColor="var(--secondary-color)" height={"35px"} width={"fit-content"} style={{padding:"0 2.5rem", display:"flex",alignItems:"center"}}>{saving? 'Saving...' : 'Save Changes'}</Button>

                                </Grid>
                            </form>
                        </Grid>

                    </Grid>

                    {/* 2nd grid */}
                    <Grid component={"section"} container marginTop={"20px"} flex={"0 0 auto"} border={"1px solid #E8EFF6"} borderRadius={"3px"} minWidth={"0"} direction={"column"}>
                    <Link href="/generalPreferences" className="settings_link">
                    <InsertDriveFileOutlined sx={{color: "rgb(51, 51, 51)", fontWeight: "100"}} />
                        <Text fontWeight="400" color="rgb(51, 51, 51)">General Preferences</Text>
                    </Link>
                    <Link href="/signingPreferences" className="settings_link" >
                    <SaveAsOutlined  sx={{color: "rgb(51, 51, 51)"}} />
                        <Text fontWeight="400" color="rgb(51, 51, 51)">Signing Preferences</Text>
                    </Link>
                    <Link href="/deliveryPreferences" className="settings_link">
                    <Telegram  sx={{color: "rgb(51, 51, 51)"}} />
                        <Text fontWeight="400" color="rgb(51, 51, 51)">Delivery Preferences</Text>
                    </Link>
                    <Link href="/expiration" className="settings_link">
                    <AccessTimeOutlined  sx={{color: "rgb(51, 51, 51)"}} />
                        <Text fontWeight="400" color="rgb(51, 51, 51)">Expirations & Reminders</Text>
                    </Link>
                    <Link href="/branding" className="settings_link">
                        <ColorLens  sx={{color: "rgb(51, 51, 51)"}}/>
                        <Text fontWeight="400" color="rgb(51, 51, 51)">Branding</Text>
                    </Link>
                
               </Grid>

            
        </Grid>
        </Topbar>
    );
}