"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle: string;
}

interface HeroCarouselProps {
    slides: Slide[];
    children?: React.ReactNode;
}

export default function HeroCarousel({ slides, children }: HeroCarouselProps) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className="relative h-[80vh] w-full overflow-hidden group">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <Image
                        src={slide.imageSrc}
                        alt={slide.imageAlt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4 drop-shadow-lg translate-y-0 transition-transform duration-700 delay-100">
                            {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl drop-shadow-md mb-8">
                            {slide.subtitle}
                        </p>
                        {/* Render children (CTA Button) only on the active slide or always? 
                 If we want it always visible, we should move it outside the map.
                 Moving it outside ensures it doesn't fade out/in with images if that's preferred, 
                 but keeping it inside allows it to feel part of the content. 
                 Let's keep it static outside for stability.
             */}
                    </div>
                </div>
            ))}

            {/* Static Content Overlay (CTA Button) - Keeps it stable while images fade */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
                {/* Push content down to match the text position */}
                <div className="mt-32 md:mt-40 pointer-events-auto">
                    {children}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft className="h-8 w-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronRight className="h-8 w-8" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
