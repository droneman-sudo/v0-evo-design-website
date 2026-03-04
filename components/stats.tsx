"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 27, suffix: "+", label: "Running Projects" },
  { value: 461, suffix: "+", label: "Happy Customers" },
  { value: 95, suffix: "%", label: "Design Expertise" },
  { value: 90, suffix: "%", label: "Construction Expertise" },
]

function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [end, duration, start])

  return count
}

function StatCard({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) {
  const count = useCountUp(value, 2000, inView)

  return (
    <div className="flex flex-col items-center text-center p-8">
      <span className="font-serif text-5xl font-bold text-primary-foreground lg:text-6xl">
        {count}
        <span className="text-gold">{suffix}</span>
      </span>
      <span className="mt-3 text-sm uppercase tracking-[0.2em] text-primary-foreground/60">
        {label}
      </span>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 bg-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
