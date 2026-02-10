'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { clsx } from 'clsx'
import { ThemeToggle } from './ThemeToggle'

interface Activity {
  text: string
  avatar: string
  color: string
}

const activities: Activity[] = [
  { text: 'hiking', avatar: '/avatars/hiking.svg', color: 'text-emerald-500' },
  { text: 'hacking', avatar: '/avatars/hacking.svg', color: 'text-blue-500' },
  { text: 'traveling', avatar: '/avatars/traveling.svg', color: 'text-amber-500' },
  { text: 'gaming', avatar: '/avatars/gaming.svg', color: 'text-purple-500' },
  { text: 'building', avatar: '/avatars/building.svg', color: 'text-orange-500' },
  { text: 'reading', avatar: '/avatars/reading.svg', color: 'text-rose-500' },
]

const navLinks = [
  { href: '/about', label: 'about' },
  { href: '/projects', label: 'projects' },
  { href: '/writing', label: 'writing' },
  { href: '/contact', label: 'contact' },
]

const socialLinks = [
  { href: 'https://linkedin.com/in/olasile-abolade', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/oabolade', icon: Github, label: 'GitHub' },
  { href: 'mailto:sileabolade@gmail.com', icon: Mail, label: 'Email' },
]

export function AnimatedHero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      
      // Wait for fade out, then change content
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % activities.length)
        setIsAnimating(false)
      }, 400) // Half of the transition duration
    }, 3500) // Change every 3.5 seconds

    return () => clearInterval(interval)
  }, [])

  const currentActivity = activities[currentIndex]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Theme Toggle - positioned in top right */}
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <div className="text-center max-w-2xl mx-auto">
        {/* Avatar illustration */}
        <div 
          className={clsx(
            'relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-10 transition-all duration-500 ease-out',
            isAnimating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
          )}
        >
          <Image
            src={currentActivity.avatar}
            alt={`Olasile ${currentActivity.text}`}
            width={176}
            height={176}
            className="w-full h-full"
            priority
          />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 tracking-tight">
          Olasile is{' '}
          <span 
            className={clsx(
              'inline-block transition-all duration-500 ease-out',
              currentActivity.color,
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            )}
          >
            {currentActivity.text}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted mt-4 mb-12">
          AI Product Manager
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-5 md:gap-8 mb-12" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg md:text-xl text-muted hover:text-foreground transition-colors link-underline"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/Resume-OAbolade_AIPM_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl text-muted hover:text-foreground transition-colors link-underline inline-flex items-center gap-1.5"
          >
            resume
            <FileText className="w-4 h-4" aria-hidden="true" />
          </a>
        </nav>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-muted hover:text-foreground hover:bg-surface-alt transition-all duration-200"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      {/* Activity indicator dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {activities.map((activity, index) => (
          <button
            key={activity.text}
            onClick={() => {
              if (index !== currentIndex) {
                setIsAnimating(true)
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsAnimating(false)
                }, 400)
              }
            }}
            className={clsx(
              'h-2 rounded-full transition-all duration-300',
              index === currentIndex 
                ? 'bg-foreground w-6' 
                : 'bg-muted-light hover:bg-muted w-2'
            )}
            aria-label={`Show ${activity.text} activity`}
            aria-current={index === currentIndex ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  )
}
