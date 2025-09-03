import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geek Room Kiet",
  description: "Official website of Geek Room Kiet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
        {/* Gradient balls for background effect */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="gradient-ball opacity-30" style={{ left: "32px", top: "348px" }} />
          <div className="gradient-ball opacity-30" style={{ left: "395px", top: "380px" }} />
        </div>
      </body>
    </html>
  );
}
