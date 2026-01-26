import useSEO from "../hooks/useSEO"

export default function Contact() {
  useSEO(
    "Contact | Al-Janat Textile",
    "Contact Al-Janat Textile for textile manufacturing and supply."
  )

  return (
    <section className="py-28 bg-white animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10 text-[#0f2a44]">
          Contact Al-Janat Textile
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-20 leading-8">
          For business inquiries, bulk orders, or textile supply across Pakistan,
          feel free to contact us.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-semibold mb-4">Phone / WhatsApp</h3>
            <p className="text-gray-700 mb-6 text-lg">
              📞 0301 8655255
            </p>

            <h3 className="text-xl font-semibold mb-4">Location</h3>
            <p className="text-gray-600 leading-7">
              Pakistan — Nationwide Textile Supply
            </p>

            <div className="mt-8 bg-gray-200 h-64 flex items-center justify-center">
              MAP PLACEHOLDER
            </div>
          </div>

          <form className="border p-10 shadow">
            <h3 className="text-xl font-semibold mb-6">Send Message</h3>
            <input className="w-full border px-4 py-3 mb-4" placeholder="Name" />
            <input className="w-full border px-4 py-3 mb-4" placeholder="Email" />
            <textarea className="w-full border px-4 py-3 mb-6" rows="4" placeholder="Message"></textarea>
            <button className="bg-[#0f2a44] text-white px-8 py-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
