import AnimateOnScroll from "./AnimateOnScroll"

// ✅ IMPORT IMAGES
import p1 from "../assets/products/1.png"
import p2 from "../assets/products/2.png"
import p3 from "../assets/products/3.png"
import p4 from "../assets/products/4.png"
import p5 from "../assets/products/5.png"
import p6 from "../assets/products/6.png"

const products = [
  { name: "Premium Cotton Fabric", image: p1 },
  { name: "Poly Cotton Blend", image: p2 },
  { name: "Dyed Textile Fabric", image: p3 },
  { name: "Industrial Fabric Roll", image: p4 },
  { name: "Export Quality Cloth", image: p5 },
  { name: "Fine Weave Fabric", image: p6 },
]

export default function ProductGallery() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">

          {products.map((item, index) => (
            <AnimateOnScroll
              key={index}
              animation="zoom-in"
              delay={index * 100}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover hover:scale-110 transition duration-700"
                />

                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                </div>
              </div>
            </AnimateOnScroll>
          ))}

        </div>
      </div>
    </section>
  )
}
