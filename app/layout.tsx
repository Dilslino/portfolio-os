import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({ subsets:["latin"], variable:"--font-geist-sans" });
export const metadata: Metadata = { title:"Portfolio OS — xDil", description:"Premium operating-system portfolio template built with Next.js." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="id" suppressHydrationWarning><body className={`${geist.variable} noise antialiased`}><ThemeProvider>{children}</ThemeProvider></body></html>;
}
