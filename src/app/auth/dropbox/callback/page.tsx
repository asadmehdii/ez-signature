'use client';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function DropboxCallbackContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get('code');
    const state = searchParams.get('state') || '';
    const error = searchParams.get('error');

    if (error) {
      console.error('Dropbox OAuth error:', error);
      window.close();
      return;
    }

    if (code) {
      (async () => {
        try {
          const token = localStorage.getItem('token');
          const apiBase = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
          const resp = await fetch(`${apiBase.replace(/\/$/, '')}/api/cloud-storage/providers/dropbox/callback`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token || ''}`,
            },
            body: JSON.stringify({ code, state }),
          });
          const json = await resp.json();
          if (resp.ok && json?.success) {
            try { localStorage.setItem('cloud_connected_dropbox', 'true'); } catch {}
          } else {
            console.error('Dropbox callback failed', json);
          }
        } catch (e) {
          console.error('Dropbox callback error', e);
        } finally {
          window.close();
        }
      })();
    }
  }, [searchParams]);

  return (
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100vh' }}>
      <div style={{ textAlign:'center' }}>
        <h2>Connecting to Dropbox...</h2>
        <p>This window will close automatically.</p>
      </div>
    </div>
  );
}

export default function DropboxCallback() {
  return (
    <Suspense fallback={
      <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100vh' }}>
        <div style={{ textAlign:'center' }}>
          <h2>Loading...</h2>
        </div>
      </div>
    }>
      <DropboxCallbackContent />
    </Suspense>
  );
}
