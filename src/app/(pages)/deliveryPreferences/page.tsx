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

export default function DeliveryPreferencesPage() {
    // State for all form fields
    const [saving, setSaving] = useState(false);
    const [settings, setSettings] = useState({
        // Delivery
        attachCompletedDocumentPDF: true,
        attachAuditTrailToPDF: true,
        contactButtonType: "Business Owner",
        completedDocumentPrefix: "[Completed]",
        customRequesterEmail: "",
        
        // Sender notifications
        notifyOnDocumentOpened: true,
        notifyOnDocumentDeclined: false,
        notifyOnDocumentReassigned: true,
        notifyOnDocumentExpired: true,
        notifyOnDocumentSigned: true,
        notifyOnDocumentCompleted: true,
        
        // Signer notifications
        sendDocumentSignedEmail: true,
        sendDocumentExpiredEmail: true,
        sendDocumentCancelledEmail: true,
        sendDocumentReassignedEmail: true,
        sendDocumentCompletedEmail: true,
        
        // Template Links
        templateLinksSendCompletedEmail: true,
        templateLinksEnableDocumentUpdates: true,
        
        // CC/Recipients
        sendSignatureRequestSentEmailToCCs: true
    });

    const btnTypeOptions =[
        "Business Owner",
        "Current User",
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
                const deliveryPrefs = json?.data?.deliveryPreferences || {};
                setSettings(prev => ({ ...prev, ...deliveryPrefs }));
            } catch (e) {
                console.warn('Failed to load delivery preferences');
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
            const res = await fetch(`${apiBase}/settings/deliveryPreferences`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify(settings)
            });
            const json = await res.json();
            if (!res.ok || !json?.success) throw new Error(json?.message || 'Failed to save');
            toast.success('Delivery preferences saved successfully!');
        } catch (e: any) {
            console.error('Save error', e);
            toast.error(e?.message || 'Failed to save delivery preferences');
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

    // Handle text input changes
    const handleTextChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setSettings(prev => ({ ...prev, [field]: event.target.value }));
    };
   
    return(
        <Topbar title='Delivery Preferences' buttonText={saving ? "Saving..." : "Save Changes"} onFirstBtnClick={handleSave} >
            <Grid component={"div"} container direction={"column"} marginInline={"20px"} marginBottom={"40px"}>
                {/* grid_1 */}
                <Grid component={"div"} container border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">Delivery</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <CustomCheckbox 
        text="Attach completed document as PDF when sending completion email" 
        showHelpIcon={true} 
        checkboxProps={{ 
          checked: settings.attachCompletedDocumentPDF,
          onChange: handleCheckboxChange('attachCompletedDocumentPDF')
        }} 
      />
      <CustomCheckbox 
        text="Attach Audit Trail to completed PDF document when sending completion email" 
        showHelpIcon={true} 
        checkboxProps={{ 
          checked: settings.attachAuditTrailToPDF,
          onChange: handleCheckboxChange('attachAuditTrailToPDF')
        }} 
      />   
      </Grid>
          {/* 3rd div */}
          <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} fontWeight="500" fontSize="1rem" color="rgb(0 8 61)">Contact Button Type</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        
            <Input 
              options={btnTypeOptions} 
              value={settings.contactButtonType}
              onChange={(value) => handleSelectChange('contactButtonType')(value)}
            />
   
      </Grid>
      {/* 4th div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container alignItems={"center"} direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} paddingTop={5} fontWeight="500" fontSize="1rem" color="rgb(0 8 61)">Completed Document Prefix</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        <input 
          type="text" 
          className="title_input" 
          placeholder="[Completed]" 
          value={settings.completedDocumentPrefix}
          onChange={handleTextChange('completedDocumentPrefix')}
          style={{height: "35px", width:"39%"}}
        />     
   
      </Grid>
      {/* 5th */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container alignItems={"center"} direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} paddingTop={5} fontWeight="500" fontSize="1rem" color="rgb(0 8 61)">Custom Requester Email</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        <input 
          type="text" 
          className="title_input" 
          placeholder="max@example.com" 
          value={settings.customRequesterEmail}
          onChange={handleTextChange('customRequesterEmail')}
          style={{height: "35px", width:"39%"}}
        />     
   
      </Grid>
          </Grid>

          {/* grid_2 */}
          <Grid component={"div"} container marginTop={"30px"} border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">Sender</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <CustomCheckbox 
        text="Be notified via email when a document is initially opened by a signer" 
        checkboxProps={{ 
          checked: settings.notifyOnDocumentOpened,
          onChange: handleCheckboxChange('notifyOnDocumentOpened')
        }} 
      />
      <CustomCheckbox 
        text="Be notified via email when a document is declined by a signer" 
        checkboxProps={{ 
          checked: settings.notifyOnDocumentDeclined,
          onChange: handleCheckboxChange('notifyOnDocumentDeclined')
        }}
      />
      <CustomCheckbox 
        text="Be notified via email when a document is reassigned by a signer to another person" 
        checkboxProps={{ 
          checked: settings.notifyOnDocumentReassigned,
          onChange: handleCheckboxChange('notifyOnDocumentReassigned')
        }} 
      />
      <CustomCheckbox 
        text="Be notified via email when a document is expired" 
        checkboxProps={{ 
          checked: settings.notifyOnDocumentExpired,
          onChange: handleCheckboxChange('notifyOnDocumentExpired')
        }} 
      />
      <CustomCheckbox 
        text="Be notified via email when a document is signed by a signer" 
        checkboxProps={{ 
          checked: settings.notifyOnDocumentSigned,
          onChange: handleCheckboxChange('notifyOnDocumentSigned')
        }} 
      />
      <CustomCheckbox 
        text="Be notified via email when a document is completed" 
        checkboxProps={{ 
          checked: settings.notifyOnDocumentCompleted,
          onChange: handleCheckboxChange('notifyOnDocumentCompleted')
        }} 
      />
      
      </Grid>
      </Grid>

      {/* grid_3 */}
      <Grid component={"div"} container marginTop={"30px"} border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">Signer</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <CustomCheckbox 
        text='Send "Document Signed " email to signers' 
        showHelpIcon={true} 
        checkboxProps={{ 
          checked: settings.sendDocumentSignedEmail,
          onChange: handleCheckboxChange('sendDocumentSignedEmail')
        }} 
      />
      <CustomCheckbox 
        text='Send "Document Expired" email to signers' 
        showHelpIcon={true} 
        checkboxProps={{ 
          checked: settings.sendDocumentExpiredEmail,
          onChange: handleCheckboxChange('sendDocumentExpiredEmail')
        }} 
      />
      <CustomCheckbox 
        text='Send "Document Cancelled" email to signers' 
        showHelpIcon={true} 
        checkboxProps={{ 
          checked: settings.sendDocumentCancelledEmail,
          onChange: handleCheckboxChange('sendDocumentCancelledEmail')
        }} 
      />
      <CustomCheckbox 
        text='Send "Document Reassigned" email to signers' 
        showHelpIcon={true} 
        checkboxProps={{ 
          checked: settings.sendDocumentReassignedEmail,
          onChange: handleCheckboxChange('sendDocumentReassignedEmail')
        }} 
      />
      <CustomCheckbox 
        text='Send "Document Completed" email to signers' 
        showHelpIcon={true} 
        checkboxProps={{ 
          checked: settings.sendDocumentCompletedEmail,
          onChange: handleCheckboxChange('sendDocumentCompletedEmail')
        }} 
      />

    </Grid>
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <CustomCheckbox 
        text='Template Links - Send "Document Completed" email to signer' 
        showHelpIcon={true} 
        checkboxProps={{ 
          checked: settings.templateLinksSendCompletedEmail,
          onChange: handleCheckboxChange('templateLinksSendCompletedEmail')
        }} 
      />
      <CustomCheckbox 
        text='Template Links - Enable document updates to signer' 
        showHelpIcon={true} 
        checkboxProps={{ 
          checked: settings.templateLinksEnableDocumentUpdates,
          onChange: handleCheckboxChange('templateLinksEnableDocumentUpdates')
        }} 
      />
      </Grid>
    </Grid>

    {/* Grid_4 */}
    <Grid component={"div"} container marginTop={"30px"} border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">CC/Recipients</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <CustomCheckbox 
        text='Send "Signature Request Sent" email to CCs' 
        showHelpIcon={true} 
        checkboxProps={{ 
          checked: settings.sendSignatureRequestSentEmailToCCs,
          onChange: handleCheckboxChange('sendSignatureRequestSentEmailToCCs')
        }} 
      />

      </Grid>
      </Grid>






</Grid>
</Topbar>
);
}