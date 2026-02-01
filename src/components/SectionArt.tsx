const SectionArt = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,hsl(var(--accent)/0.08),transparent_48%),radial-gradient(circle_at_82%_78%,hsl(var(--primary)/0.08),transparent_52%)]" />
    <div
      className="absolute inset-0 opacity-25"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='48' height='48' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='48' height='48' patternUnits='userSpaceOnUse'%3E%3Cpath d='M48 0H0V48' fill='none' stroke='rgba(0,0,0,0.025)' stroke-width='1'/%3E%3Cpath d='M0 16H48' stroke='rgba(0,0,0,0.018)' stroke-width='1'/%3E%3Cpath d='M0 32H48' stroke='rgba(0,0,0,0.018)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E\")",
      }}
    />
  </div>
);

export default SectionArt;
