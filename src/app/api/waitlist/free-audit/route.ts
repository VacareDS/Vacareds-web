import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log('[waitlist:free-audit] New submission:', JSON.stringify(body, null, 2));

  const webhookUrl = process.env.WAITLIST_WEBHOOK_AUDIT_URL;
  const secret = process.env.WAITLIST_WEBHOOK_AUDIT_SECRET;

  if (!webhookUrl) {
    console.error('[waitlist:free-audit] Missing WAITLIST_WEBHOOK_AUDIT_URL');
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 });
  }

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(secret ? { 'X-Webhook-Secret': secret } : {}),
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    console.error('[waitlist:free-audit] Webhook responded with', res.status);
    return NextResponse.json({ error: 'Webhook error' }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
