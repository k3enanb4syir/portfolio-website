import type { Metadata } from "next";
import "./globals.css";
import Cursor from "./components/Cursor";

export const metadata: Metadata = {
  title: "KEENAN. | Muhammad Keenan Basyir",
  description: "Computer Science undergraduate exploring AI, machine learning, and software engineering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased relative selection:bg-white/20">
        <Cursor />
        {children}
      </body>
    </html>
  );
}