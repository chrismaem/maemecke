import Section, { ExperienceSkeleton } from './Section'

const experiences = [
  {
    company: 'Heineken',
    logo: 'https://humanrisks.com/wp-content/uploads/2022/08/heineken-logo.svg',
    title: 'Senior Product Manager / Owner',
    dates: 'May 2024 – Dec 2026',
    description: 'Owning the B2B commerce product generating over €5B in annual revenue across Brazil and Mexico. Developing and executing product strategy and roadmap focused on growth and retention aligned with Global and Regional strategy. Constantly integrating UX research and experimentation into the product delivery process to enhance user experience and maintain CSAT.',
  },
  {
    company: 'Accenture Song',
    logo: 'https://www.vgen.it/wp-content/uploads/2021/04/logo-accenture-ludo.png',
    title: 'Commerce Consultant & Product Owner',
    dates: 'Sep 2018 – May 2024',
    description: 'Helping clients build innovative digital commerce experiences. Leading cross-functional teams in agile delivery, managing stakeholders, and driving product strategy for major retail and FMCG brands.',
    clients: [
      { name: 'Heineken', logo: 'https://humanrisks.com/wp-content/uploads/2022/08/heineken-logo.svg' },
      { name: 'dsm-firmenich', logo: 'https://maemecke.net/wp-content/uploads/2023/11/DSM-Firmenich-1.png' },
      { name: 'Dutch Flower Group', logo: 'https://maemecke.net/wp-content/uploads/2024/01/dfg-logo-alt.png' },
      { name: 'GrandVision', logo: 'https://maemecke.net/wp-content/uploads/2023/11/OM-grandvision1.png' },
    ],
  },
  {
    company: 'TravelBird',
    logo: '/travelbird-logo.png',
    title: 'Customer Success Specialist (Part-time)',
    dates: 'Apr 2018 – Sep 2018',
    description: 'Supported customer satisfaction and retention initiatives at an online travel deals platform, resolving issues and ensuring a smooth booking experience.',
  },
  {
    company: 'VU Amsterdam',
    logo: '/vu-amsterdam-logo.png',
    title: 'MSc Digital Business & Innovation',
    dates: '2017 – 2019',
    description: 'Master\'s programme focused on digital transformation, business model innovation, and technology-driven product development.',
    thesis: [
      { name: 'Signify', logo: '/signifylogo3.png' },
    ],
  },
  {
    company: 'Otto Group / FH Wedel',
    logo: 'https://maemecke.net/wp-content/uploads/2023/11/Otto_Group_Logo_2022.png',
    logo2: '/fh-wedel-logo.svg',
    title: 'Dual Studies Program - BSc in E-Commerce',
    dates: 'Sep 2013 – Aug 2017',
    description: 'Owned the digital commerce product roadmap, coordinating between engineering, design, and business teams to ship customer-facing features across European markets.',
    companies: [
      { name: 'About You', logo: '/aboutyou-logo.png' },
      { name: 'nu3', logo: '/nu3-logo.png' },
      { name: 'Project A', logo: '/project-a-logo.svg' },
    ],
  },
]

