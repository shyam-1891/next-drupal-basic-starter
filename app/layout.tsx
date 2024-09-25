import { DraftAlert } from "@/components/misc/DraftAlert"
import { HeaderNav } from "@/components/navigation/HeaderNav"
import type { Metadata } from "next"
import type { ReactNode } from "react"

import "@/styles/globals.css"
import "@/styles/styles.css"
import "@/styles/header.css"
import "@/styles/footer.css"
import "@/styles/herobanner.css"
import "@/styles/rich-text.css"
import "@/styles/cta-banner.css"
import "@/styles/accordion.css"
import "@/styles/imagebesidetext.css"
import "@/styles/image-with-caption.css"
import "@/styles/testimonial.css"

import HeaderComponent from "@/components/navigation/HeaderComponent"
import FooterComponent from "@/components/navigation/FooterComponent"

export const metadata: Metadata = {
  title: {
    default: "Next.js for Drupal (BCHT)",
    template: "%s | Next.js for Drupal",
  },
  description: "A Next.js site powered by a Drupal backend.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <DraftAlert />
        <div className="layout-container">
          <header role="banner" className="clearfix header_wrapper">
            <div className="main-header">
              <HeaderComponent />
            </div>
          </header>
          <main className="main-content-wrapper">
            <div className="layout-content">{children}</div>
          </main>
          <footer>
            <FooterComponent />
          </footer>
        </div>
      </body>
    </html>
  )
}
