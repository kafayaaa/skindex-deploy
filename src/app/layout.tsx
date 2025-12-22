// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skindex - Your Skin Health Companion",
  description:
    "Website analisis kondisi wajah dengan journaling progress harian serta melacak penyebab pemicu breakout",
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className="scroll-smooth overflow-y-scroll"
      suppressHydrationWarning
    >
      <body className={plusJakartaSans.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
