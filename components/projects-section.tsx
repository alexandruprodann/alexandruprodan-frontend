"use client"

import { ExternalLink, Github, Folder, ArrowUpRight } from "lucide-react"
import { useState } from "react"

const featuredProject = {
  title: "Test Store - Selenium & Java",
  description:
    "A comprehensive E2E test automation framework for an e-commerce platform. Features Page Object Model architecture, data-driven testing with TestNG, and detailed reporting. Demonstrates best practices in test automation design patterns and maintainable test code structure.",
  tech: ["Java", "Selenium WebDriver", "TestNG", "Maven", "Page Object Model"],
  github: "https://github.com/alexandruprodann/teststore-selenium-java",
  highlights: [
    "Page Object Model architecture",
    "Data-driven test scenarios",
    "Cross-browser testing support",
    "CI/CD ready configuration",
  ],
}

const projects = [
  {
    title: "TodoMVC Playwright",
    description: "End-to-end test automation for TodoMVC application using Playwright with TypeScript. Implements modern testing patterns with async/await and robust selectors.",
    tech: ["TypeScript", "Playwright", "Node.js"],
    github: "https://github.com/alexandruprodann/todomvc-playwright-ts",
    external: null,
    isNew: true,
  },
  {
    title: "FUT Monitor",
    description: "A monitoring tool for FIFA Ultimate Team market trends. Tracks player prices and market fluctuations with automated data collection.",
    tech: ["JavaScript", "Node.js", "Web Scraping"],
    github: "https://github.com/alexandruprodann/fut-monitor",
    external: null,
    isNew: true,
  },
  {
    title: "Personal Portfolio",
    description: "This website you're viewing. A modern portfolio built with Next.js 16, featuring smooth animations and a clean dark theme.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/alexandruprodann/AlexandruProdan.com",
    external: "https://alexandruprodan.com",
    isNew: false,
  },
  {
    title: "QR Code Component",
    description: "Frontend Mentor challenge solution focusing on pixel-perfect implementation, responsive design, and accessibility best practices.",
    tech: ["HTML", "CSS", "Responsive Design"],
    github: "https://github.com/alexandruprodann/qr-code-component",
    external: null,
    isNew: false,
    isOld: true,
  },
  {
    title: "Museum of Furniture",
    description: "A responsive one-page website showcasing modern furniture. Built with Bootstrap 5 demonstrating layout techniques and smooth scrolling.",
    tech: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
    github: "https://github.com/alexandruprodann/Museum-of-Furniture",
    external: null,
    isNew: false,
    isOld: true,
  },
]

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="scroll-mt-24 py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-accent font-mono text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Projects</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        {/* Featured Project - Bento-style hero card */}
        <div className="mb-16">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/50 to-accent/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left side - Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent rounded-full border border-accent/20">
                      Featured Project
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">2024 - Present</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {featuredProject.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>
                  
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA buttons */}
                  <div className="flex gap-4">
                    <a 
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Repository
                    </a>
                  </div>
                </div>

                {/* Right side - Highlights */}
                <div className="lg:w-72">
                  <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {featuredProject.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects - Modern grid */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-2">Other Projects</h3>
          <p className="text-muted-foreground text-sm mb-8">A selection of projects I have worked on</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`
                relative h-full bg-card border border-border rounded-xl p-6
                transition-all duration-300 
                ${hoveredIndex === index ? 'border-accent/50 -translate-y-1 shadow-lg shadow-accent/5' : ''}
              `}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <Folder className={`w-10 h-10 transition-colors duration-300 ${hoveredIndex === index ? 'text-accent' : 'text-muted-foreground'}`} />
                  <div className="flex items-center gap-2">
                    {project.isNew && (
                      <span className="px-2 py-0.5 text-[10px] font-mono bg-accent/10 text-accent rounded-full">
                        NEW
                      </span>
                    )}
                    {project.isOld && (
                      <span className="px-2 py-0.5 text-[10px] font-mono bg-muted text-muted-foreground rounded-full">
                        LEGACY
                      </span>
                    )}
                    <ArrowUpRight className={`w-5 h-5 text-muted-foreground transition-all duration-300 ${hoveredIndex === index ? 'text-accent translate-x-0.5 -translate-y-0.5' : ''}`} />
                  </div>
                </div>

                {/* Content */}
                <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${hoveredIndex === index ? 'text-accent' : 'text-foreground'}`}>
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* External link indicator */}
                {project.external && (
                  <div className="absolute top-6 right-14">
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/alexandruprodann"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-background transition-all duration-300 font-mono text-sm"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
