import type { Metadata } from "next";
import "./globals.css";
import { raleway } from "./ui/fonts";


export const metadata: Metadata = {
  title: "Halo",
  description: "Halo Landing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
