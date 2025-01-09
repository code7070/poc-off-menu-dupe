export default function ButtonClose({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      className="absolute top-4 right-4 aspect-square rounded-full bg-black text-white p-2 transition-all active:scale-90"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  );
}
