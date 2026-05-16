"use client"
import Image from "next/image"
import Link from "next/link"
import { FileText, Download, MapPin } from "lucide-react"
import { GlowCapture, Glow } from "@codaworks/react-glow"

const experiences = [
  {
    company: "Shopify",
    role: "Software Engineer",
    date: "Dec 2025 - Present",
    description: "Distributed Databases",
    logo: "/shopify.svg",
    logoAlt: "Shopify Logo",
    logoSize: 50,
    glowColor: "rgb(176, 250, 87)",
  },
  {
    company: "eBay",
    role: "Software Engineer",
    date: "May 2025 - Present",
    description:
      "Part of the Recommendation and Insights team, working on the Recommendation Engine and the Insights Dashboard.",
    logo: "/ebay.svg",
    logoAlt: "eBay Logo",
    logoSize: 60,
    glowColor: "rgb(255, 196, 0)",
  },
  {
    company: "Shopify",
    role: "Software Engineer",
    date: "Sept 2024 - April 2025",
    description:
      "Scaled MySQL infrastructure 4x to handle 100M+ checkouts by leading Vitess-based re-sharding, automating 50+ manual steps to save days of work",
    logo: "/shopify.svg",
    logoAlt: "Shopify Logo",
    logoSize: 50,
    glowColor: "rgb(176, 250, 87)",
  },
  {
    company: "Nasdaq",
    role: "Software Engineer",
    date: "May 2024 - Aug 2024",
    description:
      "Built an auditing system for a real-time clearing platform handling 50M+ option contracts, while supporting AI-driven productivity analysis.",
    logo: "/nasdaq.svg",
    logoAlt: "Nasdaq Logo",
    logoSize: 50,
    glowColor: "rgb(0, 150, 255)",
  },
  {
    company: "Interac",
    role: "Software Engineer",
    date: "May 2023 - Aug 2023",
    description:
      "Developed an Anti-Money Laundering (AML) API for E-Transfers, now serving 80+ financial institutions, and improved median response time of API by 8%.",
    logo: "/interac.svg",
    logoAlt: "Interac Logo",
    logoSize: 50,
    glowColor: "rgb(255, 100, 50)",
  },
  {
    company: "Canadian Tire Financial Services",
    role: "Software Engineer",
    date: "May 2022 - Aug 2022",
    description:
      "Developed an internal tool that streamlined access to testing accounts, and improving retrieval time by 30%, while optimizing database performance.",
    logo: "/ctfs.svg",
    logoAlt: "Canadian Tire Logo",
    logoSize: 40,
    glowColor: "rgb(220, 30, 37)",
  },
]

const twoColumnExperiences = [
  experiences[0],
  experiences[3],
  experiences[1],
  experiences[4],
  experiences[2],
  experiences[5],
]

function ExperienceCard({ experience }: { experience: (typeof experiences)[number] }) {
  return (
    <div className="w-full min-h-36 md:h-full md:min-h-0 [&_.glow]:h-full [&_.glow]:min-h-0">
      <Glow color={experience.glowColor}>
        <div className="flex min-h-36 w-full flex-row gap-2 overflow-hidden rounded-lg border border-transparent bg-white/5 p-2.5 transition-all duration-300 glow:border-glow/30 glow:bg-glow/10 md:h-full md:min-h-0 md:p-2">
          <div className="flex-shrink-0">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-purple-500/20 glow:bg-glow/20 md:h-12 md:w-12 [&_img]:h-auto [&_img]:max-h-[85%] [&_img]:max-w-[85%] [&_img]:w-auto">
              <Image
                src={experience.logo}
                alt={experience.logoAlt}
                width={experience.logoSize}
                height={experience.logoSize}
                className="opacity-90"
              />
            </div>
          </div>
          <div className="flex min-h-0 min-w-0 flex-1 flex-col">
            <h3 className="shrink-0 text-sm font-semibold leading-tight text-white">{experience.company}</h3>
            <p className="mb-0.5 shrink-0 text-xs leading-tight text-cyan-400">{experience.role}</p>
            <p className="mb-0.5 shrink-0 text-xs leading-tight text-gray-500">{experience.date}</p>
            <p className="custom-scrollbar min-h-0 flex-1 overflow-y-auto text-[11px] leading-snug text-gray-300 [scrollbar-width:thin] md:text-xs">
              {experience.description}
            </p>
          </div>
        </div>
      </Glow>
    </div>
  )
}

