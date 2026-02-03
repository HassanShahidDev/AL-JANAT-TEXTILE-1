import { motion } from "framer-motion"

export default function Stats() {
  return (
    <section className="py-24 bg-[#0f2a44] text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
        {[
          { num: "35+", label: "Years Experience" },
          { num: "100%", label: "Quality Assurance" },
          { num: "Nationwide", label: "Supply Network" }
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-bold text-[#b88a44]">{s.num}</h3>
            <p className="mt-3 text-sm tracking-wide">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
