import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex items-center gap-4">
          <div className="h-px w-12 bg-gold" />
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            About Us
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/images/project-3.jpg"
                alt="Exterior of a home designed by Evo Design and Constructions"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 border-2 border-gold rounded-lg hidden lg:block" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              Crafting Dreams,
              <br />
              <span className="text-gold">One Brick at a Time</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Evo Design and Constructions specializes in creating spaces that
              combine timeless traditions with modern innovation. Our team
              manages everything — from the initial idea and concept development
              to the final realization of the project.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We believe that every building should reflect the personality and
              vision of the client. That&apos;s why every project we undertake
              carries a unique artistic identity while maintaining practical and
              functional solutions.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              At Evo Design, the client is the soul of every project. Our goal
              is to translate each client&apos;s individuality and values into
              thoughtful architectural design.
            </p>

            {/* Philosophy */}
            <div className="mt-10 border-l-2 border-gold pl-6">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Our Philosophy
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                From the initiation of a project to its completion, our
                philosophy revolves around complete client involvement. We begin
                by understanding the client&apos;s specific needs, ensuring that
                the final outcome not only meets but exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
