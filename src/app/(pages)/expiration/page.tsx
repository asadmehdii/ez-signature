"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import Topbar from "@/app/components/dashboardTopbar/topbar";
import Text from "@/app/components/text";
import { Help} from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import Input from '@/app/components/input';
import CustomCheckbox from '@/app/components/customCheckbox';
import toast from 'react-hot-toast';

export default function ExpirationPage() {
    // State for all form fields
    const [saving, setSaving] = useState(false);
    const [settings, setSettings] = useState({
        // Expirations
        expireDocumentAfter: "1 day (December 06)",
        allowStaffToSetExpirationDate: true,
        enableExpirationReminders: true,
        sendFirstReminderAfter: "1 day (December 06)",
        
        // Reminders
        enableAutoReminders: true,
        sendSecondReminderAfter: "1 day (December 06)"
    });

    const options = [
        "1 day (December 06)",
        "3 days",
        "7 days",
        "2 weeks",
        "3 weeks",
        "1 month",
        "3 months",
        "6 months",
    ];
    
    const reminderOptions = [
        "1 day (December 06)",
        "2 days",
        "3 days",
        "4 days",
        "5 days",
        "6 days",
        "1 weeks",
        "2 weeks",
        "3 weeks",
        "1 month",
    ];
    
    const firstSecondOptions = [
        "1 day (December 06)",
        "2 days",
        "3 days",
        "4 days",
        "5 days",
        "6 days",
        "1 weeks",
        "2 weeks",
        "3 weeks",
        "1 month",
        "3 months"
    ];

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
                const expirationPrefs = json?.data?.expirationPreferences || {};
                setSettings(prev => ({ ...prev, ...expirationPrefs }));
            } catch (e) {
                console.warn('Failed to load expiration preferences');
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
            const res = await fetch(`${apiBase}/settings/expirationPreferences`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify(settings)
            });
            const json = await res.json();
            if (!res.ok || !json?.success) throw new Error(json?.message || 'Failed to save');
            toast.success('Expiration preferences saved successfully!');
        } catch (e: any) {
            console.error('Save error', e);
            toast.error(e?.message || 'Failed to save expiration preferences');
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
        <Topbar title='Expirations & Reminders' buttonText={saving ? "Saving..." : "Save Changes"} onFirstBtnClick={handleSave} >
            <Grid component={"div"} container direction={"column"} marginInline={"20px"} marginBottom={"40px"}>
                {/* grid_1 */}
                <Grid component={"div"} container border= {"1px solid #d7d7d9"} borderRadius={"3px"} marginBottom={"30px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">Expirations</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} fontWeight="500" fontSize="1rem" color="rgb(0 8 61)">Expire Document After</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        
            <Input 
              options={options} 
              value={settings.expireDocumentAfter}
              onChange={(value) => handleSelectChange('expireDocumentAfter')(value)}
            />
   
      </Grid>
      {/* 3rd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <CustomCheckbox 
        text="Allow staff members to set document expiration date" 
        showHelpIcon={true} 
        checkboxProps={{ 
          checked: settings.allowStaffToSetExpirationDate,
          onChange: handleCheckboxChange('allowStaffToSetExpirationDate')
        }} 
      />
      <CustomCheckbox 
        text="Enable expiration reminders" 
        showHelpIcon={true} 
        checkboxProps={{ 
          checked: settings.enableExpirationReminders,
          onChange: handleCheckboxChange('enableExpirationReminders')
        }} 
      />   
      </Grid>
{/* 4th div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} fontWeight="500" fontSize="1rem" color="rgb(0 8 61)">Send First Reminder After</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        
            <Input 
              options={reminderOptions} 
              value={settings.sendFirstReminderAfter}
              onChange={(value) => handleSelectChange('sendFirstReminderAfter')(value)}
            />
   
      </Grid>
      </Grid>
{/* grid_2 */}
<Grid component={"div"} container border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">Reminders</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <CustomCheckbox 
        text="Enable auto reminders " 
        showHelpIcon={true} 
        checkboxProps={{ 
          checked: settings.enableAutoReminders,
          onChange: handleCheckboxChange('enableAutoReminders')
        }} 
      />   
      </Grid>
      {/* 3rd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} fontWeight="500" fontSize="1rem" color="rgb(0 8 61)">Send First Reminder After</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
            <Input 
              options={firstSecondOptions} 
              value={settings.sendFirstReminderAfter}
              onChange={(value) => handleSelectChange('sendFirstReminderAfter')(value)}
            />
      </Grid>
{/* 4th div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} fontWeight="500" fontSize="1rem" color="rgb(0 8 61)">Send Second Reminder After</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        
            <Input 
              options={firstSecondOptions} 
              value={settings.sendSecondReminderAfter}
              onChange={(value) => handleSelectChange('sendSecondReminderAfter')(value)}
            />
   
      </Grid>
      </Grid>



      </Grid>
      </Topbar>
)
}
