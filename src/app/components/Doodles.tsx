// Hand-drawn style SVG doodles — cyber meets beauty aesthetic

export function DoodleLock({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="90" height="118" viewBox="0 -13 90 118" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shackle — arches over and around the crown */}
      <path d="M15 48 C14 48 12 28 14 20 C17 2 40 -8 45 -8 C50 -8 73 2 76 20 C78 28 76 48 75 48"
        stroke="#1E3A8A" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
      {/* Crown — Protected Princess */}
      <path d="M20 44 L20 38 L28 18 L35 36 L45 10 L55 36 L62 18 L68 38 L68 44 Z"
        stroke="#1E3A8A" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="#E8B84B"/>
      {/* Crown peak jewels */}
      <circle cx="28" cy="18" r="2.1" fill="#C8553D" stroke="#1E3A8A" strokeWidth="1"/>
      <circle cx="45" cy="10" r="2.6" fill="#C8553D" stroke="#1E3A8A" strokeWidth="1"/>
      <circle cx="62" cy="18" r="2.1" fill="#C8553D" stroke="#1E3A8A" strokeWidth="1"/>
      {/* Band detail */}
      <circle cx="45" cy="41" r="1.9" fill="#fca5a5" stroke="#1E3A8A" strokeWidth="0.9"/>
      <circle cx="32" cy="41" r="1.1" fill="#1E3A8A" opacity="0.45"/>
      <circle cx="58" cy="41" r="1.1" fill="#1E3A8A" opacity="0.45"/>
      {/* Body — slightly wobbly rect */}
      <path d="M10 46 Q11 44 14 44 L76 45 Q78 45 79 47 L80 93 Q80 96 77 97 L13 97 Q10 97 9 94 L8 48 Q8 46 10 46Z"
        stroke="#1E3A8A" strokeWidth="3.5" fill="#fff8ea"/>
      {/* Left eye */}
      <circle cx="32" cy="66" r="5" fill="#1E3A8A"/>
      <circle cx="34" cy="64" r="2" fill="white"/>
      {/* Right eye */}
      <circle cx="58" cy="66" r="5" fill="#1E3A8A"/>
      <circle cx="60" cy="64" r="2" fill="white"/>
      {/* Smile */}
      <path d="M30 80 Q44 90 60 80" stroke="#1E3A8A" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Rosy cheeks */}
      <ellipse cx="22" cy="74" rx="6" ry="4" fill="#fca5a5" opacity="0.45"/>
      <ellipse cx="68" cy="74" rx="6" ry="4" fill="#fca5a5" opacity="0.45"/>
      {/* Sparkle top right */}
      <path d="M78 10 L80 5 L82 10 L87 8 L82 13 L80 18 L78 13 L73 8 Z" fill="#1E3A8A" opacity="0.35"/>
      {/* Little star bottom left */}
      <path d="M4 72 L5.5 68 L7 72 L11 70.5 L7 74 L5.5 78 L4 74 L0 70.5 Z" fill="#1E3A8A" opacity="0.25"/>
    </svg>
  );
}

// Water drop with face — password hygiene
export function DoodleDrop({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="62" height="68" viewBox="0 0 52 68" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26 4 Q14 24 10 38 Q7 52 18 62 Q22 66 26 66 Q30 66 34 62 Q45 52 42 38 Q38 24 26 4Z"
        stroke="#1E3A8A" strokeWidth="3" strokeLinecap="round" fill="#dbeafe" fillOpacity="0.5"/>
      <circle cx="20" cy="44" r="3.5" fill="#1E3A8A"/>
      <circle cx="32" cy="44" r="3.5" fill="#1E3A8A"/>
      <path d="M20 54 Q26 60 32 54" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Shine */}
      <path d="M16 28 Q14 24 17 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
      {/* Splash lines */}
      <path d="M8 56 L4 60" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
      <path d="M44 56 L48 60" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
      <path d="M6 48 L2 47" stroke="#1E3A8A" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
    </svg>
  );
}

