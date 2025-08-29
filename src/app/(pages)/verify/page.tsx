"use client";
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from "@/app/components/navbar";
import ContentBox from "@/app/components/contentBox";
import Text from "@/app/components/text";
import { Box } from "@mui/material";

export default function VerifyPage() {
  const router = useRouter();
  const params = useSearchParams();
  const [message, setMessage] = useState('Verifying...');

  useEffect(() => {
    const token = params.get('token');
    if (!token) {
      setMessage('Missing token');
      return;
    }
    const run = async () => {
      try {
        const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000/api';
        const res = await fetch(`${apiBase}/user/verify/${token}`);
        if (res.ok) {
          setMessage('Email verified. Redirecting to login...');
          setTimeout(() => router.push('/login'), 1200);
        } else {
          setMessage('Invalid or expired token');
        }
      } catch (e) {
        setMessage('Verification failed');
      }
    };
    run();
  }, [params, router]);

  return (
    <main>
      <Navbar showBtn={false} />
      <ContentBox mt={6}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight={300}>
          <Text fontSize="22px">{message}</Text>
        </Box>
      </ContentBox>
    </main>
  );
}





