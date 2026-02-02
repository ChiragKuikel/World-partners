import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Providers } from "./providers"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "World Partner Nepal - Consultancy for Japan Careers",
  description: "World Partner helps Nepali youths access training, internships, and job opportunities in Japan.",
  
  icons: {
    icon: [
      {
        url: "/icon.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.jpeg",
        type: "image/jpeg",
      },
    ],
    apple: "/icon.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
      <Providers>
        {children}
       </Providers> 
        <Analytics />
      </body>
    </html>
  )
}
