
import { useState } from 'react'
import Section, { ProjectsSkeleton } from './Section'

const projects = [
  {
    year: '2025 / 2026',
    title: 'Increasing Active B2B Customer Rate in Brazil by 10%',
    description: "Led the discovery, experimentation, and scaled rollout of new engagement features on Heineken's B2B Commerce platform across Brazil and Mexico. By rethinking combo flexibility, introducing new promotion mechanics to grow POS and SKU penetration, and launching loyalty challenges as an additional way for customers to earn points, the work drove a 10% increase in active B2B customer rate in Brazil — improving both engagement and long-term retention.",
    details: 'We enabled loyalty challenges as an additional way to collect loyalty points, driving engagement and retention for Heineken’s B2B Commerce platform in Brazil and Mexico. Oversaw discovery, experimentation, and scaled rollout of new features to maximize business value.',
    impact: '+10% Active Users',
    tags: ['Product management', 'Discovery', 'Experimentation', 'Scaled Rollout'],
    image: '/heineken-b2b-showcase.png',
    images: [
      '/heineken-b2b-showcase.png',
      'https://images.unsplash.com/photo-1515168833906-d2a3b82b1a48?w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80',
    ],
  },
  {
    year: '2024',
    title: 'Implementation of Dlocal Online Payments in Mexico',
    description: 'Redesigned a multi-market checkout flow for a global FMCG brand, integrating local payment methods and reducing cart abandonment significantly.',
    details: 'Conducted extensive UX research across 4 markets, identifying key friction points in the checkout funnel. Ran A/B tests on 15+ variants, integrated Adyen for local payment methods (iDEAL, Klarna, Bancontact), and implemented a one-page checkout. Reduced cart abandonment by 30% and increased payment success rates by 12%.',
    impact: '-30% cart abandonment',
    tags: ['A/B Testing', 'UX Research', 'Figma', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    ],
  },
  {
    year: '2023',
    title: 'Digital Commerce Strategy',
    description: 'Defined the digital commerce roadmap and go-to-market strategy for a B2B marketplace, from discovery through MVP launch in 4 months.',
    details: 'Led discovery workshops with C-level stakeholders to define business goals and success metrics. Created a phased roadmap from MVP to scale, prioritising features using RICE scoring. Coordinated sprint planning and delivery with an offshore team, achieving MVP launch in 4 months with 200+ active B2B buyers onboarded in the first quarter.',
    impact: 'MVP in 4 months',
    tags: ['Roadmapping', 'Miro', 'Workshop Facilitation', 'Jira'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    ],
  },
]

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const [featuresOpen, setFeaturesOpen] = useState(false)

  return (
    <Section id="projects" skeleton={<ProjectsSkeleton />}>
      <h2 className="text-4xl font-black text-neutral-900 dark:text-neutral-100 mb-8 text-center lowercase">
        latest achievements
      </h2>

      <div
        className="rounded-2xl bg-light-card dark:bg-dark-card overflow-hidden cursor-pointer flex flex-col mb-16"
        style={{ minHeight: 320 }}
        onClick={() => setSelected(projects[0])}
      >
        <div style={{width: 'calc(100% - 24px)', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: '12px auto', borderRadius: '20px'}}>
          <img
            src={projects[0].image}
            alt={projects[0].title}
            style={{maxWidth: '100%', width: '100%', height: 'auto', display: 'block', borderRadius: '20px'}}
          />
        </div>
        <div className="p-8 flex flex-col justify-center w-full">
          <p className="text-sm text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-2">{projects[0].year}</p>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
            {projects[0].title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            {projects[0].description}
          </p>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-accent-muted text-neutral-900 dark:text-neutral-100">
              {projects[0].impact}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {projects[0].tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-sm rounded-md bg-light-card dark:bg-dark-bg text-neutral-600 dark:text-neutral-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* Accordion toggle */}
        <div className="flex justify-end mx-4 md:mx-6 mb-4">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors shadow"
            onClick={(e) => { e.stopPropagation(); setFeaturesOpen((o) => !o) }}
          >
            {featuresOpen ? 'Hide features' : 'Show features'}
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${featuresOpen ? 'rotate-90' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {featuresOpen && (
          <div className="mt-2 mb-6 mx-4 md:mx-6 bg-neutral-50 dark:bg-neutral-900 p-3 md:p-4 rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { title: 'Flexible Combo Promotion', desc: 'Empowering customers with more flexible and valuable combo deals to drive engagement and sales.', img: '/Flex Combo.png' },
              { title: 'Loyalty Challenges', desc: 'Driving engagement and retention by rewarding customers for completing specific challenges.', img: '/Heiclub-Challenges.png' },
              { title: 'Polarized Promotion', desc: 'Incentivizing customers with a discount when they buy the right products for their outlet.', img: '/Polarized.png' },
            ].map((feature, i) => (
              <div key={i} className="rounded-xl bg-white dark:bg-dark-card p-2 flex flex-col items-center justify-start">
                <img
                  src={feature.img}
                  alt={feature.title}
                  style={{ maxWidth: '100%', width: '100%', height: 'auto', display: 'block', borderRadius: '0.5rem' }}
                />
                <h4 className="font-bold text-neutral-900 dark:text-neutral-100 text-sm mb-0.5 mt-2 text-center w-full">{feature.title}</h4>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm text-center w-full">{feature.desc}</p>
              </div>
            ))}
            {/* And more */}
            <div className="rounded-xl bg-white dark:bg-dark-card p-2 flex flex-col items-center justify-center gap-2">
              <div className="text-4xl font-black text-neutral-300 dark:text-neutral-600">+</div>
              <h4 className="font-bold text-neutral-900 dark:text-neutral-100 text-base text-center">And more</h4>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm text-center">Stepped registration, onboarding flows, and additional engagement mechanics.</p>
            </div>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {projects.slice(1).map((project) => (
          <div
            key={project.title}
            onClick={() => setSelected(project)}
            className="rounded-2xl bg-light-card dark:bg-dark-card overflow-hidden transition-all duration-200 cursor-pointer flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-56 md:h-72"
            />
            <div className="p-8 flex flex-col justify-center w-full">
              <p className="text-sm text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-2">{project.year}</p>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                {project.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-accent-muted text-neutral-900 dark:text-neutral-100">
                  {project.impact}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-sm rounded-md bg-light-card dark:bg-dark-bg text-neutral-600 dark:text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </Section>
  )
}

function ProjectModal({ project, onClose }) {
  // Determine if this is the top project (full-width bento modal)
  const isTopProject = project.title === 'Omnichannel Commerce Platform';
  // Example features for the bento grid (replace or expand as needed)
  const features = [
    {
      title: 'Runner App',
      desc: 'Making delivering groceries accessible and effortless',
      img: project.images[0],
    },
    {
      title: 'Actions',
      desc: 'Moving from showing insights to creating impact.',
      img: project.images[1],
    },
    {
      title: 'Address specification',
      desc: 'Helping delivery drivers find complex addresses in Paris',
      img: project.images[2],
    },
    {
      title: 'Stepped Registration',
      desc: 'Smoothly signing users up by asking them one question at a time.',
      img: project.images[0],
    },
    {
      title: 'AI Suggestions',
      desc: 'Moving towards a personal AI food waste assistant',
      img: project.images[1],
    },
  ];
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal - bento layout for top project */}
      <div
        className={`relative w-full ${isTopProject ? 'md:max-w-7xl' : 'md:max-w-2xl'} md:rounded-2xl rounded-t-2xl bg-white dark:bg-dark-card overflow-hidden flex flex-col mt-auto md:mt-0 ${isTopProject ? 'md:flex-row' : ''}`}
        style={{ maxHeight: isTopProject ? '95vh' : '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle - mobile */}
        <div className="md:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-neutral-300 dark:bg-neutral-600" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-neutral-800/80 hover:bg-white dark:hover:bg-neutral-700 transition-colors"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-900 dark:text-neutral-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isTopProject ? (
          <>
            {/* Left: Image carousel and description (1/3) */}
            <div className="md:w-1/3 w-full flex flex-col border-r border-neutral-200 dark:border-neutral-700">
              {/* Image carousel */}
              <div className="relative">
                <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${project.title} ${i + 1}`}
                      className="w-full h-80 md:h-[22rem] object-cover flex-shrink-0 snap-center"
                    />
                  ))}
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.images.map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-white/70" />
                  ))}
                </div>
              </div>
              <div className="p-6 md:p-8 space-y-4">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {project.title}
                </h3>
                <div>
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-accent-muted text-neutral-900 dark:text-neutral-100">
                    {project.impact}
                  </span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {project.details}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-sm rounded-md bg-neutral-100 dark:bg-dark-bg text-neutral-600 dark:text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Right: Bento grid of features (2/3) - fixed 2x3 grid, consistent sizing */}
            <div className="md:w-2/3 w-full p-6 md:p-10 overflow-y-auto grid grid-cols-2 grid-rows-3 gap-6 bg-neutral-50 dark:bg-neutral-900">
              {/* Top left */}
              <div className="rounded-2xl bg-white dark:bg-dark-card p-4 flex flex-col h-full">
                <img src={features[0].img} alt={features[0].title} className="w-full h-28 md:h-32 object-cover rounded-xl mb-3 flex-shrink-0" />
                <h4 className="font-bold text-neutral-900 dark:text-neutral-100 text-base mb-1">{features[0].title}</h4>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">{features[0].desc}</p>
              </div>
              {/* Top right */}
              <div className="rounded-2xl bg-white dark:bg-dark-card p-4 flex flex-col h-full">
                <img src={features[1].img} alt={features[1].title} className="w-full h-28 md:h-32 object-cover rounded-xl mb-3 flex-shrink-0" />
                <h4 className="font-bold text-neutral-900 dark:text-neutral-100 text-base mb-1">{features[1].title}</h4>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">{features[1].desc}</p>
              </div>
              {/* Middle left */}
              <div className="rounded-2xl bg-white dark:bg-dark-card p-4 flex flex-col h-full">
                <img src={features[2].img} alt={features[2].title} className="w-full h-28 md:h-32 object-cover rounded-xl mb-3 flex-shrink-0" />
                <h4 className="font-bold text-neutral-900 dark:text-neutral-100 text-base mb-1">{features[2].title}</h4>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">{features[2].desc}</p>
              </div>
              {/* Middle right */}
              <div className="rounded-2xl bg-white dark:bg-dark-card p-4 flex flex-col h-full">
                <img src={features[3].img} alt={features[3].title} className="w-full h-28 md:h-32 object-cover rounded-xl mb-3 flex-shrink-0" />
                <h4 className="font-bold text-neutral-900 dark:text-neutral-100 text-base mb-1">{features[3].title}</h4>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">{features[3].desc}</p>
              </div>
              {/* Bottom (spanning both columns) */}
              <div className="col-span-2 rounded-2xl bg-white dark:bg-dark-card p-4 flex flex-col h-full">
                <img src={features[4].img} alt={features[4].title} className="w-full h-28 md:h-32 object-cover rounded-xl mb-3 flex-shrink-0" />
                <h4 className="font-bold text-neutral-900 dark:text-neutral-100 text-base mb-1">{features[4].title}</h4>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">{features[4].desc}</p>
              </div>
            </div>
          </>
        ) : (
          <div className="overflow-y-auto">
            {/* Image carousel */}
            <div className="relative">
              <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.title} ${i + 1}`}
                    className="w-full h-80 md:h-[28rem] object-cover flex-shrink-0 snap-center"
                  />
                ))}
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {project.images.map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-white/70" />
                ))}
              </div>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h3>
              <div>
                <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-accent-muted text-neutral-900 dark:text-neutral-100">
                  {project.impact}
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.details}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-sm rounded-md bg-neutral-100 dark:bg-dark-bg text-neutral-600 dark:text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}





