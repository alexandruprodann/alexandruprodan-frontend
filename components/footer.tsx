export function Footer() {
  return (
    <footer className="py-8 px-6 text-center">
      <p className="text-sm text-muted-foreground font-mono">
        Built with Next.js & Tailwind CSS
      </p>
      <p className="text-xs text-muted-foreground/60 mt-2">
        Alexandru Prodan © {new Date().getFullYear()}
      </p>
    </footer>
  )
}
