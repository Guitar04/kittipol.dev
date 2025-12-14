"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { dataProject } from "@/data/projectdata";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const items = Array.from({ length: 5 }, (_, i) => i + 1).reverse();

  return (
    <section className="py-20 sm:py-28" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center">
          Projects & Clients
        </h2>
        <Carousel
          className="w-full"
          plugins={[plugin.current]}
          opts={{
            loop: true,
            align: "start",
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {items.map((num, index) => {
              const project = dataProject[index];
              return (
                <CarouselItem
                  key={num}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="bg-slate-900/50 border-slate-700/50 transition-colors hover:bg-slate-800/50">
                      <CardContent className="flex flex-col aspect-square items-center justify-center p-6 gap-6">
                        {project ? (
                          <>
                            <div className="relative w-32 h-32 md:w-40 md:h-40">
                              <Image
                                src={project.logo}
                                alt={project.name}
                                fill
                                className="object-contain drop-shadow-lg"
                              />
                            </div>
                            <span className="text-lg font-medium text-white/90 text-center">
                              {project.name}
                            </span>
                          </>
                        ) : (
                          <span className="text-4xl font-semibold text-white">
                            {num}
                          </span>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-1/2 bg-slate-800/80 hover:bg-slate-700 text-white border-slate-600" />
          <CarouselNext className="right-0 translate-x-1/2 bg-slate-800/80 hover:bg-slate-700 text-white border-slate-600" />
        </Carousel>
      </div>
    </section>
  );
}
