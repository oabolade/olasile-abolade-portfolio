import { Metadata } from 'next'
import { PageLayout } from '@/components/PageLayout'
import { Github, Linkedin, Mail, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | Olasile Abolade',
  description: 'Get in touch with Olasile Abolade for collaboration, hiring, or to chat about AI products.',
}

const contactLinks = [
  {
    name: 'Email',
    label: 'sileabolade@gmail.com',
    href: 'mailto:sileabolade@gmail.com',
    icon: Mail,
  },
  {
    name: 'LinkedIn',
    label: 'Connect on LinkedIn',
    href: 'https://linkedin.com/in/olasile-abolade',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    label: 'View my code',
    href: 'https://github.com/oabolade',
    icon: Github,
  },
]

export default function ContactPage() {
  return (
    <PageLayout
      title="Let's Connect"
      subtitle="Interested in collaborating, hiring, or just want to chat about AI products? I'd love to hear from you."
    >
      <div className="max-w-2xl">
        {/* Primary CTA */}
        <div className="mb-12">
          <a
            href="mailto:sileabolade@gmail.com"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center"
          >
            <Mail className="mr-3 h-5 w-5" aria-hidden="true" />
            <span>Send me an email</span>
          </a>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="card-hover flex flex-col items-center gap-3 py-6"
            >
              <link.icon
                className="h-6 w-6 text-muted"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-foreground">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="pt-12 border-t border-muted-lighter">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Or send a quick message
          </h2>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-muted-lighter bg-surface text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-muted-lighter bg-surface text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-muted-lighter bg-surface text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                <span>Send Message</span>
              </button>
            </div>
            <p className="text-xs text-muted-light mt-4 text-center">
              I'll get back to you within 24-48 hours.
            </p>
          </form>
        </div>
      </div>
    </PageLayout>
  )
}
