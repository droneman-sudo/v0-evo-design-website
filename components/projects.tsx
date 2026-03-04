"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    src: "/images/project-1.jpg",
    alt: "Elegant wooden swing interior with modern decor",
    title: "Where Comfort Meets Elegance",
    description:
      "Transform your home into a masterpiece with expert craftsmanship and innovative interior designs.",
    category: "Interior Design",
  },
  {
    src: "/images/project-2.jpg",
    alt: "Modern double-height living room with contemporary furniture",
    title: "Elevating Living Spaces",
    description:
      "Experience luxury, comfort, and elegance with beautifully designed modern living areas.",
    category: "Living Spaces",
  },
  {
    src: "/images/project-3.jpg",
    alt: "Beautiful Kerala-style home with modern architectural elements",
    title: "Crafting Dreams, Building Homes",
    description:
      "The perfect blend of elegance and functionality in residential architecture.",
    category: "Architecture",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex items-center gap-4">
          <div className="h-px w-12 bg-gold" />
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Our Projects
          </span>
        </div>

        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Featured Work
          </h2>
          <p className="max-w-md text-base text-muted-foreground">
            Every project is carefully planned, designed, and executed to ensure
            the highest level of quality and satisfaction.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-lg bg-card"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="mb-2 inline-block text-xs uppercase tracking-[0.2em] text-gold">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-primary-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground/70 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold/90 text-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
