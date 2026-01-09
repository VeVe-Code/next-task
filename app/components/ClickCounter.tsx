"use client";
import { useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="mb-6">
      <button
        onClick={() => setCount(count + 1)}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Click me
      </button>
      <p className="mt-2">Clicked: {count}</p>
    </div>
  );
}
