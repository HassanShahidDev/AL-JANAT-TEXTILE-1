import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-24">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
