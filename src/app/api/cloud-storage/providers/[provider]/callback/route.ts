import { NextRequest } from 'next/server';

export async function POST(
	req: NextRequest,
	{ params }: { params: { provider: string } }
) {
	try {
		const provider = params.provider;
		const backendBase = process.env.NEXT_PUBLIC_API_BASE?.replace('/api', '') || 'http://66.135.21.215';
		if (!backendBase) {
			console.error('[API Proxy] BACKEND_URL not configured');
			return new Response(
				JSON.stringify({ success: false, message: 'BACKEND_URL not configured' }),
				{ status: 500, headers: { 'Content-Type': 'application/json' } }
			);
		}
		const body = await req.text();
		const authHeader = req.headers.get('authorization') || '';
		const url = `${backendBase}/cloud-storage/providers/${provider}/callback`;
		console.log(`[API Proxy] Forwarding ${provider} callback to: ${url}`);
		console.log(`[API Proxy] Auth header present: ${!!authHeader}`);
		console.log(`[API Proxy] Callback body: ${body.substring(0, 200)}...`);
		
		const resp = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: authHeader },
			body,
			cache: 'no-store'
		});
		const text = await resp.text();
		console.log(`[API Proxy] Backend callback response status: ${resp.status}`);
		console.log(`[API Proxy] Backend callback response: ${text.substring(0, 200)}...`);
		
		return new Response(text, {
			status: resp.status,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err: any) {
		console.error('[API Proxy] Callback error:', err);
		return new Response(
			JSON.stringify({ success: false, message: 'Proxy error', error: err?.message }),
			{ status: 500, headers: { 'Content-Type': 'application/json' } }
		);
	}
}
