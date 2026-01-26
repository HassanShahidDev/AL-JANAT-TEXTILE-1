export default function Lightbox({ image, onClose }) {
  if (!image) return null

  return (
    <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center px-6">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-4xl hover:scale-110 transition"
      >
        ×
      </button>

      {/* Image */}
      <img
        src={image.src}
        alt={image.title}
        className="max-h-[85vh] max-w-full rounded-lg shadow-2xl"
      />

      {/* Caption */}
      <div className="absolute bottom-8 text-center text-white">
        <h3 className="text-xl font-semibold">
          {image.title}
        </h3>
      </div>

    </div>
  )
}
