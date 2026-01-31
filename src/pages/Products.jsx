import useSEO from "../hooks/useSEO"
import AnimateOnScroll from "../components/AnimateOnScroll"
import ProductGallery from "../components/ProductGallery"

export default function Products() {
  useSEO(
    "Products | Al-Janat Textile",
    "Explore premium textile products manufactured by Al-Janat Textile, trusted across Pakistan."
  )

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0f2a44] py-24 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Our Products</h1>
          <p className="mt-6 text-gray-200 max-w-2xl mx-auto">
            Premium quality Dyeing manufactured with modern machinery and
            strict quality control standards.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl font-bold mb-6">
              Textile Solutions for Every Need
            </h2>
            <p className="text-gray-600 leading-8">
              From local markets to nationwide supply, Al-Janat Textile delivers
              reliable dyeing solutions trusted by businesses since 1988.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* GALLERY */}
      <ProductGallery />
    </>
  )
}
