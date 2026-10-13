const SECURITY_HEADERS = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self' data:",
    "connect-src 'self' https://challenges.cloudflare.com",
    "frame-src https://challenges.cloudflare.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join('; '),
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
};

const withSecurityHeaders = (response) => {
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(name, value);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

async function handleContact(request, env) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
  }

  if (!env.TURNSTILE_SECRET_KEY || !env.RESEND_API_KEY) {
    console.error('Contact form secrets are not configured.');
    return json({ error: 'The contact form is temporarily unavailable. Please try again later.' }, 503);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Invalid form submission.' }, 400);
  }

  const name = String(payload?.name || '').trim();
  const company = String(payload?.company || '').trim();
  const email = String(payload?.email || '').trim();
  const challenge = String(payload?.challenge || '').trim();
  const turnstileToken = String(payload?.turnstileToken || '').trim();

  if (!name || !email || !challenge || !turnstileToken) {
    return json({ error: 'Please complete all required fields.' }, 400);
  }

  if (name.length > 120 || company.length > 160 || email.length > 254 || challenge.length > 5000) {
    return json({ error: 'One or more fields are too long.' }, 400);
  }

  if (!isEmail(email)) {
    return json({ error: 'Please enter a valid email address.' }, 400);
  }

  const verifyBody = new FormData();
  verifyBody.append('secret', env.TURNSTILE_SECRET_KEY);
  verifyBody.append('response', turnstileToken);
  const clientIp = request.headers.get('CF-Connecting-IP');
  if (clientIp) verifyBody.append('remoteip', clientIp);

  let verification;
  try {
    const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: verifyBody,
    });
    verification = await verifyResponse.json();
  } catch (error) {
    console.error('Turnstile verification request failed:', error);
    return json({ error: 'Security verification failed. Please try again.' }, 502);
  }

  if (!verification?.success) {
    console.warn('Turnstile rejected submission:', verification?.['error-codes']);
    return json({ error: 'Security verification failed. Please refresh the check and try again.' }, 400);
  }

  const safeCompany = company.replace(/[\r\n]+/g, ' ').trim();
  const subject = `Lotus Technologies inquiry${safeCompany ? ` — ${safeCompany}` : ''}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    ...(company ? [`Company: ${company}`] : []),
    '',
    "What they're trying to solve:",
    challenge,
  ].join('\n');

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#172033">
      <h2 style="margin:0 0 20px">New Lotus Technologies website inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}<br>
      <strong>Email:</strong> ${escapeHtml(email)}${company ? `<br><strong>Company:</strong> ${escapeHtml(company)}` : ''}</p>
      <h3 style="margin:24px 0 8px">What they're trying to solve</h3>
      <p style="white-space:pre-wrap">${escapeHtml(challenge)}</p>
    </div>`;

  let resendResponse;
  try {
    resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.RESEND_FROM_EMAIL || 'Lotus Technologies <info@lotustechnologies.dev>',
        to: ['rjsampson@outlook.com'],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });
  } catch (error) {
    console.error('Resend request failed:', error);
    return json({ error: 'We could not send your message. Please try again in a moment.' }, 502);
  }

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    console.error('Resend rejected email:', resendResponse.status, errorText);
    return json({ error: 'We could not send your message. Please try again in a moment.' }, 502);
  }

  return json({ success: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      return withSecurityHeaders(await handleContact(request, env));
    }

    return withSecurityHeaders(await env.ASSETS.fetch(request));
  },
};
