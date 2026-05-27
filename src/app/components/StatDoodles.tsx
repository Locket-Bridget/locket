// Hero-sized stat doodles — cyber meets beauty, same hand-drawn language as Doodles.tsx.
// Each fills the polaroid frame in StatSection and illustrates its stat literally.
// Shared viewBox keeps the three feeling like siblings: 0 0 300 260.

const NAVY = '#1E3A8A';

// Soft scrapbook backdrop + corner sparkles, shared by all three.
function Backdrop() {
  return (
    <>
      <rect x="0" y="0" width="300" height="260" rx="6" fill="#f3f7fd" />
      <path d="M30 28 L32 21 L34 28 L41 26 L34 31 L32 38 L30 31 L23 26 Z" fill={NAVY} opacity="0.18" />
      <path d="M272 210 L274 204 L276 210 L282 208 L276 213 L274 219 L272 213 L266 208 Z" fill={NAVY} opacity="0.15" />
      <circle cx="266" cy="40" r="2.5" fill={NAVY} opacity="0.12" />
      <circle cx="34" cy="216" r="2" fill={NAVY} opacity="0.12" />
    </>
  );
}

// A single phone character. Three smile, one is cracked.
function Phone({ x, y, cracked = false }: { x: number; y: number; cracked?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* body */}
      <rect x="0" y="0" width="70" height="104" rx="13"
        stroke={NAVY} strokeWidth="3.5" fill={cracked ? '#f4e7e2' : '#fff8ea'} />
      {/* top speaker */}
      <rect x="26" y="7" width="18" height="3" rx="1.5" fill={NAVY} opacity="0.4" />
      {/* screen */}
      <rect x="8" y="15" width="54" height="74" rx="7"
        stroke={NAVY} strokeWidth="1.5" fill={cracked ? '#e8d2cb' : '#dbeafe'} fillOpacity="0.7" />
      {/* home dot */}
      <circle cx="35" cy="97" r="2.4" fill={NAVY} opacity="0.45" />

      {cracked ? (
        <>
          {/* jagged crack */}
          <path d="M14 20 L30 42 L22 50 L40 72 L33 86"
            stroke={NAVY} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M30 42 L46 38" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
          {/* X eyes */}
          <path d="M21 42 L29 50 M29 42 L21 50" stroke={NAVY} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M43 42 L51 50 M51 42 L43 50" stroke={NAVY} strokeWidth="2.4" strokeLinecap="round" />
          {/* worried frown */}
          <path d="M25 72 Q35 64 47 72" stroke={NAVY} strokeWidth="2.6" strokeLinecap="round" fill="none" />
          {/* band-aid sticker */}
          <g transform="rotate(-24 53 22)">
            <rect x="44" y="14" width="20" height="11" rx="5" fill="#fca5a5" stroke={NAVY} strokeWidth="1.6" />
            <circle cx="51" cy="19.5" r="0.9" fill={NAVY} opacity="0.5" />
            <circle cx="57" cy="19.5" r="0.9" fill={NAVY} opacity="0.5" />
          </g>
        </>
      ) : (
        <>
          {/* happy eyes */}
          <circle cx="25" cy="45" r="4.2" fill={NAVY} />
          <circle cx="26.5" cy="43.5" r="1.4" fill="white" />
          <circle cx="45" cy="45" r="4.2" fill={NAVY} />
          <circle cx="46.5" cy="43.5" r="1.4" fill="white" />
          {/* smile */}
          <path d="M24 62 Q35 73 46 62" stroke={NAVY} strokeWidth="2.6" strokeLinecap="round" fill="none" />
          {/* cheeks */}
          <ellipse cx="18" cy="57" rx="4.5" ry="3" fill="#fca5a5" opacity="0.5" />
          <ellipse cx="52" cy="57" rx="4.5" ry="3" fill="#fca5a5" opacity="0.5" />
        </>
      )}
    </g>
  );
}

