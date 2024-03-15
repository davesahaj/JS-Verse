import { ThemeProvider } from "@/app/components/theme-provider";

import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "The Arbitrary",
  description: "A blog by Sahaj Dave",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(lato.variable, "")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 font-lato">{children}</main>

          <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </ThemeProvider>
      </body>
    </html>
  );
}
