"use client";

import ContactForm from "@/components/ContactForm/ContactForm";
import { MailOutlined, MessageOutlined, SendOutlined } from "@ant-design/icons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Feel free to reach out to me directly for any inquiries or collaborations.
            This contact form is for personal communication only.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Side - Contact Form (2 columns) */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Right Side - 3D Floating Cards */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-[320px] h-[450px]" style={{ perspective: "1000px" }}>

              {/* Background Card - Tilted */}
              <div
                className="absolute w-64 h-80 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl border border-purple-500/30 backdrop-blur-sm"
                style={{
                  transform: "rotateY(-15deg) rotateX(5deg) translateZ(-50px)",
                  top: "20px",
                  left: "40px"
                }}
              />

              {/* Main Card - Message */}
              <div
                className="absolute w-64 h-80 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl border border-slate-700/50 backdrop-blur-xl shadow-2xl overflow-hidden"
                style={{
                  transform: "rotateY(-10deg) rotateX(5deg)",
                  top: "40px",
                  left: "20px"
                }}
              >
                {/* Card Header */}
                <div className="p-6 border-b border-slate-700/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <MessageOutlined className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">New Message</h4>
                      <p className="text-slate-400 text-sm">Just now</p>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-700/50 rounded-full w-full" />
                    <div className="h-3 bg-slate-700/50 rounded-full w-4/5" />
                    <div className="h-3 bg-slate-700/50 rounded-full w-3/5" />
                  </div>

                  <div className="pt-4">
                    <div className="flex items-center gap-2 text-blue-400 text-sm">
                      <MailOutlined />
                      <span>kittipol.lkt@gmail.com</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow">
                    <SendOutlined />
                    Reply
                  </button>
                </div>
              </div>

              {/* Floating Elements */}
              <div
                className="absolute w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/40 animate-bounce"
                style={{
                  top: "0px",
                  right: "20px",
                  animationDuration: "3s"
                }}
              >
                <MailOutlined className="text-white text-xl" />
              </div>

              <div
                className="absolute w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/40 animate-bounce"
                style={{
                  bottom: "60px",
                  right: "0px",
                  animationDuration: "2.5s",
                  animationDelay: "0.5s"
                }}
              >
                <SendOutlined className="text-white text-sm" />
              </div>

              <div
                className="absolute w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/40 animate-pulse"
                style={{
                  bottom: "120px",
                  left: "0px"
                }}
              >
                <MessageOutlined className="text-white text-xs" />
              </div>

              {/* Decorative circles */}
              <div className="absolute w-32 h-32 border border-blue-500/20 rounded-full" style={{ top: "-20px", left: "-20px" }} />
              <div className="absolute w-24 h-24 border border-purple-500/20 rounded-full" style={{ bottom: "20px", right: "-10px" }} />

              {/* Glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
