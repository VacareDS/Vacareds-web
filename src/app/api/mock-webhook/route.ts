import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log('[mock-webhook] Received meeting booking:', JSON.stringify(body, null, 2));
  // Simula un pequeño delay de red
  await new Promise(r => setTimeout(r, 600));
  return NextResponse.json({ ok: true }, { status: 200 });
}