export default function Portfolio() {
  return (
    <div className="min-h-dvh bg-black relative flex flex-col overflow-x-hidden md:h-dvh md:max-h-dvh md:overflow-hidden">
      {/* Polka dot background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-5 md:py-3 flex flex-col flex-1 min-h-0 min-w-0">
        {/* Header */}
        <div className="flex w-full shrink-0 items-center justify-center mb-5 md:mb-3 text-center">
          <div className="inline-flex items-center justify-center gap-3 md:gap-4">
            <div className="relative">
              <div className="w-[88px] h-[88px] md:w-20 md:h-20 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 backdrop-blur-sm flex items-center justify-center p-1 shadow-lg">
                <Image
                  src="/memoji.png"
                  alt="Bitmoji"
                  width={88}
                  height={88}
                  className="rounded-full w-full h-full object-cover md:w-20 md:h-20"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white font-mono leading-tight">
                Aadi Sanghani
              </h1>
              <p className="text-cyan-400 font-mono text-sm md:text-sm">Software Engineer & Technology Enthusiast</p>
              {/* Location */}
              <div className="flex items-center justify-center gap-2 text-gray-300 font-mono mt-0.5">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 shrink-0" />
                <span className="text-xs md:text-sm">Toronto, ON</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main: column on mobile; md = (about | experience) then connect — avoids grid row max-height gap under about */}
        <div className="flex w-full min-h-0 flex-none flex-col gap-3">
          <div className="flex w-full min-h-0 flex-col gap-3 md:flex-row md:items-stretch md:gap-3">
            {/* About Section — md:h-full + flex-1 body matches experience column height */}
            <div className="group flex min-h-0 min-w-0 flex-col overflow-hidden rounded-lg border border-gray-600 bg-gray-900/50 p-3 backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] md:h-full md:w-1/3 md:max-w-md md:shrink-0 md:p-2.5">
              <h2 className="mb-1.5 shrink-0 font-mono text-lg font-bold text-purple-400 md:mb-1.5 md:text-xl">about</h2>
              <div className="min-h-0 flex-1 overflow-y-auto font-mono text-xs leading-snug text-gray-300 md:min-h-0 md:flex-1 md:text-sm md:leading-snug">
              <p>
              Hey! I'm Aadi Sanghani 👋 and I'm deeply interested in infrastructure and platform engineering 🛠️. 
              I'm passionate about building scalable systems and enjoy tackling complex problems that drive real impact.
              </p>
              <br />
              <p>
              I'm a Computer Science student ('26) at McMaster University. Outside of school, you can find me hiking 🥾, volunteering 🙌, or playing basketball 🏀.
              </p>
              {/* <br />
              <div className="mt-3 border-l-4 border-gradient-to-b from-purple-400 to-cyan-400 border-l-purple-400 pl-4 py-2 bg-gradient-to-r from-purple-500/10 to-transparent">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">Available</span>
                </div>
                <p className="text-white font-bold text-sm">
                  I'm currently looking for new-grad opportunities in infrastructure engineering for 2026.
                </p>
              </div> */}
              </div>
            </div>

            {/* Experience Section */}
            <div className="group flex min-h-0 min-w-0 flex-col overflow-hidden rounded-lg border border-gray-600 bg-gray-900/50 p-2.5 backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] md:min-h-0 md:min-w-0 md:flex-1 md:p-2.5">
              <div className="mb-1.5 flex shrink-0 items-center justify-between gap-2 md:mb-1.5">
                <h2 className="font-mono text-lg font-bold text-purple-400 md:text-xl">experience</h2>
                <Link
                  href="https://drive.google.com/file/d/1wqtypD5wzVTZLFqZ60fDOS4OEb2vqXEm/view?usp=sharing"
                  target="_blank"
                  className="group/btn relative inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-3 py-1.5 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-cyan-700 hover:shadow-xl hover:shadow-purple-500/25 md:gap-2 md:px-4 md:py-2 md:text-sm"
                >
                  <FileText className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  <span>Resume</span>
                  <Download className="h-3 w-3 opacity-70 transition-opacity group-hover/btn:opacity-100" />
                </Link>
              </div>
              <div className="flex min-h-0 flex-1 flex-col overflow-hidden font-mono text-sm text-gray-300 md:min-h-0">
                <GlowCapture className="flex min-h-0 flex-1 flex-col md:min-h-0">
                  <div className="grid grid-cols-1 gap-3 md:hidden">
                    {experiences.map((experience) => (
                      <ExperienceCard key={`${experience.company}-${experience.date}`} experience={experience} />
                    ))}
                  </div>
                  <div className="hidden min-h-0 flex-1 gap-x-2.5 gap-y-2 md:grid md:grid-cols-2 md:grid-rows-[repeat(3,minmax(0,1fr))] md:items-stretch">
                    {twoColumnExperiences.map((experience) => (
                      <ExperienceCard key={`${experience.company}-${experience.date}`} experience={experience} />
                    ))}
                  </div>
                </GlowCapture>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div className="group flex w-full shrink-0 flex-col rounded-lg border border-gray-600 bg-gray-900/50 px-3 py-3 backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] md:px-4 md:py-2.5">
            <h2 className="text-lg md:text-xl font-bold text-purple-400 mb-2 md:mb-2 font-mono">connect</h2>
            <div className="text-gray-300 font-mono text-sm flex justify-center">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
                {/* Contact Info */}
                <div className="text-center">
                  <p className="text-white mb-1 md:mb-1.5 text-sm">get in touch:</p>
                  <p className="text-cyan-400 hover:text-cyan-300 transition-colors text-base md:text-lg break-all">
                    aadisanghani3@gmail.com
                  </p>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-10 bg-gray-600 shrink-0"></div>

                {/* Social Links */}
                <div className="text-center">
                  <p className="text-white mb-1 md:mb-1.5 text-sm">find me on:</p>
                  <div className="flex gap-3 md:gap-5 justify-center flex-wrap">
                    <Link
                      href="https://www.linkedin.com/in/aadisanghani/"
                      target="_blank"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-base md:text-lg"
                    >
                      linkedin
                    </Link>
                    <Link href="https://github.com/aadisanghani" target="_blank" className="text-cyan-400 hover:text-cyan-300 transition-colors text-base md:text-lg">
                      github
                    </Link>
                    <Link href="https://x.com/aadisanghani_" target="_blank" className="text-cyan-400 hover:text-cyan-300 transition-colors text-base md:text-lg">
                      twitter
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center shrink-0 pt-3 md:pt-2">
          <p className="text-gray-500 font-mono text-xs">2025 © Aadi Sanghani</p>
        </div>
      </div>
    </div>
  )
}
