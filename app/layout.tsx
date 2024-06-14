import { cn } from "@/utils/classname";
import "./globals.css";

import type { Metadata } from "next";
import { Lato } from "next/font/google";


const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "pdk.io",
    template: "%s - pdk.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen", lato.className)}>
        {children}
      </body>
    </html>
  );
}
