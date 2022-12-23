
import type { ReactNode } from "react"

import Header from "@/common/header/Header"
import Footer from "@/common/footer/Footer"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}