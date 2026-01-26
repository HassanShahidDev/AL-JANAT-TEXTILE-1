import { useEffect, useRef, useState } from "react"

export default function AnimateOnScroll({
  children,
  animation = "fade-up", // fade-up | fade-left | fade-right | zoom-in
  delay = 0
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const base = "transition-all duration-700 ease-out"
  const hidden = {
    "fade-up": "opacity-0 translate-y-10",
    "fade-left": "opacity-0 -translate-x-10",
    "fade-right": "opacity-0 translate-x-10",
    "zoom-in": "opacity-0 scale-95"
  }[animation]

  const shown = "opacity-100 translate-x-0 translate-y-0 scale-100"

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${base} ${visible ? shown : hidden}`}
    >
      {children}
    </div>
  )
}
