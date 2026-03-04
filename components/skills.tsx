import { CheckCircle2 } from "lucide-react"

const skills = [
  "Tailor-made project designs",
  "Attention to every client specification",
  "Timely project completion",
  "Creative and functional architectural solutions",
]

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex items-center gap-4">
          <div className="h-px w-12 bg-gold" />
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Our Skills
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              Creativity, Precision
              <br />
              <span className="text-gold">& Professionalism</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Our team handles projects with creativity, precision, and
              professionalism. With a strong vision for quality over quantity, we
              ensure that every project is completed with the highest standards.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Creativity forms the backbone of our workflow. Our panel of young
              and talented designers constantly explore new ideas to deliver
              unique and extraordinary architectural solutions.
            </p>
          </div>

          {/* Right Column - Skills List */}
          <div className="flex flex-col justify-center">
            <ul className="flex flex-col gap-6">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-gold/50"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-base font-medium text-foreground">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>

            {/* Approach Card */}
            <div className="mt-8 rounded-lg bg-secondary p-8">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Our Approach
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Once a project is undertaken, we treat it with the most creative
                and professional approach. Our team works collaboratively to
                transform ideas into beautifully designed structures. No matter
                the scale or budget, we strive to deliver projects that speak for
                themselves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
