const PageBackground = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 overflow-hidden"
  >
    <svg
      className="absolute -top-8 -left-12 h-auto w-[300px] text-primary/15 sm:w-[380px] lg:w-[460px]"
      viewBox="0 0 420 420"
      fill="none"
    >
      <circle cx="140" cy="140" r="90" stroke="currentColor" strokeWidth="2" />
      <circle cx="140" cy="140" r="70" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="140" cy="140" r="50" stroke="currentColor" strokeWidth="1" />
      <path
        d="M140 50c40 0 80 25 110 65 26 36 40 74 40 108 0 42-30 72-70 72h-60"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M140 140h200c18 0 32 14 32 32v54c0 18-14 32-32 32H140"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M340 140l42 26m-42 32l42 26"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>

    <svg
      className="absolute -bottom-12 -right-12 h-auto w-[320px] text-secondary/10 sm:w-[420px] lg:w-[520px]"
      viewBox="0 0 520 360"
      fill="none"
    >
      <rect
        x="120"
        y="70"
        width="280"
        height="180"
        rx="16"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="80"
        y="110"
        width="280"
        height="180"
        rx="16"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="40"
        y="150"
        width="280"
        height="180"
        rx="16"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M380 250c40 0 70 12 92 34"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M340 280c44 0 84 12 120 34"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export default PageBackground;
