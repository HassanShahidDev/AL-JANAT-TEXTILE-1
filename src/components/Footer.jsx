export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-xl font-bold">Al-Janat Textile</h3>
          <p className="mt-4 text-sm">
            Premium textile manufacturing company delivering export-quality
            fabrics worldwide.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">Karachi, Pakistan</p>
          <p className="text-sm">info@aljanattextile.com</p>
          <p className="text-sm">+92 3XX XXXXXXX</p>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t border-gray-700">
        © 2026 Al-Janat Textile. All rights reserved.
      </div>
    </footer>
  )
}