// Lipstick — software updates
export function DoodleLipstick({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="50" height="72" viewBox="0 0 50 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tube base */}
      <rect x="14" y="42" width="22" height="26" rx="3" stroke="#1E3A8A" strokeWidth="3" fill="#fff8ea"/>
      {/* Middle band */}
      <rect x="12" y="32" width="26" height="13" rx="2" stroke="#1E3A8A" strokeWidth="2.5" fill="#bfdbfe"/>
      {/* Bullet body */}
      <path d="M16 32 L16 18 Q16 9 25 7 Q34 9 34 18 L34 32"
        stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" fill="#fca5a5" fillOpacity="0.65"/>
      {/* Bullet diagonal tip */}
      <path d="M16 18 Q20 10 25 7 Q30 10 34 18" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Stars */}
      <text x="37" y="22" fontSize="11" fill="#1E3A8A" opacity="0.4">★</text>
      <text x="2" y="28" fontSize="9" fill="#1E3A8A" opacity="0.35">✦</text>
      <text x="38" y="40" fontSize="8" fill="#1E3A8A" opacity="0.3">✦</text>
    </svg>
  );
}

// Compact mirror — safe posting / privacy
export function DoodleMirror({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="58" height="64" viewBox="0 0 58 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Mirror frame */}
      <circle cx="29" cy="26" r="22" stroke="#1E3A8A" strokeWidth="3.5" fill="#e0f2fe" fillOpacity="0.5"/>
      {/* Inner dashed ring */}
      <circle cx="29" cy="26" r="18" stroke="#1E3A8A" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.35"/>
      {/* Eye reflection */}
      <ellipse cx="24" cy="24" rx="3" ry="4" stroke="#1E3A8A" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="24" r="1.5" fill="#1E3A8A"/>
      <ellipse cx="34" cy="24" rx="3" ry="4" stroke="#1E3A8A" strokeWidth="2" fill="none"/>
      <circle cx="34" cy="24" r="1.5" fill="#1E3A8A"/>
      {/* Smile reflection */}
      <path d="M22 33 Q29 39 36 33" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Handle */}
      <path d="M29 48 L29 61" stroke="#1E3A8A" strokeWidth="4" strokeLinecap="round"/>
      {/* Shine */}
      <path d="M18 16 Q22 12 27 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.75"/>
    </svg>
  );
}

// Shield with heart — data protection
export function DoodleShield({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="70" height="68" viewBox="0 0 58 68" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29 4 L6 15 L6 36 Q7 54 29 65 Q51 54 52 36 L52 15 Z"
        stroke="#1E3A8A" strokeWidth="3.5" strokeLinejoin="round" fill="#dbeafe" fillOpacity="0.45"/>
      {/* Heart */}
      <path d="M29 44 Q18 34 18 26 Q18 18 24 18 Q27 18 29 22 Q31 18 34 18 Q40 18 40 26 Q40 34 29 44Z"
        stroke="#1E3A8A" strokeWidth="2.5" strokeLinejoin="round" fill="#fca5a5" fillOpacity="0.6"/>
      {/* Small star sparkle */}
      <path d="M46 10 L47.5 6 L49 10 L53 8.5 L49 12 L47.5 16 L46 12 L42 8.5 Z" fill="#1E3A8A" opacity="0.3"/>
    </svg>
  );
}

// Steaming teacup — antivirus / immunity
export function DoodleTeacup({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="64" height="68" viewBox="0 0 64 68" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cup body */}
      <path d="M10 30 Q12 58 32 60 Q52 58 54 30 Z"
        stroke="#1E3A8A" strokeWidth="3" strokeLinecap="round" fill="#fff8ea"/>
      {/* Saucer line */}
      <path d="M6 34 L58 34" stroke="#1E3A8A" strokeWidth="3" strokeLinecap="round"/>
      {/* Handle */}
      <path d="M54 38 Q67 38 67 48 Q67 58 54 58" stroke="#1E3A8A" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Steam curls */}
      <path d="M20 26 Q17 20 20 14 Q23 8 20 3" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4"/>
      <path d="M32 24 Q29 18 32 12 Q35 6 32 1" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4"/>
      <path d="M44 26 Q41 20 44 14 Q47 8 44 3" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4"/>
      {/* Little wifi dots on cup */}
      <circle cx="28" cy="46" r="2" fill="#1E3A8A" opacity="0.4"/>
      <circle cx="34" cy="46" r="2" fill="#1E3A8A" opacity="0.4"/>
      <circle cx="40" cy="46" r="2" fill="#1E3A8A" opacity="0.4"/>
    </svg>
  );
}
