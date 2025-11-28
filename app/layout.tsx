import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const APP_NAME = "Yimla Health";
const APP_DESCRIPTION =
  "Securely view medical records that were shared with you via a Yimla Health link.";

export const metadata: Metadata = {
  title: `${APP_NAME} · Shared Records`,
  description: APP_DESCRIPTION,
  openGraph: {
    title: `${APP_NAME} · Shared Records`,
    description: APP_DESCRIPTION,
    url: "https://health.yimla.dev",
    siteName: APP_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} · Shared Records`,
    description: APP_DESCRIPTION,
    site: "@yimlahealth",
  },
  appleWebApp: {
    capable: true,
    title: APP_NAME,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
