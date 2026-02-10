import { Metadata } from 'next'
import { PageLayout } from '@/components/PageLayout'
import { ArrowUpRight, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Writing | Olasile Abolade',
  description: 'Thoughts on AI product management, technology trends, and lessons learned from building products.',
}

interface Article {
  title: string
  description: string
  date: string
  readTime: string
  link: string
  tags: string[]
}

const articles: Article[] = [
  {
    title: 'What I Learned Building AI Agents',
    description:
      'Reflections on the challenges of orchestrating multi-step AI systems—from hallucination management to user trust.',
    date: 'Jan 2026',
    readTime: '8 min read',
    link: '#',
    tags: ['AI Agents', 'LLMs'],
  },
  {
    title: 'Responsible AI Product Development: Beyond What\'s Technically Feasible—Focusing on What\'s Human, Ethical, and Safe',
    description:
      'Generative AI demands both skill and responsibility. Responsible AI product development isn\'t just about compliance or risk management—it\'s about cultivating craftsmanship in how we design, deploy, and govern intelligent systems.',
    date: 'Oct 2025',
    readTime: '6 min read',
    link: 'https://www.linkedin.com/pulse/responsible-ai-product-development-beyond-whats-human-olasile-abolade-xjric/',
    tags: ['Responsible AI', 'Generative AI', 'Product Strategy'],
  },
  {
    title: 'From PM to AI PM: Making the Transition',
    description:
      'How traditional product management skills translate to AI products—and what new skills you need to develop.',
    date: 'Nov 2025',
    readTime: '10 min read',
    link: '#',
    tags: ['Career', 'AI Product Management'],
  },
]

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group">
      <a
        href={article.link}
        className="block p-6 -mx-6 rounded-xl hover:bg-surface-alt transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-grow">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {article.tags.map((tag) => (
                <span key={tag} className="tag text-xs">
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
              {article.title}
            </h2>

            {/* Description */}
            <p className="text-muted leading-relaxed mb-3">
              {article.description}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-muted-light">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                {article.date}
              </span>
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0 text-muted group-hover:text-accent transition-colors">
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
      </a>
    </article>
  )
}

export default function WritingPage() {
  return (
    <PageLayout
      title="Writing"
      subtitle="Thoughts on AI product management, technology trends, and lessons learned from building products."
    >
      <div className="max-w-3xl">
        {/* Articles List */}
        <div className="divide-y divide-muted-lighter">
          {articles.map((article) => (
            <div key={article.title} className="py-2">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>

        {/* Coming soon note */}
        <div className="mt-12 pt-8 border-t border-muted-lighter">
          <p className="text-muted text-center italic">
            More articles coming soon. Subscribe to get notified when I publish new content.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
