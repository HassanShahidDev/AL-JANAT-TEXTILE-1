import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

export default function Testimonials() {
  const reviews = [
    {
      name: "Textile Distributor – Lahore",
      text: "Al-Janat Textile has been our trusted supplier for years. Consistent quality and timely delivery."
    },
    {
      name: "Wholesale Buyer – Karachi",
      text: "Premium fabric quality and professional dealing. Highly recommended textile manufacturer."
    },
    {
      name: "Retail Chain – Faisalabad",
      text: "Excellent finishing, reliable supply, and strong quality control standards."
    },
    {
      name: "Retail Chain – Gujranwala",
      text: "Excellent finishing, reliable supply, and strong quality control standards."
    }
  ]

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-brand">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3500 }}
          loop
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-12 shadow text-center max-w-3xl mx-auto">
                <p className="text-gray-600 leading-7 mb-6">
                  “{r.text}”
                </p>
                <h4 className="font-semibold text-gold">
                  — {r.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
