import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";

 const SidebarData  = [
  {  
    icon: <AutoAwesomeMosaicOutlinedIcon />,  // Use JSX syntax here
    title: "Dashboard"
  },
  {  
    icon: <TextSnippetOutlinedIcon />,
    title: "Documents"
  },
  {  
    icon: <ExtensionOutlinedIcon />,
    title: "Templates"
  },
  {  
    icon: <Diversity1OutlinedIcon />,
    title: "Contacts"
  },
  {  
    icon: <GroupOutlinedIcon />,
    title: "Teams"
  },
  {  
    icon: <DeleteOutlineIcon />,
    title: "Trash"
  },
  {  
    icon: <SettingsOutlinedIcon />,
    title: "Business settings"
  }
];

export default SidebarData