
import type { ReactNode } from "react"
import Footer from "footer/Footer"
import Header from "components/common/header/Header"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}