// ① "1 in 4" — three happy phones, one cracked.
export function StatDoodleHacked({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Backdrop />
      <Phone x={66} y={22} />
      <Phone x={164} y={22} cracked />
      <Phone x={66} y={138} />
      <Phone x={164} y={138} />
    </svg>
  );
}

// ② "61%" — the account (a sad phone) locked away behind jail bars.
export function StatDoodleLockedOut({ className = '' }: { className?: string }) {
  const bars = [80, 115, 150, 185, 220];
  return (
    <svg className={className} viewBox="0 0 300 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Backdrop />

      {/* the trapped account — a sad phone */}
      <g>
        <rect x="104" y="70" width="92" height="132" rx="15" stroke={NAVY} strokeWidth="3.5" fill="#fff8ea" />
        <rect x="138" y="78" width="24" height="3.5" rx="1.75" fill={NAVY} opacity="0.4" />
        <rect x="114" y="88" width="72" height="92" rx="8" stroke={NAVY} strokeWidth="1.5" fill="#dbeafe" fillOpacity="0.7" />
        <circle cx="150" cy="192" r="2.6" fill={NAVY} opacity="0.45" />
        {/* sad eyes (sit in the gaps between bars) */}
        <circle cx="133" cy="120" r="5" fill={NAVY} />
        <circle cx="134.5" cy="118" r="1.6" fill="white" />
        <circle cx="167" cy="120" r="5" fill={NAVY} />
        <circle cx="168.5" cy="118" r="1.6" fill="white" />
        {/* tear */}
        <path d="M130 128 Q127 136 131 141 Q135 137 133 129 Z" fill="#7ab3f0" stroke={NAVY} strokeWidth="1.2" />
        {/* frown */}
        <path d="M134 158 Q150 148 166 158" stroke={NAVY} strokeWidth="2.6" strokeLinecap="round" fill="none" />
        {/* cheeks */}
        <ellipse cx="122" cy="140" rx="5.5" ry="3.5" fill="#fca5a5" opacity="0.5" />
        <ellipse cx="178" cy="140" rx="5.5" ry="3.5" fill="#fca5a5" opacity="0.5" />
      </g>

      {/* jail cell — rails + vertical bars in front */}
      <rect x="72" y="52" width="156" height="9" rx="4.5" fill={NAVY} />
      <rect x="72" y="210" width="156" height="9" rx="4.5" fill={NAVY} />
      {bars.map((x) => (
        <line key={x} x1={x} y1="58" x2={x} y2="214" stroke={NAVY} strokeWidth="6" strokeLinecap="round" />
      ))}
      {/* soft highlight down each bar for a little dimension */}
      {bars.map((x) => (
        <line key={`h${x}`} x1={x - 1.5} y1="62" x2={x - 1.5} y2="210" stroke="#5b78c4" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      ))}
    </svg>
  );
}

