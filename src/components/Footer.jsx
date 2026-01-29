import logo from "../assets/images/logo.png"

export default function Footer() {
  return (
    <footer className="bg-[#0f2a44] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          <img
            src={logo}
            alt="Al-Janat Textile"
            className="h-12 bg-white p-2 rounded"
          />
          <p className="mt-6 text-sm leading-7">
            Al-Janat Textile is a trusted Pakistani textile manufacturer
            supplying premium fabrics nationwide since 1988.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-sm">📞 0301-8655255</p>
          <p className="text-sm mt-2">📍 Pakistan</p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Al-Janat Textile · Developed by <strong>hassndev</strong>
      </div>
    </footer>
  )
}
