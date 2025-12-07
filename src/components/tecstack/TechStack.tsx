"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { allTechnologies, TechCategory } from "@/data/technologies";
import "swiper/css";

const categoryColors: Record<TechCategory, string> = {
  Frontend: "#3B82F6",
  Backend: "#10B981",
  Languages: "#F59E0B",
  Database: "#8B5CF6",
  DevOps: "#F97316",
  Tools: "#EC4899",
};

// แบ่ง technologies เป็น 2 แถว
const row1 = allTechnologies.slice(0, Math.ceil(allTechnologies.length / 2));
const row2 = allTechnologies.slice(Math.ceil(allTechnologies.length / 2));

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-20 sm:py-28 bg-transparent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
            Technical Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Technologies & Tools
          </h2>
        </div>
      </div>

      {/* Swiper Container - Full Width */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 border border-slate-700/50 rounded-2xl p-6 overflow-hidden">
          {/* Row 1 - Left to Right */}
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={16}
            loop={true}
            speed={3000}
            allowTouchMove={false}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            className="!overflow-visible"
          >
            {[...row1, ...row1].map((tech, index) => (
              <SwiperSlide
                key={`row1-${tech.name}-${index}`}
                className="!w-auto"
              >
                <div className="group flex items-center justify-center w-12 h-12 bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:bg-slate-800/80 hover:border-slate-600 transition-all duration-300">
                  <tech.icon
                    className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: categoryColors[tech.category] }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Row 2 - Right to Left */}
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={16}
            loop={true}
            speed={3000}
            allowTouchMove={false}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            className="!overflow-visible"
          >
            {[...row2, ...row2].map((tech, index) => (
              <SwiperSlide
                key={`row2-${tech.name}-${index}`}
                className="!w-auto"
              >
                <div className="group flex items-center justify-center w-12 h-12 bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:bg-slate-800/80 hover:border-slate-600 transition-all duration-300">
                  <tech.icon
                    className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: categoryColors[tech.category] }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
