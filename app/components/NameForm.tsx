"use client";
import React, { useEffect, useState } from "react";

export default function NameForm() {
  const [name, setName] = useState<string>("");
  const [savedName, setSavedName] = useState<string>("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) setSavedName(storedName);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    setSavedName(name);
    setName("");
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded border px-3 py-2"
          placeholder="Enter name"
        />
        <button
          type="submit"
          className="rounded bg-green-600 px-4 py-2 text-white"
        >
          Submit
        </button>
      </form>

      {savedName && <p className="mt-2">Name: {savedName}</p>}
    </div>
  );
}
