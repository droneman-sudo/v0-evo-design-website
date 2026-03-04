"use client"

import { MapPin, Phone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex items-center gap-4">
          <div className="h-px w-12 bg-gold" />
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Get In Touch
          </span>
        </div>

        <h2 className="mb-16 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
          Let&apos;s Build Your
          <br />
          <span className="text-gold">Dream Home</span>
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            {/* Address */}
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                <MapPin className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Office Address
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Kalliyadickal Building
                  <br />
                  Iritty Mysuru Road
                  <br />
                  Madathil, Iritty
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                <Phone className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Phone
                </h3>
                <div className="mt-1 flex flex-col gap-1">
                  <a
                    href="tel:+917736807076"
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    +91 77368 07076
                  </a>
                  <a
                    href="tel:+919744607076"
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    +91 97446 07076
                  </a>
                  <a
                    href="tel:+919446086621"
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    +91 94460 86621
                  </a>
                </div>
              </div>
            </div>

            {/* Website */}
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                <Globe className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Website
                </h3>
                <a
                  href="https://www.evodesignandconstructions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  www.evodesignandconstructions.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="flex flex-col gap-5 rounded-lg border border-border bg-card p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Send Us a Message
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Your phone"
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your project..."
                className="resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
            </div>
            <Button
              type="submit"
              className="mt-2 bg-gold text-foreground hover:bg-gold-light font-medium"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
