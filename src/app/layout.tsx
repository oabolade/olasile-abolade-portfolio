import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://olasile-abolade.com'),
  title: 'Olasile Abolade | AI Product Manager',
  description: 'AI Product Manager building AI-powered products that turn complexity into measurable business value. Expertise in LLMs, RAG, AI agents, and data-driven product strategy.',
  keywords: ['AI Product Manager', 'Product Management', 'LLM', 'RAG', 'AI Agents', 'Data Products', 'SaaS', 'Healthcare Tech'],
  authors: [{ name: 'Olasile Abolade' }],
  creator: 'Olasile Abolade',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://olasile-abolade.com',
    siteName: 'Olasile Abolade',
    title: 'Olasile Abolade | AI Product Manager',
    description: 'AI Product Manager building AI-powered products that turn complexity into measurable business value.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Olasile Abolade - AI Product Manager',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olasile Abolade | AI Product Manager',
    description: 'AI Product Manager building AI-powered products that turn complexity into measurable business value.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
