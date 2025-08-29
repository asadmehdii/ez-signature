'use client';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function GoogleDriveCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const error = searchParams.get('error');

    if (error) {
      console.error('Google Drive OAuth error:', error);
      // Close the popup window
      window.close();
      return;
    }

    if (code && state) {
      // In a real implementation, you would:
      // 1. Send the code to your backend
      // 2. Exchange it for an access token
      // 3. Store the token securely
      console.log('Google Drive OAuth successful:', { code, state });
      
      // For now, just close the popup
      // The parent window will detect this and update the UI
      window.close();
    }
  }, [searchParams]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Connecting to Google Drive...</h2>
        <p>This window will close automatically.</p>
      </div>
    </div>
  );
}

