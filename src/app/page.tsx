import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-lg my-2">next v15 + daisyui</h1>
      <p className="font-sans">Your font in sans</p>
      <p className="font-mono">Your font in mono</p>
      <h1 className="text-lg mt-8">color theme</h1>
      <div className="flex my-2">
        <button className="rounded-none btn btn-xs">btn</button>
        <button className="rounded-none btn btn-xs btn-primary">primary</button>
        <button className="rounded-none btn btn-xs btn-secondary">secondary</button>
        <button className="rounded-none btn btn-xs btn-accent">accent</button>
      </div>
    </div>
  );
}
