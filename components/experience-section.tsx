"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "Current Role",
    title: "QA Manual Engineer",
    period: "2021 — Present",
    description: [
      "Participate in daily stand-ups and sprint planning sessions, collaborating closely with development teams",
      "Test software across multiple operating systems and browsers to ensure cross-platform compatibility",
      "Create and maintain comprehensive test documentation including test plans and detailed test cases",
      "Identify, document, and track software defects through to resolution using JIRA",
      "Work with stakeholders to understand requirements and translate them into test scenarios",
    ],
    skills: ["Manual Testing", "JIRA", "Agile", "Test Planning", "Bug Tracking"],
  },
  {
    company: "Personal Development",
    title: "Automation Testing Focus",
    period: "2023 — Present",
    description: [
      "Building proficiency in Selenium WebDriver with Java for automated testing",
      "Creating end-to-end test automation frameworks for personal projects",
      "Learning best practices for test automation architecture and design patterns",
      "Exploring CI/CD integration with automated test suites",
    ],
    skills: ["Selenium", "Java", "Automation", "E2E Testing", "CI/CD"],
  },
]

export function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="experience" className="scroll-mt-24 py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-accent font-mono text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Experience</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all duration-300",
                  "border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px",
                  activeIndex === index 
                    ? "text-accent border-accent bg-accent/5" 
                    : "text-muted-foreground border-transparent hover:text-accent hover:bg-accent/5"
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Panel */}
          <div className="flex-1 min-h-[350px]">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company}
                className={cn(
                  "space-y-4",
                  activeIndex === index ? "block" : "hidden"
                )}
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {exp.title}{" "}
                  <span className="text-accent">@ {exp.company}</span>
                </h3>
                <p className="text-sm font-mono text-muted-foreground">
                  {exp.period}
                </p>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-accent mt-1.5 flex-shrink-0">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
