import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return NextResponse.json({ success: false, message: 'No token provided' }, { status: 401 });
    }

    const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://66.135.21.215/api';
    
    console.log('Creating checkout session with:', body);
    console.log('Making request to:', `${apiBase}/stripe/create-checkout-session`);
    
    const response = await fetch(`${apiBase}/stripe/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    console.log('Backend response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Backend error response:', errorText);
      return NextResponse.json(
        { success: false, message: `Backend error: ${response.status} - ${errorText}` }, 
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Stripe checkout session error:', error);
    
    // Check if it's a connection error
    if (error.message.includes('ECONNREFUSED') || error.message.includes('fetch failed')) {
      return NextResponse.json(
        { success: false, message: 'Backend server is not running. Please start the backend server.' },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}





