// Retro badge-style illustrations — layered, colorful, cyber-themed
// Style inspo: flat color shapes with bold text inside, like vintage label art

// Padlock badge — "Cyber Care IS SELF CARE"
export function PadlockBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="170"
      height="210"
      viewBox="0 0 170 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow layer (offset) */}
      <rect x="18" y="103" width="142" height="106" rx="16" fill="#93c5fd" opacity="0.5"/>

      {/* Shackle — navy thick arch */}
      <path
        d="M36 100 L36 62 Q36 18 85 18 Q134 18 134 62 L134 100"
        stroke="#1E3A8A" strokeWidth="18" strokeLinecap="round" fill="none"
      />
      {/* Shackle inner cutout (cream) */}
      <path
        d="M46 100 L46 64 Q46 32 85 32 Q124 32 124 64 L124 100"
        stroke="#fff8ea" strokeWidth="8" strokeLinecap="round" fill="none"
      />

      {/* Lock body — navy */}
      <rect x="10" y="96" width="150" height="108" rx="16" fill="#1E3A8A"/>
      {/* Lock body — cream inner layer */}
      <rect x="20" y="106" width="130" height="90" rx="10" fill="#fff8ea"/>

      {/* Text: script line */}
      <text
        x="85" y="140"
        textAnchor="middle"
        fontSize="24"
        fontFamily="Pacifico, cursive"
        fill="#1E3A8A"
      >
        Cyber Care
      </text>

      {/* Divider line */}
      <line x1="40" y1="150" x2="130" y2="150" stroke="#1E3A8A" strokeWidth="1.5" opacity="0.2"/>

      {/* Text: bold caps */}
      <text
        x="85" y="170"
        textAnchor="middle"
        fontSize="13"
        fontFamily="Fredoka, sans-serif"
        fontWeight="700"
        fill="#1E3A8A"
        letterSpacing="3"
      >
        IS SELF CARE
      </text>

      {/* Star row */}
      <text x="85" y="186" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1E3A8A" opacity="0.4" letterSpacing="6">★ ★ ★</text>
    </svg>
  );
}

// Shield badge — "Your Data PROTECTED"
export function ShieldBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="160"
      height="185"
      viewBox="0 0 160 185"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <path
        d="M82 12 L14 36 L14 100 Q17 152 82 175 Q147 152 150 100 L150 36 Z"
        fill="#93c5fd" opacity="0.4" transform="translate(4,5)"
      />
      {/* Shield — navy fill */}
      <path
        d="M80 10 L12 34 L12 98 Q15 150 80 173 Q145 150 148 98 L148 34 Z"
        fill="#1E3A8A"
      />
      {/* Inner shield — cream */}
      <path
        d="M80 24 L26 44 L26 98 Q28 138 80 158 Q132 138 134 98 L134 44 Z"
        fill="#fff8ea"
      />

      {/* Text */}
      <text
        x="80" y="86"
        textAnchor="middle"
        fontSize="20"
        fontFamily="Pacifico, cursive"
        fill="#1E3A8A"
      >
        Your Data
      </text>
      <line x1="42" y1="95" x2="118" y2="95" stroke="#1E3A8A" strokeWidth="1.5" opacity="0.2"/>
      <text
        x="80" y="114"
        textAnchor="middle"
        fontSize="13"
        fontFamily="Fredoka, sans-serif"
        fontWeight="700"
        fill="#1E3A8A"
        letterSpacing="2"
      >
        PROTECTED
      </text>
      {/* Heart detail */}
      <text x="80" y="132" textAnchor="middle" fontSize="14" fill="#fca5a5">♥</text>
    </svg>
  );
}

// Phone badge — "Stay Private ONLINE"
export function PhoneBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="130"
      height="200"
      viewBox="0 0 130 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <rect x="14" y="14" width="106" height="180" rx="20" fill="#93c5fd" opacity="0.35"/>

      {/* Phone body — navy */}
      <rect x="10" y="10" width="110" height="182" rx="18" fill="#1E3A8A"/>
      {/* Screen — cream */}
      <rect x="20" y="28" width="90" height="146" rx="10" fill="#fff8ea"/>

      {/* Camera dot */}
      <circle cx="65" cy="20" r="4" fill="#fff8ea" opacity="0.6"/>

      {/* Text */}
      <text
        x="65" y="82"
        textAnchor="middle"
        fontSize="20"
        fontFamily="Pacifico, cursive"
        fill="#1E3A8A"
      >
        Stay
      </text>
      <text
        x="65" y="108"
        textAnchor="middle"
        fontSize="20"
        fontFamily="Pacifico, cursive"
        fill="#1E3A8A"
      >
        Private
      </text>
      <line x1="36" y1="117" x2="94" y2="117" stroke="#1E3A8A" strokeWidth="1.5" opacity="0.2"/>
      <text
        x="65" y="134"
        textAnchor="middle"
        fontSize="11"
        fontFamily="Fredoka, sans-serif"
        fontWeight="700"
        fill="#1E3A8A"
        letterSpacing="3"
      >
        ONLINE
      </text>

      {/* Lock icon on screen */}
      <path d="M56 152 L56 147 Q56 142 65 142 Q74 142 74 147 L74 152" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4"/>
      <rect x="52" y="151" width="26" height="18" rx="4" fill="none" stroke="#1E3A8A" strokeWidth="2" opacity="0.4"/>

      {/* Home bar */}
      <rect x="48" y="166" width="34" height="4" rx="2" fill="#1E3A8A" opacity="0.2"/>
    </svg>
  );
}
