'use client';
import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function GoogleDriveCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
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
        try {
          const token = localStorage.getItem('token');
          const apiBase = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
          const resp = await fetch(`${apiBase.replace(/\/$/, '')}/api/cloud-storage/providers/google-drive/callback`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token || ''}`,
            },
            body: JSON.stringify({ code, state }),
          });
          const json = await resp.json();
          if (resp.ok && json?.success) {
            try { localStorage.setItem('cloud_connected_google-drive', 'true'); } catch {}
          } else {
            console.error('Callback exchange failed', json);
          }
        } catch (e) {
          console.error('Callback error', e);
        } finally {
          window.close();
        }
      }
    };

    handleCallback();
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

export default function GoogleDriveCallback() {
  return (
    <Suspense fallback={
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Loading...</h2>
        </div>
      </div>
    }>
      <GoogleDriveCallbackContent />
    </Suspense>
  );
}