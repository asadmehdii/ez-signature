import React from "react";
import { Checkbox } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Help as HelpIcon } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import Text from "@/app/components/text";


interface CustomCheckboxProps {
  text: string;
  showHelpIcon?: boolean; 
  checkboxProps?: React.ComponentProps<typeof Checkbox>; // To pass props to Checkbox
  textStyle?: React.CSSProperties; // Optional styles for the text
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  text,
  showHelpIcon = false,
  checkboxProps = {},
  textStyle,
}) => {
  return (
    <Grid component={"div"} container alignItems={"center"}>
        <Checkbox  size="small" sx={{padding: "4px 4px 4px 0"}} {...checkboxProps} />
        <Text fontSize="1rem" color="rgb(0 8 61)">{text}</Text>
        {showHelpIcon && (
        <HelpIcon fontSize="small" sx={{ color: grey[300], marginLeft: "5px" }} />
      )}
        </Grid>
  );
};

export default CustomCheckbox;
