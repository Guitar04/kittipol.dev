"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { useState } from "react";

import {
  allTechnologies,
  categories,
  getCategoryCount,
} from "@/data/technologies";

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const row1Data = allTechnologies.filter((tech) =>
    ["Frontend", "Backend", "Languages"].includes(tech.category)
  );
  const row2Data = allTechnologies.filter((tech) =>
    ["Database", "DevOps", "Tools"].includes(tech.category)
  );
  const row1Technologies = [
    ...row1Data,
    ...row1Data,
    ...row1Data,
    ...row1Data,
    ...row1Data,
  ];
  const row2Technologies = [
    ...row2Data,
    ...row2Data,
    ...row2Data,
    ...row2Data,
    ...row2Data,
  ];

  return (
    <section
      id="tech-stack"
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="flex-1 h-px bg-white" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white whitespace-nowrap">
              Technical Stack
            </h2>
            <span className="flex-1 h-px  bg-white" />
          </div>
        </div>

        <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 mb-16 overflow-hidden">
          <div className="relative mb-8">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={32}
              slidesPerView="auto"
              loop={true}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={2500}
              allowTouchMove={false}
              className="!overflow-visible"
            >
              {row1Technologies.map((tech, index) => (
                <SwiperSlide key={`${tech.name}-${index}`} className="!w-auto">
                  <div
                    className="group w-16 h-16 bg-slate-800/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-slate-700 hover:scale-110 border border-slate-700 hover:border-slate-600"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <tech.icon className="w-10 h-10 text-white" />
                    {/* <div
                      className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-200 pointer-events-none border border-slate-600 shadow-lg z-100 ${
                        hoveredTech === tech.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2"
                      }`}
                    >
                      {tech.name}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-slate-800 z-100"></div>
                    </div> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="relative">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={32}
              slidesPerView="auto"
              loop={true}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                reverseDirection: true,
              }}
              speed={2500}
              allowTouchMove={false}
              className="!overflow-visible"
            >
              {row2Technologies.map((tech, index) => (
                <SwiperSlide key={`${tech.name}-${index}`} className="!w-auto">
                  <div
                    className="group w-16 h-16 bg-slate-800/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-slate-700 hover:scale-110 border border-slate-700 hover:border-slate-600"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <tech.icon className="w-10 h-10 text-white" />
                    {/* <div
                      className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-200 pointer-events-none border border-slate-600 shadow-lg ${
                        hoveredTech === tech.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2"
                      }`}
                    >
                      {tech.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                    </div> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category) => {
            const count = getCategoryCount(category);
            return (
              <div
                key={category}
                className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-lg p-4 text-center hover:border-slate-700 transition-all"
              >
                <div className="text-2xl font-bold text-white mb-1">
                  {count}
                </div>
                <div className="text-xs text-gray-400">{category}</div>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}
