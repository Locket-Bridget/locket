export default function LocketIcon() {
  return (
    <svg
      className="inline-block h-10 w-10 fill-current" // inherits text color
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
    >
      {/* Outer locket shape */}
      <path d="M12 2a6 6 0 0 0-6 6v2.4a7.9 7.9 0 0 0-2.4 5.6c0 4.4 3.6 8 8 8s8-3.6 8-8a7.9 7.9 0 0 0-2.4-5.6V8a6 6 0 0 0-6-6zm0 2a4 4 0 0 1 4 4v1.5a7.9 7.9 0 0 0-8 0V8a4 4 0 0 1 4-4z" />

      {/* White heart in the center */}
      <path
        d="M12 13.3l-1.45-1.32a1.5 1.5 0 1 0-2.1 2.14l3.55 3.41 3.55-3.41a1.5 1.5 0 1 0-2.1-2.14L12 13.3z"
        fill="#ffffff"
      />
    </svg>
  );
}
