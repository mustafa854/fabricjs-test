import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ComponentHistory from "./components/ComponentHistory/ComponentHistory";
import ContextMenuDisable from "./components/ContextMenu/ContextMenuDisable";
  


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode; 
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ContextMenuDisable >
        <ComponentHistory />
        </ContextMenuDisable>
        {children}
        
      </body>
    </html>
  );
}
