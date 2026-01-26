import useSEO from "../hooks/useSEO"
import p1 from "../assets/images/product-1.jpg"
import p2 from "../assets/images/product-2.jpg"
import p3 from "../assets/images/product-3.jpg"
import p4 from "../assets/images/product-4.jpg"

export default function Products() {
  useSEO(
    "Products | Al-Janat Textile",
    "Explore premium textile products manufactured by Al-Janat Textile."
  )

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-6">
          Our Products
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-20">
          We manufacture a wide range of premium-quality textile products for
          domestic and international markets.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* PRODUCT CARD */}
          {[p1, p2, p3, p4].map((img, index) => (
            <div
              key={index}
              className="group border overflow-hidden hover:shadow-xl transition"
            >
              <div className="overflow-hidden">
                <img
                  src={img}
                  alt="Textile Product"
                  className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg">
                  Premium Fabric
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  High-quality textile suitable for export and bulk supply.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
