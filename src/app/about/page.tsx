import { Metadata } from 'next'
import { PageLayout } from '@/components/PageLayout'

export const metadata: Metadata = {
  title: 'About | Olasile Abolade',
  description: 'Learn about Olasile Abolade, an AI Product Manager with experience building data-driven products across SaaS, healthcare, and platform ecosystems.',
}

export default function AboutPage() {
  return (
    <PageLayout
      title="About Me"
      subtitle="AI Product Manager with a passion for building intelligent products that create real value."
    >
      <div className="max-w-3xl">
        {/* Bio Content */}
        <div className="space-y-6 text-lg text-muted leading-relaxed">
          <p>
            I'm a Product Manager with deep experience building data-driven and AI-enabled
            products across SaaS, healthcare, fintech, and platform ecosystems. I thrive at the
            intersection of technology and business strategy, translating complex technical
            capabilities into products that deliver real value.
          </p>

          <p>
            My work focuses on identifying where AI can genuinely solve user problems—not
            just add buzzwords to a feature list. I've led cross-functional teams through
            the full product lifecycle, from discovery and validation through launch and
            iteration.
          </p>

          {/* Specializations */}
          <div className="pt-6">
            <h2 className="text-foreground font-semibold text-2xl mb-6">
              What I specialize in
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-accent text-xl mt-0.5">→</span>
                <span>
                  <strong className="text-foreground">Translating business problems into AI opportunities</strong>
                  <br />
                  <span className="text-base">Identifying where ML/AI creates meaningful impact vs. added complexity</span>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-xl mt-0.5">→</span>
                <span>
                  <strong className="text-foreground">Collaborating with engineers and data scientists</strong>
                  <br />
                  <span className="text-base">Bridging the gap between technical feasibility and product vision</span>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-xl mt-0.5">→</span>
                <span>
                  <strong className="text-foreground">Shipping usable, responsible AI systems</strong>
                  <br />
                  <span className="text-base">Ensuring products are not just innovative but ethical and trustworthy</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-16 pt-12 border-t border-muted-lighter">
          <h2 className="text-foreground font-semibold text-2xl mb-8">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-28 text-sm text-muted">
                2025 – Now
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Sr. Technical Product Manager</h3>
                <p className="text-muted">Amazon Web Services</p>
                <p className="text-sm text-muted mt-2">
                  Designed and launched high-performance ETL pipelines on Aurora, increasing data ingestion by 350% and reducing infrastructure spend by 45%. Led migration of 10+ enterprise legacy databases into Aurora clusters with 5× throughput improvements.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-28 text-sm text-muted">
                2024 – 2025
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Lead Product Manager</h3>
                <p className="text-muted">Chippit</p>
                <p className="text-sm text-muted mt-2">
                  Defined product vision and strategy for a fintech platform democratizing access to capital. Launched Chippit for Business, expanding to enterprise customers and growing the user base by 20%. Drove a 15% increase in engagement through data-driven feature development.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-28 text-sm text-muted">
                2021 – 2023
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Senior Product Manager, 3D & Immersive</h3>
                <p className="text-muted">Adobe Inc.</p>
                <p className="text-sm text-muted mt-2">
                  Led the end-to-end development of Adobe Substance Automation API services, saving developers over 1,100 hours. Grew user adoption of a 3D product by 16% through AI and automation, and launched an enterprise SaaS product for e-commerce 3D content.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal touch */}
        <div className="mt-16 pt-12 border-t border-muted-lighter">
          <p className="text-muted italic text-lg">
            When I'm not building products, you can find me exploring the latest developments
            in AI research, mentoring aspiring PMs, hiking trails, hacking on side projects, traveling or diving into a good sci-fi novel.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
