import Link from 'next/link'
import { ArrowLeft, Github, Linkedin, Mail } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  subtitle?: string
}

const socialLinks = [
  { href: 'https://linkedin.com/in/olasile-abolade', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/oabolade', icon: Github, label: 'GitHub' },
  { href: 'mailto:sileabolade@gmail.com', icon: Mail, label: 'Email' },
]

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <div className="flex-grow pt-8 pb-16 md:pt-12">
        <div className="container-custom">
          {/* Top bar with back link and theme toggle */}
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back home</span>
            </Link>
            <ThemeToggle />
          </div>

          {/* Page header */}
          <header className="mb-12 md:mb-16">
            <h1 className="text-display-md md:text-display-lg font-bold text-foreground mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-muted max-w-2xl">
                {subtitle}
              </p>
            )}
          </header>

          {/* Page content */}
          <main>
            {children}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-muted-lighter bg-surface-alt">
        <div className="container-custom py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted">
              © {currentYear} Olasile Abolade
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-muted hover:text-foreground hover:bg-muted-lighter transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
