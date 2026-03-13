import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lease Guide — Modified NNN Lease Agreement",
  description: "Interactive lease guide for landlord and tenant parties to a Modified NNN Lease at 4000 Pulaski Pike NW, Huntsville, AL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