// ③ "49M" — open envelope character spilling personal-data cards.
export function StatDoodleLeaked({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Backdrop />

      {/* flipped & tilted so the breached envelope leans in from the left toward the top, dumping its contents into the middle */}
      <g transform="translate(0 34) rotate(162 150 130)">

      {/* data erupting up & out of the torn top — drawn first so the envelope sits in front */}
      {/* trajectory trails from the torn opening up to each item */}
      <g stroke={NAVY} strokeWidth="2" strokeLinecap="round" strokeDasharray="1.5 6" fill="none" opacity="0.4">
        <path d="M148 150 Q116 130 96 118" />
        <path d="M150 148 Q142 106 134 84" />
        <path d="M152 148 Q176 108 192 86" />
        <path d="M154 150 Q212 112 242 96" />
      </g>
      {/* @ email card */}
      <g transform="rotate(-20 92 120)">
        <rect x="73" y="108" width="38" height="26" rx="5" fill="#fff8ea" stroke={NAVY} strokeWidth="2.4" />
        <text x="92" y="127" fontSize="16" fontWeight="700" fill={NAVY} textAnchor="middle">@</text>
      </g>
      {/* ID card with face */}
      <g transform="rotate(-7 134 80)">
        <rect x="111" y="65" width="46" height="30" rx="5" fill="#fff8ea" stroke={NAVY} strokeWidth="2.4" />
        <circle cx="123" cy="80" r="6" stroke={NAVY} strokeWidth="2" fill="#dbeafe" />
        <path d="M137 75 L152 75 M137 81 L150 81 M137 87 L147 87" stroke={NAVY} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </g>
      {/* location pin */}
      <g transform="rotate(12 192 82)">
        <path d="M192 68 Q205 68 205 81 Q205 92 192 107 Q179 92 179 81 Q179 68 192 68 Z"
          fill="#fca5a5" stroke={NAVY} strokeWidth="2.4" strokeLinejoin="round" />
        <circle cx="192" cy="81" r="5" fill="#fff8ea" stroke={NAVY} strokeWidth="2" />
      </g>
      {/* phone number card — nudged clear of the envelope so they don't overlap */}
      <g transform="translate(20 -25) rotate(24 224 124)">
        <rect x="210" y="106" width="28" height="36" rx="5" fill="#fff8ea" stroke={NAVY} strokeWidth="2.4" />
        <path d="M217 116 L231 116 M217 123 L231 123 M217 130 L226 130" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" opacity="0.6" />
      </g>
      {/* loose bits + sparkles flung out */}
      <circle cx="118" cy="100" r="2.4" fill="#fca5a5" />
      <circle cx="170" cy="96" r="2" fill={NAVY} opacity="0.35" />
      <path d="M160 124 L162 118 L164 124 L170 122 L164 127 L162 133 L160 127 L154 122 Z" fill={NAVY} opacity="0.3" />

      {/* the breached envelope — upright, normal flap, ripped open across the top */}
      <g transform="rotate(-7 150 196)">
        {/* body: sides + bottom clean, top edge torn jagged */}
        <path d="M68 150 L88 142 L106 152 L124 142 L142 152 L160 142 L178 152 L196 142 L214 152 L232 146
                 L232 232 Q232 240 224 240 L76 240 Q68 240 68 232 Z"
          stroke={NAVY} strokeWidth="3.5" strokeLinejoin="round" fill="#fff8ea" />
        {/* dark interior revealed along the torn top */}
        <path d="M68 150 L88 142 L106 152 L124 142 L142 152 L160 142 L178 152 L196 142 L214 152 L232 146 L232 168 L68 168 Z"
          fill="#b9cdeb" opacity="0.55" />
        {/* second torn paper layer, lighter */}
        <path d="M68 156 L88 148 L106 158 L124 148 L142 158 L160 148 L178 158 L196 148 L214 158 L230 152"
          stroke={NAVY} strokeWidth="1.4" strokeLinejoin="round" fill="none" opacity="0.4" />
        {/* classic envelope-front seam: triangle from the top corners down to a centered apex */}
        <path d="M68 186 L150 234 L232 186" stroke={NAVY} strokeWidth="2" strokeLinejoin="round" fill="none" opacity="0.5" />
        {/* shocked face on the lower front */}
        <circle cx="136" cy="194" r="4.8" fill={NAVY} />
        <circle cx="137.5" cy="192" r="1.4" fill="white" />
        <circle cx="164" cy="194" r="4.8" fill={NAVY} />
        <circle cx="165.5" cy="192" r="1.4" fill="white" />
        <ellipse cx="150" cy="211" rx="5.5" ry="7.5" fill={NAVY} />
        <ellipse cx="124" cy="206" rx="6" ry="4" fill="#fca5a5" opacity="0.5" />
        <ellipse cx="176" cy="206" rx="6" ry="4" fill="#fca5a5" opacity="0.5" />
      </g>

      {/* burst right at the tear */}
      <circle cx="150" cy="150" r="3" fill="#fca5a5" />
      <circle cx="138" cy="156" r="2" fill={NAVY} opacity="0.4" />
      <circle cx="162" cy="155" r="2" fill={NAVY} opacity="0.4" />
      </g>
    </svg>
  );
}
