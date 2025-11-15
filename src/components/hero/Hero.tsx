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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
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
                <span className="bg-orange-400 bg-clip-text text-transparent">
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
                href="#tech-stack"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all hover:gap-3 font-medium shadow-lg shadow-blue-500/25"
              >
                View My Skill
                <ArrowRightOutlined className="text-sm" />
              </a>
              <a
                href="/cv.pdf"
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
                href="mailto:contact@kittipol.dev"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-border hover:bg-blue-50/40  hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all hover:scale-110"
                aria-label="Email"
              >
                <MailOutlined className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right Side - Code Block Illustration */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Floating Card */}
              <div className="bg-background border border-border rounded-xl p-6 shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-foreground/50 ml-2 font-mono">
                    kittipol.dev
                  </span>
                </div>

                {/* Code Content */}
                <div className="font-mono text-sm space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-foreground/40 select-none">1</span>
                    <code>
                      <span className="text-purple-500">const</span>{" "}
                      <span className="text-blue-500">developer</span>{" "}
                      <span className="text-foreground/60">=</span>{" "}
                      <span className="text-foreground/80">{"{"}</span>
                    </code>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-foreground/40 select-none">2</span>
                    <code className="pl-4">
                      <span className="text-foreground/70">name:</span>{" "}
                      <span className="text-green-500">'Kittipol'</span>,
                    </code>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-foreground/40 select-none">3</span>
                    <code className="pl-4">
                      <span className="text-foreground/70">skills:</span>{" "}
                      <span className="text-foreground/80">{"["}</span>
                      <span className="text-green-500">'Next.js'</span>,{" "}
                      <span className="text-green-500">'React'</span>,{" "}
                      <span className="text-green-500">'PHP'</span>
                      <span className="text-foreground/80">{"]"}</span>,
                    </code>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-foreground/40 select-none">4</span>
                    <code className="pl-4">
                      <span className="text-foreground/70">passion:</span>{" "}
                      <span className="text-green-500">
                        'Building great products'
                      </span>
                    </code>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-foreground/40 select-none">5</span>
                    <code>
                      <span className="text-foreground/80">{"}"}</span>
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-foreground/40 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
