import { useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/images/logo.jpg"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Al-Janat Textile Logo"
            className="h-10 w-auto"
          />
          <span className="font-bold text-lg text-[#0f2a44] hidden sm:block">
            Al-Janat Textile
          </span>
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 font-medium">
          <NavLink to="/" className="hover:text-[#b88a44]">Home</NavLink>
          <NavLink to="/about" className="hover:text-[#b88a44]">About</NavLink>
          <NavLink to="/services" className="hover:text-[#b88a44]">Services</NavLink>
          <NavLink to="/products" className="hover:text-[#b88a44]">Products</NavLink>
          <NavLink to="/contact" className="hover:text-[#b88a44]">Contact</NavLink>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Products", "/products"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b"
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
