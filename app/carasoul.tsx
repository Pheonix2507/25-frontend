"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import bgImg from "../assets/CarasoulBg.jpeg";
import image5 from "../assets/image5.png";
import carasoul1 from "../assets/Carasoul1.png";
import carasoul2 from "../assets/Carasoul2.png";
import carasoul3 from "../assets/Carasoul3.png";
import carasoul4 from "../assets/Carasoul4.png";
import carasoulBorder from "../assets/CarasoulBorder.png";

const performers = [
  {
    image: carasoul1,
    color: "bg-red-500/20",
    borderColor: "border-red-500/40",
  },
  {
    image: carasoul2,
    color: "bg-orange-500/20",
    borderColor: "border-orange-500/40",
  },
  {
    image: carasoul3,
    color: "bg-blue-500/20",
    borderColor: "border-blue-500/40",
  },
  {
    image: carasoul4,
    color: "bg-purple-500/20",
    borderColor: "border-purple-500/40",
  },
];

export default function PerformersCarousel() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bgImg}
          alt="Background"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Carousel */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-8">
        <Carousel
          className="w-full max-w-7xl"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {performers.map((performer, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <div className="relative mx-auto aspect-[3/4] w-full max-w-sm p-2">
                  <div
                    className={`group relative h-full w-full overflow-hidden  transition-transform duration-300 hover:scale-105`}
                  >
                    {/* Carousel Border */}
                    <Image
                      src={carasoulBorder}
                      alt="Carousel Border"
                      fill
                      className="absolute object-contain pointer-events-none z-20"
                    />
                    {/* Performer Image */}
                    <Image
                      src={performer.image}
                      alt="Performer"
                      fill
                      className="relative object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:left-4 bg-white/10 hover:bg-white/20 border-white/50" />
          <CarouselNext className="right-2 md:right-4 bg-white/10 hover:bg-white/20 border-white/50" />
        </Carousel>
      </div>

      {/* Bottom Silhouette */}
      <div className="absolute bottom-0 w-full">
        <Image src={image5} alt="City Silhouette" className="w-full" priority />
      </div>
    </div>
  );
}
