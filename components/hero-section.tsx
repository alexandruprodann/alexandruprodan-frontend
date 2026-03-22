"use client"

import { useEffect, useState } from "react"

const phrases = [
  "QA Automation Engineer",
  "Tech Enthusiast", 
  "Problem Solver",
  "Lifelong Learner",
]

export function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const phrase = phrases[phraseIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < phrase.length) {
          setCurrentPhrase(phrase.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (charIndex > 0) {
          setCurrentPhrase(phrase.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setPhraseIndex((phraseIndex + 1) % phrases.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-24 overflow-hidden">
      {/* Subtle gradient orb that follows mouse */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(94, 234, 212, 0.03), transparent 40%)`
        }}
      />

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(94,234,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(94,234,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="relative z-10 max-w-4xl">
        <p className="text-accent text-sm font-mono mb-4 tracking-wide animate-fade-in-up">
          Hello, my name is
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
          Alexandru Prodan
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-8 min-h-[1.5em]">
          <span>{currentPhrase}</span>
          <span className="inline-block w-0.5 h-[1em] bg-accent ml-1 animate-pulse" />
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
          A dedicated QA Manual Engineer with over 3 years of experience, passionate about 
          programming and committed to delivering quality software. Currently focused on 
          advancing my skills in <span className="text-accent">Automation Testing</span>.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="#projects"
            className="group relative px-6 py-3 bg-transparent border border-accent text-accent rounded-lg overflow-hidden font-mono text-sm"
          >
            <span className="relative z-10 group-hover:text-background transition-colors duration-300">View My Work</span>
            <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a 
            href="#contact"
            className="px-6 py-3 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm flex items-center gap-2 group"
          >
            Get In Touch
            <span className="text-accent group-hover:translate-x-1 transition-transform">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-mono">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