export default function Experience() {
  return (
    <Section id="experience" skeleton={<ExperienceSkeleton />}>
      <h2 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-neutral-100 mb-16 text-center lowercase" style={{fontSize: '2.25rem', lineHeight: '2.5rem'}}>
        experience & education
      </h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-300 dark:bg-neutral-700 md:-translate-x-px" />

        <div className="space-y-12 md:space-y-6">
          {experiences.map((exp, i) => {
            const isCurrent = exp.company === 'Heineken';
            const highlightDot = 'bg-green-300 dark:bg-green-500 ring-2 ring-green-200 dark:ring-green-600';
            return (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center ${i !== 0 ? 'md:-mt-16' : ''}`}
              >
                {/* Dot */}
                <div
                  className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-1.5 md:mt-0 z-10 ${isCurrent ? highlightDot : 'bg-neutral-900 dark:bg-neutral-100'}`}
                  title={isCurrent ? 'Current' : undefined}
                />

                {/* Content card */}
                <div className={`ml-4 xs:ml-6 sm:ml-8 md:ml-0 md:w-1/2 w-full max-w-full px-1 xs:px-2 sm:px-4 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="relative p-3 xs:p-4 sm:p-6 rounded-xl bg-light-card dark:bg-dark-card transition-colors duration-200 w-full overflow-x-hidden">
                    <div className="flex flex-row items-center justify-between gap-4 mb-2">
                      <span className="text-base sm:text-sm font-medium text-neutral-600 dark:text-neutral-300 uppercase tracking-wider">
                        {exp.dates}
                      </span>
                      <div className={`flex ${exp.logo2 ? 'flex-row items-center gap-3' : 'items-center gap-3'}`} style={{minWidth: 0}}>
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="h-10 max-w-[90px] brightness-0 dark:brightness-0 dark:invert object-contain"
                        />
                        {exp.logo2 && (
                          <div className="h-10 w-20 sm:w-28 overflow-hidden flex items-center">
                            <img
                              src={exp.logo2}
                              alt={exp.company}
                              className="h-full w-full brightness-0 dark:brightness-0 dark:invert object-contain scale-[1.2] sm:scale-[1.4]"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mt-4 flex items-center gap-2" style={{flexWrap: 'wrap', wordBreak: 'break-word', fontSize: '1.125rem', lineHeight: '1.75rem'}}>
                      <span className="break-words whitespace-normal" style={{overflowWrap: 'break-word', wordBreak: 'break-word', display: 'block', width: '100%'}}>
                        {isCurrent && (
                          <span
                            className="whitespace-nowrap bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200 text-base sm:text-sm font-semibold px-2 py-0 rounded-full border border-green-200 dark:border-green-700 align-middle"
                            style={{marginRight: 4, marginTop: 0, marginBottom: 0, verticalAlign: 'middle', display: 'inline'}}>
                            Current
                          </span>
                        )}
                        {exp.title}
                      </span>
                    </h3>
                    <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mt-3" style={{fontSize: '1rem', lineHeight: '1.5rem'}}>
                      {exp.description}
                    </p>
                    {exp.clients && (
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                        <span className="text-base md:text-lg text-neutral-600 dark:text-neutral-300" style={{fontSize: '1rem', lineHeight: '1.5rem'}}>Clients:</span>
                        {exp.clients.map((client) => (
                          <img
                            key={client.name}
                            src={client.logo}
                            alt={client.name}
                            className="h-8 max-w-[64px] brightness-0 dark:brightness-0 dark:invert object-contain"
                          />
                        ))}
                      </div>
                    )}
                    {exp.companies && (
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                        <span className="text-base md:text-lg text-neutral-600 dark:text-neutral-300" style={{fontSize: '1rem', lineHeight: '1.5rem'}}>Companies:</span>
                        {exp.companies.map((company) => (
                          <img
                            key={company.name}
                            src={company.logo}
                            alt={company.name}
                            className="h-8 max-w-[56px] brightness-0 dark:brightness-0 dark:invert object-contain"
                          />
                        ))}
                      </div>
                    )}
                    {exp.thesis && (
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                        <span className="text-base md:text-lg text-neutral-600 dark:text-neutral-300" style={{fontSize: '1rem', lineHeight: '1.5rem'}}>Master thesis with:</span>
                        {exp.thesis.map((org) => (
                          <img
                            key={org.name}
                            src={org.logo}
                            alt={org.name}
                            className={
                              org.name === 'Signify'
                                ? 'h-10 max-w-[72px] brightness-0 dark:brightness-0 dark:invert object-contain'
                                : 'h-5 max-w-[40px] brightness-0 dark:brightness-0 dark:invert object-contain'
                            }
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          {/* Dot for 'past' at the bottom of the timeline */}
          <div className="relative h-8">
            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-neutral-400 dark:bg-neutral-600 rounded-full -translate-x-1/2 z-10" title="Past" />
          </div>
        </div>
      </div>
    </Section>
  )
}





