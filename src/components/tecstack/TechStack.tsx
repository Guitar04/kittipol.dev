"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { allTechnologies } from "@/data/technologies";
// @ts-ignore
import "swiper/css";

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 sm:py-28 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technology Stack
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our choice of technology stack was critical to the project&apos;s success. It included:
          </p>
        </div>
      </div>

      {/* Full Width Slider */}
      <div className="relative">

        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={40}
          loop={true}
          speed={4000}
          allowTouchMove={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          className="!overflow-visible"
        >
          {[...allTechnologies, ...allTechnologies].map((tech, index) => (
            <SwiperSlide
              key={`${tech.name}-${index}`}
              className="!w-auto"
            >
              <div className="group flex flex-col items-center gap-4">
                {/* Circle with dashed border */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                  {/* Dashed circle border */}
                  <svg
                    className="absolute inset-0 w-full h-full -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="6 4"
                      className="text-slate-700 group-hover:text-orange-500/70 transition-colors duration-500"
                    />
                  </svg>

                  {/* Inner solid circle */}
                  <div className="absolute inset-3 rounded-full bg-slate-900/50 border border-slate-800 group-hover:border-slate-700 group-hover:bg-slate-800/50 transition-all duration-500" />

                  {/* Icon */}
                  <tech.icon className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 text-slate-300 group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                </div>

                {/* Tech name */}
                <span className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
