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

// Custom icons for cloud providers - matching the image design
const GoogleDriveIcon = () => (
  <Box sx={{ width: 48, height: 48 }}>
    <svg viewBox="0 0 24 24" width="48" height="48">
      <path fill="#4285F4" d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0z"/>
    </svg>
  </Box>
);

const DropboxIcon = () => (
  <Box sx={{ width: 48, height: 48 }}>
    <svg viewBox="0 0 24 24" width="48" height="48">
      <path fill="#0061FF" d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0z"/>
    </svg>
  </Box>
);

const BoxIcon = () => (
  <Box sx={{ width: 48, height: 48 }}>
    <svg viewBox="0 0 24 24" width="48" height="48">
      <path fill="#0061D5" d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0z"/>
    </svg>
  </Box>
);

const OneDriveIcon = () => (
  <Box sx={{ width: 48, height: 48 }}>
    <svg viewBox="0 0 24 24" width="48" height="48">
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

  const providers = [
    { id: 'google-drive', name: 'Google Drive', icon: <GoogleDriveIcon />, color: '#4285F4' },
    { id: 'dropbox', name: 'Dropbox', icon: <DropboxIcon />, color: '#0061FF' },
    { id: 'box', name: 'Box', icon: <BoxIcon />, color: '#0061D5' },
    { id: 'onedrive', name: 'OneDrive', icon: <OneDriveIcon />, color: '#0078D4' }
  ];

  const handleConnect = async (provider: 'google-drive' | 'dropbox' | 'box' | 'onedrive') => {
    if (isConnected[provider]) {
      setSelectedProvider(provider);
      return;
    }

    setIsConnecting(true);
    
    try {
      const token = localStorage.getItem('token');
      const baseApi = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
      console.log(`[CloudStorage] Getting auth URL for ${provider} from: ${baseApi}/api/cloud-storage/providers/${provider}/auth-url`);
      
      const res = await fetch(`${baseApi.replace(/\/$/, '')}/api/cloud-storage/providers/${provider}/auth-url`, {
        headers: {
          Authorization: `Bearer ${token || ''}`,
        },
      });
      
      console.log(`[CloudStorage] Auth URL response status: ${res.status}`);
      const json = await res.json();
      console.log(`[CloudStorage] Auth URL response:`, json);
      
      if (!res.ok || !json?.data?.authUrl) {
        console.error('Failed to get auth URL', json);
        throw new Error(json?.message || 'Failed to generate authorization URL');
      }
      const authUrl = json.data.authUrl as string;
      console.log('[CloudStorage] Opening auth URL:', authUrl);

      try { localStorage.removeItem(`cloud_connected_${provider}`); } catch {}

      const authWindow = window.open(
        authUrl,
        `${provider}-auth`,
        'width=500,height=600,scrollbars=yes,resizable=yes'
      );
      
      const checkClosed = setInterval(() => {
        if (authWindow?.closed) {
          clearInterval(checkClosed);
          setIsConnecting(false);
          const connectedFlag = localStorage.getItem(`cloud_connected_${provider}`);
          if (connectedFlag === 'true') {
            setIsConnected(prev => ({ ...prev, [provider]: true }));
            setSelectedProvider(provider);
            setSnackbarMessage(`Successfully connected to ${providers.find(p => p.id === provider)?.name}`);
            setSnackbarType('success');
            setShowSnackbar(true);
          } else {
            console.warn('[CloudStorage] OAuth window closed without success for', provider);
            setSnackbarMessage('Connection not completed. Please try again.');
            setSnackbarType('error');
            setShowSnackbar(true);
          }
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
    }
  ];

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
            borderRadius: '12px',
            minHeight: '600px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: '1px solid #e0e0e0',
          pb: 2,
          bgcolor: '#f8f9fa',
          color: '#333'
        }}>
          <Typography variant="h5" fontWeight="600">
            Select Files from Cloud Storage
          </Typography>
          <IconButton onClick={onClose} sx={{ color: '#666' }}>
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
            <Typography variant="h6" fontWeight="600" mb={3} color="#333">
              Cloud Storage
            </Typography>
            
            {providers.map((provider) => (
              <Box key={provider.id} sx={{ mb: 2 }}>
                <Card 
                  sx={{ 
                    cursor: 'pointer',
                    border: selectedProvider === provider.id ? '2px solid #007bff' : '1px solid #e0e0e0',
                    bgcolor: selectedProvider === provider.id ? '#f0f8ff' : 'white',
                    '&:hover': { 
                      borderColor: '#007bff',
                      bgcolor: '#f0f8ff'
                    },
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => setSelectedProvider(provider.id as any)}
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
                          bgcolor: '#28a745', 
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
                      bgcolor: '#007bff'
                    }
                  }} 
                />
              </Box>
            )}
          </Box>

          {/* Right Pane - Matching the image design exactly */}
          <Box sx={{ flex: 1, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {!selectedProvider ? (
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <CloudIcon sx={{ fontSize: 80, color: '#ccc', mb: 3 }} />
                <Typography variant="h4" fontWeight="600" color="#333" mb={2}>
                  Select a cloud storage provider
                </Typography>
                <Typography variant="body1" color="#666" sx={{ maxWidth: '400px' }}>
                  Choose from the left sidebar to browse your files
                </Typography>
              </Box>
            ) : !isConnected[selectedProvider] ? (
              <Box sx={{ textAlign: 'center', py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, maxWidth: '500px' }}>
                {/* Large provider icon */}
                <Box sx={{ color: providers.find(p => p.id === selectedProvider)?.color }}>
                  {providers.find(p => p.id === selectedProvider)?.icon}
                </Box>
                
                {/* Large title */}
                <Typography variant="h3" fontWeight="600" color="#333" sx={{ mb: 2 }}>
                  Select Files from {providers.find(p => p.id === selectedProvider)?.name}
                </Typography>
                
                {/* Instructions */}
                <Typography variant="body1" color="#666" sx={{ mb: 1 }}>
                  You need to authenticate with {providers.find(p => p.id === selectedProvider)?.name}.
                </Typography>
                
                {selectedProvider === 'onedrive' && (
                  <Typography variant="body2" color="#888" sx={{ mb: 2 }}>
                    Note: OneDrive for Business is not supported. Please use personal OneDrive.
                  </Typography>
                )}
                
                <Typography variant="body2" color="#888" sx={{ mb: 3 }}>
                  We only extract files and never modify or delete them.
                </Typography>
                
                {/* Centered connect button */}
                <Button 
                  variant="contained"
                  size="large"
                  onClick={() => handleConnect(selectedProvider)}
                  sx={{ 
                    bgcolor: providers.find(p => p.id === selectedProvider)?.color || '#007bff',
                    '&:hover': { 
                      bgcolor: providers.find(p => p.id === selectedProvider)?.color || '#0056b3' 
                    },
                    px: 4,
                    py: 1.5,
                    fontSize: '16px',
                    fontWeight: 600,
                    borderRadius: '8px',
                    minWidth: '200px'
                  }}
                >
                  Connect {providers.find(p => p.id === selectedProvider)?.name}
                </Button>
                
                <Typography variant="body2" color="#888" sx={{ mt: 2 }}>
                  A new page will open to connect your account. To disconnect click the provider again.
                </Typography>
              </Box>
            ) : (
              <>
                <Box sx={{ width: '100%', mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h5" fontWeight="600" color="#333">
                      {providers.find(p => p.id === selectedProvider)?.name} Files
                    </Typography>
                    <Button 
                      variant="outlined" 
                      size="small"
                      onClick={() => setSelectedProvider(null)}
                      sx={{ 
                        borderColor: '#007bff', 
                        color: '#007bff',
                        '&:hover': { borderColor: '#0056b3' }
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
                </Box>

                <Grid container spacing={2}>
                  {filteredFiles.map((file) => (
                    <Grid item xs={12} md={6} key={file.id}>
                      <Card 
                        sx={{ 
                          cursor: 'pointer',
                          '&:hover': { 
                            bgcolor: '#f5f5f5',
                            borderColor: '#007bff'
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
                          <Button size="small" variant="contained" sx={{ bgcolor: '#007bff', '&:hover': { bgcolor: '#0056b3' } }}>Select</Button>
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
















