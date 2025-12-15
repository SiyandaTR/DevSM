import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Instrument_Serif } from "next/font/google"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})


export const metadata: Metadata = {
  metadataBase: new URL("https://siyanda.vercel.app"),

  title: {
    default: "Siyanda – Full-Stack Developer & Software Engineer",
    template: "%s | Siyanda",
  },

  description:
    "I am a Software Developer with 3 years studying in Durban University of Technology. I have a strong skill in Programming and Problem-solving skills and am passionate about using my skills to help and contribute to body of work to achieve goals ",


    
  keywords: [
    "Siyanda Mkhize",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "TypeScript",
    "SaaS Developer",
    "Portfolio",
  ],

  authors: [{ name: "Siyanda Mkhize" }],
  creator: "Siyanda Mkhize",
  publisher: "Siyanda Mkhize",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://siyanda.vercel.app",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://siyanda.vercel.app",
    siteName: "DevSM Portfolio",
    title: "DevSM – Full-Stack Developer & Software Engineer",
    description:
      "Explore projects, skills, and experience of Siyanda Mkhize, a professional full-stack developer building modern, high-performance web applications.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Siyanda DevSM developer Portfolio",
    description:
      "Professional portfolio showcasing projects, skills, and experience in modern web development.",
    images: ["/og-image.png"],
    creator: "@siyandatrmkhize",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${figtree.style.fontFamily};
  --font-sans: ${figtree.variable};
  --font-mono: ${GeistMono.variable};
  --font-instrument-serif: ${instrumentSerif.variable};
}
        `}</style>
      </head>
      <body className={`${figtree.variable} ${instrumentSerif.variable}`}>{children}</body>
    </html>
  )
}
