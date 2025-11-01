"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import Topbar from "@/app/components/dashboardTopbar/topbar";
import Text from "@/app/components/text";
import { Help} from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors';
import Input from '@/app/components/input';
import toast from 'react-hot-toast';


export default function GeneralPreferencesPage() {
    // State for all form fields
    const [saving, setSaving] = useState(false);
    const [settings, setSettings] = useState({
        // Document Default settings
        requireAllSigners: false,
        appendSignerAttachments: false,
        activateSigningOrder: false,
        defaultFieldFont: "Arial",
        
        // Template Default settings
        makeTemplatesAvailableToStaff: false,
        preventStaffModifyingGlobalTemplates: false,
        
        // Date & Time
        dateFormat: "07 December 2024",
        timeFormat: "07 December 2024",
        defaultTimeZone: "UTC/GMT +03:00 Africa/",
        
        // Language
        defaultLanguage: "English",
        
        // Document Setup & Management
        documentListDefaultTabs: "All",
        enableContactAutocomplete: false,
        enableContactAutosave: false,
        enableHiddenTags: false,
        enableCloudStorageIntegrations: false
    });

    const fontOptions =[
        "Arial",
        "Calibri",
        "Courier New",
        "Georgia",
        "Time New Roman"
    ]
    const dateOptions =[
        "07 December 2024",
        "December 07, 2024",
        "07 12 2024",
        "2024-12-07 ",
        "Dec 07 2024",
        "07.December.2024",
        "2024 December, 07 ",
    ]
    const defaultTimeOptions =[
        "UTC/GMT +03:00 Africa/",
        "UTC/GMT +03:00 Africa/",
        "UTC/GMT +03:00 Africa/",
        "UTC/GMT +03:00 Africa/",
        "UTC/GMT +03:00 Africa/",
    ]
    const languageOptions =[
        "English",
        "Spanish",
        "German",
        "Arabic",
        "Urdu",
    ]
    const tabOptions =[
        "All",
        "Default",
        "Completed",
        "In Process",
        "I need to Sign",
        "Cencelled"
    ]

    // Load settings on component mount
    useEffect(() => {
        const loadSettings = async () => {
            try {
                const token = localStorage.getItem('token') || '';
                const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://66.135.21.215/api';
                const res = await fetch(`${apiBase}/settings`, { 
                    headers: { Authorization: `Bearer ${token}` }, 
                    cache: 'no-store' 
                });
                if (!res.ok) return;
                const json = await res.json();
                const generalPrefs = json?.data?.generalPreferences || {};
                setSettings(prev => ({ ...prev, ...generalPrefs }));
            } catch (e) {
                console.warn('Failed to load general preferences');
            }
        };
        loadSettings();
    }, []);

    // Handle save
    const handleSave = async () => {
        try {
            setSaving(true);
            const token = localStorage.getItem('token') || '';
            const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://66.135.21.215/api';
            const res = await fetch(`${apiBase}/settings/generalPreferences`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify(settings)
            });
            const json = await res.json();
            if (!res.ok || !json?.success) throw new Error(json?.message || 'Failed to save');
            toast.success('General preferences saved successfully!');
        } catch (e: any) {
            console.error('Save error', e);
            toast.error(e?.message || 'Failed to save general preferences');
        } finally {
            setSaving(false);
        }
    };

    // Handle checkbox changes
    const handleCheckboxChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setSettings(prev => ({ ...prev, [field]: event.target.checked }));
    };

    // Handle select changes
    const handleSelectChange = (field: string) => (value: string) => {
        setSettings(prev => ({ ...prev, [field]: value }));
    };
    return(
        <Topbar title='General Preferences' buttonText={saving ? "Saving..." : "Save Changes"} onFirstBtnClick={handleSave} >
            <Grid component={"div"} container direction={"column"} marginInline={"20px"} marginBottom={"40px"}>
                {/* grid_1 */}
                <Grid component={"div"} container border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">Document Defualt settings</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container alignItems={"center"}>
        <Checkbox 
          checked={settings.requireAllSigners}
          onChange={handleCheckboxChange('requireAllSigners')}
          size="small" 
          sx={{padding: "0 9px 9px 0"}} 
        />
        <Text fontSize="1rem" color="rgb(0 8 61)">Always require all signers to sign to complete document </Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox 
          checked={settings.appendSignerAttachments}
          onChange={handleCheckboxChange('appendSignerAttachments')}
          size="small" 
          sx={{padding: "0 9px 9px 0"}}
        />
        <Text fontSize="1rem" color="rgb(0 8 61)">Append signer attachments to completed document PDF</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox 
          checked={settings.activateSigningOrder}
          onChange={handleCheckboxChange('activateSigningOrder')}
          size="small" 
          sx={{padding: "0 9px 9px 0"}}
        />
        <Text fontSize="1rem" color="rgb(0 8 61)">Activate Signing Order by default</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>      
      </Grid>
          {/* 3rd div */}
          <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} fontWeight="500" fontSize="1rem" color="rgb(0 8 61)">Defualt field font</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />

        </Grid> 
        
            <Input 
              options={fontOptions} 
              value={settings.defaultFieldFont}
              onChange={(value) => handleSelectChange('defaultFieldFont')(value)}
            />
   
      </Grid>
          </Grid>

          {/* grid_2 */}
          <Grid component={"div"} container marginTop={"30px"} border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">Template Defualt settings</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container alignItems={"center"}>
        <Checkbox 
          checked={settings.makeTemplatesAvailableToStaff}
          onChange={handleCheckboxChange('makeTemplatesAvailableToStaff')}
          size="small" 
          sx={{padding: "0 9px 9px 0"}} 
        />
        <Text fontSize="1rem" color="rgb(0 8 61)">Make new templates available to staff members  </Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox 
          checked={settings.preventStaffModifyingGlobalTemplates}
          onChange={handleCheckboxChange('preventStaffModifyingGlobalTemplates')}
          size="small" 
          sx={{padding: "0 9px 9px 0"}}
        />
        <Text fontSize="1rem" color="rgb(0 8 61)">Prevent staff members from modifying global templates</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>      
      </Grid>
      </Grid>

      {/*  grid_3 */}
      <Grid component={"div"} container marginTop={"30px"} border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} justifyContent={"space-between"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
            <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">Date & Time</Text>
            </Grid>
          </Grid>
          {/* 2nd */}
          <Grid component={"section"} container padding={"15px 20px"} borderBottom= {"1px solid #d7d7d9"} justifyContent={"space-between"} width={"100%"}>
          <Text fontSize="14px" color="rgb(0 8 61)">Enter the roles this document&apos;s signers will represent. You can also specify CCs (recipients).</Text>

          </Grid>
          {/* 3rd */}
          <Grid component={"div"} container direction={"column"} padding={"10px 20px"} width={"100%"}>
      <Grid component={"div"} container direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} fontWeight="500" fontSize="1rem" color="#00083D">Date format</Text>
        </Grid> 
            <Input 
              options={dateOptions} 
              value={settings.dateFormat}
              onChange={(value) => handleSelectChange('dateFormat')(value)}
            />
      </Grid>
      <Grid component={"div"} container direction={"column"} padding={"10px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} fontWeight="500" fontSize="1rem" color="#00083D">Time format</Text>
        </Grid> 
            <Input 
              options={dateOptions} 
              value={settings.timeFormat}
              onChange={(value) => handleSelectChange('timeFormat')(value)}
            />
      </Grid>
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} fontWeight="500" fontSize="1rem" color="#00083D">Default Time Zone</Text>
        </Grid> 
            <Input 
              options={defaultTimeOptions} 
              value={settings.defaultTimeZone}
              onChange={(value) => handleSelectChange('defaultTimeZone')(value)}
            />
      </Grid>
          </Grid>

          {/* grid_4 */}
          <Grid component={"div"} container marginTop={"30px"} border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} justifyContent={"space-between"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
            <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">Language</Text>
            </Grid>
          </Grid>
          {/* 2nd */}
          <Grid component={"section"} container padding={"15px 20px"} borderBottom= {"1px solid #d7d7d9"} justifyContent={"space-between"} width={"100%"}>
          <Text fontSize="14px" fontWeight="400" color="rgb(0 8 61)">The signing page for documents sent out from this business will appear in the default language below. This language can be overridden on a per-contact and on a per-document basis.</Text>

          </Grid>
          {/* 3rd */}
          <Grid component={"div"} container direction={"column"} padding={"10px 20px"} width={"100%"}>
      <Grid component={"div"} container direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} fontWeight="500" fontSize="1rem" color="#00083D">Default Language</Text>
        </Grid> 
            <Input 
              options={languageOptions} 
              value={settings.defaultLanguage}
              onChange={(value) => handleSelectChange('defaultLanguage')(value)}
            />
      </Grid>
      </Grid>
      {/* grid_5 */}

      <Grid component={"div"} container marginTop={"30px"} border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} justifyContent={"space-between"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
            <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">Document Setup & Management</Text>
            </Grid>
          </Grid>
         
          {/* 2nd */}
          <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #e8e8e9"}>
      <Grid component={"div"} container direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} fontWeight="500" fontSize="1rem" color="#00083D">Document List Default Tabs</Text>
        </Grid> 
            <Input 
              options={tabOptions} 
              value={settings.documentListDefaultTabs}
              onChange={(value) => handleSelectChange('documentListDefaultTabs')(value)}
            />
      </Grid>
{/* 3rd */}
<Grid component={"div"} container direction={"column"} padding={"10px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container alignItems={"center"}>
        <Checkbox 
          checked={settings.enableContactAutocomplete}
          onChange={handleCheckboxChange('enableContactAutocomplete')}
          size="small" 
          sx={{padding: "0 9px 9px 0"}} 
        />
        <Text fontSize="1rem" color="rgb(0 8 61)">Enable contact autocomplete when adding signers & CCs</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox 
          checked={settings.enableContactAutosave}
          onChange={handleCheckboxChange('enableContactAutosave')}
          size="small" 
          sx={{padding: "0 9px 9px 0"}}
        />
        <Text fontSize="1rem" color="rgb(0 8 61)">Enable contact autosave when adding signers & CCs</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox 
          checked={settings.enableHiddenTags}
          onChange={handleCheckboxChange('enableHiddenTags')}
          size="small" 
          sx={{padding: "0 9px 9px 0"}}
        />
        <Text fontSize="1rem" color="rgb(0 8 61)">Enable hidden tags</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox 
          checked={settings.enableCloudStorageIntegrations}
          onChange={handleCheckboxChange('enableCloudStorageIntegrations')}
          size="small" 
          sx={{padding: "0 9px 9px 0"}}
        />
        <Text fontSize="1rem" color="rgb(0 8 61)">Enable third-party cloud storage integrations</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>      
      </Grid>

      </Grid>




            </Grid>
        </Topbar>
    );
}