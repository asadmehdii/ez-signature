import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load the Mada font
const mada = localFont({
  src: "./fonts/Mada-VariableFont_wght.ttf", 
  variable: "--font-mada",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-signature",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mada.variable} antialiased`} 
      >
        {children}
      </body>
    </html>
  );
}
