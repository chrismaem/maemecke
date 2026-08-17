import Section, { TestimonialsSkeleton } from './Section'

const testimonials = [
  {
    quote: "One of the most strategic product thinkers I've worked with. They have an uncanny ability to distill complexity into clear, actionable plans that the whole team rallies behind.",
    name: 'Jane Doe',
    role: 'VP of Engineering',
    company: 'Acme Corp',
  },
  {
    quote: "A rare PM who genuinely listens to users, challenges assumptions with data, and still ships fast. Our product velocity doubled under their leadership.",
    name: 'John Smith',
    role: 'Head of Design',
    company: 'TechStart Inc.',
  },
  {
    quote: "They brought structure and clarity to our chaotic early-stage product process. Their frameworks for prioritization are still used across the org today.",
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'StartupXYZ',
  },
]

export default function Testimonials() {
  return (
    <Section id="testimonials" skeleton={<TestimonialsSkeleton />}>
      <h2 className="text-4xl font-black text-neutral-900 dark:text-neutral-100 mb-16 text-center lowercase">
        What People Say
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="p-6 rounded-xl bg-light-card dark:bg-dark-card flex flex-col"
          >
            <svg className="w-8 h-8 text-neutral-400/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 flex-1 italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                {t.name}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                {t.role} · {t.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}





