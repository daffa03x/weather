import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
title: "DapWeather",
  description: "Get the latest weather updates for your location",
  openGraph: {
    siteName: "DapWeather",
    title: "DapWeather",
    description: "Get the latest weather updates for your location",
    type: "website",
    url: "https://your-app.com", // Ganti dengan URL situsmu
    images: [
      {
        url: "/image/weather-icon.png", // Ganti dengan path gambar
        width: 800,
        height: 600,
        alt: "Weather App Preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
