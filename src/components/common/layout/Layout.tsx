import type { ReactNode } from "react";

import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
