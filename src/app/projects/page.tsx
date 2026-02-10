import { Metadata } from 'next'
import { PageLayout } from '@/components/PageLayout'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Projects | Olasile Abolade',
  description: 'Case studies showcasing AI and product work - from problem definition through measurable outcomes.',
}

interface ProductImage {
  src: string
  alt: string
  caption: string
}

interface CaseStudy {
  id: string
  title: string
  company: string
  role: string
  tagline: string
  introduction: string
  problem: {
    overview: string
    painPoints: string[]
  }
  objectives: string[]
  approach: {
    description: string
    steps: string[]
  }
  solution: {
    description: string
    features: string[]
    images?: ProductImage[]
  }
  challenges: string[]
  outcomes: {
    metrics: { label: string; value: string }[]
    qualitative: string[]
  }
  learnings: string[]
  conclusion: string
  link?: string
  tags: string[]
}

interface SideProject {
  id: string
  title: string
  description: string
  industry: string
  skills: string[]
  features: {
    category: string
    items: string[]
  }[]
  architecture?: {
    description: string
    flow: string[]
  }
  link?: string
  github?: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 'adobe-3d-automation',
    title: 'Adobe Substance 3D Automation Service',
    company: 'Adobe',
    role: 'Sr. Product Manager, Web & Cloud',
    tagline: 'Enterprise 3D automation SaaS for virtual photography at scale',
    introduction:
      'During my tenure as Senior Product Manager at Adobe, I led the product strategy and development of the Substance 3D Automation Service—a cloud-based platform enabling enterprise companies to automate 3D asset processing and generate marketing content at scale through virtual photography.',
    problem: {
      overview:
        'Enterprise creative teams faced an exploding demand for content across channels, markets, and formats while budgets and resources remained flat. Creative professionals were spending the majority of their time on repetitive, non-creative tasks instead of high-value creative work.',
      painPoints: [
        '74% of creative professionals spend over 50% of their time on repetitive, non-creative tasks',
        'Creative teams spend less than 30% of their time on actual creative processes',
        'Growing needs from brands for dynamic content and personalized experiences',
        'Creative teams, tools, and workflows are siloed and fragmented',
        'Need to scale content production across changing teams and environments',
      ],
    },
    objectives: [
      'Maximize production capacity of enterprise creative teams by automating repetitive tasks',
      'Enable content production and delivery velocity at scale using 3D assets',
      'Reduce content production errors and improve quality consistency',
      'Provide both a web application for creative professionals and APIs for developer integration',
      'Deliver enterprise-grade security, reliability, and scalability',
    ],
    approach: {
      description:
        'I assembled a cross-functional team and worked closely with engineering, design, and enterprise customers to define the product vision and roadmap. We followed agile methodologies with regular sprint reviews and stakeholder alignment.',
      steps: [
        'Conducted extensive user research with enterprise creative teams to understand pain points and workflows',
        'Partnered with engineering leads to evaluate technical feasibility of 3D automation at cloud scale',
        'Prioritized features based on user impact, technical complexity, and business value',
        'Developed both a web application interface and REST API to serve different user personas',
        'Iterated on the solution through beta programs with key enterprise customers',
        'Collaborated with marketing and sales to define go-to-market strategy',
      ],
    },
    solution: {
      description:
        'We built the 3D Cloud Automation Service—a SaaS platform that transforms existing 3D assets into multiple variations for design and production needs. The service offers both an intuitive web application for creative professionals and robust REST APIs for developer integration.',
      features: [
        'Replace 2D backgrounds, materials, textures, and colors programmatically',
        'Swap decals and objects within 3D scenes',
        'Render multiple camera angles automatically',
        'Export to various 3D file formats and web-ready 2D imagery',
        'Pre-configured 3D asset and scene manipulations',
        'Cloud-based orchestration with dynamic scaling and job management',
        'Adobe Content Platform integration for secure storage',
        'Enterprise-grade security and data privacy',
      ],
      images: [
        {
          src: '/case-studies/adobe-3d/web-app-interface.png',
          alt: 'Creative Cloud Automation Services web application interface',
          caption: 'Web Application Interface - Quick tasks for automation workflows',
        },
        {
          src: '/case-studies/adobe-3d/automation-variations-grid.png',
          alt: '3D Automation showing shoe product variations',
          caption: '3D Automation UI - Generating multiple product variations at scale',
        },
        {
          src: '/case-studies/adobe-3d/3d-render-side.png',
          alt: '3D rendered shoe - side view',
          caption: '3D Rendered Asset - Side View',
        },
        {
          src: '/case-studies/adobe-3d/3d-render-angle.png',
          alt: '3D rendered shoe - angle view',
          caption: '3D Rendered Asset - 3/4 Angle View',
        },
        {
          src: '/case-studies/adobe-3d/3d-render-top.png',
          alt: '3D rendered shoe - top view',
          caption: '3D Rendered Asset - Top View (Multiple camera angles)',
        },
      ],
    },
    challenges: [
      'Balancing powerful automation capabilities with an intuitive, easy-to-use interface for non-technical users',
      'Ensuring seamless integration with existing enterprise workflows and legacy systems',
      'Managing cloud infrastructure costs while providing fair share of compute resources',
      'Coordinating across multiple Adobe product teams for Creative Cloud integration',
      'Educating the market on the value of 3D automation and virtual photography',
    ],
    outcomes: {
      metrics: [
        { label: 'Production Hours Saved', value: '1,135+' },
        { label: 'Increase in Production Capacity', value: '141%' },
        { label: 'Reduction in Content Errors', value: '3.5-5x' },
      ],
      qualitative: [
        'Positive feedback from enterprise customers including major CPG and retail brands',
        'Successful integration with Adobe Creative Cloud ecosystem',
        'Enabled customers to reduce costs and environmental impact through virtual photography',
        'Platform adopted for E-commerce and marketing use cases across multiple industries',
      ],
    },
    learnings: [
      'Enterprise B2B products require both self-serve (web app) and developer (API) access points to maximize adoption',
      'Continuous user feedback from beta customers is crucial for validating product-market fit',
      'Cross-functional collaboration with engineering, design, and GTM teams accelerates time to value',
      'Balancing feature depth with usability is critical for products serving both technical and non-technical users',
      'Clear documentation and developer experience are as important as the core product functionality',
    ],
    conclusion:
      'The Substance 3D Automation Service successfully addressed the content velocity challenge faced by enterprise creative teams. By automating repetitive 3D asset processing tasks, we enabled customers to focus on creative decisions while dramatically increasing their production capacity. The project reinforced my expertise in enterprise SaaS product management, API platform development, and cross-functional leadership.',
    link: 'https://developer.adobe.com/substance3d/',
    tags: ['Enterprise SaaS', '3D Automation', 'API Platform', 'Adobe'],
  },
  {
    id: 'creative-cloud-asset-management',
    title: 'Creative Cloud Asset Management Enhancement',
    company: 'Adobe',
    role: 'Product Manager',
    tagline: 'Streamlining asset organization and retrieval for creative professionals',
    introduction:
      'I led a project focused on enhancing the user experience for Adobe Creative Cloud\'s asset management system, with the goal of streamlining asset organization and retrieval for creative professionals to increase productivity and user satisfaction.',
    problem: {
      overview:
        'Feedback collected through user interviews and support channels indicated that customers struggled with managing large volumes of creative assets efficiently within the Creative Cloud environment.',
      painPoints: [
        'Users spending excessive time searching for assets across projects',
        'Inconsistent tagging and categorization across team workflows',
        'Difficulty finding assets as library sizes grew over time',
        'Limited search capabilities for complex queries',
        'Poor discoverability of organizational features',
      ],
    },
    objectives: [
      'Reduce the time users spend searching for assets by 30%',
      'Increase engagement with Creative Cloud organizational tools',
      'Deliver a scalable solution adaptable across multiple Adobe products',
    ],
    approach: {
      description:
        'I assembled a cross-functional team comprising UX designers, engineers, data analysts, and customer success managers. Through agile methodologies, we prioritized features based on user impact and technical feasibility.',
      steps: [
        'Conducted user research to understand asset management pain points',
        'Analyzed usage data to identify high-friction areas in the workflow',
        'Collaborated with UX to design improved tagging, search, and categorization features',
        'Implemented iterative testing with beta users',
        'Regular sprint reviews and stakeholder meetings ensured alignment',
      ],
    },
    solution: {
      description:
        'We introduced improved tagging, search, and categorization features within the Creative Cloud environment, balancing advanced capabilities with a simple, intuitive interface.',
      features: [
        'Enhanced search with filters and smart suggestions',
        'Improved tagging system with auto-suggestions',
        'Better categorization and folder organization',
        'Cross-product asset accessibility',
        'Performance optimizations for large libraries',
      ],
    },
    challenges: [
      'Balancing advanced search capabilities with maintaining a simple, intuitive interface',
      'Integrating new features with legacy systems without disrupting existing users',
      'Ensuring consistent experience across multiple Adobe products',
    ],
    outcomes: {
      metrics: [
        { label: 'Reduction in Search Time', value: '35%' },
        { label: 'Increase in Feature Engagement', value: '40%+' },
        { label: 'User Satisfaction Improvement', value: 'Significant' },
      ],
      qualitative: [
        'Positive user feedback in post-launch surveys',
        'Scalable architecture enabled rollout across other Adobe products',
        'Reduced support tickets related to asset management',
      ],
    },
    learnings: [
      'Continuous user feedback is crucial for identifying pain points and validating solutions',
      'Cross-functional collaboration accelerates problem-solving and innovation',
      'Agile processes help manage complexity and adapt to changing requirements',
    ],
    conclusion:
      'This project improved the Creative Cloud experience for end users while strengthening my skills in stakeholder management, agile product development, and data-driven decision-making. The success reinforced the value of customer-centric design and effective team collaboration.',
    link: 'https://www.adobe.com/creativecloud.html',
    tags: ['UX Enhancement', 'Asset Management', 'Adobe'],
  },
  {
    id: 'aws-aurora-migration',
    title: 'Migrating Legacy Enterprise Databases to AWS Aurora',
    company: 'Amazon Web Services',
    role: 'Sr. Technical Product Manager',
    tagline: 'Enabling high availability and scalability for financial services data',
    introduction:
      'As a Sr. Technical Product Manager at AWS, I led the end-to-end migration of legacy enterprise databases to Amazon Aurora for a large financial services client. The project demanded careful orchestration across engineering, security, and compliance teams to modernize critical data infrastructure while maintaining near-zero downtime and strict regulatory adherence.',
    problem: {
      overview:
        'The client, a large financial services firm, struggled with slow performance and frequent downtime due to aging on-premise SQL databases. As transaction volumes grew, these legacy systems became increasingly unreliable, leading to missed SLAs and dissatisfied customers.',
      painPoints: [
        'Aging on-premise databases causing frequent downtime and degraded performance',
        'Growing transaction volumes exceeding legacy system capacity',
        'Missed SLAs and declining customer satisfaction due to system unreliability',
        'Complex schema conversions too error-prone and time-consuming for manual processes',
        'Strict regulatory compliance and data privacy constraints in financial services',
        'Petabyte-scale data with hundreds of tables and millions of daily transactions',
      ],
    },
    objectives: [
      'Migrate legacy MySQL/PostgreSQL databases to Aurora with near-zero downtime',
      'Improve system uptime and query performance to meet stringent SLAs',
      'Ensure full regulatory compliance and data integrity throughout migration',
      'Leverage AI-driven automation for schema conversion, anomaly detection, and performance tuning',
      'Establish a scalable architecture supporting future growth in transaction volume',
    ],
    approach: {
      description:
        'We followed a phased migration strategy, balancing speed against risk to minimize business disruption. Each stage was informed by deep stakeholder engagement, rigorous data assessment, and deliberate architectural decisions.',
      steps: [
        'Conducted a comprehensive inventory of all legacy databases and engaged stakeholders to clarify business-critical requirements',
        'Assessed data sensitivity, dependencies, and transformation needs—prioritizing data integrity and auditability',
        'Selected AWS Aurora for its MySQL/PostgreSQL compatibility, built-in scalability, and automated failover',
        'Balanced migration speed against risk, opting for phased cutover to minimize disruption',
        'Chose managed services over self-hosted solutions for operational simplicity',
        'Implemented AI-powered anomaly detection tools alongside AWS DMS for real-time validation',
      ],
    },
    solution: {
      description:
        'We designed and implemented a multi-stage migration pipeline leveraging AWS Database Migration Service (DMS) and AI-powered anomaly detection tools. The architecture featured Aurora clusters with read replicas for horizontal scaling, automated backup policies, and real-time replication with schema validation and post-migration performance optimization.',
      features: [
        'Multi-stage migration pipeline with AWS DMS',
        'AI-powered anomaly detection during migration',
        'Aurora clusters with read replicas for horizontal scaling',
        'Automated backup and failover policies',
        'Real-time data replication and schema validation',
        'Post-migration performance optimization',
        'Encryption and audit trails for regulatory compliance',
        'Blue/green deployments for zero-downtime cutover',
      ],
    },
    challenges: [
      'Maintaining near-zero downtime during migration of petabyte-scale data with millions of daily transactions',
      'Navigating strict regulatory compliance and data privacy constraints in financial services',
      'Managing complex schema conversions across hundreds of tables with interdependencies',
      'Balancing migration speed against risk of data loss or corruption',
      'Coordinating across engineering, security, compliance, and business stakeholders',
    ],
    outcomes: {
      metrics: [
        { label: 'System Uptime', value: '99.99%' },
        { label: 'Query Latency Reduction', value: '40%' },
        { label: 'Manual Intervention Reduction', value: '80%' },
      ],
      qualitative: [
        'Improved from 97% to 99.99% system uptime post-migration',
        'Automated monitoring enabled faster incident response and proactive maintenance',
        'Higher customer satisfaction and improved compliance with industry standards',
        'Audit trails and encryption meeting financial services regulatory requirements',
      ],
    },
    learnings: [
      'Phased migration strategies are essential for minimizing business disruption at enterprise scale',
      'AI-driven automation can dramatically reduce error rates in complex schema conversions',
      'Early and continuous stakeholder engagement is critical when navigating compliance-heavy environments',
      'Investing in automated monitoring and rollback strategies pays dividends in risk mitigation',
      'Future enhancements could include predictive analytics for capacity planning and AI-driven threat detection',
    ],
    conclusion:
      'This migration program successfully modernized a critical financial services data infrastructure, transforming unreliable legacy systems into a high-availability, scalable Aurora architecture. The project reinforced my expertise in large-scale cloud migrations, AI-augmented data operations, and cross-functional leadership in compliance-sensitive environments.',
    tags: ['Cloud Migration', 'AWS Aurora', 'Data Infrastructure', 'Financial Services'],
  },
]

