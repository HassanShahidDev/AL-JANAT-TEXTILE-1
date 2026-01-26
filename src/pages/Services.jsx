import useSEO from "../hooks/useSEO"
import s1 from "../assets/images/service-1.jpg"
import s2 from "../assets/images/service-2.jpg"
import s3 from "../assets/images/service-3.jpg"

export default function Services() {
  useSEO(
    "Services | Al-Janat Textile",
    "Textile manufacturing and fabric supply services across Pakistan."
  )

  return (
    <section className="py-28 bg-gray-50 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10 text-[#0f2a44]">
          Our Services
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-20 leading-8">
          Al-Janat Textile provides end-to-end textile manufacturing services,
          delivering reliable fabric solutions to businesses across Pakistan.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {/* SERVICE */}
          <div className="bg-white border shadow hover:shadow-2xl transition">
            <img src={s1} className="h-56 w-full object-cover" />
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">
                Fabric Manufacturing
              </h3>
              <p className="text-gray-600 leading-7 text-sm">
                We manufacture high-quality fabric using modern machines,
                ensuring strength, consistency, and premium finishing for
                wholesale supply.
              </p>
            </div>
          </div>

          <div className="bg-white border shadow hover:shadow-2xl transition">
            <img src={s2} className="h-56 w-full object-cover" />
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">
                Dyeing & Processing
              </h3>
              <p className="text-gray-600 leading-7 text-sm">
                Our dyeing and processing units follow strict quality standards
                to ensure long-lasting color and smooth fabric texture.
              </p>
            </div>
          </div>

          <div className="bg-white border shadow hover:shadow-2xl transition">
            <img src={s3} className="h-56 w-full object-cover" />
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">
                Nationwide Supply
              </h3>
              <p className="text-gray-600 leading-7 text-sm">
                We supply textile products across Pakistan, serving mills,
                traders, and distributors with timely delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
