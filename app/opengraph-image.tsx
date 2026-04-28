import { ImageResponse } from 'next/og';

export const alt = 'Oktobus · Software op maat';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const BONE = '#F3EFE9';
const INK = '#0B0B0A';
const INK_2 = '#63615C';
const TEAL = '#51A397';
const TEAL_INK = '#2F6E66';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: BONE,
          color: INK,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              background: TEAL,
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path
                d="M12 3.5c-3.9 0-6.6 2.5-6.6 6 0 1.7.7 2.9 1.4 3.7.4.4.6.8.6 1.3v1.3c0 .5-.3.7-.7.5l-1.1-.5c-.5-.2-.9.2-.8.7l.3 1.5c.1.5.5.8 1 .7l1.3-.2c.4 0 .7.2.7.6v1.2c0 .6.6.9 1.1.6l1-.7c.3-.2.8-.2 1.1 0 .6.4 1.3.4 1.9 0 .3-.2.8-.2 1.1 0l1 .7c.5.3 1.1 0 1.1-.6v-1.2c0-.4.3-.6.7-.6l1.3.2c.5.1.9-.2 1-.7l.3-1.5c.1-.5-.3-.9-.8-.7l-1.1.5c-.4.2-.7 0-.7-.5v-1.3c0-.5.2-.9.6-1.3.7-.8 1.4-2 1.4-3.7 0-3.5-2.7-6-6.6-6Z"
                fill="#ffffff"
              />
              <circle cx="10" cy="9" r="1.2" fill={TEAL} />
              <circle cx="14" cy="9" r="1.2" fill={TEAL} />
            </svg>
          </div>
          <div style={{ fontSize: 26, fontWeight: 500, letterSpacing: '0.02em' }}>
            Oktobus
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 92,
            fontWeight: 500,
            lineHeight: 1.0,
            letterSpacing: '-0.045em',
            maxWidth: 1040,
          }}
        >
          <span>Software en AI op maat,</span>
          <span>gebouwd met de snelheid</span>
          <span>
            van <span style={{ color: TEAL_INK }}>vandaag.</span>
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            color: INK_2,
            fontSize: 18,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          <span>§ Oktobus — Amsterdam</span>
          <span>oktobus.nl</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