const sideProjects: SideProject[] = [
  {
    id: 'figma-mcp-server',
    title: 'Figma MCP Server',
    description:
      'A Model Context Protocol (MCP) server Actor hosted on Apify that enables AI assistants and applications to interact with Figma designs and projects using natural language commands. This Actor creates a secure bridge between AI models and the Figma API, allowing users to query design information, extract asset details, modify design elements, and retrieve project metadata without manually navigating the Figma interface.',
    industry: 'Design',
    skills: [
      'Model Context Protocol',
      'APIs',
      'Agentic Workflows',
      'Backend Development',
      'AI Assistants',
      'Product Design',
    ],
    features: [
      {
        category: 'Query Operations',
        items: [
          'List projects & files',
          'Get frame details',
          'Extract components',
          'Retrieve design tokens',
        ],
      },
      {
        category: 'Export Operations',
        items: [
          'Export assets (PNG/SVG)',
          'Generate thumbnails',
          'Extract styles',
          'Get version info',
        ],
      },
      {
        category: 'Modification Operations',
        items: [
          'Update file properties',
          'Modify project settings',
          'Add comments',
          'Create webhooks',
        ],
      },
    ],
    architecture: {
      description:
        'The server acts as an intelligent bridge between AI assistants and the Figma API, translating natural language into structured API calls.',
      flow: [
        'AI Assistant sends natural language commands (e.g., "Get all frames from project X")',
        'MCP Server translates commands to Figma API calls & handles authentication',
        'Figma API returns design data, assets, and metadata',
        'MCP Server formats responses and returns structured data to AI',
      ],
    },
    github: 'https://github.com/oabolade/figma_mcp_server_actor',
  },
]

