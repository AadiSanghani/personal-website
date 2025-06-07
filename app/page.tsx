import Image from "next/image"
import Link from "next/link"
import { FileText, Download } from "lucide-react"

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
          <div className="mr-4">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Bitmoji"
              width={80}
              height={80}
              className="rounded-full border-2 border-purple-500"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white font-mono">Aadi Sanghani</h1>
            <p className="text-cyan-400 font-mono">Software Engineer & Technology Enthusiast</p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
          {/* About Section */}
          <div className="group border border-gray-600 rounded-lg p-4 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:border-white/50 flex flex-col">
            <h2 className="text-xl font-bold text-purple-400 mb-2 font-mono">about</h2>
            <div className="text-gray-300 font-mono text-sm leading-relaxed flex-1">
              <p>
                Hi! I'm a passionate Software Engineer with experience in full-stack development, cloud technologies,
                and building scalable applications.
              </p>
              <br />
              <p>
                Currently focused on React, Node.js, Python, and cloud platforms. Always eager to learn and take on new
                challenges!
              </p>
            </div>
          </div>

          {/* Experience Section - Spans two columns */}
          <div className="group border border-gray-600 rounded-lg p-4 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:border-white/50 md:col-span-2 flex flex-col">
          <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-purple-400 font-mono">experience</h2>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="group/btn relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 py-2 px-4 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 text-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                  <Download className="w-3 h-3 opacity-70 group-hover/btn:opacity-100 transition-opacity" />
                </Link>
              </div>
            <div className="text-gray-300 font-mono text-sm flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 overflow-y-auto pr-1 custom-scrollbar">
              
              {/* eBay */}
              <div className="flex gap-3 bg-white/5 p-3 rounded-lg hover:bg-purple-500/10 transition-all duration-300 border border-transparent hover:border-purple-500/30">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-md flex items-center justify-center">
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
                  <p className="text-xs text-cyan-400 mb-1">Software Engineer • May 2025-Aug 2025</p>
                  <p className="text-xs">Developed scalable web applications using React and Node.js.</p>
                </div>
              </div>

              {/* Shopify */}
              <div className="flex gap-3 bg-white/5 p-3 rounded-lg hover:bg-purple-500/10 transition-all duration-300 border border-transparent hover:border-purple-500/30">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-md flex items-center justify-center">
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
                  <p className="text-xs text-cyan-400 mb-1">Software Engineer • Sept 2024 - April 2025</p>
                  <p className="text-xs">Developed scalable web applications using React and Node.js.</p>
                </div>
              </div>

              {/* Nasdaq */}
              <div className="flex gap-3 bg-white/5 p-3 rounded-lg hover:bg-purple-500/10 transition-all duration-300 border border-transparent hover:border-purple-500/30">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-md flex items-center justify-center">
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
                  <p className="text-xs text-cyan-400 mb-1">Software Engineer • May 2024 - Aug 2024</p>
                  <p className="text-xs">Developed scalable web applications using React and Node.js.</p>
                </div>
              </div>

              {/* Interac */}
              <div className="flex gap-3 bg-white/5 p-3 rounded-lg hover:bg-purple-500/10 transition-all duration-300 border border-transparent hover:border-purple-500/30">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-md flex items-center justify-center">
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
                  <p className="text-xs text-cyan-400 mb-1">Software Engineer • May 2023 - Aug 2023</p>
                  <p className="text-xs">Developed scalable web applications using React and Node.js.</p>
                </div>
              </div>

              {/* Canadian Tire */}
              <div className="flex gap-3 bg-white/5 p-3 rounded-lg hover:bg-purple-500/10 transition-all duration-300 border border-transparent hover:border-purple-500/30">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-md flex items-center justify-center">
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
                  <h3 className="text-white text-sm font-semibold">Canadian Tire</h3>
                  <p className="text-xs text-cyan-400 mb-1">Software Engineer • May 2022 - Aug 2022</p>
                  <p className="text-xs">Developed scalable web applications using React and Node.js.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div className="group border border-gray-600 rounded-lg p-4 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:border-white/50 md:col-span-3 flex flex-col">
            <h2 className="text-xl font-bold text-purple-400 mb-3 font-mono">connect</h2>
            <div className="text-gray-300 font-mono text-sm flex-1">
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {/* Contact Info */}
                <div className="text-center">
                  <p className="text-white mb-2">Get in touch:</p>
                  <p className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg">
                    aadi.sanghani@email.com
                  </p>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-12 bg-gray-600"></div>

                {/* Social Links */}
                <div className="text-center">
                  <p className="text-white mb-2">Find me on:</p>
                  <div className="flex gap-6 justify-center">
                    <Link
                      href="https://www.linkedin.com/in/aadisanghani/"
                      target="_blank"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg"
                    >
                      linkedin
                    </Link>
                    <Link href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg">
                      github
                    </Link>
                    <Link href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg">
                      twitter
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-4">
          <p className="text-gray-500 font-mono text-xs">2025 © Aadi Sanghani</p>
        </div>
      </div>
    </div>
  )
}
