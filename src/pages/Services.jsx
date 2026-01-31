import useSEO from "../hooks/useSEO"
import { motion } from "framer-motion"
import { FaIndustry, FaCheckCircle, FaTruck, FaCogs } from "react-icons/fa"

export default function Services() {
  useSEO(
    "Services | Al-Janat Textile",
    "Textile manufacturing, fabric processing and nationwide supply services"
  )

  const services = [
    {
      icon: <FaIndustry />,
      title: "Textile Manufacturing",
      desc: "Complete in-house textile manufacturing using modern machinery and international production standards."
    },
    {
      icon: <FaCogs />,
      title: "Dyeing Processing",
      desc: "Dyeing, finishing and quality enhancement with strict inspection control at every stage."
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Assurance",
      desc: "100% quality assurance ensuring export-grade fabric for local and international markets."
    },
    {
      icon: <FaTruck />,
      title: "Nationwide Supply",
      desc: "Reliable and timely textile supply across Pakistan with trusted logistics partners."
    }
  ]

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-20 text-[#0f2a44]">
          Our Services
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 text-center shadow hover:shadow-xl transition"
            >
              <div className="text-4xl text-[#b88a44] mb-6 flex justify-center">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold mb-4">{s.title}</h3>
              <p className="text-gray-600 leading-7">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
