"use client";
import React, { useState } from 'react';
import { 
  Box, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  IconButton, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  TextField, 
  Grid,
  Chip,
  Snackbar,
  Alert,
  LinearProgress
} from '@mui/material';
import { 
  Close as CloseIcon,
  Search as SearchIcon,
  Folder as FolderIcon,
  Description as DescriptionIcon,
  CloudQueue as CloudIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';
import Text from '@/app/components/text';

// Custom icons for cloud providers
const GoogleDriveIcon = () => (
  <Box sx={{ width: 24, height: 24 }}>
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#4285F4" d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0z"/>
    </svg>
  </Box>
);

const DropboxIcon = () => (
  <Box sx={{ width: 24, height: 24 }}>
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#0061FF" d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0z"/>
    </svg>
  </Box>
);

const BoxIcon = () => (
  <Box sx={{ width: 24, height: 24 }}>
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#0061D5" d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0z"/>
    </svg>
  </Box>
);

const OneDriveIcon = () => (
  <Box sx={{ width: 24, height: 24 }}>
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#0078D4" d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0z"/>
    </svg>
  </Box>
);

interface CloudFile {
  id: string;
  name: string;
  type: 'document' | 'image' | 'other';
  size: string;
  modified: string;
  provider: 'google-drive' | 'dropbox' | 'box' | 'onedrive';
}

interface CloudStorageProps {
  open: boolean;
  onClose: () => void;
  onFileSelect: (file: CloudFile) => void;
}

const CloudStorage: React.FC<CloudStorageProps> = ({
  open,
  onClose,
  onFileSelect
}) => {
  const [selectedProvider, setSelectedProvider] = useState<'google-drive' | 'dropbox' | 'box' | 'onedrive' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isConnected, setIsConnected] = useState({
    'google-drive': false,
    'dropbox': false,
    'box': false,
    'onedrive': false
  });
  const [isConnecting, setIsConnecting] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState<'success' | 'error' | 'info'>('info');
  const [showSnackbar, setShowSnackbar] = useState(false);

  // Mock data for demonstration - replace with real API calls
  const mockFiles: CloudFile[] = [
    {
      id: '1',
      name: 'Contract Agreement.pdf',
      type: 'document',
      size: '2.3 MB',
      modified: '2 days ago',
      provider: 'google-drive'
    },
    {
      id: '2',
      name: 'NDA Template.docx',
      type: 'document',
      size: '1.8 MB',
      modified: '1 week ago',
      provider: 'google-drive'
    },
    {
      id: '3',
      name: 'Company Logo.png',
      type: 'image',
      size: '856 KB',
      modified: '3 days ago',
      provider: 'dropbox'
    },
    {
      id: '4',
      name: 'Employment Contract.pdf',
      type: 'document',
      size: '3.1 MB',
      modified: '5 days ago',
      provider: 'box'
    },
    {
      id: '5',
      name: 'Meeting Notes.docx',
      type: 'document',
      size: '1.2 MB',
      modified: '1 day ago',
      provider: 'onedrive'
    }
  ];

  const providers = [
    { id: 'google-drive', name: 'Google Drive', icon: <GoogleDriveIcon />, color: '#4285F4' },
    { id: 'dropbox', name: 'Dropbox', icon: <DropboxIcon />, color: '#0061FF' },
    { id: 'box', name: 'Box', icon: <BoxIcon />, color: '#0061D5' },
    { id: 'onedrive', name: 'OneDrive', icon: <OneDriveIcon />, color: '#0078D4' }
  ];

  const handleConnect = async (provider: 'google-drive' | 'dropbox' | 'box' | 'onedrive') => {
    // If already connected, just select the provider
    if (isConnected[provider]) {
      setSelectedProvider(provider);
      return;
    }

    setIsConnecting(true);
    
    try {
      // Generate OAuth URLs based on the provider with proper redirect URIs
      let authUrl = '';
      const userId = 'user123';
      const baseUrl = window.location.origin; // Get current domain
      
      switch (provider) {
        case 'google-drive':
          authUrl = `https://accounts.google.com/o/oauth2/auth?access_type=offline&approval_prompt=force&client_id=48305303614-9iu05rp8g0oe1pd2llpu56mhktepvoo3.apps.googleusercontent.com&redirect_uri=${encodeURIComponent(`${baseUrl}/auth/google-drive/callback`)}&response_type=code&scope=${encodeURIComponent('https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/drive.readonly')}&state=${encodeURIComponent(userId)}`;
          break;
        case 'dropbox':
          authUrl = `https://www.dropbox.com/oauth2/authorize?client_id=fd7muap84e3lq6r&redirect_uri=${encodeURIComponent(`${baseUrl}/auth/dropbox/callback`)}&response_type=code&state=${encodeURIComponent(userId)}&token_access_type=offline`;
          break;
        case 'box':
          authUrl = `https://www.box.com/api/oauth2/authorize?client_id=7cz6tifvp3bcuf785njjbpqu6aybcigd&redirect_uri=${encodeURIComponent(`${baseUrl}/auth/box/callback`)}&response_type=code&state=${encodeURIComponent(userId)}`;
          break;
        case 'onedrive':
          authUrl = `https://login.live.com/oauth20_authorize.srf?client_id=0000000040179D4B&redirect_uri=${encodeURIComponent(`${baseUrl}/auth/onedrive/callback`)}&response_type=code&scope=${encodeURIComponent('Files.Read Files.ReadWrite offline_access')}&state=${encodeURIComponent(userId)}`;
          break;
        default:
          throw new Error('Unsupported provider');
      }
      
      // Open OAuth window
      const authWindow = window.open(
        authUrl,
        `${provider}-auth`,
        'width=500,height=600,scrollbars=yes,resizable=yes'
      );
      
      // Listen for OAuth callback
      const checkClosed = setInterval(() => {
        if (authWindow?.closed) {
          clearInterval(checkClosed);
          // Simulate successful connection after window closes
          setTimeout(() => {
    setIsConnected(prev => ({ ...prev, [provider]: true }));
    setSelectedProvider(provider);
            setIsConnecting(false);
            setSnackbarMessage(`Successfully connected to ${providers.find(p => p.id === provider)?.name}`);
            setSnackbarType('success');
            setShowSnackbar(true);
          }, 1000);
        }
      }, 1000);
      
    } catch (error) {
      console.error('OAuth error:', error);
      setIsConnecting(false);
      setSnackbarMessage('Failed to connect. Please try again.');
      setSnackbarType('error');
      setShowSnackbar(true);
    }
  };

  const handleFileSelect = (file: CloudFile) => {
    onFileSelect(file);
    onClose();
    setSnackbarMessage(`File "${file.name}" selected successfully`);
    setSnackbarType('success');
    setShowSnackbar(true);
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'document':
        return <DescriptionIcon sx={{ color: '#666' }} />;
      case 'image':
        return <FolderIcon sx={{ color: '#666' }} />;
      default:
        return <CloudIcon sx={{ color: '#666' }} />;
    }
  };

  const filteredFiles = mockFiles.filter(file => 
    file.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!selectedProvider || file.provider === selectedProvider)
  );

  return (
    <>
      <Dialog 
        open={open} 
        onClose={onClose} 
        maxWidth="lg" 
        fullWidth
        PaperProps={{
          sx: { 
            borderRadius: '8px',
            minHeight: '600px'
          }
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: '1px solid #e0e0e0',
          pb: 2,
          bgcolor: 'rgb(0 8 61)',
          color: 'white'
        }}>
          <Typography variant="h5" fontWeight="600">
            Select Files from Cloud Storage
          </Typography>
          <IconButton onClick={onClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: 0, display: 'flex' }}>
          {/* Provider Sidebar */}
    <Box sx={{ 
      width: '280px', 
      borderRight: '1px solid #e0e0e0',
      bgcolor: '#fafafa',
      p: 2
    }}>
      <Typography variant="h6" fontWeight="600" mb={3} color="rgb(0 8 61)">
        Cloud Storage
      </Typography>
      
      {providers.map((provider) => (
        <Box key={provider.id} sx={{ mb: 2 }}>
          <Card 
            sx={{ 
              cursor: 'pointer',
              border: selectedProvider === provider.id ? '2px solid var(--secondary-color)' : '1px solid #e0e0e0',
              bgcolor: selectedProvider === provider.id ? '#f0f8ff' : 'white',
              '&:hover': { 
                borderColor: 'var(--secondary-color)',
                bgcolor: '#f0f8ff'
              },
              transition: 'all 0.2s ease'
            }}
            onClick={() => handleConnect(provider.id as any)}
          >
            <CardContent sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ color: provider.color }}>
                {provider.icon}
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" fontWeight="600">
                  {provider.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {isConnected[provider.id] ? 'Connected' : 'Click to connect'}
                </Typography>
              </Box>
              {isConnected[provider.id] && (
                <Chip 
                        icon={<CheckCircleIcon />}
                  label="✓" 
                  size="small" 
                  sx={{ 
                    bgcolor: 'var(--secondary-color)', 
                    color: 'white',
                    fontSize: '12px',
                    height: '20px'
                  }} 
                />
              )}
            </CardContent>
          </Card>
        </Box>
      ))}

            {isConnecting && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  Connecting...
                </Typography>
                <LinearProgress 
                  sx={{ 
                    height: 3, 
                    borderRadius: 2,
                    bgcolor: '#e0e0e0',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: 'var(--secondary-color)'
                    }
                  }} 
                />
              </Box>
            )}
    </Box>

          {/* File List */}
    <Box sx={{ flex: 1, p: 3 }}>
            {!selectedProvider || !isConnected[selectedProvider] ? (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <CloudIcon sx={{ fontSize: 64, color: '#ccc', mb: 2 }} />
          <Typography variant="h6" color="text.secondary" mb={1}>
                  {!selectedProvider ? 'Select a cloud storage provider' : 'Connect to access files'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
                  {!selectedProvider ? 'Choose from the left sidebar to browse your files' : 'Complete the authentication process to see your files'}
          </Typography>
        </Box>
      ) : (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" fontWeight="600" color="rgb(0 8 61)">
              {providers.find(p => p.id === selectedProvider)?.name} Files
            </Typography>
            <Button 
              variant="outlined" 
              size="small"
              onClick={() => setSelectedProvider(null)}
              sx={{ 
                borderColor: 'var(--secondary-color)', 
                color: 'var(--secondary-color)',
                '&:hover': { borderColor: 'var(--secondary-color)' }
              }}
            >
              Change Provider
            </Button>
          </Box>

          <TextField
            fullWidth
            placeholder="Search files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
            }}
            sx={{ mb: 3 }}
          />

          <Grid container spacing={2}>
            {filteredFiles.map((file) => (
              <Grid item xs={12} md={6} key={file.id}>
                <Card 
                  sx={{ 
                    cursor: 'pointer',
                    '&:hover': { 
                      bgcolor: '#f5f5f5',
                      borderColor: 'var(--secondary-color)'
                    },
                    border: '1px solid #e0e0e0',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => handleFileSelect(file)}
                >
                  <CardContent sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                    <Box sx={{ mr: 2 }}>
                      {getFileIcon(file.type)}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="subtitle2" fontWeight="600" noWrap>
                        {file.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {file.size} • {file.modified}
                      </Typography>
                    </Box>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{ 
                        bgcolor: 'var(--secondary-color)',
                        '&:hover': { bgcolor: 'var(--secondary-color)' },
                        minWidth: 'auto',
                        px: 2
                      }}
                    >
                      Select
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {filteredFiles.length === 0 && searchQuery && (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="body1" color="text.secondary">
                No files found matching "{searchQuery}"
              </Typography>
            </Box>
          )}
        </>
      )}
    </Box>
      </DialogContent>
    </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={() => setShowSnackbar(false)} 
          severity={snackbarType}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CloudStorage;


