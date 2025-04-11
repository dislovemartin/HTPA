import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Careers - Alt Corporation",
  description: "Join Alt Corporation and help us build the future.",
}

const CareerCard = ({ title, description, location }: { title: string; description: string; location: string }) => (
  <div className="bg-gray-950 rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-200">
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <p className="text-gold text-sm">{location}</p>
  </div>
)

const HighlightedSection = ({
  title,
  description,
  imageUrl,
}: { title: string; description: string; imageUrl: string }) => (
  <div className="bg-black py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-300 mb-8">{description}</p>
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt="Section Highlight"
        width={800}
        height={400}
        className="rounded-lg shadow-lg mx-auto"
      />
    </div>
  </div>
)

const OpenPositions = () => (
  <div className="bg-black py-16">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Open Positions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CareerCard
          title="Software Engineer"
          description="Develop and maintain high-quality software solutions."
          location="San Francisco, CA"
        />
        <CareerCard
          title="Data Scientist"
          description="Analyze complex data sets and provide actionable insights."
          location="New York, NY"
        />
        <CareerCard
          title="Product Manager"
          description="Define and execute product strategy and roadmap."
          location="Remote"
        />
        <CareerCard
          title="UX Designer"
          description="Create intuitive and engaging user experiences."
          location="London, UK"
        />
        <CareerCard
          title="Marketing Specialist"
          description="Develop and implement marketing campaigns to drive growth."
          location="Toronto, Canada"
        />
        <CareerCard
          title="Sales Representative"
          description="Build and maintain relationships with key clients."
          location="Chicago, IL"
        />
      </div>
    </div>
  </div>
)

const BenefitsSection = () => (
  <div className="bg-gray-950 py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-8">Benefits of Working at Alt Corporation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 rounded-lg shadow-md bg-black">
          <h3 className="text-xl font-semibold text-white mb-2">Competitive Salary</h3>
          <p className="text-gray-300">We offer competitive salaries and benefits packages.</p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-black">
          <h3 className="text-xl font-semibold text-white mb-2">Health Insurance</h3>
          <p className="text-gray-300">Comprehensive health, dental, and vision insurance.</p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-black">
          <h3 className="text-xl font-semibold text-white mb-2">Paid Time Off</h3>
          <p className="text-gray-300">Generous paid time off and holiday schedule.</p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-black">
          <h3 className="text-xl font-semibold text-white mb-2">Professional Development</h3>
          <p className="text-gray-300">Opportunities for professional development and growth.</p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-black">
          <h3 className="text-xl font-semibold text-white mb-2">Stock Options</h3>
          <p className="text-gray-300">Employee stock options and equity opportunities.</p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-black">
          <h3 className="text-xl font-semibold text-white mb-2">Flexible Work Environment</h3>
          <p className="text-gray-300">Flexible work arrangements and remote work options.</p>
        </div>
      </div>
    </div>
  </div>
)

const CallToAction = () => (
  <div className="bg-black py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Alt Corporation?</h2>
      <p className="text-gray-300 mb-8">Explore our open positions and apply today.</p>
      <Link
        href="/contact"
        className="bg-gold text-black py-3 px-6 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-200"
      >
        Apply Now
      </Link>
    </div>
  </div>
)

const CareersPage = () => {
  return (
    <div className="bg-black text-white">
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/images/careers-hero.jpg"
          alt="Careers at Alt Corporation"
          layout="fill"
          objectFit="cover"
          className="object-center opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <h1 className="text-5xl font-bold text-white text-center">Join Our Team</h1>
        </div>
      </div>

      <HighlightedSection
        title="Our Mission"
        description="At Alt Corporation, our mission is to revolutionize the way people connect and interact with technology. We are committed to innovation, excellence, and making a positive impact on the world."
        imageUrl="/images/mission.jpg"
      />

      <OpenPositions />

      <BenefitsSection />

      <HighlightedSection
        title="Our Culture"
        description="We foster a culture of collaboration, creativity, and continuous learning. Join us and be part of a team that values diversity, inclusivity, and personal growth."
        imageUrl="/images/culture.jpg"
      />

      <CallToAction />
    </div>
  )
}

export default CareersPage
