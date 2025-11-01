import React, { useState } from "react";
import { Switch, Modal, Box, Typography, Button, IconButton } from "@mui/material";
import { ClearOutlined } from '@mui/icons-material';
import Text from "@/app/components/text";

const ModelToggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsToggled(isChecked);
    if (isChecked) {
      setIsModalOpen(true); // Open modal when toggled on
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Switch
        checked={isToggled}
        onChange={handleToggleChange}
        inputProps={{ "aria-label": "authentication toggle" }}
      />
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="authentication-modal-title"
        aria-describedby="authentication-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "8px",
            width: "300px",
            textAlign: "center",
            pb:2.5
          }}
        >
        <Box sx={{display: "flex", justifyContent:"space-between", padding: "12px", borderBottom: "1px solid #e8e8e9", background: "rgba(25, 118, 210, 0.08)",alignItems:'center'}}>
            <Typography id="authentication-modal-title" variant="h6">
            Signer Authentication
          </Typography>
          <IconButton onClick={handleCloseModal}><ClearOutlined /></IconButton>
            </Box>
         
          <Typography
            id="authentication-modal-description"
            sx={{ mt: 2 }}
          >
            Please complete the authentication process.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleCloseModal}
          >
            Close
          </Button>
        </Box>
      </Modal>
      <Text fontSize="0.875rem" color="rgb(0 8 61)">Signer autentication disabled</Text>
      
    </div>
  );
};

export default ModelToggle;
