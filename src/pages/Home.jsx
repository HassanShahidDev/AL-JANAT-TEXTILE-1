import useSEO from "../hooks/useSEO"
import heroImg from "../assets/images/hero.png"

import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"

export default function Home() {
  useSEO(
    "Al-Janat Textile | Premium Fabric Manufacturer",
    "Leading Pakistani textile manufacturer providing export-quality fabrics since 1988."
  )

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center">
        <img
          src={heroImg}
          alt="Al-Janat Textile Factory"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Premium Textile Manufacturing for Global Markets
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl">
            Export-quality fabrics, modern machinery & trusted production
            standards from Pakistan since 1988.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20 text-[#0f2a44]">
            Why Choose Al-Janat Textile
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="p-10 border hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4">
                Modern Machinery
              </h3>
              <p className="text-gray-600 leading-7">
                State-of-the-art textile machines ensuring consistent quality
                and high-volume production.
              </p>
            </div>

            <div className="p-10 border hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4">
                Skilled Workforce
              </h3>
              <p className="text-gray-600 leading-7">
                Over 200 skilled professionals managing every stage from weaving
                to finishing.
              </p>
            </div>

            <div className="p-10 border hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4">
                Strict Quality Control
              </h3>
              <p className="text-gray-600 leading-7">
                International inspection standards to meet local and global
                export requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <Stats />
      

      {/* TESTIMONIALS SECTION */}
      <Testimonials />
    </>
  )
}
