import Image from "next/image"

export default function Clients() {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-300 text-sm font-medium uppercase tracking-wider mb-8">
          值得信赖的合作伙伴 Trusted By
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={`/placeholder.svg?height=60&width=120&text=Client+${i}`}
                alt={`Client ${i}`}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
