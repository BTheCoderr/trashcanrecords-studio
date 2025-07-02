import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trashcan Records Studio",
  description: "Professional podcast & media studio in Providence's Innovation District",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
