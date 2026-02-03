import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import WhatsAppButton from "./components/WhatsAppButton"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import ScrollToTop from "./layout/ScrollToTop"

export default function App() {
  return (
    <>
      <WhatsAppButton />

      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  )
}
