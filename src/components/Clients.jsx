import Section, { ClientsSkeleton } from './Section'

const facts = [
  { label: 'Experience in Digital', value: '10+ years' },
  { label: 'Originally from', value: 'Germany' },
  { label: 'Currently at', value: 'Heineken', bold: true },
  { label: 'Based in', value: 'Amsterdam' },
]

const clients = [
  { name: 'Heineken', logo: 'https://humanrisks.com/wp-content/uploads/2022/08/heineken-logo.svg' },
  { name: 'Accenture', logo: 'https://www.vgen.it/wp-content/uploads/2021/04/logo-accenture-ludo.png' },
  { name: 'dsm-firmenich', logo: 'https://maemecke.net/wp-content/uploads/2023/11/DSM-Firmenich-1.png' },
  { name: 'Dutch Flower Group', logo: 'https://maemecke.net/wp-content/uploads/2024/01/dfg-logo-alt.png' },
  { name: 'GrandVision', logo: 'https://maemecke.net/wp-content/uploads/2023/11/OM-grandvision1.png' },
  { name: 'Signify', logo: '/signifylogo3.png' },
  { name: 'Otto', logo: '/Otto_GmbH_logo.svg.png' },
  { name: 'Otto Group', logo: 'https://maemecke.net/wp-content/uploads/2023/11/Otto_Group_Logo_2022.png' },
  { name: 'nu3', logo: '/nu3-logo.png' },
  { name: 'About You', logo: '/aboutyou-logo.png' },
  { name: 'Project A', logo: '/project-a-logo.svg' },
]

export default function Clients() {
  return (
    <Section id="clients" skeleton={<ClientsSkeleton />}>
      <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {facts.map((fact, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="text-sm text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-2 font-normal">{fact.label}</div>
            <div className="text-2xl text-neutral-700 dark:text-neutral-200 font-bold transition-colors duration-200 group-hover:text-neutral-900 group-hover:dark:text-neutral-100">
              {fact.bold ? <span className="font-bold">{fact.value}</span> : fact.value}
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-10">
        Companies I&apos;ve worked with
      </p>
      <div className="w-full flex flex-col items-center max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-y-8 gap-x-10 md:gap-x-14 w-full">
          {clients.slice(0, 5).map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center h-12 opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`object-contain brightness-0 dark:brightness-0 dark:invert w-auto max-w-[120px] ${client.name === 'Otto' ? 'h-6 md:h-8' : 'h-8 md:h-10'}`}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-y-8 gap-x-10 md:gap-x-14 w-full mt-4">
          {clients.slice(5).map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center h-12 opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`object-contain brightness-0 dark:brightness-0 dark:invert w-auto max-w-[120px] ${client.name === 'Otto' ? 'h-6 md:h-8' : 'h-8 md:h-10'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}





