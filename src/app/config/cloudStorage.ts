// Cloud Storage Configuration
// Update these with your actual API credentials

export const cloudStorageConfig = {
  googleDrive: {
    clientId: 'YOUR_GOOGLE_DRIVE_CLIENT_ID',
    clientSecret: 'YOUR_GOOGLE_DRIVE_CLIENT_SECRET',
    apiKey: 'YOUR_GOOGLE_API_KEY',
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    redirectUri: 'http://localhost:3000/auth/google/callback'
  },
  
  dropbox: {
    appKey: 'YOUR_DROPBOX_APP_KEY',
    appSecret: 'YOUR_DROPBOX_APP_SECRET',
    redirectUri: 'http://localhost:3000/auth/dropbox/callback'
  },
  
  box: {
    clientId: 'YOUR_BOX_CLIENT_ID',
    clientSecret: 'YOUR_BOX_CLIENT_SECRET',
    redirectUri: 'http://localhost:3000/auth/box/callback'
  },
  
  oneDrive: {
    clientId: 'YOUR_ONEDRIVE_CLIENT_ID',
    clientSecret: 'YOUR_ONEDRIVE_CLIENT_SECRET',
    redirectUri: 'http://localhost:3000/auth/onedrive/callback',
    scopes: ['Files.Read']
  }
};

// Environment variables (recommended for production)
export const getCloudStorageConfig = () => ({
  googleDrive: {
    clientId: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_CLIENT_ID || cloudStorageConfig.googleDrive.clientId,
    clientSecret: process.env.GOOGLE_DRIVE_CLIENT_SECRET || cloudStorageConfig.googleDrive.clientSecret,
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || cloudStorageConfig.googleDrive.apiKey,
    scopes: cloudStorageConfig.googleDrive.scopes,
    redirectUri: process.env.GOOGLE_DRIVE_REDIRECT_URI || cloudStorageConfig.googleDrive.redirectUri
  },
  
  dropbox: {
    appKey: process.env.NEXT_PUBLIC_DROPBOX_APP_KEY || cloudStorageConfig.dropbox.appKey,
    appSecret: process.env.DROPBOX_APP_SECRET || cloudStorageConfig.dropbox.appSecret,
    redirectUri: process.env.DROPBOX_REDIRECT_URI || cloudStorageConfig.dropbox.redirectUri
  },
  
  box: {
    clientId: process.env.NEXT_PUBLIC_BOX_CLIENT_ID || cloudStorageConfig.box.clientId,
    clientSecret: process.env.BOX_CLIENT_SECRET || cloudStorageConfig.box.clientSecret,
    redirectUri: process.env.BOX_REDIRECT_URI || cloudStorageConfig.box.redirectUri
  },
  
  oneDrive: {
    clientId: process.env.NEXT_PUBLIC_ONEDRIVE_CLIENT_ID || cloudStorageConfig.oneDrive.clientId,
    clientSecret: process.env.ONEDRIVE_CLIENT_SECRET || cloudStorageConfig.oneDrive.clientSecret,
    redirectUri: process.env.ONEDRIVE_REDIRECT_URI || cloudStorageConfig.oneDrive.redirectUri,
    scopes: cloudStorageConfig.oneDrive.scopes
  }
});

// API endpoints for cloud storage operations
export const cloudStorageEndpoints = {
  googleDrive: {
    auth: 'https://accounts.google.com/o/oauth2/v2/auth',
    token: 'https://oauth2.googleapis.com/token',
    files: 'https://www.googleapis.com/drive/v3/files',
    download: 'https://www.googleapis.com/drive/v3/files/{fileId}?alt=media'
  },
  
  dropbox: {
    auth: 'https://www.dropbox.com/oauth2/authorize',
    token: 'https://api.dropboxapi.com/oauth2/token',
    files: 'https://api.dropboxapi.com/2/files/list_folder',
    download: 'https://content.dropboxapi.com/2/files/download'
  },
  
  box: {
    auth: 'https://account.box.com/api/oauth2/authorize',
    token: 'https://api.box.com/oauth2/token',
    files: 'https://api.box.com/2.0/folders/{folderId}/items',
    download: 'https://api.box.com/2.0/files/{fileId}/content'
  },
  
  oneDrive: {
    auth: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    token: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    files: 'https://graph.microsoft.com/v1.0/me/drive/root/children',
    download: 'https://graph.microsoft.com/v1.0/me/drive/items/{fileId}/content'
  }
};



