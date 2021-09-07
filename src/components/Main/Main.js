import React from "react";

export default function Main({ children, ...props }) {
  return (
    <main className="p-4" {...props}>
      {children}
    </main>
  );
}
