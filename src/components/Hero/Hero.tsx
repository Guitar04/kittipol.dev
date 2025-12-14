"use client";

import {
  ArrowRightOutlined,
  DownloadOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-30 bg-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-tight text-white">
                KITTIPOL
                <br />
                <span className="bg-blue-500 bg-clip-text text-transparent">
                  LEKETHOK
                </span>
              </h1>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="h-px w-12 bg-orange-400" />
                <p className="text-xl md:text-2xl text-foreground/70 font-medium text-white">
                  Full Stack Developer
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-foreground/60 max-w-xl mx-auto lg:mx-0 leading-relaxed text-white">
              Crafting scalable web applications with expertise in modern
              JavaScript frameworks, backend technologies, and cloud
              infrastructure. Passionate about clean code and user experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all hover:gap-3 font-medium shadow-lg shadow-blue-500/25"
              >
                Contact Me
                <ArrowRightOutlined className="text-sm" />
              </a>
              <a
                href="/cv/Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg hover:border-blue-500 hover:text-blue-500 transition-all font-medium text-white"
              >
                <DownloadOutlined />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-4 text-white">
              <a
                href="https://github.com/Guitar04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-border hover:bg-blue-50/40  hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <GithubOutlined className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/kittipon-lekathok-2944a6331/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-border hover:bg-blue-50/40  hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedinOutlined className="text-xl" />
              </a>
              <a
                href="mailto:kittipol.lkt@gmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-border hover:bg-blue-50/40  hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all hover:scale-110"
                aria-label="Email"
              >
                <MailOutlined className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right Side - Code Block */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl shadow-black/20">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700/50">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-lg shadow-red-500/30" />
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/30" />
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-lg shadow-green-500/30" />
                  </div>
                  <span className="text-sm text-slate-400 ml-2 font-mono tracking-wide">
                    developer.ts
                  </span>
                </div>

                {/* Code Content */}
                <div className="font-mono text-sm space-y-1">
                  <div className="flex items-start gap-3">
                    <span className="text-slate-500 select-none w-4">1</span>
                    <code>
                      <span className="text-purple-400">interface</span>{" "}
                      <span className="text-yellow-300">Developer</span>{" "}
                      <span className="text-slate-400">{"{"}</span>
                    </code>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-500 select-none w-4">2</span>
                    <code className="pl-4">
                      <span className="text-blue-300">name</span>
                      <span className="text-slate-400">:</span>{" "}
                      <span className="text-green-400">string</span>
                      <span className="text-slate-400">;</span>
                    </code>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-500 select-none w-4">3</span>
                    <code className="pl-4">
                      <span className="text-blue-300">role</span>
                      <span className="text-slate-400">:</span>{" "}
                      <span className="text-green-400">string</span>
                      <span className="text-slate-400">;</span>
                    </code>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-500 select-none w-4">4</span>
                    <code className="pl-4">
                      <span className="text-blue-300">skills</span>
                      <span className="text-slate-400">:</span>{" "}
                      <span className="text-green-400">string[]</span>
                      <span className="text-slate-400">;</span>
                    </code>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-500 select-none w-4">5</span>
                    <code className="pl-4">
                      <span className="text-blue-300">available</span>
                      <span className="text-slate-400">:</span>{" "}
                      <span className="text-green-400">boolean</span>
                      <span className="text-slate-400">;</span>
                    </code>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-500 select-none w-4">6</span>
                    <code>
                      <span className="text-slate-400">{"}"}</span>
                    </code>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-500 select-none w-4">7</span>
                    <code></code>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-500 select-none w-4">8</span>
                    <code>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-300">kittipol</span>
                      <span className="text-slate-400">:</span>{" "}
                      <span className="text-yellow-300">Developer</span>{" "}
                      <span className="text-slate-400">=</span>{" "}
                      <span className="text-slate-400">{"{"}</span>
                    </code>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-500 select-none w-4">9</span>
                    <code className="pl-4">
                      <span className="text-blue-300">name</span>
                      <span className="text-slate-400">:</span>{" "}
                      <span className="text-orange-300">&quot;Kittipol Lekethok&quot;</span>
                      <span className="text-slate-400">,</span>
                    </code>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-500 select-none w-4">10</span>
                    <code className="pl-4">
                      <span className="text-blue-300">role</span>
                      <span className="text-slate-400">:</span>{" "}
                      <span className="text-orange-300">&quot;Full Stack Developer&quot;</span>
                      <span className="text-slate-400">,</span>
                    </code>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-500 select-none w-4">11</span>
                    <code className="pl-4">
                      <span className="text-blue-300">skills</span>
                      <span className="text-slate-400">:</span>{" "}
                      <span className="text-slate-400">[</span>
                      <span className="text-orange-300">&quot;React&quot;</span>
                      <span className="text-slate-400">,</span>{" "}
                      <span className="text-orange-300">&quot;Next.js&quot;</span>
                      <span className="text-slate-400">,</span>{" "}
                      <span className="text-orange-300">&quot;Node.js&quot;</span>
                      <span className="text-slate-400">],</span>
                    </code>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-500 select-none w-4">12</span>
                    <code className="pl-4">
                      <span className="text-blue-300">available</span>
                      <span className="text-slate-400">:</span>{" "}
                      <span className="text-purple-400">true</span>
                    </code>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-500 select-none w-4">13</span>
                    <code>
                      <span className="text-slate-400">{"};"}</span>
                    </code>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-foreground/40 rounded-full animate-pulse" />
        </div>
      </div> */}
    </section>
  );
}
