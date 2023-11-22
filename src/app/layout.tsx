import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nebo8 - Creative Agency",
  description: "Nebo8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
