"use client"
import Image from "next/image"
import Link from "next/link"
import { FileText, Download, MapPin } from "lucide-react"
import { GlowCapture, Glow } from "@codaworks/react-glow"

export default function Portfolio() {
  return (
    <div className="h-screen bg-black relative overflow-auto flex flex-col">
      {/* Polka dot background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-center mb-6">
        <div className="mr-5 relative">
            <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 backdrop-blur-sm flex items-center justify-center p-1 shadow-lg">
              <Image src="/memoji.png" alt="Bitmoji" width={100} height={100} className="rounded-full" />
            </div>
        </div>
          <div>
            <h1 className="text-3xl font-bold text-white font-mono">Aadi Sanghani</h1>
            <p className="text-cyan-400 font-mono">Software Engineer & Technology Enthusiast</p>
            {/* Location */}
            <div className="flex items-center gap-2 text-gray-300 font-mono mt-1">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">Toronto, ON</span>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* About Section */}
          <div className="group border border-gray-600 rounded-lg p-4 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:border-white/50 flex flex-col">
            <h2 className="text-xl font-bold text-purple-400 mb-2 font-mono">about</h2>
            <div className="text-gray-300 font-mono text-sm leading-relaxed flex-1">
              <p>
              Hey! I'm Aadi Sanghani 👋 and I'm deeply interested in infrastructure and platform engineering 🛠️. 
              I'm passionate about building scalable systems and enjoy tackling complex problems that drive real impact.
              </p>
              <br />
              <p>
              I'm a Computer Science student ('26) at McMaster University. Outside of school, you can find me hiking 🥾, volunteering 🙌, or playing basketball 🏀.
              </p>
              <br />
              <div className="mt-3 border-l-4 border-gradient-to-b from-purple-400 to-cyan-400 border-l-purple-400 pl-4 py-2 bg-gradient-to-r from-purple-500/10 to-transparent">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">Available</span>
                </div>
                <p className="text-white font-bold text-sm">
                  I'm currently looking for new-grad opportunities in infrastructure engineering for 2026.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Section - Spans two columns */}
          <div className="group border border-gray-600 rounded-lg p-4 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:border-white/50 md:col-span-2 flex flex-col">
          <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-purple-400 font-mono">experience</h2>
                <Link
                  href="https://drive.google.com/file/d/13hjqcUmS-lTWuaY-Wro3b8MRiGJS6Mi0/view?usp=sharing"
                  target="_blank"
                  className="group/btn relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 py-2 px-4 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 text-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                  <Download className="w-3 h-3 opacity-70 group-hover/btn:opacity-100 transition-opacity" />
                </Link>
              </div>
            <div className="text-gray-300 font-mono text-sm flex-1 overflow-y-auto pr-1 custom-scrollbar">
              <GlowCapture>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  
                  {/* eBay */}
                  <Glow color="rgb(255, 196, 0)">
                    <div className="flex gap-3 bg-white/5 p-3 rounded-lg transition-all duration-300 border border-transparent glow:bg-glow/10 glow:border-glow/30">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-purple-500/20 rounded-md flex items-center justify-center glow:bg-glow/20">
                          <Image
                            src="/ebay.svg"
                            alt="Company 1 Logo"
                            width={60}
                            height={60}
                            className="opacity-90"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white text-sm font-semibold">eBay</h3>
                        <p className="text-xs text-cyan-400 mb-1">Software Engineer</p>
                        <p className="text-xs text-gray-500 mb-1">May 2025 - Present</p>
                        <p className="text-xs">Part of the Recommendation and Insights team, working on the Recommendation Engine and the Insights Dashboard.</p>
                      </div>
                    </div>
                  </Glow>

                  {/* Shopify */}
                  <Glow color="rgb(176, 250, 87)">
                    <div className="flex gap-3 bg-white/5 p-3 rounded-lg transition-all duration-300 border border-transparent glow:bg-glow/10 glow:border-glow/30">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-purple-500/20 rounded-md flex items-center justify-center glow:bg-glow/20">
                          <Image
                            src="/shopify.svg"
                            alt="shopify Logo"
                            width={50}
                            height={50}
                            className="opacity-90"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white text-sm font-semibold">Shopify</h3>
                        <p className="text-xs text-cyan-400 mb-1">Software Engineer</p>
                        <p className="text-xs text-gray-500 mb-1">Sept 2024 - April 2025</p>
                        <p className="text-xs">Scaled MySQL infrastructure 4x to 
                          handle 100M+ checkouts by leading Vitess-based re-sharding, automating 50+ manual steps to save days of work</p>
                      </div>
                    </div>
                  </Glow>

                  {/* Nasdaq */}
                  <Glow color="rgb(0, 150, 255)">
                    <div className="flex gap-3 bg-white/5 p-3 rounded-lg transition-all duration-300 border border-transparent glow:bg-glow/10 glow:border-glow/30">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-purple-500/20 rounded-md flex items-center justify-center glow:bg-glow/20">
                          <Image
                            src="/nasdaq.svg"
                            alt="Nasdaq Logo"
                            width={50}
                            height={50}
                            className="opacity-90"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white text-sm font-semibold">Nasdaq</h3>
                        <p className="text-xs text-cyan-400 mb-1">Software Engineer</p>
                        <p className="text-xs text-gray-500 mb-1">May 2024 - Aug 2024</p>
                        <p className="text-xs">Built an auditing system for a real-time clearing platform handling 50M+ option contracts, while supporting AI-driven productivity analysis.</p>
                      </div>
                    </div>
                  </Glow>

                  {/* Interac */}
                  <Glow color="rgb(255, 100, 50)">
                    <div className="flex gap-3 bg-white/5 p-3 rounded-lg transition-all duration-300 border border-transparent glow:bg-glow/10 glow:border-glow/30">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-purple-500/20 rounded-md flex items-center justify-center glow:bg-glow/20">
                          <Image
                            src="/interac.svg"
                            alt="Interac Logo"
                            width={50}
                            height={50}
                            className="opacity-90"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white text-sm font-semibold">Interac</h3>
                        <p className="text-xs text-cyan-400 mb-1">Software Engineer</p>
                        <p className="text-xs text-gray-500 mb-1">May 2023 - Aug 2023</p>
                        <p className="text-xs">Developed an Anti-Money Laundering (AML) API for E-Transfers, now serving 80+ financial institutions, and improved median response time of API by 8%.</p>
                      </div>
                    </div>
                  </Glow>

                  {/* Canadian Tire */}
                  <Glow color="rgb(220, 30, 37)">
                    <div className="flex gap-3 bg-white/5 p-3 rounded-lg transition-all duration-300 border border-transparent glow:bg-glow/10 glow:border-glow/30">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-purple-500/20 rounded-md flex items-center justify-center glow:bg-glow/20">
                          <Image
                            src="/ctfs.svg"
                            alt="Canadian Tire Logo"
                            width={40}
                            height={40}
                            className="opacity-90"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white text-sm font-semibold">Canadian Tire Financial Services</h3>
                        <p className="text-xs text-cyan-400 mb-1">Software Engineer</p>
                        <p className="text-xs text-gray-500 mb-1">May 2022 - Aug 2022</p>
                        <p className="text-xs">Developed an internal tool that streamlined access to testing accounts, 
                          and improving retrieval time by 30%, while optimizing database performance.</p>
                      </div>
                    </div>
                  </Glow>
                </div>
              </GlowCapture>
            </div>
          </div>

          {/* Connect Section */}
          <div className="group border border-gray-600 rounded-lg py-4 px-4 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:border-white/50 md:col-span-3 flex flex-col">
            <h2 className="text-xl font-bold text-purple-400 mb-4 font-mono">connect</h2>
            <div className="text-gray-300 font-mono text-sm flex justify-center">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
                {/* Contact Info */}
                <div className="text-center">
                  <p className="text-white mb-2">get in touch:</p>
                  <p className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg">
                    aadisanghani3@gmail.com
                  </p>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-12 bg-gray-600"></div>

                {/* Social Links */}
                <div className="text-center">
                  <p className="text-white mb-2">find me on:</p>
                  <div className="flex gap-4 md:gap-6 justify-center">
                    <Link
                      href="https://www.linkedin.com/in/aadisanghani/"
                      target="_blank"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg"
                    >
                      linkedin
                    </Link>
                    <Link href="https://github.com/aadisanghani" target="_blank" className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg">
                      github
                    </Link>
                    <Link href="https://x.com/aadisanghani_" target="_blank" className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg">
                      twitter
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-auto pt-4">
          <p className="text-gray-500 font-mono text-xs">2025 © Aadi Sanghani</p>
        </div>
      </div>
    </div>
  )
}
