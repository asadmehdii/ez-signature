import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";

 const SidebarData  = [
  {  
    icon: <AutoAwesomeMosaicOutlinedIcon />,  
    title: "Dashboard"
  },
  {  
    icon: <TextSnippetOutlinedIcon sx={{fontSize:"24px"}}/>,
    title: "Documents"
  },
  {  
    icon: <ExtensionOutlinedIcon sx={{fontSize:"24px"}}/>,
    title: "Templates"
  },
  {  
    icon: <Diversity1OutlinedIcon sx={{fontSize:"24px"}}/>,
    title: "Contacts"
  },
  {  
    icon: <GroupOutlinedIcon sx={{fontSize:"24px"}}/>,
    title: "Teams"
  },
  {  
    icon: <DeleteOutlineIcon sx={{fontSize:"24px"}}/>,
    title: "Trash"
  },
  {  
    icon: <SettingsOutlinedIcon sx={{fontSize:"24px"}}/>,
    title: "Settings"
  }
];

export default SidebarData