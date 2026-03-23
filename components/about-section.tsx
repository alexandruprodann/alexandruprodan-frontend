"use client"

import { useState } from "react"

const skills = [
  { name: "Manual Testing", level: 95 },
  { name: "Selenium WebDriver", level: 75 },
  { name: "Java", level: 70 },
  { name: "Playwright", level: 65 },
  { name: "TypeScript", level: 60 },
  { name: "API Testing", level: 80 },
  { name: "Test Planning", level: 90 },
  { name: "Agile/Scrum", level: 85 },
]

const technologies = [
  "TestNG",
  "JIRA",
  "Postman",
  "Git",
  "Maven",
  "CI/CD",
  "SQL",
]

export function AboutSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="about" className="scroll-mt-24 py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-accent font-mono text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">About Me</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Welcome to my corner of the web! I am a dedicated{" "}
              <span className="text-foreground font-medium">QA Engineer</span> with over 
              five years of experience. I focus on making sure products work 
              well and have a growing interest in{" "}
              <span className="text-accent font-medium">Automation Testing</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In my role, I participate in daily stand-ups and sprint planning, working 
              closely with cross-functional teams. I test software across various systems 
              and browsers while creating comprehensive test documentation including 
              test plans and detailed test cases.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond QA and coding, I enjoy learning new languages, hitting 
              the gym, and traveling to explore new cultures.
            </p>

            {/* Technology pills */}
            <div className="pt-4">
              <p className="text-sm text-foreground mb-4 font-medium">Tools I use daily:</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 text-xs font-mono bg-secondary text-muted-foreground rounded-full border border-border hover:border-accent/50 hover:text-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Skills visualization */}
          <div className="space-y-6">
            <p className="text-sm text-foreground mb-4 font-medium">Core Competencies:</p>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="group"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className={`text-sm transition-colors ${hoveredSkill === skill.name ? 'text-accent' : 'text-muted-foreground'}`}>
                      {skill.name}
                    </span>
                    <span className={`text-xs font-mono transition-all ${hoveredSkill === skill.name ? 'text-accent opacity-100' : 'text-muted-foreground opacity-0'}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${hoveredSkill === skill.name ? 'bg-accent' : 'bg-muted-foreground/30'}`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative element */}
            <div className="relative mt-8 p-6 bg-card border border-border rounded-xl">
              <div className="absolute -top-3 left-6">
                <span className="px-2 py-1 text-xs font-mono bg-background text-accent">
                  current_focus.ts
                </span>
              </div>
              <pre className="text-sm font-mono text-muted-foreground overflow-x-auto">
<code>{`const focus = {
  learning: "Automation Testing",
  building: "Test Frameworks",
  goal: "Senior QA Engineer"
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
