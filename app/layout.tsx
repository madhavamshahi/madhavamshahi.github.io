import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// PP Formula — the AltOps display face.
const ppFormula = localFont({
  src: [
    { path: "./fonts/PPFormula-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/PPFormula-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/PPFormula-Extrabold.otf", weight: "800", style: "normal" },
  ],
  variable: "--font-pp-formula",
  display: "swap",
});

const DESCRIPTION =
  "Engineer in Miami. I build software for the boring parts of running a business. Currently working on AltOps.";

export const metadata: Metadata = {
  metadataBase: new URL("https://madhavamshahi.github.io"),
  title: "Madhavam Shahi",
  description: DESCRIPTION,
  openGraph: {
    title: "Madhavam Shahi",
    description: DESCRIPTION,
    type: "website",
    url: "https://madhavamshahi.github.io",
  },
  twitter: {
    card: "summary",
    title: "Madhavam Shahi",
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#f3efed",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} ${ppFormula.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
