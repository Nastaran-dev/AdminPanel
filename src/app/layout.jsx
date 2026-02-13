"use client";
import localFont from "next/font/local";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const nacyFont = localFont({
  src: "../../public/Font/Raleway-VariableFont_wght.ttf",
  variable: "--font-nacy",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en" className={nacyFont.variable}>
        <body>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