function CompanyLogo({ company, size = 'md' }: { company: string; size?: 'sm' | 'md' }) {
  const adobeHeight = size === 'sm' ? 'h-4 w-auto' : 'h-6 w-auto'
  const awsHeight = size === 'sm' ? 'h-5 w-auto' : 'h-8 w-auto'

  switch (company) {
    case 'Adobe':
      return (
        <svg
          viewBox="0 0 30 26"
          className={adobeHeight}
          role="img"
          aria-label="Adobe"
        >
          <path d="M0 26V0h11L0 26z" fill="#FA0F00" />
          <path d="M30 26V0H19L30 26z" fill="#FA0F00" />
          <path d="M15 9.5l6.5 16.5h-4.5l-2-5.5H10L15 9.5z" fill="#FA0F00" />
        </svg>
      )
    case 'Amazon Web Services':
      return (
        <svg
          viewBox="0 0 103 64"
          className={awsHeight}
          role="img"
          aria-label="Amazon Web Services"
        >
          <text
            x="51.5"
            y="38"
            textAnchor="middle"
            fontFamily="'Arial Black', Arial, sans-serif"
            fontWeight="900"
            fontSize="40"
            fill="currentColor"
            letterSpacing="2"
          >
            aws
          </text>
          <path
            d="M17 50 Q51 64 85 50"
            stroke="#FF9900"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M78 46 L86 50 L79 56"
            stroke="#FF9900"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    default:
      return null
  }
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="card mb-8" id={study.id}>
      {/* Header */}
      <div className="mb-6 pb-6 border-b border-muted-lighter">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="text-foreground mb-2">
              <CompanyLogo company={study.company} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {study.title}
            </h2>
          </div>
          {study.link && (
            <a
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface-alt transition-all"
              aria-label={`View ${study.title} project`}
            >
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
            </a>
          )}
        </div>
        <p className="text-muted mb-3">{study.tagline}</p>
        <p className="text-sm text-muted-light">{study.role}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {study.tags.map((tag) => (
            <span key={tag} className="tag text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Introduction */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-3">Introduction</h3>
        <p className="text-muted leading-relaxed">{study.introduction}</p>
      </section>

      {/* Problem */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-3">Problem Overview</h3>
        <p className="text-muted leading-relaxed mb-4">{study.problem.overview}</p>
        <ul className="space-y-2">
          {study.problem.painPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-muted text-sm">
              <span className="text-accent mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Objectives */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-3">Objectives</h3>
        <ul className="space-y-2">
          {study.objectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-3 text-muted text-sm">
              <span className="text-accent mt-1">→</span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Approach */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-3">Approach</h3>
        <p className="text-muted leading-relaxed mb-4">{study.approach.description}</p>
        <ol className="space-y-2">
          {study.approach.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-muted text-sm">
              <span className="text-accent font-medium mt-0.5">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Solution */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-3">Solution</h3>
        <p className="text-muted leading-relaxed mb-4">{study.solution.description}</p>
        
        {/* Product Images */}
        {study.solution.images && study.solution.images.length > 0 && (
          <div className="mb-6">
            <p className="text-sm font-medium text-foreground mb-4">Product Screenshots:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.solution.images.slice(0, 2).map((image, i) => (
                <figure key={`screenshot-${i}`} className="rounded-lg overflow-hidden border border-muted-lighter">
                  <div className="relative aspect-video bg-surface-alt">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption className="p-3 text-xs text-muted bg-surface-alt">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
            
            {/* 3D Renders - show multiple camera angles */}
            {study.solution.images.length > 2 && (
              <div className="mt-4">
                <p className="text-xs text-muted mb-3">3D Rendered Assets - Multiple Camera Angles:</p>
                <div className="grid grid-cols-3 gap-3">
                  {study.solution.images.slice(2).map((image, i) => (
                    <figure key={`render-${i}`} className="rounded-lg overflow-hidden border border-muted-lighter">
                      <div className="relative aspect-square bg-surface-alt">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="33vw"
                        />
                      </div>
                      <figcaption className="p-2 text-xs text-muted text-center bg-surface-alt">
                        {image.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        <div className="bg-surface-alt rounded-lg p-4">
          <p className="text-sm font-medium text-foreground mb-3">Key Features:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {study.solution.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-muted text-sm">
                <span className="text-accent">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Challenges */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-3">Challenges Faced</h3>
        <ul className="space-y-2">
          {study.challenges.map((challenge, i) => (
            <li key={i} className="flex items-start gap-3 text-muted text-sm">
              <span className="text-orange-500 mt-1">⚡</span>
              <span>{challenge}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Outcomes */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-3">Outcomes & Impact</h3>
        
        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {study.outcomes.metrics.map((metric, i) => (
            <div key={i} className="bg-surface-alt rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-accent mb-1">{metric.value}</p>
              <p className="text-sm text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
        
        {/* Qualitative outcomes */}
        <ul className="space-y-2">
          {study.outcomes.qualitative.map((outcome, i) => (
            <li key={i} className="flex items-start gap-3 text-muted text-sm">
              <span className="text-emerald-500 mt-1">✓</span>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Key Learnings */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-3">Key Learnings</h3>
        <ul className="space-y-2">
          {study.learnings.map((learning, i) => (
            <li key={i} className="flex items-start gap-3 text-muted text-sm">
              <span className="text-blue-500 mt-1">💡</span>
              <span>{learning}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Conclusion */}
      <section className="pt-6 border-t border-muted-lighter">
        <h3 className="text-lg font-semibold text-foreground mb-3">Conclusion</h3>
        <p className="text-muted leading-relaxed">{study.conclusion}</p>
        
        {study.link && (
          <a
            href={study.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-accent hover:text-accent-light transition-colors"
          >
            <span>View Project</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </section>
    </article>
  )
}

function SideProjectCard({ project }: { project: SideProject }) {
  return (
    <article
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 via-surface-alt to-surface-alt border border-accent/20"
      id={project.id}
    >
      {/* Decorative gradient orb */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="relative p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
              Side Project
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-foreground/70">{project.industry}</p>
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-4 py-2 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-foreground/80 leading-relaxed mb-8">{project.description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium rounded-full bg-accent/15 text-accent border border-accent/30"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Architecture */}
        {project.architecture && (
          <div className="mb-8 p-6 rounded-xl bg-background/80 border border-foreground/10">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              How It Works
            </h4>
            <p className="text-sm text-foreground/70 mb-4">{project.architecture.description}</p>
            <div className="space-y-3">
              {project.architecture.flow.map((step, i) => (
                <div key={`arch-${i}`} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-sm text-foreground/80">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.features.map((feature) => (
            <div
              key={feature.category}
              className="p-4 rounded-xl bg-background border border-foreground/15"
            >
              <h4 className="text-sm font-bold text-foreground mb-3">
                {feature.category}
              </h4>
              <ul className="space-y-2">
                {feature.items.map((item, i) => (
                  <li key={`feature-${i}`} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-accent mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function ProjectsPage() {
  return (
    <PageLayout
      title="Projects"
      subtitle="Case studies showcasing how I approach product challenges—from problem definition through measurable outcomes."
    >
      {/* Table of Contents */}
      <nav className="mb-12 p-6 bg-surface-alt rounded-xl">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
          Case Studies
        </h2>
        <ul className="space-y-2">
          {caseStudies.map((study) => (
            <li key={study.id}>
              <a
                href={`#${study.id}`}
                className="flex items-center justify-between text-muted hover:text-foreground transition-colors"
              >
                <span>{study.title}</span>
                <span className="flex-shrink-0 w-16 text-foreground flex items-center justify-center">
                  <CompanyLogo company={study.company} size="sm" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Case Studies */}
      <div className="space-y-12">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>

      {/* Side Projects */}
      <section className="mt-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Side Projects</h2>
          <p className="text-muted">
            Personal explorations in AI, developer tools, and emerging technologies.
          </p>
        </div>
        <div className="space-y-8">
          {sideProjects.map((project) => (
            <SideProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-16 pt-12 border-t border-muted-lighter text-center">
        <p className="text-lg text-muted mb-6">
          Interested in learning more about any of these projects?
        </p>
        <Link href="/contact" className="btn-primary">
          Get in Touch
        </Link>
      </div>
    </PageLayout>
  )
}
