"use client"

import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"

const socialLinks = [
  { href: "https://github.com/alexandruprodann", icon: Github, label: "GitHub", username: "@alexandruprodann" },
  { href: "https://www.linkedin.com/in/alexandruprodan/", icon: Linkedin, label: "LinkedIn", username: "alexandruprodan" },
  { href: "mailto:contact@alexandruprodan.com", icon: Mail, label: "Email", username: "contact@alexandruprodan.com" },
]

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 px-6 lg:px-12 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-accent font-mono text-sm">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Get In Touch</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Message */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Let's build something great together
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm currently looking for new opportunities and my inbox is always open. 
              Whether you have a question, want to collaborate, or just want to say hi, 
              I'll do my best to get back to you!
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm">Romania, EU</span>
            </div>
            <a 
              href="mailto:contact@alexandruprodan.com"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-all"
            >
              <Send className="w-4 h-4" />
              Say Hello
              <span className="group-hover:translate-x-1 transition-transform">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>

          {/* Right - Social Links */}
          <div className="space-y-4">
            <p className="text-sm text-foreground font-medium mb-6">Find me on:</p>
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-accent/50 transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-lg group-hover:bg-accent/10 transition-colors">
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                    {link.label}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {link.username}
                  </p>
                </div>
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
