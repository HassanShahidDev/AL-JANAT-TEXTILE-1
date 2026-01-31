import useSEO from "../hooks/useSEO"
import aboutImg from "../assets/images/about.png"; // capital J
import ownerImg from "../assets/images/owner.png"

export default function About() {
  useSEO(
    "About Us | Al-Janat Textile",
    "Al-Janat Textile is a leading Pakistani textile factory established in 1988."
  )

  return (
    <section className="py-28 bg-white animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">

        {/* INTRO */}
        <h1 className="text-4xl font-bold text-center mb-10 text-[#0f2a44]">
          About Al-Janat Textile
        </h1>

        <p className="text-center text-gray-600 max-w-4xl mx-auto leading-8 mb-20">
          Al-Janat Textile is one of Pakistan’s well-known textile manufacturing
          units, proudly serving the textile industry since <strong>1988</strong>.
          Our factory supplies premium-quality fabric across Pakistan and is
          recognized for consistency, trust, and large-scale production.
        </p>

        {/* FACTORY SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
          <img
            src={aboutImg}
            alt="Al-Janat Textile Factory"
            className="w-full h-[420px] object-cover shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-semibold mb-6 text-[#0f2a44]">
              Our Factory & Workforce
            </h2>
            <p className="text-gray-600 leading-8 mb-6">
              With over <strong>400+ skilled workers</strong>, Al-Janat Textile
              operates modern machinery capable of fulfilling bulk orders for
              mills, distributors, and wholesalers throughout Pakistan.
            </p>
            <p className="text-gray-600 leading-8">
              Our production process follows strict quality control standards,
              ensuring every batch meets durability, texture, and finishing
              expectations demanded by today’s textile market.
            </p>
          </div>
        </div>

        {/* OWNER SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-[#0f2a44]">
              Owner & Leadership
            </h2>
            <p className="text-gray-600 leading-8 mb-4">
              <strong>Mr. Shahzad Aslam</strong>, the key holder of Al-Janat Textile,
              has decades of hands-on experience in the textile industry.
            </p>
            <p className="text-gray-600 leading-8">
              Under his leadership, the factory has grown into a trusted name
              across Pakistan, supplying fabric to multiple markets and building
              long-term relationships with clients nationwide.
            </p>
          </div>

          <img
            src={ownerImg}
            alt="Owner Shahzad Aslam"
            className="w-full h-[420px] object-cover shadow-lg"
          />
        </div>

      </div>
    </section>
  )
}
