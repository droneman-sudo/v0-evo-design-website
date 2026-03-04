"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    src: "/images/project-1.jpg",
    alt: "Elegant interior with wooden swing and modern decor by Evo Design",
  },
  {
    src: "/images/project-2.jpg",
    alt: "Modern double-height living room designed by Evo Design",
  },
  {
    src: "/images/project-3.jpg",
    alt: "Beautiful Kerala-style home exterior by Evo Design",
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Decorative line */}
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-sm uppercase tracking-[0.3em] text-gold">
                Evo Design & Constructions
              </span>
            </div>

            <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              Building Trust
              <br />
              <span className="text-gold">With Every Brick</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
              Looking for the perfect blend of elegance and functionality in
              your home? Evo Design and Constructions brings your vision to life
              with expert craftsmanship and innovative designs.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold text-foreground hover:bg-gold-light font-medium px-8"
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium px-8"
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="mt-16 flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === current ? "w-10 bg-gold" : "w-4 bg-primary-foreground/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
