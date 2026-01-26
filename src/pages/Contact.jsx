import useSEO from "../hooks/useSEO"
import AnimateOnScroll from "../components/AnimateOnScroll"

export default function Contact() {
  useSEO(
    "Contact Al-Janat Textile | Get a Quote",
    "Contact Al-Janat Textile for fabric orders, bulk supply and business inquiries across Pakistan."
  )

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0f2a44] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="mt-6 text-gray-200 max-w-2xl mx-auto">
            Get in touch with Pakistan’s trusted textile manufacturer since 1988
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">

          {/* LEFT INFO */}
          <AnimateOnScroll animation="fade-right">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Let’s Talk Business
              </h2>

              <p className="text-gray-600 leading-8 mb-8">
                Al-Janat Textile supplies premium quality fabrics nationwide.
                With 200+ skilled workers and decades of experience, we deliver
                consistency, scale and trust.
              </p>

              <div className="space-y-4 text-gray-700">
                <p><strong>📞 Phone:</strong> 0301-8655255</p>
                <p><strong>🏭 Factory:</strong> Pakistan</p>
                <p><strong>⏱ Working Hours:</strong> Mon – Sat, 9am – 6pm</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* FORM */}
          <AnimateOnScroll animation="fade-left">
            <form className="bg-white p-10 rounded-2xl shadow-xl space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b88a44]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b88a44]"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b88a44]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#0f2a44] text-white py-4 rounded-lg font-semibold hover:bg-[#b88a44] transition hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </AnimateOnScroll>

        </div>
      </section>

      {/* MAP */}
      <section className="h-[450px]">
        <iframe
          title="Al-Janat Textile Location"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Pakistan&output=embed"
        ></iframe>
      </section>
    </>
  )
}
