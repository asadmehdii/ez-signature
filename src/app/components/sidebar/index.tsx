"use client"
// components/Sidebar.tsx
import { useState } from "react";
import Link from "next/link";
import Button from "../button";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '250px', height: '100%', backgroundColor: '#21f1A6' }}>
    <div>
        <div>
        <Link href={"/"}>
        <h1 className="logo" style={{marginLeft: '29px'}}>EzSignature</h1>
         </Link>
        </div>
        <Button
             backgroundColor="var(--secondary-color)"
             height={60}
             width={170}
             borderRadius={15}
             style={{marginLeft: '29px'}}
        >Upgrade!</Button>

        {/* pages */}
        <div style={{margin: '52px 0px'}}>
        <div style={{display: 'flex', marginLeft: '12px'}}>
                <Link href='/pages/dashboard' style={{display: 'flex',alignItems: 'center', fontSize: '1.5rem', margin: '12px', gap: '7px'}}>
               <AutoAwesomeMosaicOutlinedIcon />
                Dashboard
                </Link>
            </div>
            <div style={{display: 'flex', marginLeft: '12px'}}>
                <Link href='/pages/documents' style={{display: 'flex',alignItems: 'center', fontSize: '1.5rem', margin: '12px', gap: '7px'}}>
                <TextSnippetOutlinedIcon />
                Documents
                </Link>
            </div>
            <div style={{display: 'flex', marginLeft: '12px'}}>
                <Link href='/pages/templates' style={{display: 'flex',alignItems: 'center', fontSize: '1.5rem', margin: '12px', gap: '7px'}}>
               <ExtensionOutlinedIcon />
                Templetes
                </Link>
            </div>
            <div style={{display: 'flex', marginLeft: '12px'}}>
                <Link href='/pages/contacts' style={{display: 'flex',alignItems: 'center', fontSize: '1.5rem', margin: '12px', gap: '7px'}}>
                <Diversity1OutlinedIcon />
                Contacts
                </Link>
            </div>
            <div style={{display: 'flex', marginLeft: '12px'}}>
                <Link href='/pages/teams' style={{display: 'flex',alignItems: 'center', fontSize: '1.5rem', margin: '12px', gap: '7px'}}>
                <GroupOutlinedIcon />
                Teams
                </Link>
            </div>
             <div style={{display: 'flex', marginLeft: '12px'}}>
                <Link href='/pages/trash' style={{display: 'flex',alignItems: 'center', fontSize: '1.5rem', margin: '12px', gap: '7px'}}>
                <DeleteOutlineIcon/>
                Trash
                </Link>
            </div>
            <div style={{display: 'flex', marginLeft: '12px'}}>
                <Link href='/pages/settings' style={{display: 'flex',alignItems: 'center', fontSize: '1.5rem', margin: '12px', gap: '7px'}}>
                <SettingsOutlinedIcon />
                Business settings
                </Link>
            </div>
        </div>

        <div style={{display: 'flex', marginLeft: '12px', marginTop: '9.678rem'}}>
            <Link href='/pages/help-center' style={{display: 'flex',alignItems: 'center', fontSize: '1.5rem', margin: '12px', gap: '7px'}}>
                <DonutSmallOutlinedIcon />
                Help center
            </Link>
        </div>
    </div>
    </div>
  );
};

export default Sidebar;
