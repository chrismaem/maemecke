            <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-light-bg dark:bg-dark-bg text-neutral-600 dark:text-neutral-300 font-semibold">
              <img src="/safe_scaled.png" alt="SAFe Logo" className="w-6 h-6 inline-block filter grayscale" />
              <span>
                SAFe® 4 PO/PM
                <span className="block text-sm font-normal text-neutral-600 dark:text-neutral-300">SAFe by Scaled Agile, Inc.</span>
              </span>
            </span>
import Section, { SkillsSkeleton } from './Section'

const skillCategories = [
  {
    category: 'Artificial Intelligence',
    fullWidth: true,
    skills: [
      'AI Product Strategy',
      'Prompt Engineering',
      'AI Experimentation',
      'GenAI Use Cases',
      'AI-Driven Personalization',
      'AI Ethics & Governance',
      'Vibe Coding',
      'Image Recognition',
      'Rapid Prototyping',
    ],
  },
  {
    category: 'Product & Commerce',
    skills: ['Product Management', 'Digital Commerce', 'Roadmapping', 'Payments & Checkout', 'Platform Strategy'],
  },
  {
    category: 'Execution & Delivery',
    skills: ['Agile / Scrum', 'Stakeholder Management', 'Sprint Planning', 'A/B Testing', 'OKRs & KPIs'],
  },
  {
    category: 'Tools',
    skills: ['Jira', 'Figma', 'Miro', 'Notion', 'Confluence', 'SAP Commerce', 'Commercetools', 'SQL', 'Claude Code', 'Visual Studio', 'GitHub'],
  },
  {
    category: 'Soft Skills',
    skills: ['Cross-functional Leadership', 'Client Management', 'Workshop Facilitation', 'Data Storytelling', 'Emotional Intelligence'],
  },
]

export default function Skills() {
  return (
    <Section id="skills" skeleton={<SkillsSkeleton />}>
      <h2 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-neutral-100 mb-16 text-center lowercase" style={{fontSize: '2.25rem', lineHeight: '2.5rem'}}>
        Skills & Tools
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((cat) => (
          <div key={cat.category} className={`p-6 rounded-xl bg-light-card dark:bg-dark-card${cat.fullWidth ? ' md:col-span-2' : ''}`}>
            <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider mb-4" style={{fontSize: '1.125rem', lineHeight: '1.75rem'}}>
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-base md:text-lg rounded-lg bg-light-bg dark:bg-dark-bg text-neutral-600 dark:text-neutral-300"
                  style={{fontSize: '1rem', lineHeight: '1.5rem'}}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Certificates Section styled like Soft Skills */}
      <div className="mt-12">
        <div className="p-6 rounded-xl bg-light-card dark:bg-dark-card">
          <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider mb-4" style={{fontSize: '1.125rem', lineHeight: '1.75rem'}}>Certificates</h3>
          <div className="flex flex-wrap gap-2 justify-start">
            {/* Example certificates, replace or expand as needed */}
            <span className="flex items-center gap-2 px-3 py-1.5 text-base md:text-lg rounded-lg bg-light-bg dark:bg-dark-bg text-neutral-600 dark:text-neutral-300 font-semibold text-black dark:text-white" style={{fontSize: '1rem', lineHeight: '1.5rem'}}>
              <span className="w-6 h-6 inline-block filter grayscale">
                <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-label="Product School Logo">
                  <g>
                    <path fill="none" d="M0,0H150V150H0Z"/>
                    <path fill="currentColor" fillRule="evenodd" d="M29.3,17.43h91.49V89.51a45.75,45.75,0,0,1-91.49,0Zm-7,72.08a52.75,52.75,0,0,0,105.5,0V10.41H22.25Z"/>
                    <path fill="currentColor" fillRule="evenodd" d="M50.1,63.69A23.59,23.59,0,0,1,66.94,41.11v70.46A23.62,23.62,0,0,1,50.1,89ZM73.68,40.11a23.61,23.61,0,0,1,2.06,47.17c-.69,0-1.37,0-2.06,0Zm0,79.21V94A30.35,30.35,0,1,0,43.36,63.6V89A30.37,30.37,0,0,0,73.68,119.32Z"/>
                  </g>
                </svg>
              </span>
              <span>
                Product Manager Certification™
                <span className="block text-sm font-normal text-neutral-600 dark:text-neutral-300">Product School</span>
              </span>
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 text-base md:text-lg rounded-lg bg-light-bg dark:bg-dark-bg text-neutral-600 dark:text-neutral-300 font-semibold" style={{fontSize: '1rem', lineHeight: '1.5rem'}}>
              <img src="/growthtribe.avif" alt="Growth Tribe Logo" className="w-6 h-6 inline-block rounded-full filter grayscale" />
              <span>
                Digital Leadership
                <span className="block text-sm font-normal text-neutral-600 dark:text-neutral-300">Growth Tribe</span>
              </span>
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-light-bg dark:bg-dark-bg text-neutral-600 dark:text-neutral-300 font-semibold">
              <img src="/nn_logo.png" alt="Nielsen Norman Group Logo" className="w-6 h-6 inline-block filter grayscale" />
              <span>
                NN/g UX Certificate
                <span className="block text-sm font-normal text-neutral-600 dark:text-neutral-300">Nielsen Norman Group</span>
              </span>
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-light-bg dark:bg-dark-bg text-neutral-600 dark:text-neutral-300 font-semibold">
              <img src="/safe_scaled.png" alt="SAFe Logo" className="w-6 h-6 inline-block filter grayscale" />
              <span>
                SAFe® 4 PO/PM
                <span className="block text-sm font-normal text-neutral-600 dark:text-neutral-300">SAFe by Scaled Agile, Inc.</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </Section>
  )
}





