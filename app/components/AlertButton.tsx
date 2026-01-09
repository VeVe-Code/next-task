"use client";

export default function AlertButton() {
  return (
    <button
      onClick={() => alert("Button clicked!")}
      className="mb-6 rounded bg-red-500 px-4 py-2 text-white"
    >
      Show Alert
    </button>
  );
}
