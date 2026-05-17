import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Vacare Digital Solutions — Sistemas digitales que generan ingresos';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#1C1828',
          padding: '64px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gradient accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #E8417A 0%, #F07030 50%, #F5A623 100%)',
          }}
        />

        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232,65,122,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
          <div
            style={{
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(247,246,242,0.4)',
            }}
          >
            VACARE DIGITAL SOLUTIONS
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '60px',
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: '-2px',
            color: '#F7F6F2',
            marginBottom: '20px',
            maxWidth: '800px',
          }}
        >
          {isEs
            ? 'El sistema que vende mientras dormís.'
            : 'The system that sells while you sleep.'}
        </div>

        {/* Subheadline */}
        <div
          style={{
            fontSize: '22px',
            color: 'rgba(247,246,242,0.5)',
            lineHeight: 1.5,
            maxWidth: '600px',
            marginBottom: '44px',
          }}
        >
          {isEs
            ? 'Automatizaciones reales, resultados medibles, sin depender de vos.'
            : 'Real automations, measurable results, without depending on you.'}
        </div>

        {/* Social proof pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap' as const,
          }}
        >
          {[
            { num: '+8', label: isEs ? 'Negocios activos' : 'Active businesses' },
            { num: '30%', label: isEs ? 'Más facturación · Supertramp' : 'More revenue · Supertramp' },
            { num: '30d', label: isEs ? 'Entrega promedio' : 'Avg delivery' },
          ].map((stat) => (
            <div
              key={stat.num}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(247,246,242,0.06)',
                border: '0.5px solid rgba(247,246,242,0.12)',
                borderRadius: '20px',
                padding: '8px 16px',
              }}
            >
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: 800,
                  background: 'linear-gradient(90deg, #E8417A, #F5A623)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {stat.num}
              </span>
              <span style={{ fontSize: '14px', color: 'rgba(247,246,242,0.45)' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
